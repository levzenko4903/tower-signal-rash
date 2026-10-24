import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BoltIcon} from 'react-native-heroicons/solid';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
import {formtowebrnsignmalvsnrasbhatNum} from '../utils/fotowebrnsignmalvsnrasbhrmat';

type Prtowebrnsignmalvsnrasbhops = {amount: number};

export default function SignalBadgtowebrnsignmalvsnrasbhe({amount: amotowebrnsignmalvsnrasbhunt}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhSignalBadgtowebrnsObfV1HashMix("92jm");
void towebrnsignmalvsnrasbhSignalBadgtowebrnsObfV1SumOdds([14, 17, 8]);
void towebrnsignmalvsnrasbhSignalBadgtowebrnsObfV1ClampMod(75, 34);
void towebrnsignmalvsnrasbhSignalBadgtowebrnsObfV1ShiftXor(53, 36);
  return (
    <View style={stytowebrnsignmalvsnrasbhles.pitowebrnsignmalvsnrasbhll}>
      <BoltIcon size={16} color={thetowebrnsignmalvsnrasbhme.colors.cyan} />
      <Text style={stytowebrnsignmalvsnrasbhles.tetowebrnsignmalvsnrasbhxt}>{'SIGNAL ' + formtowebrnsignmalvsnrasbhatNum(amotowebrnsignmalvsnrasbhunt)}</Text>
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  pitowebrnsignmalvsnrasbhll: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(6,182,212,0.35)',
    backgroundColor: 'rgba(6,182,212,0.12)',
  },
  tetowebrnsignmalvsnrasbhxt: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: thetowebrnsignmalvsnrasbhme.colors.textPrimary,
    fontVariant: ['tabular-nums'],
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
function towebrnsignmalvsnrasbhSignalBadgtowebrnsObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 90;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 7)) % 479;
  return htowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhSignalBadgtowebrnsObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 7;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 8) % 330;
  }
  return atowebrnsignmalvsnrasbhcc;
}
function towebrnsignmalvsnrasbhSignalBadgtowebrnsObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 46) + 2;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 235) << 4) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhSignalBadgtowebrnsObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 3;
  return (xtowebrnsignmalvsnrasbh ^ 243) & 42719;
}
