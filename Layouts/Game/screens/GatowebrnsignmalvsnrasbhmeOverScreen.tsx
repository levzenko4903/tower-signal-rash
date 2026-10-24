import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import {
  ArrowPathIcon,
  SparklesIcon,
} from 'react-native-heroicons/solid';

import {asstowebrnsignmalvsnrasbhets} from '../assets';
import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
import {RunRtowebrnsignmalvsnrasbhesult} from '../hooks/useTowerRtowebrnsignmalvsnrasbhun';
import {formtowebrnsignmalvsnrasbhatNum, patowebrnsignmalvsnrasbhd2} from '../utils/fotowebrnsignmalvsnrasbhrmat';
import HudFratowebrnsignmalvsnrasbhme from '../components/HudFratowebrnsignmalvsnrasbhme';
import PrimaryButowebrnsignmalvsnrasbhtton from '../components/PrimaryButowebrnsignmalvsnrasbhtton';
import ScreenHeatowebrnsignmalvsnrasbhder from '../components/ScreenHeatowebrnsignmalvsnrasbhder';
import ScreentowebrnsignmalvsnrasbhShell from '../components/ScreentowebrnsignmalvsnrasbhShell';
import SecondarytowebrnsignmalvsnrasbhButton from '../components/SecondarytowebrnsignmalvsnrasbhButton';
import StatTiltowebrnsignmalvsnrasbhe from '../components/StatTiltowebrnsignmalvsnrasbhe';

type Prtowebrnsignmalvsnrasbhops = {
  result: RunRtowebrnsignmalvsnrasbhesult;
  newRecord: boolean;
  unlockedTrail: string | null;
  onAgain: () => void;
  onMenu: () => void;
};

const VERDtowebrnsignmalvsnrasbhICTS = {
  uplink: 'UPLINK LOST',
  overload: 'RELAY OVERLOAD',
  timeout: 'SIGNAL TIMEOUT',
};

