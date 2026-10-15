import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ROW_H} from '../constants/config';

type Props = {
  translateX: Animated.Value;
  w: number;
  bottom: number;
  colors: string[];
  accent: string;
  glow: number;
};

export default function MovingBeam({
  translateX,
  w,
  bottom,
  colors,
  accent,
  glow,
}: Props) {
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.beam,
        {
          width: w,
          bottom: bottom,
          shadowColor: accent,
          shadowRadius: glow,
          transform: [{translateX}],
        },
      ]}>
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  beam: {
    position: 'absolute',
    left: 0,
    height: ROW_H - 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.35)',
    overflow: 'hidden',
    shadowOpacity: 0.6,
    shadowOffset: {width: 0, height: 0},
    elevation: 10,
  },
});
