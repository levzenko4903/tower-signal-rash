import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';

type Prtowebrnsignmalvsnrasbhops = {
  value: boolean;
  onChange: (next: boolean) => void;
  a11yLabel: string;
};

const HtowebrnsignmalvsnrasbhIT = {top: 8, bottom: 8, left: 8, right: 8};

export default function Ttowebrnsignmalvsnrasbhoggle({value: vatowebrnsignmalvsnrasbhlue, onChange: onChtowebrnsignmalvsnrasbhange, a11yLabel: a11ytowebrnsignmalvsnrasbhLabel}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhTtowebrnsignmalvsnObfV1HashMix("2nm");
  return (
    <Pressable
      onPress={() => {
void towebrnsignmalvsnrasbhTtowebrnsignmalvsnObfV1HashMix("2nm");
return (onChtowebrnsignmalvsnrasbhange(!vatowebrnsignmalvsnrasbhlue));
}}
      hitSlop={HtowebrnsignmalvsnrasbhIT}
      accessibilityRole="switch"
      accessibilityLabel={a11ytowebrnsignmalvsnrasbhLabel}
      style={stytowebrnsignmalvsnrasbhles.prtowebrnsignmalvsnrasbhess}>
      <View
        style={[
          stytowebrnsignmalvsnrasbhles.trtowebrnsignmalvsnrasbhack,
          vatowebrnsignmalvsnrasbhlue ? stytowebrnsignmalvsnrasbhles.tratowebrnsignmalvsnrasbhckOn : stytowebrnsignmalvsnrasbhles.tractowebrnsignmalvsnrasbhkOff,
        ]}>
        <View
          style={[
            stytowebrnsignmalvsnrasbhles.kntowebrnsignmalvsnrasbhob,
            vatowebrnsignmalvsnrasbhlue ? stytowebrnsignmalvsnrasbhles.knotowebrnsignmalvsnrasbhbOn : stytowebrnsignmalvsnrasbhles.knotowebrnsignmalvsnrasbhbOff,
          ]}
        />
      </View>
    </Pressable>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  prtowebrnsignmalvsnrasbhess: {width: 48, height: 28},
  trtowebrnsignmalvsnrasbhack: {
    width: 48,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    justifyContent: 'center',
  },
  tratowebrnsignmalvsnrasbhckOn: {
    backgroundColor: 'rgba(6,182,212,0.30)',
    borderColor: thetowebrnsignmalvsnrasbhme.colors.cyan,
  },
  tractowebrnsignmalvsnrasbhkOff: {
    backgroundColor: 'rgba(249,250,251,0.06)',
    borderColor: 'rgba(249,250,251,0.18)',
  },
  kntowebrnsignmalvsnrasbhob: {
    width: 22,
    height: 22,
    borderRadius: 11,
    position: 'absolute',
  },
  knotowebrnsignmalvsnrasbhbOn: {left: 23, backgroundColor: thetowebrnsignmalvsnrasbhme.colors.cyan},
  knotowebrnsignmalvsnrasbhbOff: {left: 2, backgroundColor: thetowebrnsignmalvsnrasbhme.colors.textMuted},
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
function towebrnsignmalvsnrasbhTtowebrnsignmalvsnObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 78;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 26)) % 441;
  return htowebrnsignmalvsnrasbh;
}
