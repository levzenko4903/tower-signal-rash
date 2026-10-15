import React, {useCallback, useRef} from 'react';
import {Animated, Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {theme} from '../constants/theme';
import {IconComponent} from './iconTypes';

type Props = {
  Icon: IconComponent;
  onPress: () => void;
  a11yLabel: string;
  tint?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

/** 44x44 icon-only control. Explicit size, never intrinsic. */
export default function IconButton({
  Icon,
  onPress,
  a11yLabel,
  tint = theme.colors.textSecondary,
  size = 44,
  style,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.92,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const pressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      hitSlop={HIT}
      accessibilityRole="button"
      accessibilityLabel={a11yLabel}
      style={[styles.press, {width: size, height: size}, style]}>
      <Animated.View
        style={[
          styles.layer,
          {width: size, height: size},
          {transform: [{scale}]},
        ]}>
        <Icon size={Math.round(size * 0.5)} color={tint} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {width: 44, height: 44},
  layer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(249,250,251,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.12)',
  },
});
