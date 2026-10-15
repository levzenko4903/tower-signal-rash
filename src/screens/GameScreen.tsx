import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  Vibration,
  View,
} from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/solid';

import {assets} from '../assets';
import {CAMERA_ROWS, LOCK_COOLDOWN_MS, ROW_H} from '../constants/config';
import {theme} from '../constants/theme';
import {holdMsFor, hopMsFor, maxSlotFor, pulseFor} from '../game/towerEngine';
import {trailById} from '../game/trails';
import {RunResult} from '../hooks/useTowerRun';
import {useBeamSweep} from '../hooks/useBeamSweep';
import {useIdleBackstop} from '../hooks/useIdleBackstop';
import {useTowerRun} from '../hooks/useTowerRun';
import {formatNum, pad2} from '../utils/format';
import ControlBar from '../components/ControlBar';
import FloatingHint from '../components/FloatingHint';
import HazardZone from '../components/HazardZone';
import IconButton from '../components/IconButton';
import IntegrityBar from '../components/IntegrityBar';
import MovingBeam from '../components/MovingBeam';
import PauseOverlay from '../components/PauseOverlay';
import RelayBlock from '../components/RelayBlock';
import ScreenHeader from '../components/ScreenHeader';
import ScreenShell from '../components/ScreenShell';
import TowerShaft from '../components/TowerShaft';

type Props = {
  equippedTrail: string;
  haptics: boolean;
  reducedMotion: boolean;
  onExit: () => void;
  onGameOver: (result: RunResult) => void;
};

const IDLE_MS = 900;
const OVER_HOLD_MS = 520;

