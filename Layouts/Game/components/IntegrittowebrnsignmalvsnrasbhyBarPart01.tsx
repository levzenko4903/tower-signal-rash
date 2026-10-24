/* autosetup-split:v1 */

export function towebrnsignmalvsnrasbhGameMixSeed(xtowebrnsignmalvsnrasbh: number, ytowebrnsignmalvsnrasbh: number): number {
return ((xtowebrnsignmalvsnrasbh % (ytowebrnsignmalvsnrasbh || 1)) + ytowebrnsignmalvsnrasbh) % (ytowebrnsignmalvsnrasbh || 1);
}

export function towebrnsignmalvsnrasbhGameFoldRange(nutowebrnsignmalvsnrasbhms: number[]): number {
return nutowebrnsignmalvsnrasbhms.reduce((atowebrnsignmalvsnrasbhcc, ntowebrnsignmalvsnrasbh) => atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh, 0);
}

export function towebrnsignmalvsnrasbhGameClampSpan(ntowebrnsignmalvsnrasbh: number, ltowebrnsignmalvsnrasbho: number, htowebrnsignmalvsnrasbhi: number): number {
return ntowebrnsignmalvsnrasbh < ltowebrnsignmalvsnrasbho ? ltowebrnsignmalvsnrasbho : ntowebrnsignmalvsnrasbh > htowebrnsignmalvsnrasbhi ? htowebrnsignmalvsnrasbhi : ntowebrnsignmalvsnrasbh;
}

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
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1ShiftXor(75, 2);
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1ByteFold("367");
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1HashMix("h8p");
void towebrnsignmalvsnrasbhIntegrittowebrnsigObfV1SumOdds([29, 4, 39]);
