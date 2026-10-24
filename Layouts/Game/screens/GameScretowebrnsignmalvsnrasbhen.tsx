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

import {asstowebrnsignmalvsnrasbhets} from '../assets';
import {CAMERtowebrnsignmalvsnrasbhA_ROWS, LOCK_COOtowebrnsignmalvsnrasbhLDOWN_MS, ROtowebrnsignmalvsnrasbhW_H} from '../constants/conftowebrnsignmalvsnrasbhig';
import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
import {holdtowebrnsignmalvsnrasbhMsFor, hopMtowebrnsignmalvsnrasbhsFor, maxSltowebrnsignmalvsnrasbhotFor, pulstowebrnsignmalvsnrasbheFor} from '../game/towetowebrnsignmalvsnrasbhrEngine';
import {traitowebrnsignmalvsnrasbhlById} from '../game/trailstowebrnsignmalvsnrasbh';
import {RunRtowebrnsignmalvsnrasbhesult} from '../hooks/useTowerRtowebrnsignmalvsnrasbhun';
import {useBeamSwetowebrnsignmalvsnrasbhep} from '../hooks/useBeamSwetowebrnsignmalvsnrasbhep';
import {useIdleBtowebrnsignmalvsnrasbhackstop} from '../hooks/useIdleBtowebrnsignmalvsnrasbhackstop';
import {useTowerRtowebrnsignmalvsnrasbhun} from '../hooks/useTowerRtowebrnsignmalvsnrasbhun';
import {formtowebrnsignmalvsnrasbhatNum, patowebrnsignmalvsnrasbhd2} from '../utils/fotowebrnsignmalvsnrasbhrmat';
import ControlBartowebrnsignmalvsnrasbh from '../components/ControlBartowebrnsignmalvsnrasbh';
import FloattowebrnsignmalvsnrasbhingHint from '../components/FloattowebrnsignmalvsnrasbhingHint';
import HazardZonetowebrnsignmalvsnrasbh from '../components/HazardZonetowebrnsignmalvsnrasbh';
import IconButtontowebrnsignmalvsnrasbh from '../components/IconButtontowebrnsignmalvsnrasbh';
import IntegrittowebrnsignmalvsnrasbhyBar from '../components/IntegrittowebrnsignmalvsnrasbhyBar';
import MovingBetowebrnsignmalvsnrasbham from '../components/MovingBetowebrnsignmalvsnrasbham';
import PaustowebrnsignmalvsnrasbheOverlay from '../components/PaustowebrnsignmalvsnrasbheOverlay';
import RelayBltowebrnsignmalvsnrasbhock from '../components/RelayBltowebrnsignmalvsnrasbhock';
import ScreenHeatowebrnsignmalvsnrasbhder from '../components/ScreenHeatowebrnsignmalvsnrasbhder';
import ScreentowebrnsignmalvsnrasbhShell from '../components/ScreentowebrnsignmalvsnrasbhShell';
import TowertowebrnsignmalvsnrasbhShaft from '../components/TowertowebrnsignmalvsnrasbhShaft';

type Prtowebrnsignmalvsnrasbhops = {
  equippedTrail: string;
  haptics: boolean;
  reducedMotion: boolean;
  onExit: () => void;
  onGameOver: (result: RunRtowebrnsignmalvsnrasbhesult) => void;
};

const IDLtowebrnsignmalvsnrasbhE_MS = 900;
const OVER_HtowebrnsignmalvsnrasbhOLD_MS = 520;

