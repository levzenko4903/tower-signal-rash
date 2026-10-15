import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LockClosedIcon, XMarkIcon} from 'react-native-heroicons/solid';

import {theme} from '../constants/theme';
import {isUnlocked, TRAILS} from '../game/trails';
import {formatNum} from '../utils/format';

import IconButton from './IconButton';

type Props = {
  visible: boolean;
  bestScore: number;
  equipped: string;
  onEquip: (id: string) => void;
  onClose: () => void;
};

export default function TrailVaultModal({
  visible,
  bestScore,
  equipped,
  onEquip,
  onClose,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.head}>
          <Text style={styles.heading}>SIGNAL TRAILS</Text>
          <IconButton
            Icon={XMarkIcon}
            onPress={onClose}
            a11yLabel="Close signal trails"
            tint={theme.colors.textSecondary}
          />
        </View>
        <Text style={styles.sub}>
          BEAT SCORES TO UNLOCK NEW BEAM COLOURS.
        </Text>
        <View style={styles.grid}>
          {TRAILS.map(trail => {
            const open = isUnlocked(trail, bestScore);
            const active = equipped === trail.id;
            return (
              <View key={trail.id} style={styles.cell}>
                <Pressable
                  onPress={() => {
                    if (open) {
                      onEquip(trail.id);
                    }
                  }}
                  hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}
                  style={styles.cardPress}>
                  <View
                    style={[
                      styles.card,
                      open ? styles.cardOpen : styles.cardLocked,
                      active ? styles.cardActive : null,
                    ]}>
                    <LinearGradient
                      colors={trail.colors}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={styles.swatch}
                    />
                    <Text style={styles.name} numberOfLines={1}>
                      {trail.name}
                    </Text>
                    {open ? (
                      <Text
                        style={[
                          styles.state,
                          active ? styles.stateActive : null,
                        ]}>
                        {active ? 'EQUIPPED' : 'READY'}
                      </Text>
                    ) : (
                      <View style={styles.lockRow}>
                        <LockClosedIcon
                          size={14}
                          color={theme.colors.textMuted}
                        />
                        <Text style={styles.lockValue}>
                          {formatNum(trail.threshold)}
                        </Text>
                      </View>
                    )}
                  </View>
                </Pressable>
              </View>
            );
          })}
        </View>
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
  sub: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: theme.colors.textMuted,
  },
  grid: {
    marginTop: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  cell: {width: '47%'},
  cardPress: {width: '100%', height: 112},
  card: {
    width: '100%',
    height: 112,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.12)',
    backgroundColor: 'rgba(24,33,47,0.92)',
    padding: 12,
    justifyContent: 'center',
  },
  cardOpen: {opacity: 1},
  cardLocked: {opacity: 0.45},
  cardActive: {borderColor: theme.colors.cyan},
  swatch: {width: 46, height: 18, borderRadius: 4},
  name: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: theme.colors.textPrimary,
  },
  lockRow: {flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 6},
  lockValue: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: theme.colors.textMuted,
    fontVariant: ['tabular-nums'],
  },
  state: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: theme.colors.textMuted,
  },
  stateActive: {color: theme.colors.cyan},
});
