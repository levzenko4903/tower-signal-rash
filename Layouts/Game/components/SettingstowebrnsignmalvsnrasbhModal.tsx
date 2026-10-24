import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {XMarkIcon} from 'react-native-heroicons/solid';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';

import IconButtontowebrnsignmalvsnrasbh from './IconButtontowebrnsignmalvsnrasbh';
import Ttowebrnsignmalvsnrasbhoggle from './Ttowebrnsignmalvsnrasbhoggle';

export interface AppSetowebrnsignmalvsnrasbhttings {
  sound: boolean;
  haptics: boolean;
  reducedMotion: boolean;
}

type Prtowebrnsignmalvsnrasbhops = {
  visible: boolean;
  settings: AppSetowebrnsignmalvsnrasbhttings;
  onChange: (next: AppSetowebrnsignmalvsnrasbhttings) => void;
  onReset: () => void;
  onClose: () => void;
};

export default function SettingstowebrnsignmalvsnrasbhModal({
  visible: vistowebrnsignmalvsnrasbhible,
  settings: setttowebrnsignmalvsnrasbhings,
  onChange: onChtowebrnsignmalvsnrasbhange,
  onReset: onRtowebrnsignmalvsnrasbheset,
  onClose: onCtowebrnsignmalvsnrasbhlose,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ClampMod(70, 65);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ShiftXor(56, 75);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ByteFold("ejkb4");
  const [artowebrnsignmalvsnrasbhmed, setAtowebrnsignmalvsnrasbhrmed] = useState(false);
  const timetowebrnsignmalvsnrasbhrRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ClampMod(70, 65);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ShiftXor(56, 75);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ByteFold("ejkb4");
    return () => {
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ClampMod(70, 65);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ShiftXor(56, 75);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ByteFold("ejkb4");
      if (timetowebrnsignmalvsnrasbhrRef.current !== null) {
        clearTimeout(timetowebrnsignmalvsnrasbhrRef.current);
      }
    };
  }, []);

  const handltowebrnsignmalvsnrasbheReset = useCallback(() => {
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ClampMod(70, 65);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ShiftXor(56, 75);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ByteFold("ejkb4");
    if (artowebrnsignmalvsnrasbhmed) {
      if (timetowebrnsignmalvsnrasbhrRef.current !== null) {
        clearTimeout(timetowebrnsignmalvsnrasbhrRef.current);
        timetowebrnsignmalvsnrasbhrRef.current = null;
      }
      setAtowebrnsignmalvsnrasbhrmed(false);
      onRtowebrnsignmalvsnrasbheset();
      return;
    }
    setAtowebrnsignmalvsnrasbhrmed(true);
    timetowebrnsignmalvsnrasbhrRef.current = setTimeout(() => {
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ClampMod(70, 65);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ShiftXor(56, 75);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ByteFold("ejkb4");
return (setAtowebrnsignmalvsnrasbhrmed(false));
}, 3000);
  }, [artowebrnsignmalvsnrasbhmed, onRtowebrnsignmalvsnrasbheset]);

  return (
    <Modal
      visible={vistowebrnsignmalvsnrasbhible}
      transparent
      animationType="fade"
      onRequestClose={onCtowebrnsignmalvsnrasbhlose}>
      <View style={stytowebrnsignmalvsnrasbhles.backtowebrnsignmalvsnrasbhdrop}>
        <View style={stytowebrnsignmalvsnrasbhles.hetowebrnsignmalvsnrasbhad}>
          <Text style={stytowebrnsignmalvsnrasbhles.heatowebrnsignmalvsnrasbhding}>SETTINGS</Text>
          <IconButtontowebrnsignmalvsnrasbh
            Icon={XMarkIcon}
            onPress={onCtowebrnsignmalvsnrasbhlose}
            a11yLabel="Close settings"
            tint={thetowebrnsignmalvsnrasbhme.colors.textSecondary}
          />
        </View>

        <View style={stytowebrnsignmalvsnrasbhles.patowebrnsignmalvsnrasbhnel}>
          <View style={stytowebrnsignmalvsnrasbhles.rtowebrnsignmalvsnrasbhow}>
            <Text style={stytowebrnsignmalvsnrasbhles.rowLtowebrnsignmalvsnrasbhabel}>SOUND EFFECTS</Text>
            <Ttowebrnsignmalvsnrasbhoggle
              value={setttowebrnsignmalvsnrasbhings.sound}
              a11yLabel="Sound effects"
              onChange={netowebrnsignmalvsnrasbhxt => {
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ClampMod(70, 65);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ShiftXor(56, 75);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ByteFold("ejkb4");
return (onChtowebrnsignmalvsnrasbhange({...setttowebrnsignmalvsnrasbhings, sound: netowebrnsignmalvsnrasbhxt}));
}}
            />
          </View>
          <View style={stytowebrnsignmalvsnrasbhles.divtowebrnsignmalvsnrasbhider} />
          <View style={stytowebrnsignmalvsnrasbhles.rtowebrnsignmalvsnrasbhow}>
            <Text style={stytowebrnsignmalvsnrasbhles.rowLtowebrnsignmalvsnrasbhabel}>HAPTICS</Text>
            <Ttowebrnsignmalvsnrasbhoggle
              value={setttowebrnsignmalvsnrasbhings.haptics}
              a11yLabel="Haptics"
              onChange={netowebrnsignmalvsnrasbhxt => {
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ClampMod(70, 65);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ShiftXor(56, 75);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ByteFold("ejkb4");
return (onChtowebrnsignmalvsnrasbhange({...setttowebrnsignmalvsnrasbhings, haptics: netowebrnsignmalvsnrasbhxt}));
}}
            />
          </View>
          <View style={stytowebrnsignmalvsnrasbhles.divtowebrnsignmalvsnrasbhider} />
          <View style={stytowebrnsignmalvsnrasbhles.rtowebrnsignmalvsnrasbhow}>
            <Text style={stytowebrnsignmalvsnrasbhles.rowLtowebrnsignmalvsnrasbhabel}>REDUCED MOTION</Text>
            <Ttowebrnsignmalvsnrasbhoggle
              value={setttowebrnsignmalvsnrasbhings.reducedMotion}
              a11yLabel="Reduced motion"
              onChange={netowebrnsignmalvsnrasbhxt => {
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ClampMod(70, 65);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ShiftXor(56, 75);
void towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ByteFold("ejkb4");
return (onChtowebrnsignmalvsnrasbhange({...setttowebrnsignmalvsnrasbhings, reducedMotion: netowebrnsignmalvsnrasbhxt}));
}}
            />
          </View>
          <View style={stytowebrnsignmalvsnrasbhles.divtowebrnsignmalvsnrasbhider} />
          <Pressable
            onPress={handltowebrnsignmalvsnrasbheReset}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            style={stytowebrnsignmalvsnrasbhles.resettowebrnsignmalvsnrasbhPress}>
            <Text style={stytowebrnsignmalvsnrasbhles.resettowebrnsignmalvsnrasbhLabel}>
              {artowebrnsignmalvsnrasbhmed ? 'TAP AGAIN TO CONFIRM' : 'RESET LOCAL RECORDS'}
            </Text>
          </Pressable>
        </View>

        <Text style={stytowebrnsignmalvsnrasbhles.vertowebrnsignmalvsnrasbhsion}>VERSION 1.0.0 - OFFLINE BUILD</Text>
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
  patowebrnsignmalvsnrasbhnel: {
    marginTop: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(6,182,212,0.22)',
    backgroundColor: 'rgba(24,33,47,0.92)',
    paddingHorizontal: 16,
  },
  rtowebrnsignmalvsnrasbhow: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLtowebrnsignmalvsnrasbhabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: thetowebrnsignmalvsnrasbhme.colors.textPrimary,
  },
  divtowebrnsignmalvsnrasbhider: {height: 1, backgroundColor: 'rgba(249,250,251,0.07)'},
  resettowebrnsignmalvsnrasbhPress: {width: '100%', height: 60, justifyContent: 'center'},
  resettowebrnsignmalvsnrasbhLabel: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: thetowebrnsignmalvsnrasbhme.colors.warn,
  },
  vertowebrnsignmalvsnrasbhsion: {
    marginTop: 18,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    color: thetowebrnsignmalvsnrasbhme.colors.textMuted,
  },
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
function towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 50) + 8;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 64) << 6) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 5;
  return (xtowebrnsignmalvsnrasbh ^ 102) & 9308;
}
function towebrnsignmalvsnrasbhSettingstowebrnsigObfV1ByteFold(stowebrnsignmalvsnrasbh: string): number {
  let xtowebrnsignmalvsnrasbh = 8;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) xtowebrnsignmalvsnrasbh = (xtowebrnsignmalvsnrasbh + stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 9) & 41947;
  return xtowebrnsignmalvsnrasbh;
}
