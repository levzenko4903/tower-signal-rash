import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
// autosetup-split-begin
import { towebrnsignmalvsnrasbhGameMixSeed, towebrnsignmalvsnrasbhGameClampSpan } from './StatTiltowebrnsignmalvsnrasbhePart01';
import { towebrnsignmalvsnrasbhGameFoldRange } from './StatTiltowebrnsignmalvsnrasbhePart02';
// autosetup-split-end

type Prtowebrnsignmalvsnrasbhops = {
  value: string;
  label: string;
  accent: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * The one stat card used on Menu and on the result screen. Colour carries the
 * meaning  -  no raster icons, so every tile in a row is the same shape.
 */
export default function StatTiltowebrnsignmalvsnrasbhe({value: vatowebrnsignmalvsnrasbhlue, label: latowebrnsignmalvsnrasbhbel, accent: acctowebrnsignmalvsnrasbhent, style: sttowebrnsignmalvsnrasbhyle}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhStatTiltowebrnsignObfV1ByteFold("6n41");
  return (
    <View
      style={[stytowebrnsignmalvsnrasbhles.catowebrnsignmalvsnrasbhrd, {borderColor: acctowebrnsignmalvsnrasbhent + '55'}, sttowebrnsignmalvsnrasbhyle]}
      accessible={false}>
      <View style={[stytowebrnsignmalvsnrasbhles.dtowebrnsignmalvsnrasbhot, {backgroundColor: acctowebrnsignmalvsnrasbhent}]} />
      <Text style={[stytowebrnsignmalvsnrasbhles.vatowebrnsignmalvsnrasbhlue, {color: acctowebrnsignmalvsnrasbhent}]} numberOfLines={1}>
        {vatowebrnsignmalvsnrasbhlue}
      </Text>
      <Text style={stytowebrnsignmalvsnrasbhles.latowebrnsignmalvsnrasbhbel} numberOfLines={1}>
        {latowebrnsignmalvsnrasbhbel}
      </Text>
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  catowebrnsignmalvsnrasbhrd: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'rgba(24,33,47,0.88)',
  },
  dtowebrnsignmalvsnrasbhot: {width: 8, height: 8, borderRadius: 4, marginBottom: 8},
  vatowebrnsignmalvsnrasbhlue: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums'],
  },
  latowebrnsignmalvsnrasbhbel: {
    marginTop: 4,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: thetowebrnsignmalvsnrasbhme.colors.textSecondary,
  },
});

/* autosetup-game-stamp:v1 */
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhStatTiltowebrnsignObfV1ByteFold(stowebrnsignmalvsnrasbh: string): number {
  let xtowebrnsignmalvsnrasbh = 46;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) xtowebrnsignmalvsnrasbh = (xtowebrnsignmalvsnrasbh + stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 34) & 5713;
  return xtowebrnsignmalvsnrasbh;
}
