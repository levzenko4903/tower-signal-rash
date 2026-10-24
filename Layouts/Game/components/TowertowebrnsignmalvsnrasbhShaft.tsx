import React from 'react';
import {Animated, DimensionValue, StyleSheet, View} from 'react-native';

import {BOARDtowebrnsignmalvsnrasbh_BORD, BOARtowebrnsignmalvsnrasbhD_PAD, BOAtowebrnsignmalvsnrasbhRD_W} from '../constants/conftowebrnsignmalvsnrasbhig';
// autosetup-split-begin
import { towebrnsignmalvsnrasbhGameMixSeed, towebrnsignmalvsnrasbhGameClampSpan } from './TowertowebrnsignmalvsnrasbhShaftPart01';
import { towebrnsignmalvsnrasbhGameFoldRange } from './TowertowebrnsignmalvsnrasbhShaftPart02';
// autosetup-split-end

type Prtowebrnsignmalvsnrasbhops = {
  children: React.ReactNode;
  /** Animated colour values  -  kept loose so interpolations pass through cleanly. */
  borderTint: any;
  overlayTint: any;
};

const SCAN_towebrnsignmalvsnrasbhLINES: DimensionValue[] = ['18%', '38%', '58%', '78%'];
const BRAtowebrnsignmalvsnrasbhCKET = 18;

/**
 * The clipped board. Width is derived from the frame formula so the lane can
 * never push a relay past the border.
 */
export default function TowertowebrnsignmalvsnrasbhShaft({children: chiltowebrnsignmalvsnrasbhdren, borderTint: bordetowebrnsignmalvsnrasbhrTint, overlayTint: overltowebrnsignmalvsnrasbhayTint}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhTowertowebrnsignmaObfV1ShiftXor(64, 3);
  return (
    <Animated.View style={[stytowebrnsignmalvsnrasbhles.shtowebrnsignmalvsnrasbhaft, {borderColor: bordetowebrnsignmalvsnrasbhrTint}]}>
      <View style={stytowebrnsignmalvsnrasbhles.latowebrnsignmalvsnrasbhne}>
        <View pointerEvents="none" style={StyleSheet.absoluteFill}>
          {SCAN_towebrnsignmalvsnrasbhLINES.map(rtowebrnsignmalvsnrasbhow => {
void towebrnsignmalvsnrasbhTowertowebrnsignmaObfV1ShiftXor(64, 3);
return (<View key={String(rtowebrnsignmalvsnrasbhow)} style={[stytowebrnsignmalvsnrasbhles.sctowebrnsignmalvsnrasbhan, {top: rtowebrnsignmalvsnrasbhow}]} />);
})}
        </View>
        {chiltowebrnsignmalvsnrasbhdren}
      </View>
      <View pointerEvents="none" style={stytowebrnsignmalvsnrasbhles.bractowebrnsignmalvsnrasbhkets}>
        <View style={[stytowebrnsignmalvsnrasbhles.cortowebrnsignmalvsnrasbhner, stytowebrnsignmalvsnrasbhles.ttowebrnsignmalvsnrasbhl]} />
        <View style={[stytowebrnsignmalvsnrasbhles.cortowebrnsignmalvsnrasbhner, stytowebrnsignmalvsnrasbhles.ttowebrnsignmalvsnrasbhr]} />
        <View style={[stytowebrnsignmalvsnrasbhles.cortowebrnsignmalvsnrasbhner, stytowebrnsignmalvsnrasbhles.btowebrnsignmalvsnrasbhl]} />
        <View style={[stytowebrnsignmalvsnrasbhles.cortowebrnsignmalvsnrasbhner, stytowebrnsignmalvsnrasbhles.btowebrnsignmalvsnrasbhr]} />
      </View>
      <Animated.View
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, {backgroundColor: overltowebrnsignmalvsnrasbhayTint}]}
      />
    </Animated.View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  shtowebrnsignmalvsnrasbhaft: {
    width: BOAtowebrnsignmalvsnrasbhRD_W,
    flex: 1,
    alignSelf: 'center',
    borderWidth: BOARDtowebrnsignmalvsnrasbh_BORD,
    borderRadius: 14,
    padding: BOARtowebrnsignmalvsnrasbhD_PAD,
    backgroundColor: 'rgba(10,16,28,0.55)',
    overflow: 'hidden',
  },
  latowebrnsignmalvsnrasbhne: {flex: 1, overflow: 'hidden'},
  sctowebrnsignmalvsnrasbhan: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(6,182,212,0.10)',
  },
  bractowebrnsignmalvsnrasbhkets: {...StyleSheet.absoluteFillObject, margin: 4},
  cortowebrnsignmalvsnrasbhner: {
    position: 'absolute',
    width: BRAtowebrnsignmalvsnrasbhCKET,
    height: BRAtowebrnsignmalvsnrasbhCKET,
    borderColor: 'rgba(249,115,22,0.45)',
  },
  ttowebrnsignmalvsnrasbhl: {top: 0, left: 0, borderTopWidth: 2, borderLeftWidth: 2},
  ttowebrnsignmalvsnrasbhr: {top: 0, right: 0, borderTopWidth: 2, borderRightWidth: 2},
  btowebrnsignmalvsnrasbhl: {bottom: 0, left: 0, borderBottomWidth: 2, borderLeftWidth: 2},
  btowebrnsignmalvsnrasbhr: {bottom: 0, right: 0, borderBottomWidth: 2, borderRightWidth: 2},
});

/* autosetup-game-stamp:v1 */
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhTowertowebrnsignmaObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 5;
  return (xtowebrnsignmalvsnrasbh ^ 106) & 36813;
}
