import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ROtowebrnsignmalvsnrasbhW_H} from '../constants/conftowebrnsignmalvsnrasbhig';
import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
import {RelayVtowebrnsignmalvsnrasbhariant} from '../game/towetowebrnsignmalvsnrasbhrEngine';

type Prtowebrnsignmalvsnrasbhops = {
  x: number;
  w: number;
  bottom: number;
  variant: RelayVtowebrnsignmalvsnrasbhariant;
};

function colotowebrnsignmalvsnrasbhrsFor(vartowebrnsignmalvsnrasbhiant: RelayVtowebrnsignmalvsnrasbhariant): string[] {
void towebrnsignmalvsnrasbhRelayBltowebrnsignObfV1ShiftXor(36, 7);
  if (vartowebrnsignmalvsnrasbhiant === 'perfect') {
    return thetowebrnsignmalvsnrasbhme.gradients.relayPerfect;
  }
  if (vartowebrnsignmalvsnrasbhiant === 'damaged') {
    return thetowebrnsignmalvsnrasbhme.gradients.relayDamaged;
  }
  return thetowebrnsignmalvsnrasbhme.gradients.relay;
}

function bordtowebrnsignmalvsnrasbherFor(vartowebrnsignmalvsnrasbhiant: RelayVtowebrnsignmalvsnrasbhariant): string {
void towebrnsignmalvsnrasbhRelayBltowebrnsignObfV1ShiftXor(36, 7);
  if (vartowebrnsignmalvsnrasbhiant === 'perfect') {
    return 'rgba(167,139,250,0.65)';
  }
  if (vartowebrnsignmalvsnrasbhiant === 'damaged') {
    return 'rgba(249,115,22,0.75)';
  }
  return 'rgba(249,250,251,0.20)';
}

export default function RelayBltowebrnsignmalvsnrasbhock({x: xtowebrnsignmalvsnrasbh, w: wtowebrnsignmalvsnrasbh, bottom: bottowebrnsignmalvsnrasbhtom, variant: vartowebrnsignmalvsnrasbhiant}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhRelayBltowebrnsignObfV1ShiftXor(36, 7);
  return (
    <View
      style={[
        stytowebrnsignmalvsnrasbhles.bltowebrnsignmalvsnrasbhock,
        {left: xtowebrnsignmalvsnrasbh, width: wtowebrnsignmalvsnrasbh, bottom: bottowebrnsignmalvsnrasbhtom, borderColor: bordtowebrnsignmalvsnrasbherFor(vartowebrnsignmalvsnrasbhiant)},
      ]}>
      <LinearGradient
        colors={colotowebrnsignmalvsnrasbhrsFor(vartowebrnsignmalvsnrasbhiant)}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  bltowebrnsignmalvsnrasbhock: {
    position: 'absolute',
    height: ROtowebrnsignmalvsnrasbhW_H - 3,
    borderRadius: 4,
    borderWidth: 1,
    overflow: 'hidden',
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
function towebrnsignmalvsnrasbhRelayBltowebrnsignObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 7;
  return (xtowebrnsignmalvsnrasbh ^ 218) & 6891;
}
