import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ROtowebrnsignmalvsnrasbhW_H} from '../constants/conftowebrnsignmalvsnrasbhig';
// autosetup-split-begin
import { towebrnsignmalvsnrasbhGameMixSeed, towebrnsignmalvsnrasbhGameFoldRange, towebrnsignmalvsnrasbhGameClampSpan } from './HazardZonetowebrnsignmalvsnrasbhPart01';
// autosetup-split-end

type Prtowebrnsignmalvsnrasbhops = {
  x: number;
  w: number;
  bottom: number;
};

const HATtowebrnsignmalvsnrasbhCHES = [0, 1, 2, 3];

/** Unstable signal band  -  the beam centre must not stop inside it. */
export default function HazardZonetowebrnsignmalvsnrasbh({x: xtowebrnsignmalvsnrasbh, w: wtowebrnsignmalvsnrasbh, bottom: bottowebrnsignmalvsnrasbhtom}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhHazardZonetowebrnsObfV1ClampMod(25, 8);
void towebrnsignmalvsnrasbhHazardZonetowebrnsObfV1ShiftXor(51, 10);
  return (
    <View
      pointerEvents="none"
      style={[stytowebrnsignmalvsnrasbhles.zotowebrnsignmalvsnrasbhne, {left: xtowebrnsignmalvsnrasbh, width: wtowebrnsignmalvsnrasbh, bottom: bottowebrnsignmalvsnrasbhtom}]}>
      {HATtowebrnsignmalvsnrasbhCHES.map(itowebrnsignmalvsnrasbh => {
void towebrnsignmalvsnrasbhHazardZonetowebrnsObfV1ClampMod(25, 8);
void towebrnsignmalvsnrasbhHazardZonetowebrnsObfV1ShiftXor(51, 10);
return (<View key={itowebrnsignmalvsnrasbh} style={[stytowebrnsignmalvsnrasbhles.hatowebrnsignmalvsnrasbhtch, {left: 6 + itowebrnsignmalvsnrasbh * (wtowebrnsignmalvsnrasbh / 4)}]} />);
})}
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  zotowebrnsignmalvsnrasbhne: {
    position: 'absolute',
    height: ROtowebrnsignmalvsnrasbhW_H - 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(249,115,22,0.55)',
    backgroundColor: 'rgba(249,115,22,0.16)',
    overflow: 'hidden',
  },
  hatowebrnsignmalvsnrasbhtch: {
    position: 'absolute',
    top: -8,
    width: 2,
    height: ROtowebrnsignmalvsnrasbhW_H + 14,
    backgroundColor: 'rgba(249,115,22,0.35)',
    transform: [{rotate: '28deg'}],
  },
});

/* autosetup-game-stamp:v1 */
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhHazardZonetowebrnsObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 37) + 6;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 93) << 1) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhHazardZonetowebrnsObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 1;
  return (xtowebrnsignmalvsnrasbh ^ 43) & 51703;
}
