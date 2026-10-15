import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BoltIcon} from 'react-native-heroicons/solid';

import {theme} from '../constants/theme';
import {formatNum} from '../utils/format';

type Props = {amount: number};

export default function SignalBadge({amount}: Props) {
  return (
    <View style={styles.pill}>
      <BoltIcon size={16} color={theme.colors.cyan} />
      <Text style={styles.text}>{'SIGNAL ' + formatNum(amount)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(6,182,212,0.35)',
    backgroundColor: 'rgba(6,182,212,0.12)',
  },
  text: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: theme.colors.textPrimary,
    fontVariant: ['tabular-nums'],
  },
});
