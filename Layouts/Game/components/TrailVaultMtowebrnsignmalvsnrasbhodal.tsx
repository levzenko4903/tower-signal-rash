import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LockClosedIcon, XMarkIcon} from 'react-native-heroicons/solid';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
import {isUnltowebrnsignmalvsnrasbhocked, TRAtowebrnsignmalvsnrasbhILS} from '../game/trailstowebrnsignmalvsnrasbh';
import {formtowebrnsignmalvsnrasbhatNum} from '../utils/fotowebrnsignmalvsnrasbhrmat';

import IconButtontowebrnsignmalvsnrasbh from './IconButtontowebrnsignmalvsnrasbh';

type Prtowebrnsignmalvsnrasbhops = {
  visible: boolean;
  bestScore: number;
  equipped: string;
  onEquip: (id: string) => void;
  onClose: () => void;
};

export default function TrailVaultMtowebrnsignmalvsnrasbhodal({
  visible: vistowebrnsignmalvsnrasbhible,
  bestScore: besttowebrnsignmalvsnrasbhScore,
  equipped: equitowebrnsignmalvsnrasbhpped,
  onEquip: onEtowebrnsignmalvsnrasbhquip,
  onClose: onCtowebrnsignmalvsnrasbhlose,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhTrailVaultMtowebrnObfV1ByteFold("ne7abc");
void towebrnsignmalvsnrasbhTrailVaultMtowebrnObfV1HashMix("61aj8");
  return (
    <Modal
      visible={vistowebrnsignmalvsnrasbhible}
      transparent
      animationType="fade"
      onRequestClose={onCtowebrnsignmalvsnrasbhlose}>
      <View style={stytowebrnsignmalvsnrasbhles.backtowebrnsignmalvsnrasbhdrop}>
        <View style={stytowebrnsignmalvsnrasbhles.hetowebrnsignmalvsnrasbhad}>
          <Text style={stytowebrnsignmalvsnrasbhles.heatowebrnsignmalvsnrasbhding}>SIGNAL TRAILS</Text>
          <IconButtontowebrnsignmalvsnrasbh
            Icon={XMarkIcon}
            onPress={onCtowebrnsignmalvsnrasbhlose}
            a11yLabel="Close signal trails"
            tint={thetowebrnsignmalvsnrasbhme.colors.textSecondary}
          />
        </View>
        <Text style={stytowebrnsignmalvsnrasbhles.stowebrnsignmalvsnrasbhub}>
          BEAT SCORES TO UNLOCK NEW BEAM COLOURS.
        </Text>
        <View style={stytowebrnsignmalvsnrasbhles.grtowebrnsignmalvsnrasbhid}>
          {TRAtowebrnsignmalvsnrasbhILS.map(trtowebrnsignmalvsnrasbhail => {
void towebrnsignmalvsnrasbhTrailVaultMtowebrnObfV1ByteFold("ne7abc");
void towebrnsignmalvsnrasbhTrailVaultMtowebrnObfV1HashMix("61aj8");
            const optowebrnsignmalvsnrasbhen = isUnltowebrnsignmalvsnrasbhocked(trtowebrnsignmalvsnrasbhail, besttowebrnsignmalvsnrasbhScore);
            const acttowebrnsignmalvsnrasbhive = equitowebrnsignmalvsnrasbhpped === trtowebrnsignmalvsnrasbhail.id;
            return (
              <View key={trtowebrnsignmalvsnrasbhail.id} style={stytowebrnsignmalvsnrasbhles.cetowebrnsignmalvsnrasbhll}>
                <Pressable
                  onPress={() => {
void towebrnsignmalvsnrasbhTrailVaultMtowebrnObfV1ByteFold("ne7abc");
void towebrnsignmalvsnrasbhTrailVaultMtowebrnObfV1HashMix("61aj8");
                    if (optowebrnsignmalvsnrasbhen) {
                      onEtowebrnsignmalvsnrasbhquip(trtowebrnsignmalvsnrasbhail.id);
                    }
                  }}
                  hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}
                  style={stytowebrnsignmalvsnrasbhles.cardtowebrnsignmalvsnrasbhPress}>
                  <View
                    style={[
                      stytowebrnsignmalvsnrasbhles.catowebrnsignmalvsnrasbhrd,
                      optowebrnsignmalvsnrasbhen ? stytowebrnsignmalvsnrasbhles.cardtowebrnsignmalvsnrasbhOpen : stytowebrnsignmalvsnrasbhles.cardLtowebrnsignmalvsnrasbhocked,
                      acttowebrnsignmalvsnrasbhive ? stytowebrnsignmalvsnrasbhles.cardAtowebrnsignmalvsnrasbhctive : null,
                    ]}>
                    <LinearGradient
                      colors={trtowebrnsignmalvsnrasbhail.colors}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={stytowebrnsignmalvsnrasbhles.swatowebrnsignmalvsnrasbhtch}
                    />
                    <Text style={stytowebrnsignmalvsnrasbhles.natowebrnsignmalvsnrasbhme} numberOfLines={1}>
                      {trtowebrnsignmalvsnrasbhail.name}
                    </Text>
                    {optowebrnsignmalvsnrasbhen ? (
                      <Text
                        style={[
                          stytowebrnsignmalvsnrasbhles.sttowebrnsignmalvsnrasbhate,
                          acttowebrnsignmalvsnrasbhive ? stytowebrnsignmalvsnrasbhles.statetowebrnsignmalvsnrasbhActive : null,
                        ]}>
                        {acttowebrnsignmalvsnrasbhive ? 'EQUIPPED' : 'READY'}
                      </Text>
                    ) : (
                      <View style={stytowebrnsignmalvsnrasbhles.loctowebrnsignmalvsnrasbhkRow}>
                        <LockClosedIcon
                          size={14}
                          color={thetowebrnsignmalvsnrasbhme.colors.textMuted}
                        />
                        <Text style={stytowebrnsignmalvsnrasbhles.locktowebrnsignmalvsnrasbhValue}>
                          {formtowebrnsignmalvsnrasbhatNum(trtowebrnsignmalvsnrasbhail.threshold)}
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

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  backtowebrnsignmalvsnrasbhdrop: {
    flex: 1,
    backgroundColor: 'rgba(5,8,15,0.94)',
    paddingTop: 56,
    paddingHorizontal: 18,
  },
  hetowebrnsignmalvsnrasbhad: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heatowebrnsignmalvsnrasbhding: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 3,
    color: thetowebrnsignmalvsnrasbhme.colors.textPrimary,
  },
  stowebrnsignmalvsnrasbhub: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: thetowebrnsignmalvsnrasbhme.colors.textMuted,
  },
  grtowebrnsignmalvsnrasbhid: {
    marginTop: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  cetowebrnsignmalvsnrasbhll: {width: '47%'},
  cardtowebrnsignmalvsnrasbhPress: {width: '100%', height: 112},
  catowebrnsignmalvsnrasbhrd: {
    width: '100%',
    height: 112,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(249,250,251,0.12)',
    backgroundColor: 'rgba(24,33,47,0.92)',
    padding: 12,
    justifyContent: 'center',
  },
  cardtowebrnsignmalvsnrasbhOpen: {opacity: 1},
  cardLtowebrnsignmalvsnrasbhocked: {opacity: 0.45},
  cardAtowebrnsignmalvsnrasbhctive: {borderColor: thetowebrnsignmalvsnrasbhme.colors.cyan},
  swatowebrnsignmalvsnrasbhtch: {width: 46, height: 18, borderRadius: 4},
  natowebrnsignmalvsnrasbhme: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: thetowebrnsignmalvsnrasbhme.colors.textPrimary,
  },
  loctowebrnsignmalvsnrasbhkRow: {flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 6},
  locktowebrnsignmalvsnrasbhValue: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: thetowebrnsignmalvsnrasbhme.colors.textMuted,
    fontVariant: ['tabular-nums'],
  },
  sttowebrnsignmalvsnrasbhate: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: thetowebrnsignmalvsnrasbhme.colors.textMuted,
  },
  statetowebrnsignmalvsnrasbhActive: {color: thetowebrnsignmalvsnrasbhme.colors.cyan},
});

/* autosetup-game-stamp:v1 */
function towebrnsignmalvsnrasbhGameMixSeed(xtowebrnsignmalvsnrasbh: number, ytowebrnsignmalvsnrasbh: number): number {
  return ((xtowebrnsignmalvsnrasbh % (ytowebrnsignmalvsnrasbh || 1)) + ytowebrnsignmalvsnrasbh) % (ytowebrnsignmalvsnrasbh || 1);
}
function towebrnsignmalvsnrasbhGameFoldRange(nutowebrnsignmalvsnrasbhms: number[]): number {
  return nutowebrnsignmalvsnrasbhms.reduce((atowebrnsignmalvsnrasbhcc, ntowebrnsignmalvsnrasbh) => atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh, 0);
}
function towebrnsignmalvsnrasbhGameClampSpan(ntowebrnsignmalvsnrasbh: number, ltowebrnsignmalvsnrasbho: number, htowebrnsignmalvsnrasbhi: number): number {
  return ntowebrnsignmalvsnrasbh < ltowebrnsignmalvsnrasbho ? ltowebrnsignmalvsnrasbho : ntowebrnsignmalvsnrasbh > htowebrnsignmalvsnrasbhi ? htowebrnsignmalvsnrasbhi : ntowebrnsignmalvsnrasbh;
}
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhTrailVaultMtowebrnObfV1ByteFold(stowebrnsignmalvsnrasbh: string): number {
  let xtowebrnsignmalvsnrasbh = 48;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) xtowebrnsignmalvsnrasbh = (xtowebrnsignmalvsnrasbh + stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 33) & 15818;
  return xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhTrailVaultMtowebrnObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 10;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 39)) % 528;
  return htowebrnsignmalvsnrasbh;
}
