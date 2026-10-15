import React, {useCallback, useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from 'react-native-heroicons/solid';

import {assets} from '../assets';
import {theme} from '../constants/theme';
import {TRAILS} from '../game/trails';
import {formatNum, pad2} from '../utils/format';
import IconButton from '../components/IconButton';
import ScreenHeader from '../components/ScreenHeader';
import ScreenShell from '../components/ScreenShell';
import SignalBadge from '../components/SignalBadge';
import StatTile from '../components/StatTile';

type Props = {
  bestScore: number;
  bestSector: number;
  signal: number;
  trailsUnlocked: number;
  onLaunch: () => void;
  onOpenTrails: () => void;
  onOpenSettings: () => void;
};

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

/** Bento hub: one oversized launch tile plus a grid of telemetry tiles. */
export default function MenuScreen({
  bestScore,
  bestSector,
  signal,
  trailsUnlocked,
  onLaunch,
  onOpenTrails,
  onOpenSettings,
}: Props) {
  const ctaScale = useRef(new Animated.Value(0.94)).current;
  const press = useRef(new Animated.Value(1)).current;
  const tiles = useRef([0, 1, 2, 3].map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const spring = Animated.spring(ctaScale, {
      toValue: 1,
      tension: 50,
      friction: 8,
      useNativeDriver: true,
    });
    const rise = Animated.stagger(
      70,
      tiles.map(value =>
        Animated.timing(value, {
          toValue: 1,
          duration: 320,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ),
    );
    spring.start();
    rise.start();
    return () => {
      spring.stop();
      rise.stop();
    };
  }, [ctaScale, tiles]);

  const pressIn = useCallback(() => {
    Animated.spring(press, {
      toValue: 0.96,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [press]);

  const pressOut = useCallback(() => {
    Animated.spring(press, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [press]);

  const tileStyle = (index: number): any => ({
    opacity: tiles[index],
    transform: [
      {
        translateY: tiles[index].interpolate({
          inputRange: [0, 1],
          outputRange: [14, 0],
        }),
      },
    ],
  });

  const decor = (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.shaftLine} />
      <View style={styles.blob} />
      <Image source={assets.spriteSignalNode} style={styles.decorNode} />
    </View>
  );

  return (
    <ScreenShell
      source={assets.bgMenu}
      overlay={theme.gradients.menuOverlay}
      decor={decor}>
      <ScreenHeader
        title="TOWER SIGNAL RUSH"
        rightSlot={
          <IconButton
            Icon={Cog6ToothIcon}
            onPress={onOpenSettings}
            a11yLabel="Open settings"
          />
        }
      />

      <View style={styles.badgeRow}>
        <SignalBadge amount={signal} />
      </View>

      <View style={styles.bento}>
        <View style={styles.topRow}>
          <Animated.View
            pointerEvents="box-none"
            style={[styles.ctaSlot, {transform: [{scale: ctaScale}]}]}>
            <Pressable
              onPress={onLaunch}
              onPressIn={pressIn}
              onPressOut={pressOut}
              hitSlop={HIT}
              style={styles.ctaPress}>
              <Animated.View
                style={[styles.ctaLayer, {transform: [{scale: press}]}]}>
                <LinearGradient
                  colors={theme.gradients.cta}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.ctaGrad}>
                  <RocketLaunchIcon
                    size={34}
                    color={theme.colors.textPrimary}
                  />
                  <Text style={styles.ctaLabel}>START CLIMB</Text>
                  <Text style={styles.ctaCaption}>TAP TO LOCK THE BEAM</Text>
                </LinearGradient>
              </Animated.View>
            </Pressable>
          </Animated.View>

          <View style={styles.rightCol}>
            <Animated.View style={[styles.smallSlot, tileStyle(0)]}>
              <StatTile
                value={pad2(bestSector)}
                label="BEST SECTOR"
                accent={theme.colors.cyan}
                style={styles.fillTile}
              />
            </Animated.View>
            <Animated.View style={[styles.smallSlot, tileStyle(1)]}>
              <StatTile
                value={formatNum(bestScore)}
                label="BEST SCORE"
                accent={theme.colors.violet}
                style={styles.fillTile}
              />
            </Animated.View>
          </View>
        </View>

        <View style={styles.wideRow}>
          <Animated.View
            pointerEvents="box-none"
            style={[styles.wideSlot, tileStyle(2)]}>
            <Pressable
              onPress={onOpenTrails}
              hitSlop={HIT}
              style={styles.widePress}>
              <View style={[styles.wideCard, styles.wideCardWarn]}>
                <SparklesIcon size={20} color={theme.colors.warn} />
                <Text style={[styles.wideValue, styles.wideValueWarn]}>
                  {trailsUnlocked + ' / ' + TRAILS.length}
                </Text>
                <Text style={styles.wideLabel}>TRAILS UNLOCKED</Text>
              </View>
            </Pressable>
          </Animated.View>

          <Animated.View style={[styles.wideSlot, tileStyle(3)]}>
            <View style={styles.wideCard}>
              <QuestionMarkCircleIcon
                size={20}
                color={theme.colors.textSecondary}
              />
              <Text style={styles.howTitle}>HOW TO CLIMB</Text>
              <Text style={styles.howBody}>
                TAP WHEN THE BEAM LINES UP. AVOID ORANGE ZONES.
              </Text>
            </View>
          </Animated.View>
        </View>
      </View>

      <Text style={styles.footer}>OFFLINE MODE - NO ACCOUNT NEEDED</Text>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  shaftLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: 1,
    backgroundColor: 'rgba(6,182,212,0.10)',
  },
  blob: {
    position: 'absolute',
    top: 90,
    right: -70,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(139,92,246,0.10)',
  },
  decorNode: {
    position: 'absolute',
    top: 128,
    right: 18,
    width: 92,
    height: 92,
    opacity: 0.55,
    resizeMode: 'contain',
  },
  badgeRow: {
    paddingHorizontal: 16,
    marginTop: 14,
    alignItems: 'flex-end',
  },
  bento: {flex: 1, justifyContent: 'center', paddingHorizontal: 16},
  topRow: {flexDirection: 'row', gap: 12},
  ctaSlot: {flex: 1.25, height: 206},
  ctaPress: {width: '100%', height: 206},
  ctaLayer: {width: '100%', height: 206},
  ctaGrad: {
    width: '100%',
    height: 206,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    shadowColor: theme.colors.cyan,
    shadowOpacity: 0.45,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 8},
    elevation: 12,
  },
  ctaLabel: {
    marginTop: 14,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
    color: theme.colors.textPrimary,
  },
  ctaCaption: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: 'rgba(249,250,251,0.78)',
    textAlign: 'center',
  },
  rightCol: {flex: 1, gap: 12},
  smallSlot: {width: '100%', height: 97},
  fillTile: {height: '100%'},
  wideRow: {flexDirection: 'row', gap: 12, marginTop: 12},
  wideSlot: {flex: 1, height: 92},
  widePress: {width: '100%', height: 92},
  wideCard: {
    width: '100%',
    height: 92,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.12)',
    backgroundColor: 'rgba(24,33,47,0.88)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  wideCardWarn: {borderColor: 'rgba(249,115,22,0.32)'},
  wideValue: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1,
    fontVariant: ['tabular-nums'],
  },
  wideValueWarn: {color: theme.colors.warn},
  wideLabel: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: theme.colors.textSecondary,
  },
  howTitle: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: theme.colors.textPrimary,
  },
  howBody: {
    marginTop: 3,
    fontSize: 9,
    lineHeight: 13,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: theme.colors.textSecondary,
  },
  footer: {
    textAlign: 'center',
    marginBottom: 18,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    color: theme.colors.textMuted,
  },
});