export default function GameScreen({
  equippedTrail,
  haptics,
  reducedMotion,
  onExit,
  onGameOver,
}: Props) {
  const {state, stateRef, lock, endRun} = useTowerRun();
  const sweep = useBeamSweep();

  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [hint, setHint] = useState({text: '', color: theme.colors.cyan, n: 0});

  const pausedRef = useRef(false);
  const lastLockRef = useRef(0);
  const camera = useRef(new Animated.Value(0)).current;
  const shake = useRef(new Animated.Value(0)).current;
  const scorePop = useRef(new Animated.Value(1)).current;
  const flash = useRef(new Animated.Value(0)).current;
  const warn = useRef(new Animated.Value(0)).current;

  const trail = trailById(equippedTrail);

  const handleTimeout = useCallback(() => {
    sweep.stop();
    endRun('timeout');
  }, [endRun, sweep]);

  const engage = useIdleBackstop(!state.over, handleTimeout);

  /** First sweep starts after a short beat so the board can be read at rest. */
  useEffect(() => {
    const begin = setTimeout(() => {
      setReady(true);
      const run = stateRef.current;
      if (run.over) {
        return;
      }
      sweep.start(
        maxSlotFor(run.beamW),
        hopMsFor(run.sector),
        holdMsFor(run.sector),
        0,
      );
    }, IDLE_MS);
    return () => {
      clearTimeout(begin);
      sweep.stop();
    };
  }, [sweep, stateRef]);

  /** The run is finished: settle the board, then hand the result up. */
  useEffect(() => {
    if (!state.over || state.verdict === null) {
      return;
    }
    sweep.stop();

    const wobble = Animated.sequence([
      Animated.timing(shake, {
        toValue: 6,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: -6,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: 0,
        duration: 90,
        useNativeDriver: true,
      }),
    ]);
    if (!reducedMotion) {
      wobble.start();
    }

    const verdict = state.verdict;
    const handoff = setTimeout(() => {
      onGameOver({
        score: state.score,
        sector: state.sector,
        perfects: state.perfects,
        bestChain: state.bestChain,
        locks: state.locks,
        verdict: verdict,
      });
    }, OVER_HOLD_MS);

    return () => {
      wobble.stop();
      clearTimeout(handoff);
    };
  }, [
    state.over,
    state.verdict,
    state.score,
    state.sector,
    state.perfects,
    state.bestChain,
    state.locks,
    onGameOver,
    reducedMotion,
    shake,
    sweep,
  ]);

  const pulseFlash = useCallback(
    (value: Animated.Value) => {
      if (reducedMotion) {
        return;
      }
      value.setValue(0);
      Animated.sequence([
        Animated.timing(value, {
          toValue: 1,
          duration: 110,
          useNativeDriver: false,
        }),
        Animated.timing(value, {
          toValue: 0,
          duration: 220,
          easing: Easing.out(Easing.quad),
          useNativeDriver: false,
        }),
      ]).start();
    },
    [reducedMotion],
  );

  const handleLock = useCallback(() => {
    const before = stateRef.current;
    if (before.over || pausedRef.current || !ready) {
      return;
    }
    const now = Date.now();
    if (now - lastLockRef.current < LOCK_COOLDOWN_MS) {
      return;
    }
    lastLockRef.current = now;
    engage();

    const beamX = sweep.freeze();
    const feedback = lock(beamX);
    if (feedback.ignored) {
      return;
    }

    if (haptics) {
      Vibration.vibrate(12);
    }

    const after = stateRef.current;

    if (feedback.hazardHit) {
      setHint(h => ({text: 'SIGNAL LOST', color: theme.colors.warn, n: h.n + 1}));
      pulseFlash(warn);
    } else if (feedback.kind === 'perfect') {
      setHint(h => ({text: 'PERFECT', color: theme.colors.violet, n: h.n + 1}));
      pulseFlash(flash);
    } else if (feedback.kind === 'miss') {
      setHint(h => ({text: 'MISSED', color: theme.colors.warn, n: h.n + 1}));
      pulseFlash(warn);
    } else {
      setHint(h => ({text: 'LOCKED', color: theme.colors.cyan, n: h.n + 1}));
    }

    if (feedback.gained > 0 && !reducedMotion) {
      Animated.sequence([
        Animated.timing(scorePop, {
          toValue: 1.14,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.timing(scorePop, {
          toValue: 1,
          duration: 90,
          useNativeDriver: true,
        }),
      ]).start();
    }

    const depth = Math.max(0, after.stack.length - CAMERA_ROWS);
    Animated.timing(camera, {
      toValue: depth * ROW_H,
      duration: 160,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    if (!after.over) {
      const slots = maxSlotFor(after.beamW);
      sweep.start(
        slots,
        hopMsFor(after.sector),
        holdMsFor(after.sector),
        Math.min(sweep.currentSlot(), slots),
      );
    }
  }, [
    ready,
    engage,
    haptics,
    lock,
    pulseFlash,
    reducedMotion,
    stateRef,
    sweep,
    camera,
    flash,
    scorePop,
    warn,
  ]);

  const handlePause = useCallback(() => {
    if (stateRef.current.over) {
      return;
    }
    pausedRef.current = true;
    setPaused(true);
    sweep.stop();
  }, [stateRef, sweep]);

  const handleResume = useCallback(() => {
    pausedRef.current = false;
    setPaused(false);
    const run = stateRef.current;
    if (run.over) {
      return;
    }
    const slots = maxSlotFor(run.beamW);
    sweep.start(
      slots,
      hopMsFor(run.sector),
      holdMsFor(run.sector),
      Math.min(sweep.currentSlot(), slots),
    );
  }, [stateRef, sweep]);

  const handleEnd = useCallback(() => {
    pausedRef.current = false;
    setPaused(false);
    sweep.stop();
    endRun('uplink');
  }, [endRun, sweep]);

  const borderTint = flash.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(6,182,212,0.30)', 'rgba(34,211,238,0.95)'],
  });
  const overlayTint = warn.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(249,115,22,0)', 'rgba(249,115,22,0.22)'],
  });

  const activeRow = state.stack.length * ROW_H;
  const glow = state.chain >= 3 ? 20 : 12;

  return (
    <ScreenShell source={assets.bgGame} overlay={theme.gradients.gameOverlay}>
      <ScreenHeader
        title={'SECTOR ' + pad2(state.sector)}
        leftSlot={
          <IconButton
            Icon={ChevronLeftIcon}
            onPress={onExit}
            a11yLabel="Back to tower map"
          />
        }
        centerSlot={<IntegrityBar current={state.integrity} />}
        rightSlot={
          <Animated.View
            pointerEvents="none"
            style={{transform: [{scale: scorePop}]}}>
            <Text style={styles.score} numberOfLines={1}>
              {formatNum(state.score)}
            </Text>
            <Text style={styles.scoreCaption}>SCORE</Text>
          </Animated.View>
        }
      />

      <Pressable
        onPress={handleLock}
        style={styles.boardArea}
        accessibilityRole="button"
        accessibilityLabel="Lock the relay beam">
        <TowerShaft borderTint={borderTint} overlayTint={overlayTint}>
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {transform: [{translateY: camera}, {translateX: shake}]},
            ]}>
            {state.stack.map((relay, index) => (
              <RelayBlock
                key={index}
                x={relay.x}
                w={relay.w}
                bottom={index * ROW_H}
                variant={relay.variant}
              />
            ))}
            {state.hazard ? (
              <HazardZone
                x={state.hazard.x}
                w={state.hazard.w}
                bottom={activeRow}
              />
            ) : null}
            {state.over ? null : (
              <MovingBeam
                translateX={sweep.translate}
                w={state.beamW}
                bottom={activeRow}
                colors={trail.colors}
                accent={trail.colors[0]}
                glow={glow}
              />
            )}
          </Animated.View>

          <View pointerEvents="none" style={styles.hintLayer}>
            <FloatingHint text={hint.text} color={hint.color} trigger={hint.n} />
          </View>

          {ready ? null : (
            <View pointerEvents="none" style={styles.idleLayer}>
              <Text style={styles.idleText}>TAP TO LOCK</Text>
            </View>
          )}
        </TowerShaft>
      </Pressable>

      <ControlBar
        chain={state.chain}
        pulse={pulseFor(state.sector)}
        beamW={state.beamW}
        onLock={handleLock}
        onPause={handlePause}
      />

      <PauseOverlay
        visible={paused}
        onResume={handleResume}
        onEnd={handleEnd}
      />
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  boardArea: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 132,
  },
  score: {
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: 0.5,
    textAlign: 'right',
    color: theme.colors.cyan,
    fontVariant: ['tabular-nums'],
  },
  scoreCaption: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'right',
    color: theme.colors.textMuted,
  },
  hintLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '34%',
    alignItems: 'center',
  },
  idleLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '46%',
    alignItems: 'center',
  },
  idleText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 3,
    color: theme.colors.textSecondary,
  },
});

