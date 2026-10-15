import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  DimensionValue,
  Easing,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {assets} from '../assets';
import {LOADER_DURATION_MS} from '../constants/config';
import {theme} from '../constants/theme';
import ProgressBar from '../components/ProgressBar';
import ScreenShell from '../components/ScreenShell';

type Props = {onDone: () => void};

const BAR_W = 212;
const SCAN_ROWS: DimensionValue[] = ['22%', '54%', '79%'];
const PCT_STEPS = [
  {at: 160, pct: 8},
  {at: 430, pct: 34},
  {at: 700, pct: 62},
  {at: 980, pct: 86},
  {at: 1260, pct: 100},
];

/**
 * Brand card only: no interactive controls, a deliberately much darker palette
 * than the hub, and every animation finished within the first couple of
 * seconds so the window is fully at rest for the rest of the splash.
 */
export default function LoaderScreen({onDone}: Props) {
  const fade = useRef(new Animated.Value(0)).current;
  const mark = useRef(new Animated.Value(0.82)).current;
  const pulse = useRef(new Animated.Value(1)).current;
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const entry = Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 420,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(mark, {
        toValue: 1,
        tension: 42,
        friction: 7,
        useNativeDriver: true,
      }),
    ]);

    const beat = Animated.sequence([
      Animated.timing(pulse, {
        toValue: 1.05,
        duration: 420,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(pulse, {
        toValue: 1,
        duration: 420,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(pulse, {
        toValue: 1.04,
        duration: 420,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(pulse, {
        toValue: 1,
        duration: 420,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
    ]);

    entry.start();
    beat.start();

    const timers: Array<ReturnType<typeof setTimeout>> = PCT_STEPS.map(step =>
      setTimeout(() => setPct(step.pct), step.at),
    );

    const exit = Animated.timing(fade, {
      toValue: 0,
      duration: 260,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    });

    const leave = setTimeout(() => {
      exit.start(() => onDone());
    }, LOADER_DURATION_MS - 260);

    return () => {
      entry.stop();
      beat.stop();
      exit.stop();
      clearTimeout(leave);
      timers.forEach(clearTimeout);
    };
  }, [fade, mark, pulse, onDone]);

  const decor = (
    <View style={StyleSheet.absoluteFill}>
      {SCAN_ROWS.map(row => (
        <View key={String(row)} style={[styles.scan, {top: row}]} />
      ))}
      <View style={[styles.bracket, styles.bracketTl]} />
      <View style={[styles.bracket, styles.bracketBr]} />
    </View>
  );

  return (
    <ScreenShell
      source={assets.bgLoader}
      overlay={theme.gradients.loaderOverlay}
      decor={decor}>
      <Animated.View style={[styles.body, {opacity: fade}]}>
        <Animated.View
          style={[
            styles.markFrame,
            {transform: [{scale: Animated.multiply(mark, pulse)}]},
          ]}>
          <Image source={assets.spriteRelayCore} style={styles.mark} />
        </Animated.View>

        <Text style={styles.brandTop}>TOWER SIGNAL</Text>
        <Text style={styles.brandBottom}>RUSH</Text>
        <Text style={styles.tag}>RELAY UPLINK INITIALISING</Text>

        <View style={styles.barWrap}>
          <ProgressBar trackWidth={BAR_W} />
        </View>
        <Text style={styles.pct}>{'LOADING ' + pct + ' PCT'}</Text>
      </Animated.View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  markFrame: {
    width: 132,
    height: 132,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(6,182,212,0.55)',
    borderRadius: 6,
    backgroundColor: 'rgba(10,16,28,0.65)',
    shadowColor: theme.colors.cyan,
    shadowOpacity: 0.5,
    shadowRadius: 22,
    shadowOffset: {width: 0, height: 0},
    elevation: 10,
  },
  mark: {width: 104, height: 104, resizeMode: 'contain'},
  brandTop: {
    marginTop: 34,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 6,
    color: theme.colors.textPrimary,
    textShadowColor: 'rgba(6,182,212,0.65)',
    textShadowRadius: 16,
    textShadowOffset: {width: 0, height: 0},
  },
  brandBottom: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 12,
    color: theme.colors.cyanLight,
    textShadowColor: 'rgba(139,92,246,0.55)',
    textShadowRadius: 18,
    textShadowOffset: {width: 0, height: 0},
  },
  tag: {
    marginTop: 14,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    color: theme.colors.cyan,
  },
  barWrap: {marginTop: 38},
  pct: {
    marginTop: 12,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
    color: theme.colors.textMuted,
    fontVariant: ['tabular-nums'],
  },
  scan: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(6,182,212,0.22)',
  },
  bracket: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderColor: 'rgba(249,115,22,0.35)',
  },
  bracketTl: {
    top: 64,
    left: 24,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  bracketBr: {
    bottom: 64,
    right: 24,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
});
