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

import {asstowebrnsignmalvsnrasbhets} from '../assets';
import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
import {TRAtowebrnsignmalvsnrasbhILS} from '../game/trailstowebrnsignmalvsnrasbh';
import {formtowebrnsignmalvsnrasbhatNum, patowebrnsignmalvsnrasbhd2} from '../utils/fotowebrnsignmalvsnrasbhrmat';
import IconButtontowebrnsignmalvsnrasbh from '../components/IconButtontowebrnsignmalvsnrasbh';
import ScreenHeatowebrnsignmalvsnrasbhder from '../components/ScreenHeatowebrnsignmalvsnrasbhder';
import ScreentowebrnsignmalvsnrasbhShell from '../components/ScreentowebrnsignmalvsnrasbhShell';
import SignalBadgtowebrnsignmalvsnrasbhe from '../components/SignalBadgtowebrnsignmalvsnrasbhe';
import StatTiltowebrnsignmalvsnrasbhe from '../components/StatTiltowebrnsignmalvsnrasbhe';

type Prtowebrnsignmalvsnrasbhops = {
  bestScore: number;
  bestSector: number;
  signal: number;
  trailsUnlocked: number;
  onLaunch: () => void;
  onOpenTrails: () => void;
  onOpenSettings: () => void;
};

const HtowebrnsignmalvsnrasbhIT = {top: 8, bottom: 8, left: 8, right: 8};