export default function GatowebrnsignmalvsnrasbhmeOverScreen({
  result: restowebrnsignmalvsnrasbhult,
  newRecord: newRtowebrnsignmalvsnrasbhecord,
  unlockedTrail: unlocktowebrnsignmalvsnrasbhedTrail,
  onAgain: onAtowebrnsignmalvsnrasbhgain,
  onMenu: onMtowebrnsignmalvsnrasbhenu,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
  const drtowebrnsignmalvsnrasbhop = useRef(new Animated.Value(0)).current;
  const ptowebrnsignmalvsnrasbhop = useRef(new Animated.Value(0.7)).current;
  const latowebrnsignmalvsnrasbhte = useRef(new Animated.Value(0)).current;

  useEffect(() => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
    const shtowebrnsignmalvsnrasbhow = Animated.parallel([
      Animated.timing(drtowebrnsignmalvsnrasbhop, {
        toValue: 1,
        duration: 260,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(ptowebrnsignmalvsnrasbhop, {
        toValue: 1,
        tension: 48,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(latowebrnsignmalvsnrasbhte, {
        toValue: 1,
        delay: 320,
        duration: 260,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]);
    shtowebrnsignmalvsnrasbhow.start();
    return () => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
return (shtowebrnsignmalvsnrasbhow.stop());
};
  }, [drtowebrnsignmalvsnrasbhop, ptowebrnsignmalvsnrasbhop, latowebrnsignmalvsnrasbhte]);

  const titowebrnsignmalvsnrasbhles: Array<{value: string; label: string; accent: string}> = [
    {
      value: patowebrnsignmalvsnrasbhd2(restowebrnsignmalvsnrasbhult.sector),
      label: 'SECTOR',
      accent: thetowebrnsignmalvsnrasbhme.colors.cyan,
    },
  ];
  if (restowebrnsignmalvsnrasbhult.locks > 0) {
    titowebrnsignmalvsnrasbhles.push({
      value: String(restowebrnsignmalvsnrasbhult.locks),
      label: 'RELAYS',
      accent: thetowebrnsignmalvsnrasbhme.colors.cyanLight,
    });
  }
  if (restowebrnsignmalvsnrasbhult.perfects > 0) {
    titowebrnsignmalvsnrasbhles.push({
      value: String(restowebrnsignmalvsnrasbhult.perfects),
      label: 'PERFECTS',
      accent: thetowebrnsignmalvsnrasbhme.colors.violet,
    });
  }
  if (titowebrnsignmalvsnrasbhles.length < 3 && restowebrnsignmalvsnrasbhult.bestChain > 0) {
    titowebrnsignmalvsnrasbhles.push({
      value: 'x' + restowebrnsignmalvsnrasbhult.bestChain,
      label: 'BEST CHAIN',
      accent: thetowebrnsignmalvsnrasbhme.colors.warn,
    });
  }

  const showtowebrnsignmalvsnrasbhTiles = titowebrnsignmalvsnrasbhles.length >= 2;
  const sumtowebrnsignmalvsnrasbhmary =
    'SECTOR ' + patowebrnsignmalvsnrasbhd2(restowebrnsignmalvsnrasbhult.sector) + ' - NO RELAYS LOCKED';

  return (
    <ScreentowebrnsignmalvsnrasbhShell
      source={asstowebrnsignmalvsnrasbhets.bgGame}
      overlay={thetowebrnsignmalvsnrasbhme.gradients.resultOverlay}>
      <ScreenHeatowebrnsignmalvsnrasbhder title="RUN RESULTS" />

      <View style={stytowebrnsignmalvsnrasbhles.botowebrnsignmalvsnrasbhdy}>
        <Animated.View style={[stytowebrnsignmalvsnrasbhles.verditowebrnsignmalvsnrasbhctWrap, {opacity: drtowebrnsignmalvsnrasbhop}]}>
          <Image source={asstowebrnsignmalvsnrasbhets.spriteWarningChip} style={stytowebrnsignmalvsnrasbhles.chtowebrnsignmalvsnrasbhip} />
          <Text style={stytowebrnsignmalvsnrasbhles.vertowebrnsignmalvsnrasbhdict}>{VERDtowebrnsignmalvsnrasbhICTS[restowebrnsignmalvsnrasbhult.verdict]}</Text>
          <View style={stytowebrnsignmalvsnrasbhles.undetowebrnsignmalvsnrasbhrline} />
        </Animated.View>

        <Animated.View
          style={[stytowebrnsignmalvsnrasbhles.herotowebrnsignmalvsnrasbhWrap, {transform: [{scale: ptowebrnsignmalvsnrasbhop}]}]}>
          <HudFratowebrnsignmalvsnrasbhme accent="rgba(6,182,212,0.45)" size={20} style={stytowebrnsignmalvsnrasbhles.htowebrnsignmalvsnrasbhud}>
            <Text style={stytowebrnsignmalvsnrasbhles.hetowebrnsignmalvsnrasbhro}>{formtowebrnsignmalvsnrasbhatNum(restowebrnsignmalvsnrasbhult.score)}</Text>
            <Text style={stytowebrnsignmalvsnrasbhles.heroCtowebrnsignmalvsnrasbhaption}>FINAL SCORE</Text>
          </HudFratowebrnsignmalvsnrasbhme>
        </Animated.View>

        {newRtowebrnsignmalvsnrasbhecord ? (
          <View style={stytowebrnsignmalvsnrasbhles.ribtowebrnsignmalvsnrasbhbon}>
            <Text style={stytowebrnsignmalvsnrasbhles.ribbotowebrnsignmalvsnrasbhnText}>NEW RECORD</Text>
          </View>
        ) : null}

        {showtowebrnsignmalvsnrasbhTiles ? (
          <Animated.View style={[stytowebrnsignmalvsnrasbhles.tiltowebrnsignmalvsnrasbheRow, {opacity: latowebrnsignmalvsnrasbhte}]}>
            {titowebrnsignmalvsnrasbhles.slice(0, 3).map(titowebrnsignmalvsnrasbhle => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
return (<View key={titowebrnsignmalvsnrasbhle.label} style={stytowebrnsignmalvsnrasbhles.tiletowebrnsignmalvsnrasbhSlot}>
                <StatTiltowebrnsignmalvsnrasbhe
                  value={titowebrnsignmalvsnrasbhle.value}
                  label={titowebrnsignmalvsnrasbhle.label}
                  accent={titowebrnsignmalvsnrasbhle.accent}
                />
              </View>);
})}
          </Animated.View>
        ) : (
          <Text style={stytowebrnsignmalvsnrasbhles.sumtowebrnsignmalvsnrasbhmary}>{sumtowebrnsignmalvsnrasbhmary}</Text>
        )}

        {unlocktowebrnsignmalvsnrasbhedTrail ? (
          <View style={stytowebrnsignmalvsnrasbhles.unlotowebrnsignmalvsnrasbhckRow}>
            <SparklesIcon size={16} color={thetowebrnsignmalvsnrasbhme.colors.warn} />
            <Text style={stytowebrnsignmalvsnrasbhles.unloctowebrnsignmalvsnrasbhkText}>
              {'TRAIL UNLOCKED - ' + unlocktowebrnsignmalvsnrasbhedTrail}
            </Text>
          </View>
        ) : null}
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[stytowebrnsignmalvsnrasbhles.acttowebrnsignmalvsnrasbhions, {opacity: latowebrnsignmalvsnrasbhte}]}>
        <PrimaryButowebrnsignmalvsnrasbhtton
          label="CLIMB AGAIN"
          Icon={ArrowPathIcon}
          height={60}
          onPress={onAtowebrnsignmalvsnrasbhgain}
        />
        <View style={stytowebrnsignmalvsnrasbhles.gap} />
        <SecondarytowebrnsignmalvsnrasbhButton label="TOWER MAP" height={48} onPress={onMtowebrnsignmalvsnrasbhenu} />
      </Animated.View>
    </ScreentowebrnsignmalvsnrasbhShell>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  botowebrnsignmalvsnrasbhdy: {flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 22},
  verditowebrnsignmalvsnrasbhctWrap: {alignItems: 'center'},
  chtowebrnsignmalvsnrasbhip: {width: 56, height: 56, marginBottom: 16, resizeMode: 'contain'},
  vertowebrnsignmalvsnrasbhdict: {
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 3,
    color: thetowebrnsignmalvsnrasbhme.colors.warn,
    textAlign: 'center',
  },
  undetowebrnsignmalvsnrasbhrline: {
    marginTop: 10,
    width: 120,
    height: 1,
    backgroundColor: thetowebrnsignmalvsnrasbhme.colors.cyan,
  },
  herotowebrnsignmalvsnrasbhWrap: {marginTop: 28},
  htowebrnsignmalvsnrasbhud: {
    paddingHorizontal: 34,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(10,16,28,0.55)',
    borderRadius: 8,
  },
  hetowebrnsignmalvsnrasbhro: {
    fontSize: 52,
    fontWeight: '900',
    letterSpacing: 1,
    color: thetowebrnsignmalvsnrasbhme.colors.cyan,
    textShadowColor: 'rgba(6,182,212,0.5)',
    textShadowRadius: 18,
    textShadowOffset: {width: 0, height: 0},
    fontVariant: ['tabular-nums'],
  },
  heroCtowebrnsignmalvsnrasbhaption: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    color: thetowebrnsignmalvsnrasbhme.colors.textSecondary,
  },
  ribtowebrnsignmalvsnrasbhbon: {
    marginTop: 18,
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(139,92,246,0.55)',
    backgroundColor: 'rgba(139,92,246,0.18)',
  },
  ribbotowebrnsignmalvsnrasbhnText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    color: thetowebrnsignmalvsnrasbhme.colors.violet,
  },
  tiltowebrnsignmalvsnrasbheRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 24,
    width: '100%',
  },
  tiletowebrnsignmalvsnrasbhSlot: {flex: 1},
  sumtowebrnsignmalvsnrasbhmary: {
    marginTop: 26,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: thetowebrnsignmalvsnrasbhme.colors.textSecondary,
  },
  unlotowebrnsignmalvsnrasbhckRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  unloctowebrnsignmalvsnrasbhkText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: thetowebrnsignmalvsnrasbhme.colors.warn,
  },
  acttowebrnsignmalvsnrasbhions: {paddingHorizontal: 22, paddingBottom: 30},
  gap: {height: 12},
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
function towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 6;
  return (xtowebrnsignmalvsnrasbh ^ 138) & 35161;
}
