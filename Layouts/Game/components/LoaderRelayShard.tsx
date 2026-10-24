import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

/** Two splash accents already on the relay bar — cyan and violet. */
export const RELAY_SHAtowebrnsignmalvsnrasbhRD_ACCENTS = ['#06B6D4', '#8B5CF6'] as const;

const MAX_towebrnsignmalvsnrasbhRISE = 48;
const MIN_towebrnsignmalvsnrasbhRISE = 20;

export type RelayStowebrnsignmalvsnrasbhhardBit = {
  key: string;
  dx: number;
  rise: number;
  size: number;
  rot: number;
  color: string;
  life: number;
};

export type RelaytowebrnsignmalvsnrasbhBurst = {
  id: number;
  x: number;
  y: number;
  bits: RelayStowebrnsignmalvsnrasbhhardBit[];
};

export function makeReltowebrnsignmalvsnrasbhayBurst(
  itowebrnsignmalvsnrasbhd: number,
  xtowebrnsignmalvsnrasbh: number,
  ytowebrnsignmalvsnrasbh: number,
  witowebrnsignmalvsnrasbhdth: number,
  heitowebrnsignmalvsnrasbhght: number,
): RelaytowebrnsignmalvsnrasbhBurst {
  const ctowebrnsignmalvsnrasbhx = Math.max(10, Math.min(Math.max(10, witowebrnsignmalvsnrasbhdth - 10), xtowebrnsignmalvsnrasbh));
  const ctowebrnsignmalvsnrasbhy = Math.max(10, Math.min(Math.max(10, heitowebrnsignmalvsnrasbhght - 10), ytowebrnsignmalvsnrasbh));
  const cotowebrnsignmalvsnrasbhunt = 8 + Math.floor(Math.random() * 5);
  const acctowebrnsignmalvsnrasbhents =
    Math.random() < 0.5
      ? [RELAY_SHAtowebrnsignmalvsnrasbhRD_ACCENTS[0], RELAY_SHAtowebrnsignmalvsnrasbhRD_ACCENTS[1]]
      : [RELAY_SHAtowebrnsignmalvsnrasbhRD_ACCENTS[1], RELAY_SHAtowebrnsignmalvsnrasbhRD_ACCENTS[0]];
  const bitowebrnsignmalvsnrasbhts: RelayStowebrnsignmalvsnrasbhhardBit[] = [];
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < cotowebrnsignmalvsnrasbhunt; itowebrnsignmalvsnrasbh++) {
    const sprtowebrnsignmalvsnrasbhead = 24 + Math.random() * 48;
    bitowebrnsignmalvsnrasbhts.push({
      key: `${itowebrnsignmalvsnrasbhd}-${itowebrnsignmalvsnrasbh}`,
      dx: (Math.random() * 2 - 1) * sprtowebrnsignmalvsnrasbhead,
      rise: MIN_towebrnsignmalvsnrasbhRISE + Math.random() * (MAX_towebrnsignmalvsnrasbhRISE - MIN_towebrnsignmalvsnrasbhRISE),
      size: 3 + Math.random() * 5,
      rot: Math.floor(Math.random() * 70) - 20,
      color: acctowebrnsignmalvsnrasbhents[itowebrnsignmalvsnrasbh % acctowebrnsignmalvsnrasbhents.length],
      life: 300 + Math.floor(Math.random() * 401),
    });
  }
  return {id: itowebrnsignmalvsnrasbhd, x: ctowebrnsignmalvsnrasbhx, y: ctowebrnsignmalvsnrasbhy, bits: bitowebrnsignmalvsnrasbhts};
}

