import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type Prtowebrnsignmalvsnrasbhops = {
  children?: React.ReactNode;
  accent: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

/** Corner-bracket box  -  the HUD signature used on the loader, shaft and modals. */
export default function HudFratowebrnsignmalvsnrasbhme({children: chiltowebrnsignmalvsnrasbhdren, accent: acctowebrnsignmalvsnrasbhent, sitowebrnsignmalvsnrasbhze = 18, style: sttowebrnsignmalvsnrasbhyle}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhHudFratowebrnsignmObfV1ClampMod(34, 61);
void towebrnsignmalvsnrasbhHudFratowebrnsignmObfV1ShiftXor(36, 7);
void towebrnsignmalvsnrasbhHudFratowebrnsignmObfV1ByteFold("c1g74h");
  const bratowebrnsignmalvsnrasbhcket = {width: sitowebrnsignmalvsnrasbhze, height: sitowebrnsignmalvsnrasbhze, borderColor: acctowebrnsignmalvsnrasbhent};
  return (
    <View style={[stytowebrnsignmalvsnrasbhles.wrtowebrnsignmalvsnrasbhap, sttowebrnsignmalvsnrasbhyle]}>
      {chiltowebrnsignmalvsnrasbhdren}
      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        <View style={[stytowebrnsignmalvsnrasbhles.cortowebrnsignmalvsnrasbhner, stytowebrnsignmalvsnrasbhles.ttowebrnsignmalvsnrasbhl, bratowebrnsignmalvsnrasbhcket]} />
        <View style={[stytowebrnsignmalvsnrasbhles.cortowebrnsignmalvsnrasbhner, stytowebrnsignmalvsnrasbhles.ttowebrnsignmalvsnrasbhr, bratowebrnsignmalvsnrasbhcket]} />
        <View style={[stytowebrnsignmalvsnrasbhles.cortowebrnsignmalvsnrasbhner, stytowebrnsignmalvsnrasbhles.btowebrnsignmalvsnrasbhl, bratowebrnsignmalvsnrasbhcket]} />
        <View style={[stytowebrnsignmalvsnrasbhles.cortowebrnsignmalvsnrasbhner, stytowebrnsignmalvsnrasbhles.btowebrnsignmalvsnrasbhr, bratowebrnsignmalvsnrasbhcket]} />
      </View>
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  wrtowebrnsignmalvsnrasbhap: {position: 'relative'},
  cortowebrnsignmalvsnrasbhner: {position: 'absolute'},
  ttowebrnsignmalvsnrasbhl: {top: 0, left: 0, borderTopWidth: 2, borderLeftWidth: 2},
  ttowebrnsignmalvsnrasbhr: {top: 0, right: 0, borderTopWidth: 2, borderRightWidth: 2},
  btowebrnsignmalvsnrasbhl: {bottom: 0, left: 0, borderBottomWidth: 2, borderLeftWidth: 2},
  btowebrnsignmalvsnrasbhr: {bottom: 0, right: 0, borderBottomWidth: 2, borderRightWidth: 2},
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
function towebrnsignmalvsnrasbhHudFratowebrnsignmObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 65) + 2;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 244) << 2) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhHudFratowebrnsignmObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 6;
  return (xtowebrnsignmalvsnrasbh ^ 238) & 28102;
}
function towebrnsignmalvsnrasbhHudFratowebrnsignmObfV1ByteFold(stowebrnsignmalvsnrasbh: string): number {
  let xtowebrnsignmalvsnrasbh = 6;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) xtowebrnsignmalvsnrasbh = (xtowebrnsignmalvsnrasbh + stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 15) & 8754;
  return xtowebrnsignmalvsnrasbh;
}