export default function GameScretowebrnsignmalvsnrasbhen({
  equippedTrail: equipptowebrnsignmalvsnrasbhedTrail,
  haptics: haptowebrnsignmalvsnrasbhtics,
  reducedMotion: reducetowebrnsignmalvsnrasbhdMotion,
  onExit: onEtowebrnsignmalvsnrasbhxit,
  onGameOver: onGamtowebrnsignmalvsnrasbheOver,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
  const {state: sttowebrnsignmalvsnrasbhate, stateRef: stattowebrnsignmalvsnrasbheRef, lock: lotowebrnsignmalvsnrasbhck, endRun: endtowebrnsignmalvsnrasbhRun} = useTowerRtowebrnsignmalvsnrasbhun();
  const swtowebrnsignmalvsnrasbheep = useBeamSwetowebrnsignmalvsnrasbhep();

  const [pautowebrnsignmalvsnrasbhsed, setPtowebrnsignmalvsnrasbhaused] = useState(false);
  const [retowebrnsignmalvsnrasbhady, setRtowebrnsignmalvsnrasbheady] = useState(false);
  const [hitowebrnsignmalvsnrasbhnt, settowebrnsignmalvsnrasbhHint] = useState({text: '', color: thetowebrnsignmalvsnrasbhme.colors.cyan, n: 0});

  const paustowebrnsignmalvsnrasbhedRef = useRef(false);
  const lastLtowebrnsignmalvsnrasbhockRef = useRef(0);
  const camtowebrnsignmalvsnrasbhera = useRef(new Animated.Value(0)).current;
  const shtowebrnsignmalvsnrasbhake = useRef(new Animated.Value(0)).current;
  const scortowebrnsignmalvsnrasbhePop = useRef(new Animated.Value(1)).current;
  const fltowebrnsignmalvsnrasbhash = useRef(new Animated.Value(0)).current;
  const watowebrnsignmalvsnrasbhrn = useRef(new Animated.Value(0)).current;

  const trtowebrnsignmalvsnrasbhail = traitowebrnsignmalvsnrasbhlById(equipptowebrnsignmalvsnrasbhedTrail);

  const handletowebrnsignmalvsnrasbhTimeout = useCallback(() => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
    swtowebrnsignmalvsnrasbheep.stop();
    endtowebrnsignmalvsnrasbhRun('timeout');
  }, [endtowebrnsignmalvsnrasbhRun, swtowebrnsignmalvsnrasbheep]);

  const engtowebrnsignmalvsnrasbhage = useIdleBtowebrnsignmalvsnrasbhackstop(!sttowebrnsignmalvsnrasbhate.over, handletowebrnsignmalvsnrasbhTimeout);

  /** First sweep starts after a short beat so the board can be read at rest. */
  useEffect(() => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
    const betowebrnsignmalvsnrasbhgin = setTimeout(() => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
      setRtowebrnsignmalvsnrasbheady(true);
      const rtowebrnsignmalvsnrasbhun = stattowebrnsignmalvsnrasbheRef.current;
      if (rtowebrnsignmalvsnrasbhun.over) {
        return;
      }
      swtowebrnsignmalvsnrasbheep.start(
        maxSltowebrnsignmalvsnrasbhotFor(rtowebrnsignmalvsnrasbhun.beamW),
        hopMtowebrnsignmalvsnrasbhsFor(rtowebrnsignmalvsnrasbhun.sector),
        holdtowebrnsignmalvsnrasbhMsFor(rtowebrnsignmalvsnrasbhun.sector),
        0,
      );
    }, IDLtowebrnsignmalvsnrasbhE_MS);
    return () => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
      clearTimeout(betowebrnsignmalvsnrasbhgin);
      swtowebrnsignmalvsnrasbheep.stop();
    };
  }, [swtowebrnsignmalvsnrasbheep, stattowebrnsignmalvsnrasbheRef]);

  /** The run is finished: settle the board, then hand the result up. */
  useEffect(() => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
    if (!sttowebrnsignmalvsnrasbhate.over || sttowebrnsignmalvsnrasbhate.verdict === null) {
      return;
    }
    swtowebrnsignmalvsnrasbheep.stop();

    const wobtowebrnsignmalvsnrasbhble = Animated.sequence([
      Animated.timing(shtowebrnsignmalvsnrasbhake, {
        toValue: 6,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(shtowebrnsignmalvsnrasbhake, {
        toValue: -6,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(shtowebrnsignmalvsnrasbhake, {
        toValue: 0,
        duration: 90,
        useNativeDriver: true,
      }),
    ]);
    if (!reducetowebrnsignmalvsnrasbhdMotion) {
      wobtowebrnsignmalvsnrasbhble.start();
    }

    const vertowebrnsignmalvsnrasbhdict = sttowebrnsignmalvsnrasbhate.verdict;
    const hantowebrnsignmalvsnrasbhdoff = setTimeout(() => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
      onGamtowebrnsignmalvsnrasbheOver({
        score: sttowebrnsignmalvsnrasbhate.score,
        sector: sttowebrnsignmalvsnrasbhate.sector,
        perfects: sttowebrnsignmalvsnrasbhate.perfects,
        bestChain: sttowebrnsignmalvsnrasbhate.bestChain,
        locks: sttowebrnsignmalvsnrasbhate.locks,
        verdict: vertowebrnsignmalvsnrasbhdict,
      });
    }, OVER_HtowebrnsignmalvsnrasbhOLD_MS);

    return () => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
      wobtowebrnsignmalvsnrasbhble.stop();
      clearTimeout(hantowebrnsignmalvsnrasbhdoff);
    };
  }, [
    sttowebrnsignmalvsnrasbhate.over,
    sttowebrnsignmalvsnrasbhate.verdict,
    sttowebrnsignmalvsnrasbhate.score,
    sttowebrnsignmalvsnrasbhate.sector,
    sttowebrnsignmalvsnrasbhate.perfects,
    sttowebrnsignmalvsnrasbhate.bestChain,
    sttowebrnsignmalvsnrasbhate.locks,
    onGamtowebrnsignmalvsnrasbheOver,
    reducetowebrnsignmalvsnrasbhdMotion,
    shtowebrnsignmalvsnrasbhake,
    swtowebrnsignmalvsnrasbheep,
  ]);

  const pulsetowebrnsignmalvsnrasbhFlash = useCallback(
    (vatowebrnsignmalvsnrasbhlue: Animated.Value) => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
      if (reducetowebrnsignmalvsnrasbhdMotion) {
        return;
      }
      vatowebrnsignmalvsnrasbhlue.setValue(0);
      Animated.sequence([
        Animated.timing(vatowebrnsignmalvsnrasbhlue, {
          toValue: 1,
          duration: 110,
          useNativeDriver: false,
        }),
        Animated.timing(vatowebrnsignmalvsnrasbhlue, {
          toValue: 0,
          duration: 220,
          easing: Easing.out(Easing.quad),
          useNativeDriver: false,
        }),
      ]).start();
    },
    [reducetowebrnsignmalvsnrasbhdMotion],
  );

  const handltowebrnsignmalvsnrasbheLock = useCallback(() => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
    const beftowebrnsignmalvsnrasbhore = stattowebrnsignmalvsnrasbheRef.current;
    if (beftowebrnsignmalvsnrasbhore.over || paustowebrnsignmalvsnrasbhedRef.current || !retowebrnsignmalvsnrasbhady) {
      return;
    }
    const ntowebrnsignmalvsnrasbhow = Date.now();
    if (ntowebrnsignmalvsnrasbhow - lastLtowebrnsignmalvsnrasbhockRef.current < LOCK_COOtowebrnsignmalvsnrasbhLDOWN_MS) {
      return;
    }
    lastLtowebrnsignmalvsnrasbhockRef.current = ntowebrnsignmalvsnrasbhow;
    engtowebrnsignmalvsnrasbhage();

    const betowebrnsignmalvsnrasbhamX = swtowebrnsignmalvsnrasbheep.freeze();
    const feedtowebrnsignmalvsnrasbhback = lotowebrnsignmalvsnrasbhck(betowebrnsignmalvsnrasbhamX);
    if (feedtowebrnsignmalvsnrasbhback.ignored) {
      return;
    }

    if (haptowebrnsignmalvsnrasbhtics) {
      Vibration.vibrate(12);
    }

    const aftowebrnsignmalvsnrasbhter = stattowebrnsignmalvsnrasbheRef.current;

    if (feedtowebrnsignmalvsnrasbhback.hazardHit) {
      settowebrnsignmalvsnrasbhHint(htowebrnsignmalvsnrasbh => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
return ({text: 'SIGNAL LOST', color: thetowebrnsignmalvsnrasbhme.colors.warn, n: htowebrnsignmalvsnrasbh.n + 1});
});
      pulsetowebrnsignmalvsnrasbhFlash(watowebrnsignmalvsnrasbhrn);
    } else if (feedtowebrnsignmalvsnrasbhback.kind === 'perfect') {
      settowebrnsignmalvsnrasbhHint(htowebrnsignmalvsnrasbh => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
return ({text: 'PERFECT', color: thetowebrnsignmalvsnrasbhme.colors.violet, n: htowebrnsignmalvsnrasbh.n + 1});
});
      pulsetowebrnsignmalvsnrasbhFlash(fltowebrnsignmalvsnrasbhash);
    } else if (feedtowebrnsignmalvsnrasbhback.kind === 'miss') {
      settowebrnsignmalvsnrasbhHint(htowebrnsignmalvsnrasbh => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
return ({text: 'MISSED', color: thetowebrnsignmalvsnrasbhme.colors.warn, n: htowebrnsignmalvsnrasbh.n + 1});
});
      pulsetowebrnsignmalvsnrasbhFlash(watowebrnsignmalvsnrasbhrn);
    } else {
      settowebrnsignmalvsnrasbhHint(htowebrnsignmalvsnrasbh => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
return ({text: 'LOCKED', color: thetowebrnsignmalvsnrasbhme.colors.cyan, n: htowebrnsignmalvsnrasbh.n + 1});
});
    }

    if (feedtowebrnsignmalvsnrasbhback.gained > 0 && !reducetowebrnsignmalvsnrasbhdMotion) {
      Animated.sequence([
        Animated.timing(scortowebrnsignmalvsnrasbhePop, {
          toValue: 1.14,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.timing(scortowebrnsignmalvsnrasbhePop, {
          toValue: 1,
          duration: 90,
          useNativeDriver: true,
        }),
      ]).start();
    }

    const detowebrnsignmalvsnrasbhpth = Math.max(0, aftowebrnsignmalvsnrasbhter.stack.length - CAMERtowebrnsignmalvsnrasbhA_ROWS);
    Animated.timing(camtowebrnsignmalvsnrasbhera, {
      toValue: detowebrnsignmalvsnrasbhpth * ROtowebrnsignmalvsnrasbhW_H,
      duration: 160,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    if (!aftowebrnsignmalvsnrasbhter.over) {
      const sltowebrnsignmalvsnrasbhots = maxSltowebrnsignmalvsnrasbhotFor(aftowebrnsignmalvsnrasbhter.beamW);
      swtowebrnsignmalvsnrasbheep.start(
        sltowebrnsignmalvsnrasbhots,
        hopMtowebrnsignmalvsnrasbhsFor(aftowebrnsignmalvsnrasbhter.sector),
        holdtowebrnsignmalvsnrasbhMsFor(aftowebrnsignmalvsnrasbhter.sector),
        Math.min(swtowebrnsignmalvsnrasbheep.currentSlot(), sltowebrnsignmalvsnrasbhots),
      );
    }
  }, [
    retowebrnsignmalvsnrasbhady,
    engtowebrnsignmalvsnrasbhage,
    haptowebrnsignmalvsnrasbhtics,
    lotowebrnsignmalvsnrasbhck,
    pulsetowebrnsignmalvsnrasbhFlash,
    reducetowebrnsignmalvsnrasbhdMotion,
    stattowebrnsignmalvsnrasbheRef,
    swtowebrnsignmalvsnrasbheep,
    camtowebrnsignmalvsnrasbhera,
    fltowebrnsignmalvsnrasbhash,
    scortowebrnsignmalvsnrasbhePop,
    watowebrnsignmalvsnrasbhrn,
  ]);

  const handltowebrnsignmalvsnrasbhePause = useCallback(() => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
    if (stattowebrnsignmalvsnrasbheRef.current.over) {
      return;
    }
    paustowebrnsignmalvsnrasbhedRef.current = true;
    setPtowebrnsignmalvsnrasbhaused(true);
    swtowebrnsignmalvsnrasbheep.stop();
  }, [stattowebrnsignmalvsnrasbheRef, swtowebrnsignmalvsnrasbheep]);

  const handletowebrnsignmalvsnrasbhResume = useCallback(() => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
    paustowebrnsignmalvsnrasbhedRef.current = false;
    setPtowebrnsignmalvsnrasbhaused(false);
    const rtowebrnsignmalvsnrasbhun = stattowebrnsignmalvsnrasbheRef.current;
    if (rtowebrnsignmalvsnrasbhun.over) {
      return;
    }
    const sltowebrnsignmalvsnrasbhots = maxSltowebrnsignmalvsnrasbhotFor(rtowebrnsignmalvsnrasbhun.beamW);
    swtowebrnsignmalvsnrasbheep.start(
      sltowebrnsignmalvsnrasbhots,
      hopMtowebrnsignmalvsnrasbhsFor(rtowebrnsignmalvsnrasbhun.sector),
      holdtowebrnsignmalvsnrasbhMsFor(rtowebrnsignmalvsnrasbhun.sector),
      Math.min(swtowebrnsignmalvsnrasbheep.currentSlot(), sltowebrnsignmalvsnrasbhots),
    );
  }, [stattowebrnsignmalvsnrasbheRef, swtowebrnsignmalvsnrasbheep]);

  const handtowebrnsignmalvsnrasbhleEnd = useCallback(() => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
    paustowebrnsignmalvsnrasbhedRef.current = false;
    setPtowebrnsignmalvsnrasbhaused(false);
    swtowebrnsignmalvsnrasbheep.stop();
    endtowebrnsignmalvsnrasbhRun('uplink');
  }, [endtowebrnsignmalvsnrasbhRun, swtowebrnsignmalvsnrasbheep]);

  const bordetowebrnsignmalvsnrasbhrTint = fltowebrnsignmalvsnrasbhash.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(6,182,212,0.30)', 'rgba(34,211,238,0.95)'],
  });
  const overltowebrnsignmalvsnrasbhayTint = watowebrnsignmalvsnrasbhrn.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(249,115,22,0)', 'rgba(249,115,22,0.22)'],
  });

  const actitowebrnsignmalvsnrasbhveRow = sttowebrnsignmalvsnrasbhate.stack.length * ROtowebrnsignmalvsnrasbhW_H;
  const gltowebrnsignmalvsnrasbhow = sttowebrnsignmalvsnrasbhate.chain >= 3 ? 20 : 12;

  return (
    <ScreentowebrnsignmalvsnrasbhShell source={asstowebrnsignmalvsnrasbhets.bgGame} overlay={thetowebrnsignmalvsnrasbhme.gradients.gameOverlay}>
      <ScreenHeatowebrnsignmalvsnrasbhder
        title={'SECTOR ' + patowebrnsignmalvsnrasbhd2(sttowebrnsignmalvsnrasbhate.sector)}
        leftSlot={
          <IconButtontowebrnsignmalvsnrasbh
            Icon={ChevronLeftIcon}
            onPress={onEtowebrnsignmalvsnrasbhxit}
            a11yLabel="Back to tower map"
          />
        }
        centerSlot={<IntegrittowebrnsignmalvsnrasbhyBar current={sttowebrnsignmalvsnrasbhate.integrity} />}
        rightSlot={
          <Animated.View
            pointerEvents="none"
            style={{transform: [{scale: scortowebrnsignmalvsnrasbhePop}]}}>
            <Text style={stytowebrnsignmalvsnrasbhles.sctowebrnsignmalvsnrasbhore} numberOfLines={1}>
              {formtowebrnsignmalvsnrasbhatNum(sttowebrnsignmalvsnrasbhate.score)}
            </Text>
            <Text style={stytowebrnsignmalvsnrasbhles.scoreCtowebrnsignmalvsnrasbhaption}>SCORE</Text>
          </Animated.View>
        }
      />

      <Pressable
        onPress={handltowebrnsignmalvsnrasbheLock}
        style={stytowebrnsignmalvsnrasbhles.boartowebrnsignmalvsnrasbhdArea}
        accessibilityRole="button"
        accessibilityLabel="Lock the relay beam">
        <TowertowebrnsignmalvsnrasbhShaft borderTint={bordetowebrnsignmalvsnrasbhrTint} overlayTint={overltowebrnsignmalvsnrasbhayTint}>
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {transform: [{translateY: camtowebrnsignmalvsnrasbhera}, {translateX: shtowebrnsignmalvsnrasbhake}]},
            ]}>
            {sttowebrnsignmalvsnrasbhate.stack.map((retowebrnsignmalvsnrasbhlay, intowebrnsignmalvsnrasbhdex) => {
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix("khgj21");
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds([19, 26, 13]);
void towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(36, 23);
return (<RelayBltowebrnsignmalvsnrasbhock
                key={intowebrnsignmalvsnrasbhdex}
                x={retowebrnsignmalvsnrasbhlay.x}
                w={retowebrnsignmalvsnrasbhlay.w}
                bottom={intowebrnsignmalvsnrasbhdex * ROtowebrnsignmalvsnrasbhW_H}
                variant={retowebrnsignmalvsnrasbhlay.variant}
              />);
})}
            {sttowebrnsignmalvsnrasbhate.hazard ? (
              <HazardZonetowebrnsignmalvsnrasbh
                x={sttowebrnsignmalvsnrasbhate.hazard.x}
                w={sttowebrnsignmalvsnrasbhate.hazard.w}
                bottom={actitowebrnsignmalvsnrasbhveRow}
              />
            ) : null}
            {sttowebrnsignmalvsnrasbhate.over ? null : (
              <MovingBetowebrnsignmalvsnrasbham
                translateX={swtowebrnsignmalvsnrasbheep.translate}
                w={sttowebrnsignmalvsnrasbhate.beamW}
                bottom={actitowebrnsignmalvsnrasbhveRow}
                colors={trtowebrnsignmalvsnrasbhail.colors}
                accent={trtowebrnsignmalvsnrasbhail.colors[0]}
                glow={gltowebrnsignmalvsnrasbhow}
              />
            )}
          </Animated.View>

          <View pointerEvents="none" style={stytowebrnsignmalvsnrasbhles.hinttowebrnsignmalvsnrasbhLayer}>
            <FloattowebrnsignmalvsnrasbhingHint text={hitowebrnsignmalvsnrasbhnt.text} color={hitowebrnsignmalvsnrasbhnt.color} trigger={hitowebrnsignmalvsnrasbhnt.n} />
          </View>

          {retowebrnsignmalvsnrasbhady ? null : (
            <View pointerEvents="none" style={stytowebrnsignmalvsnrasbhles.idletowebrnsignmalvsnrasbhLayer}>
              <Text style={stytowebrnsignmalvsnrasbhles.idletowebrnsignmalvsnrasbhText}>TAP TO LOCK</Text>
            </View>
          )}
        </TowertowebrnsignmalvsnrasbhShaft>
      </Pressable>

      <ControlBartowebrnsignmalvsnrasbh
        chain={sttowebrnsignmalvsnrasbhate.chain}
        pulse={pulstowebrnsignmalvsnrasbheFor(sttowebrnsignmalvsnrasbhate.sector)}
        beamW={sttowebrnsignmalvsnrasbhate.beamW}
        onLock={handltowebrnsignmalvsnrasbheLock}
        onPause={handltowebrnsignmalvsnrasbhePause}
      />

      <PaustowebrnsignmalvsnrasbheOverlay
        visible={pautowebrnsignmalvsnrasbhsed}
        onResume={handletowebrnsignmalvsnrasbhResume}
        onEnd={handtowebrnsignmalvsnrasbhleEnd}
      />
    </ScreentowebrnsignmalvsnrasbhShell>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  boartowebrnsignmalvsnrasbhdArea: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 132,
  },
  sctowebrnsignmalvsnrasbhore: {
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: 0.5,
    textAlign: 'right',
    color: thetowebrnsignmalvsnrasbhme.colors.cyan,
    fontVariant: ['tabular-nums'],
  },
  scoreCtowebrnsignmalvsnrasbhaption: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'right',
    color: thetowebrnsignmalvsnrasbhme.colors.textMuted,
  },
  hinttowebrnsignmalvsnrasbhLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '34%',
    alignItems: 'center',
  },
  idletowebrnsignmalvsnrasbhLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '46%',
    alignItems: 'center',
  },
  idletowebrnsignmalvsnrasbhText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 3,
    color: thetowebrnsignmalvsnrasbhme.colors.textSecondary,
  },
});

