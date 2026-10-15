import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LockClosedIcon, PauseIcon} from 'react-native-heroicons/solid';

import {theme} from '../constants/theme';

import IconButton from './IconButton';
import PrimaryButton from './PrimaryButton';

type Props = {
  chain: number;
  pulse: number;
  beamW: number;
  onLock: () => void;
  onPause: () => void;
};

/** Floating action bar  -  sits below the board and never covers the lane. */
export default function ControlBar({
  chain,
  pulse,
  beamW,
  onLock,
  onPause,
}: Props) {
  return (
    <View style={styles.bar}>
      <View style={styles.strip}>
        <Text style={[styles.stat, styles.statChain]}>
          {'CHAIN x' + chain}
        </Text>
        <Text style={[styles.stat, styles.statPulse]}>{'PULSE ' + pulse}</Text>
        <Text style={[styles.stat, styles.statWidth]}>{'WIDTH ' + beamW}</Text>
      </View>

      <View style={styles.actions}>
        <IconButton
          Icon={PauseIcon}
          onPress={onPause}
          a11yLabel="Pause the run"
          size={56}
          tint={theme.colors.textSecondary}
        />
        <View style={styles.lockSlot}>
          <PrimaryButton label="LOCK BEAM" Icon={LockClosedIcon} height={56} onPress={onLock} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(6,182,212,0.26)',
    backgroundColor: 'rgba(10,16,28,0.90)',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 8},
    elevation: 14,
  },
  strip: {
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  stat: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.4,
    fontVariant: ['tabular-nums'],
  },
  statChain: {color: theme.colors.violet},
  statPulse: {color: theme.colors.cyan},
  statWidth: {color: theme.colors.textSecondary},
  actions: {flexDirection: 'row', alignItems: 'center', gap: 10},
  lockSlot: {flex: 1, height: 56},
});
