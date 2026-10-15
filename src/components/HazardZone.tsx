import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ROW_H} from '../constants/config';

type Props = {
  x: number;
  w: number;
  bottom: number;
};

const HATCHES = [0, 1, 2, 3];

/** Unstable signal band  -  the beam centre must not stop inside it. */
export default function HazardZone({x, w, bottom}: Props) {
  return (
    <View
      pointerEvents="none"
      style={[styles.zone, {left: x, width: w, bottom: bottom}]}>
      {HATCHES.map(i => (
        <View key={i} style={[styles.hatch, {left: 6 + i * (w / 4)}]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  zone: {
    position: 'absolute',
    height: ROW_H - 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(249,115,22,0.55)',
    backgroundColor: 'rgba(249,115,22,0.16)',
    overflow: 'hidden',
  },
  hatch: {
    position: 'absolute',
    top: -8,
    width: 2,
    height: ROW_H + 14,
    backgroundColor: 'rgba(249,115,22,0.35)',
    transform: [{rotate: '28deg'}],
  },
});
