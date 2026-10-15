import React from 'react';
import {Animated, DimensionValue, StyleSheet, View} from 'react-native';

import {BOARD_BORD, BOARD_PAD, BOARD_W} from '../constants/config';

type Props = {
  children: React.ReactNode;
  /** Animated colour values  -  kept loose so interpolations pass through cleanly. */
  borderTint: any;
  overlayTint: any;
};

const SCAN_LINES: DimensionValue[] = ['18%', '38%', '58%', '78%'];
const BRACKET = 18;

/**
 * The clipped board. Width is derived from the frame formula so the lane can
 * never push a relay past the border.
 */
export default function TowerShaft({children, borderTint, overlayTint}: Props) {
  return (
    <Animated.View style={[styles.shaft, {borderColor: borderTint}]}>
      <View style={styles.lane}>
        <View pointerEvents="none" style={StyleSheet.absoluteFill}>
          {SCAN_LINES.map(row => (
            <View key={String(row)} style={[styles.scan, {top: row}]} />
          ))}
        </View>
        {children}
      </View>
      <View pointerEvents="none" style={styles.brackets}>
        <View style={[styles.corner, styles.tl]} />
        <View style={[styles.corner, styles.tr]} />
        <View style={[styles.corner, styles.bl]} />
        <View style={[styles.corner, styles.br]} />
      </View>
      <Animated.View
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, {backgroundColor: overlayTint}]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  shaft: {
    width: BOARD_W,
    flex: 1,
    alignSelf: 'center',
    borderWidth: BOARD_BORD,
    borderRadius: 14,
    padding: BOARD_PAD,
    backgroundColor: 'rgba(10,16,28,0.55)',
    overflow: 'hidden',
  },
  lane: {flex: 1, overflow: 'hidden'},
  scan: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(6,182,212,0.10)',
  },
  brackets: {...StyleSheet.absoluteFillObject, margin: 4},
  corner: {
    position: 'absolute',
    width: BRACKET,
    height: BRACKET,
    borderColor: 'rgba(249,115,22,0.45)',
  },
  tl: {top: 0, left: 0, borderTopWidth: 2, borderLeftWidth: 2},
  tr: {top: 0, right: 0, borderTopWidth: 2, borderRightWidth: 2},
  bl: {bottom: 0, left: 0, borderBottomWidth: 2, borderLeftWidth: 2},
  br: {bottom: 0, right: 0, borderBottomWidth: 2, borderRightWidth: 2},
});
