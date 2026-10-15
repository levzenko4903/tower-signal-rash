import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {theme} from '../constants/theme';

type Props = {
  title: string;
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

/** One header for every screen  -  slots change, the shell never does. */
export default function ScreenHeader({
  title,
  leftSlot,
  centerSlot,
  rightSlot,
}: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.side}>{leftSlot}</View>
      <View style={styles.middle}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {centerSlot}
      </View>
      <View style={[styles.side, styles.sideRight]}>{rightSlot}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 44,
    height: 116,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: 'rgba(10,16,28,0.62)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(6,182,212,0.20)',
  },
  side: {width: 80, justifyContent: 'center', alignItems: 'flex-start'},
  sideRight: {alignItems: 'flex-end'},
  middle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 2,
    color: theme.colors.textPrimary,
  },
});
