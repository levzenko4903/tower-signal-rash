import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';

type Prtowebrnsignmalvsnrasbhops = {
  title: string;
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

/** One header for every screen  -  slots change, the shell never does. */
export default function ScreenHeatowebrnsignmalvsnrasbhder({
  title: titowebrnsignmalvsnrasbhtle,
  leftSlot: lefttowebrnsignmalvsnrasbhSlot,
  centerSlot: centetowebrnsignmalvsnrasbhrSlot,
  rightSlot: rightowebrnsignmalvsnrasbhtSlot,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhScreenHeatowebrnsiObfV1SumOdds([14, 1, 8]);
void towebrnsignmalvsnrasbhScreenHeatowebrnsiObfV1ClampMod(3, 58);
void towebrnsignmalvsnrasbhScreenHeatowebrnsiObfV1ShiftXor(61, 60);
  return (
    <View style={stytowebrnsignmalvsnrasbhles.heatowebrnsignmalvsnrasbhder}>
      <View style={stytowebrnsignmalvsnrasbhles.sitowebrnsignmalvsnrasbhde}>{lefttowebrnsignmalvsnrasbhSlot}</View>
      <View style={stytowebrnsignmalvsnrasbhles.midtowebrnsignmalvsnrasbhdle}>
        <Text style={stytowebrnsignmalvsnrasbhles.titowebrnsignmalvsnrasbhtle} numberOfLines={1}>
          {titowebrnsignmalvsnrasbhtle}
        </Text>
        {centetowebrnsignmalvsnrasbhrSlot}
      </View>
      <View style={[stytowebrnsignmalvsnrasbhles.sitowebrnsignmalvsnrasbhde, stytowebrnsignmalvsnrasbhles.sidetowebrnsignmalvsnrasbhRight]}>{rightowebrnsignmalvsnrasbhtSlot}</View>
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  heatowebrnsignmalvsnrasbhder: {
    paddingTop: 44,
    height: 116,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: 'rgba(10,16,28,0.62)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(6,182,212,0.20)',
  },
  sitowebrnsignmalvsnrasbhde: {width: 80, justifyContent: 'center', alignItems: 'flex-start'},
  sidetowebrnsignmalvsnrasbhRight: {alignItems: 'flex-end'},
  midtowebrnsignmalvsnrasbhdle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  titowebrnsignmalvsnrasbhtle: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 2,
    color: thetowebrnsignmalvsnrasbhme.colors.textPrimary,
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
function towebrnsignmalvsnrasbhScreenHeatowebrnsiObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 85;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 19) % 464;
  }
  return atowebrnsignmalvsnrasbhcc;
}
function towebrnsignmalvsnrasbhScreenHeatowebrnsiObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 62) + 2;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 71) << 1) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhScreenHeatowebrnsiObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 4;
  return (xtowebrnsignmalvsnrasbh ^ 51) & 16906;
}
