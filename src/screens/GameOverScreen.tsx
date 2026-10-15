import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import {
  ArrowPathIcon,
  SparklesIcon,
} from 'react-native-heroicons/solid';

import {assets} from '../assets';
import {theme} from '../constants/theme';
import {RunResult} from '../hooks/useTowerRun';
import {formatNum, pad2} from '../utils/format';
import HudFrame from '../components/HudFrame';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import ScreenShell from '../components/ScreenShell';
import SecondaryButton from '../components/SecondaryButton';
import StatTile from '../components/StatTile';

type Props = {
  result: RunResult;
  newRecord: boolean;
  unlockedTrail: string | null;
  onAgain: () => void;
  onMenu: () => void;
};

const VERDICTS = {
  uplink: 'UPLINK LOST',
  overload: 'RELAY OVERLOAD',
  timeout: 'SIGNAL TIMEOUT',
};

export default function GameOverScreen({
  result,
  newRecord,
  unlockedTrail,
  onAgain,
  onMenu,
}: Props) {
  const drop = useRef(new Animated.Value(0)).current;
  const pop = useRef(new Animated.Value(0.7)).current;
  const late = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const show = Animated.parallel([
      Animated.timing(drop, {
        toValue: 1,
        duration: 260,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(pop, {
        toValue: 1,
        tension: 48,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(late, {
        toValue: 1,
        delay: 320,
        duration: 260,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]);
    show.start();
    return () => show.stop();
  }, [drop, pop, late]);

  const tiles: Array<{value: string; label: string; accent: string}> = [
    {
      value: pad2(result.sector),
      label: 'SECTOR',
      accent: theme.colors.cyan,
    },
  ];
  if (result.locks > 0) {
    tiles.push({
      value: String(result.locks),
      label: 'RELAYS',
      accent: theme.colors.cyanLight,
    });
  }
  if (result.perfects > 0) {
    tiles.push({
      value: String(result.perfects),
      label: 'PERFECTS',
      accent: theme.colors.violet,
    });
  }
  if (tiles.length < 3 && result.bestChain > 0) {
    tiles.push({
      value: 'x' + result.bestChain,
      label: 'BEST CHAIN',
      accent: theme.colors.warn,
    });
  }

  const showTiles = tiles.length >= 2;
  const summary =
    'SECTOR ' + pad2(result.sector) + ' - NO RELAYS LOCKED';

  return (
    <ScreenShell
      source={assets.bgGame}
      overlay={theme.gradients.resultOverlay}>
      <ScreenHeader title="RUN RESULTS" />

      <View style={styles.body}>
        <Animated.View style={[styles.verdictWrap, {opacity: drop}]}>
          <Image source={assets.spriteWarningChip} style={styles.chip} />
          <Text style={styles.verdict}>{VERDICTS[result.verdict]}</Text>
          <View style={styles.underline} />
        </Animated.View>

        <Animated.View
          style={[styles.heroWrap, {transform: [{scale: pop}]}]}>
          <HudFrame accent="rgba(6,182,212,0.45)" size={20} style={styles.hud}>
            <Text style={styles.hero}>{formatNum(result.score)}</Text>
            <Text style={styles.heroCaption}>FINAL SCORE</Text>
          </HudFrame>
        </Animated.View>

        {newRecord ? (
          <View style={styles.ribbon}>
            <Text style={styles.ribbonText}>NEW RECORD</Text>
          </View>
        ) : null}

        {showTiles ? (
          <Animated.View style={[styles.tileRow, {opacity: late}]}>
            {tiles.slice(0, 3).map(tile => (
              <View key={tile.label} style={styles.tileSlot}>
                <StatTile
                  value={tile.value}
                  label={tile.label}
                  accent={tile.accent}
                />
              </View>
            ))}
          </Animated.View>
        ) : (
          <Text style={styles.summary}>{summary}</Text>
        )}

        {unlockedTrail ? (
          <View style={styles.unlockRow}>
            <SparklesIcon size={16} color={theme.colors.warn} />
            <Text style={styles.unlockText}>
              {'TRAIL UNLOCKED - ' + unlockedTrail}
            </Text>
          </View>
        ) : null}
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[styles.actions, {opacity: late}]}>
        <PrimaryButton
          label="CLIMB AGAIN"
          Icon={ArrowPathIcon}
          height={60}
          onPress={onAgain}
        />
        <View style={styles.gap} />
        <SecondaryButton label="TOWER MAP" height={48} onPress={onMenu} />
      </Animated.View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 22},
  verdictWrap: {alignItems: 'center'},
  chip: {width: 56, height: 56, marginBottom: 16, resizeMode: 'contain'},
  verdict: {
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 3,
    color: theme.colors.warn,
    textAlign: 'center',
  },
  underline: {
    marginTop: 10,
    width: 120,
    height: 1,
    backgroundColor: theme.colors.cyan,
  },
  heroWrap: {marginTop: 28},
  hud: {
    paddingHorizontal: 34,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(10,16,28,0.55)',
    borderRadius: 8,
  },
  hero: {
    fontSize: 52,
    fontWeight: '900',
    letterSpacing: 1,
    color: theme.colors.cyan,
    textShadowColor: 'rgba(6,182,212,0.5)',
    textShadowRadius: 18,
    textShadowOffset: {width: 0, height: 0},
    fontVariant: ['tabular-nums'],
  },
  heroCaption: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    color: theme.colors.textSecondary,
  },
  ribbon: {
    marginTop: 18,
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(139,92,246,0.55)',
    backgroundColor: 'rgba(139,92,246,0.18)',
  },
  ribbonText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    color: theme.colors.violet,
  },
  tileRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 24,
    width: '100%',
  },
  tileSlot: {flex: 1},
  summary: {
    marginTop: 26,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: theme.colors.textSecondary,
  },
  unlockRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  unlockText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: theme.colors.warn,
  },
  actions: {paddingHorizontal: 22, paddingBottom: 30},
  gap: {height: 12},
});
