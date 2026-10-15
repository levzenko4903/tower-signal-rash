import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {theme} from '../constants/theme';

type Props = {
  value: boolean;
  onChange: (next: boolean) => void;
  a11yLabel: string;
};

const HIT = {top: 8, bottom: 8, left: 8, right: 8};

export default function Toggle({value, onChange, a11yLabel}: Props) {
  return (
    <Pressable
      onPress={() => onChange(!value)}
      hitSlop={HIT}
      accessibilityRole="switch"
      accessibilityLabel={a11yLabel}
      style={styles.press}>
      <View
        style={[
          styles.track,
          value ? styles.trackOn : styles.trackOff,
        ]}>
        <View
          style={[
            styles.knob,
            value ? styles.knobOn : styles.knobOff,
          ]}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {width: 48, height: 28},
  track: {
    width: 48,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    justifyContent: 'center',
  },
  trackOn: {
    backgroundColor: 'rgba(6,182,212,0.30)',
    borderColor: theme.colors.cyan,
  },
  trackOff: {
    backgroundColor: 'rgba(249,250,251,0.06)',
    borderColor: 'rgba(249,250,251,0.18)',
  },
  knob: {
    width: 22,
    height: 22,
    borderRadius: 11,
    position: 'absolute',
  },
  knobOn: {left: 23, backgroundColor: theme.colors.cyan},
  knobOff: {left: 2, backgroundColor: theme.colors.textMuted},
});
