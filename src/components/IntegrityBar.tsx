import React from 'react';
import {StyleSheet, View} from 'react-native';

import {INTEGRITY_MAX} from '../constants/config';
import {theme} from '../constants/theme';

type Props = {current: number};

const SEGMENTS = Array.from({length: INTEGRITY_MAX}, (_, i) => i);

export default function IntegrityBar({current}: Props) {
  return (
    <View style={styles.row}>
      {SEGMENTS.map(i => (
        <View
          key={i}
          style={[
            styles.seg,
            i < current ? styles.segOn : styles.segOff,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 6},
  seg: {width: 18, height: 4, borderRadius: 2},
  segOn: {backgroundColor: theme.colors.cyan},
  segOff: {backgroundColor: 'rgba(249,250,251,0.14)'},
});