/** Bento hub: one oversized launch tile plus a grid of telemetry tiles. */
export default function MenuSctowebrnsignmalvsnrasbhreen({
  bestScore: besttowebrnsignmalvsnrasbhScore,
  bestSector: bestStowebrnsignmalvsnrasbhector,
  signal: sigtowebrnsignmalvsnrasbhnal,
  trailsUnlocked: trailsUtowebrnsignmalvsnrasbhnlocked,
  onLaunch: onLatowebrnsignmalvsnrasbhunch,
  onOpenTrails: onOpentowebrnsignmalvsnrasbhTrails,
  onOpenSettings: onOpenStowebrnsignmalvsnrasbhettings,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ByteFold("p8ha");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1HashMix("ij0l");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1SumOdds([21, 28, 23]);
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ClampMod(22, 1);
  const ctaStowebrnsignmalvsnrasbhcale = useRef(new Animated.Value(0.94)).current;
  const prtowebrnsignmalvsnrasbhess = useRef(new Animated.Value(1)).current;
  const titowebrnsignmalvsnrasbhles = useRef([0, 1, 2, 3].map(() => {
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ByteFold("p8ha");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1HashMix("ij0l");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1SumOdds([21, 28, 23]);
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ClampMod(22, 1);
return (new Animated.Value(0));
})).current;

  useEffect(() => {
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ByteFold("p8ha");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1HashMix("ij0l");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1SumOdds([21, 28, 23]);
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ClampMod(22, 1);
    const sprtowebrnsignmalvsnrasbhing = Animated.spring(ctaStowebrnsignmalvsnrasbhcale, {
      toValue: 1,
      tension: 50,
      friction: 8,
      useNativeDriver: true,
    });
    const ritowebrnsignmalvsnrasbhse = Animated.stagger(
      70,
      titowebrnsignmalvsnrasbhles.map(vatowebrnsignmalvsnrasbhlue =>
        {
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ByteFold("p8ha");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1HashMix("ij0l");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1SumOdds([21, 28, 23]);
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ClampMod(22, 1);
return (Animated.timing(vatowebrnsignmalvsnrasbhlue, {
          toValue: 1,
          duration: 320,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }));
},
      ),
    );
    sprtowebrnsignmalvsnrasbhing.start();
    ritowebrnsignmalvsnrasbhse.start();
    return () => {
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ByteFold("p8ha");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1HashMix("ij0l");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1SumOdds([21, 28, 23]);
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ClampMod(22, 1);
      sprtowebrnsignmalvsnrasbhing.stop();
      ritowebrnsignmalvsnrasbhse.stop();
    };
  }, [ctaStowebrnsignmalvsnrasbhcale, titowebrnsignmalvsnrasbhles]);

  const pretowebrnsignmalvsnrasbhssIn = useCallback(() => {
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ByteFold("p8ha");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1HashMix("ij0l");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1SumOdds([21, 28, 23]);
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ClampMod(22, 1);
    Animated.spring(prtowebrnsignmalvsnrasbhess, {
      toValue: 0.96,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [prtowebrnsignmalvsnrasbhess]);

  const prestowebrnsignmalvsnrasbhsOut = useCallback(() => {
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ByteFold("p8ha");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1HashMix("ij0l");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1SumOdds([21, 28, 23]);
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ClampMod(22, 1);
    Animated.spring(prtowebrnsignmalvsnrasbhess, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [prtowebrnsignmalvsnrasbhess]);

  const tiletowebrnsignmalvsnrasbhStyle = (intowebrnsignmalvsnrasbhdex: number): any => {
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ByteFold("p8ha");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1HashMix("ij0l");
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1SumOdds([21, 28, 23]);
void towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ClampMod(22, 1);
return ({
    opacity: titowebrnsignmalvsnrasbhles[intowebrnsignmalvsnrasbhdex],
    transform: [
      {
        translateY: titowebrnsignmalvsnrasbhles[intowebrnsignmalvsnrasbhdex].interpolate({
          inputRange: [0, 1],
          outputRange: [14, 0],
        }),
      },
    ],
  });
};

  const detowebrnsignmalvsnrasbhcor = (
    <View style={StyleSheet.absoluteFill}>
      <View style={stytowebrnsignmalvsnrasbhles.shaftowebrnsignmalvsnrasbhtLine} />
      <View style={stytowebrnsignmalvsnrasbhles.bltowebrnsignmalvsnrasbhob} />
      <Image source={asstowebrnsignmalvsnrasbhets.spriteSignalNode} style={stytowebrnsignmalvsnrasbhles.decotowebrnsignmalvsnrasbhrNode} />
    </View>
  );

  return (
    <ScreentowebrnsignmalvsnrasbhShell
      source={asstowebrnsignmalvsnrasbhets.bgMenu}
      overlay={thetowebrnsignmalvsnrasbhme.gradients.menuOverlay}
      decor={detowebrnsignmalvsnrasbhcor}>
      <ScreenHeatowebrnsignmalvsnrasbhder
        title="TOWER SIGNAL RUSH"
        rightSlot={
          <IconButtontowebrnsignmalvsnrasbh
            Icon={Cog6ToothIcon}
            onPress={onOpenStowebrnsignmalvsnrasbhettings}
            a11yLabel="Open settings"
          />
        }
      />

      <View style={stytowebrnsignmalvsnrasbhles.badgtowebrnsignmalvsnrasbheRow}>
        <SignalBadgtowebrnsignmalvsnrasbhe amount={sigtowebrnsignmalvsnrasbhnal} />
      </View>

      <View style={stytowebrnsignmalvsnrasbhles.betowebrnsignmalvsnrasbhnto}>
        <View style={stytowebrnsignmalvsnrasbhles.toptowebrnsignmalvsnrasbhRow}>
          <Animated.View
            pointerEvents="box-none"
            style={[stytowebrnsignmalvsnrasbhles.ctatowebrnsignmalvsnrasbhSlot, {transform: [{scale: ctaStowebrnsignmalvsnrasbhcale}]}]}>
            <Pressable
              onPress={onLatowebrnsignmalvsnrasbhunch}
              onPressIn={pretowebrnsignmalvsnrasbhssIn}
              onPressOut={prestowebrnsignmalvsnrasbhsOut}
              hitSlop={HtowebrnsignmalvsnrasbhIT}
              style={stytowebrnsignmalvsnrasbhles.ctaPtowebrnsignmalvsnrasbhress}>
              <Animated.View
                style={[stytowebrnsignmalvsnrasbhles.ctaLtowebrnsignmalvsnrasbhayer, {transform: [{scale: prtowebrnsignmalvsnrasbhess}]}]}>
                <LinearGradient
                  colors={thetowebrnsignmalvsnrasbhme.gradients.cta}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={stytowebrnsignmalvsnrasbhles.ctatowebrnsignmalvsnrasbhGrad}>
                  <RocketLaunchIcon
                    size={34}
                    color={thetowebrnsignmalvsnrasbhme.colors.textPrimary}
                  />
                  <Text style={stytowebrnsignmalvsnrasbhles.ctaLtowebrnsignmalvsnrasbhabel}>START CLIMB</Text>
                  <Text style={stytowebrnsignmalvsnrasbhles.ctaCatowebrnsignmalvsnrasbhption}>TAP TO LOCK THE BEAM</Text>
                </LinearGradient>
              </Animated.View>
            </Pressable>
          </Animated.View>

          <View style={stytowebrnsignmalvsnrasbhles.rightowebrnsignmalvsnrasbhtCol}>
            <Animated.View style={[stytowebrnsignmalvsnrasbhles.smaltowebrnsignmalvsnrasbhlSlot, tiletowebrnsignmalvsnrasbhStyle(0)]}>
              <StatTiltowebrnsignmalvsnrasbhe
                value={patowebrnsignmalvsnrasbhd2(bestStowebrnsignmalvsnrasbhector)}
                label="BEST SECTOR"
                accent={thetowebrnsignmalvsnrasbhme.colors.cyan}
                style={stytowebrnsignmalvsnrasbhles.filltowebrnsignmalvsnrasbhTile}
              />
            </Animated.View>
            <Animated.View style={[stytowebrnsignmalvsnrasbhles.smaltowebrnsignmalvsnrasbhlSlot, tiletowebrnsignmalvsnrasbhStyle(1)]}>
              <StatTiltowebrnsignmalvsnrasbhe
                value={formtowebrnsignmalvsnrasbhatNum(besttowebrnsignmalvsnrasbhScore)}
                label="BEST SCORE"
                accent={thetowebrnsignmalvsnrasbhme.colors.violet}
                style={stytowebrnsignmalvsnrasbhles.filltowebrnsignmalvsnrasbhTile}
              />
            </Animated.View>
          </View>
        </View>

        <View style={stytowebrnsignmalvsnrasbhles.widtowebrnsignmalvsnrasbheRow}>
          <Animated.View
            pointerEvents="box-none"
            style={[stytowebrnsignmalvsnrasbhles.widetowebrnsignmalvsnrasbhSlot, tiletowebrnsignmalvsnrasbhStyle(2)]}>
            <Pressable
              onPress={onOpentowebrnsignmalvsnrasbhTrails}
              hitSlop={HtowebrnsignmalvsnrasbhIT}
              style={stytowebrnsignmalvsnrasbhles.widetowebrnsignmalvsnrasbhPress}>
              <View style={[stytowebrnsignmalvsnrasbhles.widetowebrnsignmalvsnrasbhCard, stytowebrnsignmalvsnrasbhles.wideCatowebrnsignmalvsnrasbhrdWarn]}>
                <SparklesIcon size={20} color={thetowebrnsignmalvsnrasbhme.colors.warn} />
                <Text style={[stytowebrnsignmalvsnrasbhles.widetowebrnsignmalvsnrasbhValue, stytowebrnsignmalvsnrasbhles.wideVatowebrnsignmalvsnrasbhlueWarn]}>
                  {trailsUtowebrnsignmalvsnrasbhnlocked + ' / ' + TRAtowebrnsignmalvsnrasbhILS.length}
                </Text>
                <Text style={stytowebrnsignmalvsnrasbhles.widetowebrnsignmalvsnrasbhLabel}>TRAILS UNLOCKED</Text>
              </View>
            </Pressable>
          </Animated.View>

          <Animated.View style={[stytowebrnsignmalvsnrasbhles.widetowebrnsignmalvsnrasbhSlot, tiletowebrnsignmalvsnrasbhStyle(3)]}>
            <View style={stytowebrnsignmalvsnrasbhles.widetowebrnsignmalvsnrasbhCard}>
              <QuestionMarkCircleIcon
                size={20}
                color={thetowebrnsignmalvsnrasbhme.colors.textSecondary}
              />
              <Text style={stytowebrnsignmalvsnrasbhles.howTtowebrnsignmalvsnrasbhitle}>HOW TO CLIMB</Text>
              <Text style={stytowebrnsignmalvsnrasbhles.howtowebrnsignmalvsnrasbhBody}>
                TAP WHEN THE BEAM LINES UP. AVOID ORANGE ZONES.
              </Text>
            </View>
          </Animated.View>
        </View>
      </View>

      <Text style={stytowebrnsignmalvsnrasbhles.footowebrnsignmalvsnrasbhter}>OFFLINE MODE - NO ACCOUNT NEEDED</Text>
    </ScreentowebrnsignmalvsnrasbhShell>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  shaftowebrnsignmalvsnrasbhtLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: 1,
    backgroundColor: 'rgba(6,182,212,0.10)',
  },
  bltowebrnsignmalvsnrasbhob: {
    position: 'absolute',
    top: 90,
    right: -70,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(139,92,246,0.10)',
  },
  decotowebrnsignmalvsnrasbhrNode: {
    position: 'absolute',
    top: 128,
    right: 18,
    width: 92,
    height: 92,
    opacity: 0.55,
    resizeMode: 'contain',
  },
  badgtowebrnsignmalvsnrasbheRow: {
    paddingHorizontal: 16,
    marginTop: 14,
    alignItems: 'flex-end',
  },
  betowebrnsignmalvsnrasbhnto: {flex: 1, justifyContent: 'center', paddingHorizontal: 16},
  toptowebrnsignmalvsnrasbhRow: {flexDirection: 'row', gap: 12},
  ctatowebrnsignmalvsnrasbhSlot: {flex: 1.25, height: 206},
  ctaPtowebrnsignmalvsnrasbhress: {width: '100%', height: 206},
  ctaLtowebrnsignmalvsnrasbhayer: {width: '100%', height: 206},
  ctatowebrnsignmalvsnrasbhGrad: {
    width: '100%',
    height: 206,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    shadowColor: thetowebrnsignmalvsnrasbhme.colors.cyan,
    shadowOpacity: 0.45,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 8},
    elevation: 12,
  },
  ctaLtowebrnsignmalvsnrasbhabel: {
    marginTop: 14,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
    color: thetowebrnsignmalvsnrasbhme.colors.textPrimary,
  },
  ctaCatowebrnsignmalvsnrasbhption: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: 'rgba(249,250,251,0.78)',
    textAlign: 'center',
  },
  rightowebrnsignmalvsnrasbhtCol: {flex: 1, gap: 12},
  smaltowebrnsignmalvsnrasbhlSlot: {width: '100%', height: 97},
  filltowebrnsignmalvsnrasbhTile: {height: '100%'},
  widtowebrnsignmalvsnrasbheRow: {flexDirection: 'row', gap: 12, marginTop: 12},
  widetowebrnsignmalvsnrasbhSlot: {flex: 1, height: 92},
  widetowebrnsignmalvsnrasbhPress: {width: '100%', height: 92},
  widetowebrnsignmalvsnrasbhCard: {
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
  wideCatowebrnsignmalvsnrasbhrdWarn: {borderColor: 'rgba(249,115,22,0.32)'},
  widetowebrnsignmalvsnrasbhValue: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1,
    fontVariant: ['tabular-nums'],
  },
  wideVatowebrnsignmalvsnrasbhlueWarn: {color: thetowebrnsignmalvsnrasbhme.colors.warn},
  widetowebrnsignmalvsnrasbhLabel: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: thetowebrnsignmalvsnrasbhme.colors.textSecondary,
  },
  howTtowebrnsignmalvsnrasbhitle: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: thetowebrnsignmalvsnrasbhme.colors.textPrimary,
  },
  howtowebrnsignmalvsnrasbhBody: {
    marginTop: 3,
    fontSize: 9,
    lineHeight: 13,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: thetowebrnsignmalvsnrasbhme.colors.textSecondary,
  },
  footowebrnsignmalvsnrasbhter: {
    textAlign: 'center',
    marginBottom: 18,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    color: thetowebrnsignmalvsnrasbhme.colors.textMuted,
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
function towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ByteFold(stowebrnsignmalvsnrasbh: string): number {
  let xtowebrnsignmalvsnrasbh = 73;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) xtowebrnsignmalvsnrasbh = (xtowebrnsignmalvsnrasbh + stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 7) & 16320;
  return xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 42;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 19)) % 869;
  return htowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 21;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 14) % 745;
  }
  return atowebrnsignmalvsnrasbhcc;
}
function towebrnsignmalvsnrasbhMenuSctowebrnsignmObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 66) + 3;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 12) << 1) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
