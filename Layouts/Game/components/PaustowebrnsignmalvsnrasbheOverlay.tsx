import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PlayIcon} from 'react-native-heroicons/solid';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';

import PrimaryButowebrnsignmalvsnrasbhtton from './PrimaryButowebrnsignmalvsnrasbhtton';
import SecondarytowebrnsignmalvsnrasbhButton from './SecondarytowebrnsignmalvsnrasbhButton';

type Prtowebrnsignmalvsnrasbhops = {
  visible: boolean;
  onResume: () => void;
  onEnd: () => void;
};

export default function PaustowebrnsignmalvsnrasbheOverlay({visible: vistowebrnsignmalvsnrasbhible, onResume: onRetowebrnsignmalvsnrasbhsume, onEnd: ontowebrnsignmalvsnrasbhEnd}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhPaustowebrnsignmalObfV1ClampMod(36, 55);
  if (!vistowebrnsignmalvsnrasbhible) {
    return null;
  }
  return (
    <View style={stytowebrnsignmalvsnrasbhles.ovetowebrnsignmalvsnrasbhrlay}>
      <View style={stytowebrnsignmalvsnrasbhles.catowebrnsignmalvsnrasbhrd}>
        <Text style={stytowebrnsignmalvsnrasbhles.titowebrnsignmalvsnrasbhtle}>UPLINK HELD</Text>
        <Text style={stytowebrnsignmalvsnrasbhles.botowebrnsignmalvsnrasbhdy}>THE RELAY BEAM IS PARKED.</Text>
        <View style={stytowebrnsignmalvsnrasbhles.acttowebrnsignmalvsnrasbhions}>
          <PrimaryButowebrnsignmalvsnrasbhtton
            label="RESUME"
            Icon={PlayIcon}
            onPress={onRetowebrnsignmalvsnrasbhsume}
            height={52}
          />
          <View style={stytowebrnsignmalvsnrasbhles.gap} />
          <SecondarytowebrnsignmalvsnrasbhButton label="END RUN" onPress={ontowebrnsignmalvsnrasbhEnd} height={48} />
        </View>
      </View>
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  ovetowebrnsignmalvsnrasbhrlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(5,8,15,0.88)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  catowebrnsignmalvsnrasbhrd: {
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(6,182,212,0.30)',
    backgroundColor: 'rgba(24,33,47,0.96)',
    padding: 22,
    alignItems: 'center',
  },
  titowebrnsignmalvsnrasbhtle: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 3,
    color: thetowebrnsignmalvsnrasbhme.colors.textPrimary,
  },
  botowebrnsignmalvsnrasbhdy: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: thetowebrnsignmalvsnrasbhme.colors.textSecondary,
  },
  acttowebrnsignmalvsnrasbhions: {width: '100%', marginTop: 20},
  gap: {height: 12},
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
function towebrnsignmalvsnrasbhPaustowebrnsignmalObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 56) + 6;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 222) << 1) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
