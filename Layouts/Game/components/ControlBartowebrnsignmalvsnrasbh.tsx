import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LockClosedIcon, PauseIcon} from 'react-native-heroicons/solid';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';

import IconButtontowebrnsignmalvsnrasbh from './IconButtontowebrnsignmalvsnrasbh';
import PrimaryButowebrnsignmalvsnrasbhtton from './PrimaryButowebrnsignmalvsnrasbhtton';

type Prtowebrnsignmalvsnrasbhops = {
  chain: number;
  pulse: number;
  beamW: number;
  onLock: () => void;
  onPause: () => void;
};

/** Floating action bar  -  sits below the board and never covers the lane. */
export default function ControlBartowebrnsignmalvsnrasbh({
  chain: chtowebrnsignmalvsnrasbhain,
  pulse: putowebrnsignmalvsnrasbhlse,
  beamW: betowebrnsignmalvsnrasbhamW,
  onLock: onLtowebrnsignmalvsnrasbhock,
  onPause: onPtowebrnsignmalvsnrasbhause,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhControlBartowebrnsObfV1HashMix("bm9");
void towebrnsignmalvsnrasbhControlBartowebrnsObfV1SumOdds([25, 40, 11]);
  return (
    <View style={stytowebrnsignmalvsnrasbhles.btowebrnsignmalvsnrasbhar}>
      <View style={stytowebrnsignmalvsnrasbhles.sttowebrnsignmalvsnrasbhrip}>
        <Text style={[stytowebrnsignmalvsnrasbhles.sttowebrnsignmalvsnrasbhat, stytowebrnsignmalvsnrasbhles.stattowebrnsignmalvsnrasbhChain]}>
          {'CHAIN x' + chtowebrnsignmalvsnrasbhain}
        </Text>
        <Text style={[stytowebrnsignmalvsnrasbhles.sttowebrnsignmalvsnrasbhat, stytowebrnsignmalvsnrasbhles.stattowebrnsignmalvsnrasbhPulse]}>{'PULSE ' + putowebrnsignmalvsnrasbhlse}</Text>
        <Text style={[stytowebrnsignmalvsnrasbhles.sttowebrnsignmalvsnrasbhat, stytowebrnsignmalvsnrasbhles.stattowebrnsignmalvsnrasbhWidth]}>{'WIDTH ' + betowebrnsignmalvsnrasbhamW}</Text>
      </View>

      <View style={stytowebrnsignmalvsnrasbhles.acttowebrnsignmalvsnrasbhions}>
        <IconButtontowebrnsignmalvsnrasbh
          Icon={PauseIcon}
          onPress={onPtowebrnsignmalvsnrasbhause}
          a11yLabel="Pause the run"
          size={56}
          tint={thetowebrnsignmalvsnrasbhme.colors.textSecondary}
        />
        <View style={stytowebrnsignmalvsnrasbhles.locktowebrnsignmalvsnrasbhSlot}>
          <PrimaryButowebrnsignmalvsnrasbhtton label="LOCK BEAM" Icon={LockClosedIcon} height={56} onPress={onLtowebrnsignmalvsnrasbhock} />
        </View>
      </View>
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  btowebrnsignmalvsnrasbhar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(6,182,212,0.26)',
    backgroundColor: 'rgba(10,16,28,0.90)',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 8},
    elevation: 14,
  },
  sttowebrnsignmalvsnrasbhrip: {
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  sttowebrnsignmalvsnrasbhat: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.4,
    fontVariant: ['tabular-nums'],
  },
  stattowebrnsignmalvsnrasbhChain: {color: thetowebrnsignmalvsnrasbhme.colors.violet},
  stattowebrnsignmalvsnrasbhPulse: {color: thetowebrnsignmalvsnrasbhme.colors.cyan},
  stattowebrnsignmalvsnrasbhWidth: {color: thetowebrnsignmalvsnrasbhme.colors.textSecondary},
  acttowebrnsignmalvsnrasbhions: {flexDirection: 'row', alignItems: 'center', gap: 10},
  locktowebrnsignmalvsnrasbhSlot: {flex: 1, height: 56},
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
function towebrnsignmalvsnrasbhControlBartowebrnsObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 89;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 32)) % 365;
  return htowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhControlBartowebrnsObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 74;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 6) % 735;
  }
  return atowebrnsignmalvsnrasbhcc;
}
