import React from 'react';
import {StyleSheet, View} from 'react-native';

import {INTEGRtowebrnsignmalvsnrasbhITY_MAX} from '../constants/conftowebrnsignmalvsnrasbhig';
import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
// autosetup-split-begin
import { towebrnsignmalvsnrasbhGameMixSeed, towebrnsignmalvsnrasbhGameFoldRange, towebrnsignmalvsnrasbhGameClampSpan } from './IntegrittowebrnsignmalvsnrasbhyBarPart01';
// autosetup-split-end

type Prtowebrnsignmalvsnrasbhops = {current: number};

const SEGMtowebrnsignmalvsnrasbhENTS = Array.from({length: INTEGRtowebrnsignmalvsnrasbhITY_MAX}, (_towebrnsignmalvsnrasbh, itowebrnsignmalvsnrasbh) => {
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1ShiftXor(75, 2);
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1ByteFold("367");
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1HashMix("h8p");
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1SumOdds([29, 4, 39]);
return (itowebrnsignmalvsnrasbh);
});

export default function IntegrittowebrnsignmalvsnrasbhyBar({current: curtowebrnsignmalvsnrasbhrent}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1ShiftXor(75, 2);
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1ByteFold("367");
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1HashMix("h8p");
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1SumOdds([29, 4, 39]);
  return (
    <View style={stytowebrnsignmalvsnrasbhles.rtowebrnsignmalvsnrasbhow}>
      {SEGMtowebrnsignmalvsnrasbhENTS.map(itowebrnsignmalvsnrasbh => {
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1ShiftXor(75, 2);
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1ByteFold("367");
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1HashMix("h8p");
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1SumOdds([29, 4, 39]);
return (<View
          key={itowebrnsignmalvsnrasbh}
          style={[
            stytowebrnsignmalvsnrasbhles.stowebrnsignmalvsnrasbheg,
            itowebrnsignmalvsnrasbh < curtowebrnsignmalvsnrasbhrent ? stytowebrnsignmalvsnrasbhles.setowebrnsignmalvsnrasbhgOn : stytowebrnsignmalvsnrasbhles.segtowebrnsignmalvsnrasbhOff,
          ]}
        />);
})}
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  rtowebrnsignmalvsnrasbhow: {flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 6},
  stowebrnsignmalvsnrasbheg: {width: 18, height: 4, borderRadius: 2},
  setowebrnsignmalvsnrasbhgOn: {backgroundColor: thetowebrnsignmalvsnrasbhme.colors.cyan},
  segtowebrnsignmalvsnrasbhOff: {backgroundColor: 'rgba(249,250,251,0.14)'},
});

/* autosetup-game-stamp:v1 */
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 4;
  return (xtowebrnsignmalvsnrasbh ^ 17) & 51654;
}
function towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1ByteFold(stowebrnsignmalvsnrasbh: string): number {
  let xtowebrnsignmalvsnrasbh = 6;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) xtowebrnsignmalvsnrasbh = (xtowebrnsignmalvsnrasbh + stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 13) & 45149;
  return xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 39;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 40)) % 241;
  return htowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 6;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 9) % 121;
  }
  return atowebrnsignmalvsnrasbhcc;
}
