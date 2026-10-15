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

import {theme} from '../constants/theme';
import {IconComponent} from './iconTypes';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: IconComponent;
  height?: number;
  tint?: string;
  style?: StyleProp<ViewStyle>;
};

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

export default function SecondaryButton({
  label,
  onPress,
  Icon,
  height = 48,
  tint = theme.colors.textSecondary,
  style,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.96,
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
      style={[{width: '100%', height: height}, style]}>
      <Animated.View style={[styles.layer, {transform: [{scale}]}]}>
        <View style={styles.row}>
          {Icon ? <Icon size={24} color={tint} /> : null}
          <Text style={[styles.label, {color: tint}]} numberOfLines={1}>
            {label}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  layer: {
    flex: 1,
    width: '100%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.16)',
    backgroundColor: 'rgba(249,250,251,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '700',
    letterSpacing: 2,
  },
});
