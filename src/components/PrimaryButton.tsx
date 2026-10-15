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

import {theme} from '../constants/theme';
import {IconComponent} from './iconTypes';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: IconComponent;
  height?: number;
  colors?: string[];
  accent?: string;
  style?: StyleProp<ViewStyle>;
};

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

/**
 * Press feedback runs the only way that survives Android release on this
 * stack: the Pressable is the parent, the animated layer is its child.
 */
export default function PrimaryButton({
  label,
  onPress,
  Icon,
  height = 56,
  colors,
  accent = theme.colors.cyan,
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
        <LinearGradient
          colors={colors ? colors : theme.gradients.cta}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.grad, {shadowColor: accent}]}>
          <View style={styles.row}>
            {Icon ? <Icon size={24} color={theme.colors.textPrimary} /> : null}
            <Text style={styles.label} numberOfLines={1}>
              {label}
            </Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  layer: {flex: 1, width: '100%'},
  grad: {
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '900',
    letterSpacing: 2,
    color: theme.colors.textPrimary,
  },
});