function ShartowebrnsignmalvsnrasbhdBit({
  originX: oritowebrnsignmalvsnrasbhginX,
  originY: oritowebrnsignmalvsnrasbhginY,
  bit: btowebrnsignmalvsnrasbhit,
}: {
  originX: number;
  originY: number;
  bit: RelayStowebrnsignmalvsnrasbhhardBit;
}) {
  const ttowebrnsignmalvsnrasbhy = useRef(new Animated.Value(0)).current;
  const opatowebrnsignmalvsnrasbhcity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const fatowebrnsignmalvsnrasbhde = Animated.timing(opatowebrnsignmalvsnrasbhcity, {
      toValue: 0,
      duration: Math.max(180, Math.floor(btowebrnsignmalvsnrasbhit.life * 0.75)),
      delay: Math.floor(btowebrnsignmalvsnrasbhit.life * 0.2),
      useNativeDriver: true,
    });
    const ritowebrnsignmalvsnrasbhse = Animated.timing(ttowebrnsignmalvsnrasbhy, {
      toValue: -btowebrnsignmalvsnrasbhit.rise,
      duration: btowebrnsignmalvsnrasbhit.life,
      useNativeDriver: true,
    });
    fatowebrnsignmalvsnrasbhde.start();
    ritowebrnsignmalvsnrasbhse.start();
    return () => {
      fatowebrnsignmalvsnrasbhde.stop();
      ritowebrnsignmalvsnrasbhse.stop();
    };
  }, [btowebrnsignmalvsnrasbhit.life, btowebrnsignmalvsnrasbhit.rise, opatowebrnsignmalvsnrasbhcity, ttowebrnsignmalvsnrasbhy]);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        stytowebrnsignmalvsnrasbhles.btowebrnsignmalvsnrasbhit,
        {
          left: oritowebrnsignmalvsnrasbhginX + btowebrnsignmalvsnrasbhit.dx - btowebrnsignmalvsnrasbhit.size / 2,
          top: oritowebrnsignmalvsnrasbhginY - btowebrnsignmalvsnrasbhit.size / 2,
          width: btowebrnsignmalvsnrasbhit.size,
          height: btowebrnsignmalvsnrasbhit.size,
          backgroundColor: btowebrnsignmalvsnrasbhit.color,
          opacity: opatowebrnsignmalvsnrasbhcity,
          transform: [{translateY: ttowebrnsignmalvsnrasbhy}, {rotate: `${btowebrnsignmalvsnrasbhit.rot}deg`}],
        },
      ]}
    />
  );
}

/** One tap's shard burst. Rises and fades; never dragged, never looped. */
export function LoaderRetowebrnsignmalvsnrasbhlayShard({
  burst: butowebrnsignmalvsnrasbhrst,
  onDone: onDtowebrnsignmalvsnrasbhone,
}: {
  burst: RelaytowebrnsignmalvsnrasbhBurst;
  onDone: (id: number) => void;
}) {
  useEffect(() => {
    const litowebrnsignmalvsnrasbhfe = butowebrnsignmalvsnrasbhrst.bits.reduce((mtowebrnsignmalvsnrasbhax, btowebrnsignmalvsnrasbhit) => Math.max(mtowebrnsignmalvsnrasbhax, btowebrnsignmalvsnrasbhit.life), 0);
    const titowebrnsignmalvsnrasbhmer = setTimeout(() => onDtowebrnsignmalvsnrasbhone(butowebrnsignmalvsnrasbhrst.id), litowebrnsignmalvsnrasbhfe + 40);
    return () => clearTimeout(titowebrnsignmalvsnrasbhmer);
  }, [butowebrnsignmalvsnrasbhrst, onDtowebrnsignmalvsnrasbhone]);

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {butowebrnsignmalvsnrasbhrst.bits.map(btowebrnsignmalvsnrasbhit => (
        <ShartowebrnsignmalvsnrasbhdBit key={btowebrnsignmalvsnrasbhit.key} originX={butowebrnsignmalvsnrasbhrst.x} originY={butowebrnsignmalvsnrasbhrst.y} bit={btowebrnsignmalvsnrasbhit} />
      ))}
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  btowebrnsignmalvsnrasbhit: {position: 'absolute'},
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
