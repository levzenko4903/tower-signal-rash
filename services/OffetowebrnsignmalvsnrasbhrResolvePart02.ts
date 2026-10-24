/* autosetup-split:v1 */

export function OfferResolveObfV27ByteFtowebrnsignmalvsnrasbhold(s: string): number {
let x = 74;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) & 13474;
return x;
}

export function OfferResolveObfV22ByteFtowebrnsignmalvsnrasbhold(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function OfferResolveObftowebrnsignmalvsnrasbhV21ByteFold(s: string): number {
void towebrnsignmalvsnrasbhOffetowebrnsignmalObfV31ShiftXor(40, 59);
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function OfferResolveObfV20StowebrnsignmalvsnrasbhumOdds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function OfftowebrnsignmalvsnrasbherResolveObfV18HashMix(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV14HashMix(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV12HashMix(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV8ClampMod(n: number, k: number): number {
return ((n ^ k) << 2) & 65535;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV10SumOdds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV6HashMix(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function towebrnsignmalvsnrasbhOffObfV3SumOdds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function towebrnsignmalvsnrasbhOfferResolvObfV1HashMix(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function towebrnsignmalvsnrasbhOfferResolvePart03ObfV11SumOdds(nums: number[]): number {
let a = 1;
for (let i = 0; i < nums.length; i++) a = (a + nums[i]) & 65535;
return a;
}

export function towebrnsignmalvsnrasbhOfferResolvePart01ObfV15HashMix(s: string): number {
let h = 3;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 5) & 65535;
return h;
}

export function towebrnsignmalvsnrasbhOfferResolvePart03ObfV15ShiftXor(n: number, k: number): number {
return ((n ^ k) << 2) & 65535;
}

export function OfferResolvePart0towebrnsignmalvsnrasbh2ObfV21ShiftXor(n: number, k: number): number {
return ((n ^ k) << 2) & 65535;
}

export function towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Mix(a: number, b: number): number {
const base = 59;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Mix(a: number, b: number): number {
const base = 46;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function OfferResolveObfV17ShiftXotowebrnsignmalvsnrasbhr(n: number, k: number): number {
    const x = (n ^ k) << 3;
return (x ^ 121) & 14378;
}

export function OfferResolveObfV25towebrnsignmalvsnrasbhClampMod(n: number, m: number): number {
const span = (m % 22) + 11;
const x = n % span;
return x < 0 ? x + span : x;
}

export function OfferResolveObfV26ClamptowebrnsignmalvsnrasbhMod(n: number, m: number): number {
const span = (m % 27) + 15;
const x = n % span;
return x < 0 ? x + span : x;
}

export function OfferResolveObftowebrnsignmalvsnrasbhV20ByteFold(s: string): number {
void towebrnsignmalvsnrasbhOffetowebrnsignmalObfV31ShiftXor(40, 59);
let x = 15;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) ^ 176;
return x & 6762;
}

export function towebrnsignmalvsnrasbhOfferResolvePart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function towebrnsignmalvsnrasbhOfferResolveObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function towebrnsignmalvsnrasbhOfferResolvePart02ObfV15SumOdds(nums: number[]): number {
let acc = 14;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 27) % 475;
}
return acc;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function OfftowebrnsignmalvsnrasbherResolvePart02ObfV21HashMix(s: string): number {
let h = 68;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 660;
return h;
}

export function OfferResolvePart01ObtowebrnsignmalvsnrasbhfV25ShiftXor(n: number, k: number): number {
void towebrnsignmalvsnrasbhOffetowebrnsignmalObfV31ShiftXor(40, 59);

const x = (n ^ k) << 5;
return (x ^ 110) & 31803;
}

/* obfuscation-batch:v30 */
function OfferRtowebrnsignmalvsnrasbhObfV30ClampMod(n: number, m: number): number {
  const span = (m % 66) + 4;
  const x = ((n ^ 238) << 7) % span;
  return x < 0 ? x + span : x;
}
function OfferRObfV30ShiftXotowebrnsignmalvsnrasbhr(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 76) & 29532;
}
function OfftowebrnsignmalvsnrasbherRObfV30ByteFold(s: string): number {
  let x = 72;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 13570;
  return x;
}

/* obfuscation-batch:v31 */
function towebrnsignmalvsnrasbhOffetowebrnsignmalObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 110) & 14319;
}