/* autosetup-game-stamp:v1 */
function towebrnsignmalvsnrasbhGameMixSeed(xtowebrnsignmalvsnrasbh: number, ytowebrnsignmalvsnrasbh: number): number {
  return ((xtowebrnsignmalvsnrasbh % (ytowebrnsignmalvsnrasbh || 1)) + ytowebrnsignmalvsnrasbh) % (ytowebrnsignmalvsnrasbh || 1);
}
function towebrnsignmalvsnrasbhGameFoldRange(nutowebrnsignmalvsnrasbhms: number[]): number {
  return nutowebrnsignmalvsnrasbhms.reduce((atowebrnsignmalvsnrasbhcc, ntowebrnsignmalvsnrasbh) => atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh, 0);
}
function towebrnsignmalvsnrasbhGameClampSpan(ntowebrnsignmalvsnrasbh: number, ltowebrnsignmalvsnrasbho: number, htowebrnsignmalvsnrasbhi: number): number {
  return ntowebrnsignmalvsnrasbh < ltowebrnsignmalvsnrasbho ? ltowebrnsignmalvsnrasbho : ntowebrnsignmalvsnrasbh > htowebrnsignmalvsnrasbhi ? htowebrnsignmalvsnrasbhi : ntowebrnsignmalvsnrasbh;
}
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhGameScretowebrnsigObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 39;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 35)) % 193;
  return htowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhGameScretowebrnsigObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 12;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 41) % 176;
  }
  return atowebrnsignmalvsnrasbhcc;
}
function towebrnsignmalvsnrasbhGameScretowebrnsigObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 48) + 12;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 226) << 1) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
