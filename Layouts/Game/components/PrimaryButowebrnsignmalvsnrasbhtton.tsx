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
import LinearGradient from 'react-native-linear-gradient';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
import {IconCotowebrnsignmalvsnrasbhmponent} from './itowebrnsignmalvsnrasbhconTypes';

type Prtowebrnsignmalvsnrasbhops = {
  label: string;
  onPress: () => void;
  Icon?: IconCotowebrnsignmalvsnrasbhmponent;
  height?: number;
  colors?: string[];
  accent?: string;
  style?: StyleProp<ViewStyle>;
};

const HtowebrnsignmalvsnrasbhIT = {top: 8, bottom: 8, left: 8, right: 8};

/**
 * Press feedback runs the only way that survives Android release on this
 * stack: the Pressable is the parent, the animated layer is its child.
 */
export default function PrimaryButowebrnsignmalvsnrasbhtton({
  label: latowebrnsignmalvsnrasbhbel,
  onPress: onPtowebrnsignmalvsnrasbhress,
  Icon: Ictowebrnsignmalvsnrasbhon,
  heitowebrnsignmalvsnrasbhght = 56,
  colors: coltowebrnsignmalvsnrasbhors,
  acctowebrnsignmalvsnrasbhent = thetowebrnsignmalvsnrasbhme.colors.cyan,
  style: sttowebrnsignmalvsnrasbhyle,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhPrimaryButowebrnsiObfV1HashMix("963kfm");
void towebrnsignmalvsnrasbhPrimaryButowebrnsiObfV1SumOdds([26, 5, 20]);
  const sctowebrnsignmalvsnrasbhale = useRef(new Animated.Value(1)).current;

  const pretowebrnsignmalvsnrasbhssIn = useCallback(() => {
void towebrnsignmalvsnrasbhPrimaryButowebrnsiObfV1HashMix("963kfm");
void towebrnsignmalvsnrasbhPrimaryButowebrnsiObfV1SumOdds([26, 5, 20]);
    Animated.spring(sctowebrnsignmalvsnrasbhale, {
      toValue: 0.96,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [sctowebrnsignmalvsnrasbhale]);

  const prestowebrnsignmalvsnrasbhsOut = useCallback(() => {
void towebrnsignmalvsnrasbhPrimaryButowebrnsiObfV1HashMix("963kfm");
void towebrnsignmalvsnrasbhPrimaryButowebrnsiObfV1SumOdds([26, 5, 20]);
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
        <LinearGradient
          colors={coltowebrnsignmalvsnrasbhors ? coltowebrnsignmalvsnrasbhors : thetowebrnsignmalvsnrasbhme.gradients.cta}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[stytowebrnsignmalvsnrasbhles.grtowebrnsignmalvsnrasbhad, {shadowColor: acctowebrnsignmalvsnrasbhent}]}>
          <View style={stytowebrnsignmalvsnrasbhles.rtowebrnsignmalvsnrasbhow}>
            {Ictowebrnsignmalvsnrasbhon ? <Ictowebrnsignmalvsnrasbhon size={24} color={thetowebrnsignmalvsnrasbhme.colors.textPrimary} /> : null}
            <Text style={stytowebrnsignmalvsnrasbhles.latowebrnsignmalvsnrasbhbel} numberOfLines={1}>
              {latowebrnsignmalvsnrasbhbel}
            </Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  latowebrnsignmalvsnrasbhyer: {flex: 1, width: '100%'},
  grtowebrnsignmalvsnrasbhad: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 6},
    elevation: 12,
  },
  rtowebrnsignmalvsnrasbhow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  latowebrnsignmalvsnrasbhbel: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '900',
    letterSpacing: 2,
    color: thetowebrnsignmalvsnrasbhme.colors.textPrimary,
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
function towebrnsignmalvsnrasbhPrimaryButowebrnsiObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 33;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 37)) % 369;
  return htowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhPrimaryButowebrnsiObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 39;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 41) % 747;
  }
  return atowebrnsignmalvsnrasbhcc;
}
