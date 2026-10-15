import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

import {theme} from '../constants/theme';

type Props = {
  value: string;
  label: string;
  accent: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * The one stat card used on Menu and on the result screen. Colour carries the
 * meaning  -  no raster icons, so every tile in a row is the same shape.
 */
export default function StatTile({value, label, accent, style}: Props) {
  return (
    <View
      style={[styles.card, {borderColor: accent + '55'}, style]}
      accessible={false}>
      <View style={[styles.dot, {backgroundColor: accent}]} />
      <Text style={[styles.value, {color: accent}]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'rgba(24,33,47,0.88)',
  },
  dot: {width: 8, height: 8, borderRadius: 4, marginBottom: 8},
  value: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums'],
  },
  label: {
    marginTop: 4,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: theme.colors.textSecondary,
  },
});
