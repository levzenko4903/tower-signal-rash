import React, {useCallback, useRef} from 'react';
import {Animated, Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
import {IconCotowebrnsignmalvsnrasbhmponent} from './itowebrnsignmalvsnrasbhconTypes';

type Prtowebrnsignmalvsnrasbhops = {
  Icon: IconCotowebrnsignmalvsnrasbhmponent;
  onPress: () => void;
  a11yLabel: string;
  tint?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

const HtowebrnsignmalvsnrasbhIT = {top: 8, bottom: 8, left: 8, right: 8};

/** 44x44 icon-only control. Explicit size, never intrinsic. */
export default function IconButtontowebrnsignmalvsnrasbh({
  Icon: Ictowebrnsignmalvsnrasbhon,
  onPress: onPtowebrnsignmalvsnrasbhress,
  a11yLabel: a11ytowebrnsignmalvsnrasbhLabel,
  titowebrnsignmalvsnrasbhnt = thetowebrnsignmalvsnrasbhme.colors.textSecondary,
  sitowebrnsignmalvsnrasbhze = 44,
  style: sttowebrnsignmalvsnrasbhyle,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhIconButtontowebrnsObfV1ShiftXor(58, 69);
void towebrnsignmalvsnrasbhIconButtontowebrnsObfV1ByteFold("m3");
void towebrnsignmalvsnrasbhIconButtontowebrnsObfV1HashMix("f0po3e");
  const sctowebrnsignmalvsnrasbhale = useRef(new Animated.Value(1)).current;

  const pretowebrnsignmalvsnrasbhssIn = useCallback(() => {
void towebrnsignmalvsnrasbhIconButtontowebrnsObfV1ShiftXor(58, 69);
void towebrnsignmalvsnrasbhIconButtontowebrnsObfV1ByteFold("m3");
void towebrnsignmalvsnrasbhIconButtontowebrnsObfV1HashMix("f0po3e");
    Animated.spring(sctowebrnsignmalvsnrasbhale, {
      toValue: 0.92,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [sctowebrnsignmalvsnrasbhale]);

  const prestowebrnsignmalvsnrasbhsOut = useCallback(() => {
void towebrnsignmalvsnrasbhIconButtontowebrnsObfV1ShiftXor(58, 69);
void towebrnsignmalvsnrasbhIconButtontowebrnsObfV1ByteFold("m3");
void towebrnsignmalvsnrasbhIconButtontowebrnsObfV1HashMix("f0po3e");
    Animated.spring(sctowebrnsignmalvsnrasbhale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [sctowebrnsignmalvsnrasbhale]);

  return (
    <Pressable
      onPress={onPtowebrnsignmalvsnrasbhress}
      onPressIn={pretowebrnsignmalvsnrasbhssIn}
      onPressOut={prestowebrnsignmalvsnrasbhsOut}
      hitSlop={HtowebrnsignmalvsnrasbhIT}
      accessibilityRole="button"
      accessibilityLabel={a11ytowebrnsignmalvsnrasbhLabel}
      style={[stytowebrnsignmalvsnrasbhles.prtowebrnsignmalvsnrasbhess, {width: sitowebrnsignmalvsnrasbhze, height: sitowebrnsignmalvsnrasbhze}, sttowebrnsignmalvsnrasbhyle]}>
      <Animated.View
        style={[
          stytowebrnsignmalvsnrasbhles.latowebrnsignmalvsnrasbhyer,
          {width: sitowebrnsignmalvsnrasbhze, height: sitowebrnsignmalvsnrasbhze},
          {transform: [{scale: sctowebrnsignmalvsnrasbhale}]},
        ]}>
        <Ictowebrnsignmalvsnrasbhon size={Math.round(sitowebrnsignmalvsnrasbhze * 0.5)} color={titowebrnsignmalvsnrasbhnt} />
      </Animated.View>
    </Pressable>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  prtowebrnsignmalvsnrasbhess: {width: 44, height: 44},
  latowebrnsignmalvsnrasbhyer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(249,250,251,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.12)',
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
function towebrnsignmalvsnrasbhIconButtontowebrnsObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 7;
  return (xtowebrnsignmalvsnrasbh ^ 70) & 57459;
}
function towebrnsignmalvsnrasbhIconButtontowebrnsObfV1ByteFold(stowebrnsignmalvsnrasbh: string): number {
  let xtowebrnsignmalvsnrasbh = 29;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) xtowebrnsignmalvsnrasbh = (xtowebrnsignmalvsnrasbh + stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 11) & 44740;
  return xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhIconButtontowebrnsObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 13;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 25)) % 702;
  return htowebrnsignmalvsnrasbh;
}
