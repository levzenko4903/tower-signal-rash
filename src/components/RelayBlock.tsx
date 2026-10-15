import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ROW_H} from '../constants/config';
import {theme} from '../constants/theme';
import {RelayVariant} from '../game/towerEngine';

type Props = {
  x: number;
  w: number;
  bottom: number;
  variant: RelayVariant;
};

function colorsFor(variant: RelayVariant): string[] {
  if (variant === 'perfect') {
    return theme.gradients.relayPerfect;
  }
  if (variant === 'damaged') {
    return theme.gradients.relayDamaged;
  }
  return theme.gradients.relay;
}

function borderFor(variant: RelayVariant): string {
  if (variant === 'perfect') {
    return 'rgba(167,139,250,0.65)';
  }
  if (variant === 'damaged') {
    return 'rgba(249,115,22,0.75)';
  }
  return 'rgba(249,250,251,0.20)';
}

export default function RelayBlock({x, w, bottom, variant}: Props) {
  return (
    <View
      style={[
        styles.block,
        {left: x, width: w, bottom: bottom, borderColor: borderFor(variant)},
      ]}>
      <LinearGradient
        colors={colorsFor(variant)}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    position: 'absolute',
    height: ROW_H - 3,
    borderRadius: 4,
    borderWidth: 1,
    overflow: 'hidden',
  },
});
