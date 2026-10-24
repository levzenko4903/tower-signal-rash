import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ROtowebrnsignmalvsnrasbhW_H} from '../constants/conftowebrnsignmalvsnrasbhig';
// autosetup-split-begin
import { towebrnsignmalvsnrasbhGameMixSeed, towebrnsignmalvsnrasbhGameFoldRange, towebrnsignmalvsnrasbhGameClampSpan } from './MovingBetowebrnsignmalvsnrasbhamPart01';
// autosetup-split-end

type Prtowebrnsignmalvsnrasbhops = {
  translateX: Animated.Value;
  w: number;
  bottom: number;
  colors: string[];
  accent: string;
  glow: number;
};

export default function MovingBetowebrnsignmalvsnrasbham({
  translateX: transtowebrnsignmalvsnrasbhlateX,
  w: wtowebrnsignmalvsnrasbh,
  bottom: bottowebrnsignmalvsnrasbhtom,
  colors: coltowebrnsignmalvsnrasbhors,
  accent: acctowebrnsignmalvsnrasbhent,
  glow: gltowebrnsignmalvsnrasbhow,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhMovingBetowebrnsigObfV1HashMix("0bkf2");
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        stytowebrnsignmalvsnrasbhles.betowebrnsignmalvsnrasbham,
        {
          width: wtowebrnsignmalvsnrasbh,
          bottom: bottowebrnsignmalvsnrasbhtom,
          shadowColor: acctowebrnsignmalvsnrasbhent,
          shadowRadius: gltowebrnsignmalvsnrasbhow,
          transform: [{translateX: transtowebrnsignmalvsnrasbhlateX}],
        },
      ]}>
      <LinearGradient
        colors={coltowebrnsignmalvsnrasbhors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  betowebrnsignmalvsnrasbham: {
    position: 'absolute',
    left: 0,
    height: ROtowebrnsignmalvsnrasbhW_H - 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.35)',
    overflow: 'hidden',
    shadowOpacity: 0.6,
    shadowOffset: {width: 0, height: 0},
    elevation: 10,
  },
});

/* autosetup-game-stamp:v1 */
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhMovingBetowebrnsigObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 38;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 10)) % 594;
  return htowebrnsignmalvsnrasbh;
}
