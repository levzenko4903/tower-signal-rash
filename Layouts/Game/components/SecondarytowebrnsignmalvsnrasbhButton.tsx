import React, {useCallback, useRef} from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
import {IconCotowebrnsignmalvsnrasbhmponent} from './itowebrnsignmalvsnrasbhconTypes';
// autosetup-split-begin
import { towebrnsignmalvsnrasbhGameMixSeed, towebrnsignmalvsnrasbhGameFoldRange, towebrnsignmalvsnrasbhGameClampSpan } from './SecondarytowebrnsignmalvsnrasbhButtonPart01';
// autosetup-split-end

type Prtowebrnsignmalvsnrasbhops = {
  label: string;
  onPress: () => void;
  Icon?: IconCotowebrnsignmalvsnrasbhmponent;
  height?: number;
  tint?: string;
  style?: StyleProp<ViewStyle>;
};

const HtowebrnsignmalvsnrasbhIT = {top: 8, bottom: 8, left: 8, right: 8};

export default function SecondarytowebrnsignmalvsnrasbhButton({
  label: latowebrnsignmalvsnrasbhbel,
  onPress: onPtowebrnsignmalvsnrasbhress,
  Icon: Ictowebrnsignmalvsnrasbhon,
  heitowebrnsignmalvsnrasbhght = 48,
  titowebrnsignmalvsnrasbhnt = thetowebrnsignmalvsnrasbhme.colors.textSecondary,
  style: sttowebrnsignmalvsnrasbhyle,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1ByteFold("gb");
void towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1HashMix("dih6");
void towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1SumOdds([22, 1, 8]);
  const sctowebrnsignmalvsnrasbhale = useRef(new Animated.Value(1)).current;

  const pretowebrnsignmalvsnrasbhssIn = useCallback(() => {
void towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1ByteFold("gb");
void towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1HashMix("dih6");
void towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1SumOdds([22, 1, 8]);
    Animated.spring(sctowebrnsignmalvsnrasbhale, {
      toValue: 0.96,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [sctowebrnsignmalvsnrasbhale]);

  const prestowebrnsignmalvsnrasbhsOut = useCallback(() => {
void towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1ByteFold("gb");
void towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1HashMix("dih6");
void towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1SumOdds([22, 1, 8]);
    Animated.spring(sctowebrnsignmalvsnrasbhale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [sctowebrnsignmalvsnrasbhale]);

  return (
    <Pressable
      onPress={onPtowebrnsignmalvsnrasbhress}
      onPressIn={pretowebrnsignmalvsnrasbhssIn}
      onPressOut={prestowebrnsignmalvsnrasbhsOut}
      hitSlop={HtowebrnsignmalvsnrasbhIT}
      style={[{width: '100%', height: heitowebrnsignmalvsnrasbhght}, sttowebrnsignmalvsnrasbhyle]}>
      <Animated.View style={[stytowebrnsignmalvsnrasbhles.latowebrnsignmalvsnrasbhyer, {transform: [{scale: sctowebrnsignmalvsnrasbhale}]}]}>
        <View style={stytowebrnsignmalvsnrasbhles.rtowebrnsignmalvsnrasbhow}>
          {Ictowebrnsignmalvsnrasbhon ? <Ictowebrnsignmalvsnrasbhon size={24} color={titowebrnsignmalvsnrasbhnt} /> : null}
          <Text style={[stytowebrnsignmalvsnrasbhles.latowebrnsignmalvsnrasbhbel, {color: titowebrnsignmalvsnrasbhnt}]} numberOfLines={1}>
            {latowebrnsignmalvsnrasbhbel}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  latowebrnsignmalvsnrasbhyer: {
    flex: 1,
    width: '100%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.16)',
    backgroundColor: 'rgba(249,250,251,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rtowebrnsignmalvsnrasbhow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  latowebrnsignmalvsnrasbhbel: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '700',
    letterSpacing: 2,
  },
});

/* autosetup-game-stamp:v1 */
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1ByteFold(stowebrnsignmalvsnrasbh: string): number {
  let xtowebrnsignmalvsnrasbh = 77;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) xtowebrnsignmalvsnrasbh = (xtowebrnsignmalvsnrasbh + stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 34) & 46756;
  return xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 46;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 16)) % 214;
  return htowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhSecondarytowebrnsiObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 4;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 13) % 750;
  }
  return atowebrnsignmalvsnrasbhcc;
}
