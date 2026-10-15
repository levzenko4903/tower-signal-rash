import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PlayIcon} from 'react-native-heroicons/solid';

import {theme} from '../constants/theme';

import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

type Props = {
  visible: boolean;
  onResume: () => void;
  onEnd: () => void;
};

export default function PauseOverlay({visible, onResume, onEnd}: Props) {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.overlay}>
      <View style={styles.card}>
        <Text style={styles.title}>UPLINK HELD</Text>
        <Text style={styles.body}>THE RELAY BEAM IS PARKED.</Text>
        <View style={styles.actions}>
          <PrimaryButton
            label="RESUME"
            Icon={PlayIcon}
            onPress={onResume}
            height={52}
          />
          <View style={styles.gap} />
          <SecondaryButton label="END RUN" onPress={onEnd} height={48} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(5,8,15,0.88)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(6,182,212,0.30)',
    backgroundColor: 'rgba(24,33,47,0.96)',
    padding: 22,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 3,
    color: theme.colors.textPrimary,
  },
  body: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: theme.colors.textSecondary,
  },
  actions: {width: '100%', marginTop: 20},
  gap: {height: 12},
});
