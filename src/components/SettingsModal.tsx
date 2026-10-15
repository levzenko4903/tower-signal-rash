import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {XMarkIcon} from 'react-native-heroicons/solid';

import {theme} from '../constants/theme';

import IconButton from './IconButton';
import Toggle from './Toggle';

export interface AppSettings {
  sound: boolean;
  haptics: boolean;
  reducedMotion: boolean;
}

type Props = {
  visible: boolean;
  settings: AppSettings;
  onChange: (next: AppSettings) => void;
  onReset: () => void;
  onClose: () => void;
};

export default function SettingsModal({
  visible,
  settings,
  onChange,
  onReset,
  onClose,
}: Props) {
  const [armed, setArmed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleReset = useCallback(() => {
    if (armed) {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setArmed(false);
      onReset();
      return;
    }
    setArmed(true);
    timerRef.current = setTimeout(() => setArmed(false), 3000);
  }, [armed, onReset]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.head}>
          <Text style={styles.heading}>SETTINGS</Text>
          <IconButton
            Icon={XMarkIcon}
            onPress={onClose}
            a11yLabel="Close settings"
            tint={theme.colors.textSecondary}
          />
        </View>

        <View style={styles.panel}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>SOUND EFFECTS</Text>
            <Toggle
              value={settings.sound}
              a11yLabel="Sound effects"
              onChange={next => onChange({...settings, sound: next})}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.rowLabel}>HAPTICS</Text>
            <Toggle
              value={settings.haptics}
              a11yLabel="Haptics"
              onChange={next => onChange({...settings, haptics: next})}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.rowLabel}>REDUCED MOTION</Text>
            <Toggle
              value={settings.reducedMotion}
              a11yLabel="Reduced motion"
              onChange={next => onChange({...settings, reducedMotion: next})}
            />
          </View>
          <View style={styles.divider} />
          <Pressable
            onPress={handleReset}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            style={styles.resetPress}>
            <Text style={styles.resetLabel}>
              {armed ? 'TAP AGAIN TO CONFIRM' : 'RESET LOCAL RECORDS'}
            </Text>
          </Pressable>
        </View>

        <Text style={styles.version}>VERSION 1.0.0 - OFFLINE BUILD</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(5,8,15,0.94)',
    paddingTop: 56,
    paddingHorizontal: 18,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 3,
    color: theme.colors.textPrimary,
  },
  panel: {
    marginTop: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(6,182,212,0.22)',
    backgroundColor: 'rgba(24,33,47,0.92)',
    paddingHorizontal: 16,
  },
  row: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: theme.colors.textPrimary,
  },
  divider: {height: 1, backgroundColor: 'rgba(249,250,251,0.07)'},
  resetPress: {width: '100%', height: 60, justifyContent: 'center'},
  resetLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: theme.colors.warn,
  },
  version: {
    marginTop: 18,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    color: theme.colors.textMuted,
  },
});
