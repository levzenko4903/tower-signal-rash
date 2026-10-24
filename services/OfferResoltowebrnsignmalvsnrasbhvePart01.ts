/* autosetup-split:v1 */

export function towebrnsignmalvsnrasbhOfferResolveObfV15HashMix(s: string): number {
let h = 67;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 632;
return h;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function towebrnsignmalvsnrasbhOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function towebrnsignmalvsnrasbhOfferResolveObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function towebrnsignmalvsnrasbhOfferResolvePart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhOfferResolvePart03ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function towebrnsignmalvsnrasbhOfferResolveObfV13HashMix(s: string): number {
let h = 88;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 539;
return h;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV14SumOdds(nums: number[]): number {
let acc = 49;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 36) % 335;
}
return acc;
}

export function towebrnsignmalvsnrasbhOfferResolvePart01ObfV15ByteFold(s: string): number {
let x = 80;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 133;
return x & 13916;
}

export function towebrnsignmalvsnrasbhOfferResolvePart01ObfV15SumOdds(nums: number[]): number {
let acc = 70;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 269;
}
return acc;
}

export function towebrnsignmalvsnrasbhOffObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function towebrnsignmalvsnrasbhOfferResolveObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function towebrnsignmalvsnrasbhOfferResolvePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function towebrnsignmalvsnrasbhOfferResolvePart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function towebrnsignmalvsnrasbhOffObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function towebrnsignmalvsnrasbhOfferResolveObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function towebrnsignmalvsnrasbhOfferResolveObfV14ByteFold(s: string): number {
let x = 71;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 143;
return x & 39056;
}

export function towebrnsignmalvsnrasbhOfferResolvePart02ObfV15ClampMod(n: number, m: number): number {
const span = (m % 44) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function towebrnsignmalvsnrasbhOfferResolvePart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function towebrnsignmalvsnrasbhOfferResolveObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhOfferResolvePart03ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV13ClampMod(n: number, m: number): number {
const span = (m % 44) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function towebrnsignmalvsnrasbhOfferResolvePart03ObfV15ClampMod(n: number, m: number): number {
const span = (m % 54) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV16SumOdds(nums: number[]): number {
let acc = 90;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 34) % 294;
}
return acc;
}

export function towebrnsignmalvsnrasbhOfferResolveObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 129) & 6985;
}
/* obfuscation-batch:v17 */
function OfferResolvePart01ObfVtowebrnsignmalvsnrasbh17ByteFold(s: string): number {
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33HashMix("7kf");
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33SumOdds([27, 26, 5]);
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33ClampMod(52, 55);
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33ShiftXor(70, 33);
  let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) ^ 229;
  return x & 48430;
}
function OfferRestowebrnsignmalvsnrasbholvePart01ObfV17HashMix(s: string): number {
  let h = 75;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 43) % 419;
  return h;
}
function OfferResolvePart0towebrnsignmalvsnrasbh1ObfV17SumOdds(nums: number[]): number {
        let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 237;
  }
  return acc;
}
function OfferResolveParttowebrnsignmalvsnrasbh01ObfV17ClampMod(n: number, m: number): number {
        const span = (m % 21) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void OfferResolvePart01ObfVtowebrnsignmalvsnrasbh17ByteFold('w7g');
void OfferRestowebrnsignmalvsnrasbholvePart01ObfV17HashMix('fzq3');
void OfferResolvePart0towebrnsignmalvsnrasbh1ObfV17SumOdds([16, 9, 18]);
void OfferResolveParttowebrnsignmalvsnrasbh01ObfV17ClampMod(76, 54);
/* obfuscation-batch:v18 */
function OftowebrnsignmalvsnrasbhferResolvePart01ObfV18SumOdds(nums: number[]): number {
        let acc = 58;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 29) % 171;
  }
  return acc;
}
function OtowebrnsignmalvsnrasbhfferResolvePart01ObfV18ClampMod(n: number, m: number): number {
const span = (m % 25) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvtowebrnsignmalvsnrasbhePart01ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 216) & 48530;
}
void OftowebrnsignmalvsnrasbhferResolvePart01ObfV18SumOdds([20, 25, 23]);
void OtowebrnsignmalvsnrasbhfferResolvePart01ObfV18ClampMod(10, 75);
void OfferResolvtowebrnsignmalvsnrasbhePart01ObfV18ShiftXor(17, 43);
/* obfuscation-batch:v19 */
function OfferResolvtowebrnsignmalvsnrasbhePart01ObfV19HashMix(s: string): number {
let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 27) % 782;
  return h;
}
function OfferResolvePart01ObtowebrnsignmalvsnrasbhfV19SumOdds(nums: number[]): number {
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33HashMix("7kf");
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33SumOdds([27, 26, 5]);
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33ClampMod(52, 55);
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33ShiftXor(70, 33);
        let acc = 84;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 801;
  }
  return acc;
}
function OfferResolvePart01ObfV1towebrnsignmalvsnrasbh9ByteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 165;
  return x & 3000;
}
/* obfuscation-batch:v20 */
function OfferResolvePart01ObfV20CtowebrnsignmalvsnrasbhlampMod(n: number, m: number): number {
      const span = (m % 24) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvePart0towebrnsignmalvsnrasbh1ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 138) & 63074;
}
function OfferResolvePart01towebrnsignmalvsnrasbhObfV20ByteFold(s: string): number {
  let x = 82;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) ^ 230;
  return x & 20568;
}
function OfferResolvePart01ObfV20HatowebrnsignmalvsnrasbhshMix(s: string): number {
  let h = 21;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 484;
  return h;
}
void OfferResolvePart01ObfV20CtowebrnsignmalvsnrasbhlampMod(63, 40);
void OfferResolvePart0towebrnsignmalvsnrasbh1ObfV20ShiftXor(34, 42);
void OfferResolvePart01towebrnsignmalvsnrasbhObfV20ByteFold('zfj8');
void OfferResolvePart01ObfV20HatowebrnsignmalvsnrasbhshMix('p4mm');

/* obfuscation-batch:v21 */
function OffetowebrnsignmalvsnrasbhrResolvePart01ObfV21ClampMod(n: number, m: number): number {
const span = (m % 61) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function OfferResolvePart01ObfV21ShitowebrnsignmalvsnrasbhftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 88) & 9537;
}

function OfferResoltowebrnsignmalvsnrasbhvePart01ObfV21ByteFold(s: string): number {

  let x = 47;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) & 65535;
  return x;
}

function OfferResolvePart01ObfV21HastowebrnsignmalvsnrasbhhMix(s: string): number {

  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 683;
  return h;
}
void OffetowebrnsignmalvsnrasbhrResolvePart01ObfV21ClampMod(47, 74);
void OfferResolvePart01ObfV21ShitowebrnsignmalvsnrasbhftXor(77, 21);
void OfferResoltowebrnsignmalvsnrasbhvePart01ObfV21ByteFold('wha');
void OfferResolvePart01ObfV21HastowebrnsignmalvsnrasbhhMix('kha');

/* obfuscation-batch:v22 */
function OfferResolvePart01ObfV22ClampMtowebrnsignmalvsnrasbhod(n: number, m: number): number {
      const span = (m % 14) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvePatowebrnsignmalvsnrasbhrt01ObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 200) & 47488;
}
function OfferResolvePartowebrnsignmalvsnrasbht01ObfV22ByteFold(s: string): number {
        let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 65535;
  return x;
}
function OfferResolvePart01ObfV2towebrnsignmalvsnrasbh2HashMix(s: string): number {
let h = 27;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 35) % 742;
  return h;
}
void OfferResolvePart01ObfV22ClampMtowebrnsignmalvsnrasbhod(53, 13);
void OfferResolvePatowebrnsignmalvsnrasbhrt01ObfV22ShiftXor(9, 72);
void OfferResolvePartowebrnsignmalvsnrasbht01ObfV22ByteFold('97f5');
void OfferResolvePart01ObfV2towebrnsignmalvsnrasbh2HashMix('w6ck');
/* obfuscation-batch:v23 */
function OfferResolvetowebrnsignmalvsnrasbhPart01ObfV23SumOdds(nums: number[]): number {
      let acc = 79;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 748;
  }
  return acc;
}
function OfferResolvetowebrnsignmalvsnrasbhPart01ObfV23ClampMod1(n: number, m: number): number {

  const span = (m % 23) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvePart01ObfV23ShiftXor2towebrnsignmalvsnrasbh(n: number, k: number): number {
        const x = (n ^ k) << 3;
  return (x ^ 31) & 29843;
}
function OfftowebrnsignmalvsnrasbherResolvePart01ObfV23ByteFold3(s: string): number {
  let x = 38;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 37700;
  return x;
}
void OfferResolvetowebrnsignmalvsnrasbhPart01ObfV23SumOdds([12, 7, 23]);
void OfferResolvetowebrnsignmalvsnrasbhPart01ObfV23ClampMod1(5, 63);
void OfferResolvePart01ObfV23ShiftXor2towebrnsignmalvsnrasbh(84, 52);
void OfftowebrnsignmalvsnrasbherResolvePart01ObfV23ByteFold3('n0');
void OfferResolvePart01ObfV24ByteFtowebrnsignmalvsnrasbhold('d8');
void OfferResolvePart01ObfV24HashMixtowebrnsignmalvsnrasbh('ap6yb');
/* obfuscation-batch:v24 */
function OfferResolvePart01ObfV24ByteFtowebrnsignmalvsnrasbhold(s: string): number {
  let x = 76;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 35387;
  return x;
}
function OfferResolvePart01ObfV24HashMixtowebrnsignmalvsnrasbh(s: string): number {
        let h = 26;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 325;
  return h;
}


/* obfuscation-batch:v25 */
function OfferResolveParttowebrnsignmalvsnrasbh01ObfV25ClampMod(n: number, m: number): number {
  const span = (m % 44) + 10;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function OfferResolvePart01ObtowebrnsignmalvsnrasbhfV25ShiftXor(n: number, k: number): number {
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33HashMix("7kf");
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33SumOdds([27, 26, 5]);
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33ClampMod(52, 55);
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33ShiftXor(70, 33);

  const x = (n ^ k) << 1;
  return (x ^ 210) & 29824;
}
void OfferResolveParttowebrnsignmalvsnrasbh01ObfV25ClampMod(20, 21);
void OfferResolvePart01ObtowebrnsignmalvsnrasbhfV25ShiftXor(24, 35);


/* obfuscation-batch:v26 */
function OfferResolvePart01ObtowebrnsignmalvsnrasbhfV26ShiftXor(n: number, k: number): number {
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33HashMix("7kf");
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33SumOdds([27, 26, 5]);
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33ClampMod(52, 55);
void towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33ShiftXor(70, 33);
  const x = (n ^ k) << 7;
  return (x ^ 148) & 25268;
}

function OfferRetowebrnsignmalvsnrasbhsolvePart01ObfV26ByteFold(s: string): number {
  let x = 89;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 48) & 24906;
  return x;
}

function OfftowebrnsignmalvsnrasbherResolvePart01ObfV26HashMix(s: string): number {
  let h = 59;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 43) % 123;
  return h;
}

/* obfuscation-batch:v27 */
function OffertowebrnsignmalvsnrasbhResolvePart01ObfV27ByteFold(s: string): number {
  let x = 73;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 46317;
  return x;
}

/* obfuscation-batch:v27 */
function towebrnsignmalvsnrasbhOfferResolprissmgecmsgallierObfV27Mix(a: number, b: number): number {
  const base = 55;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function towebrnsignmalvsnrasbhOfferResolprissmgecmsgallierObfV27Fold(text: string): number {
  let acc = 55;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v28 */
function towebrnsignmalvsnrasbhOfferResolpzurisymgeqmgallseObfV28Mix(a: number, b: number): number {
  const base = 29;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function towebrnsignmalvsnrasbhOfferResolpzurisymgeqmgallseObfV28Fold(text: string): number {
  let acc = 29;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function towebrnsignmalvsnrasbhOfferResoldgpnrismgemgalleryObfV29Mix(a: number, b: number): number {
  const base = 38;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function towebrnsignmalvsnrasbhOfferResoldgpnrismgemgalleryObfV29Fold(text: string): number {
  let acc = 38;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function towebrnsignmalvsnrasbhOfferResolpmvqkrmwObfV30ByteFold(s: string): number {
  let x = 79;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) & 45967;
  return x;
}
function towebrnsignmalvsnrasbhOfferResolpmvqkrmwObfV30HashMix(s: string): number {
  let h = 33;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 22)) % 543;
  return h;
}
function towebrnsignmalvsnrasbhOfferResolpmvqkrmwObfV30SumOdds(nums: number[]): number {
  let acc = 65;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 319;
  }
  return acc;
}
function towebrnsignmalvsnrasbhOfferResolpmvqkrmwObfV30ClampMod(n: number, m: number): number {
  const span = (m % 20) + 3;
  const x = ((n ^ 78) << 1) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v31 */
function towebrnsignmalvsnrasbhOfferResolichyikowObfV31SumOdds(nums: number[]): number {
  let acc = 47;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 175;
  }
  return acc;
}
function towebrnsignmalvsnrasbhOfferResolichyikowObfV31ClampMod(n: number, m: number): number {
  const span = (m % 37) + 2;
  const x = ((n ^ 85) << 6) % span;
  return x < 0 ? x + span : x;
}
function towebrnsignmalvsnrasbhOfferResolichyikowObfV31ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 129) & 30843;
}

/* obfuscation-batch:v32 */
function towebrnsignmalvsnrasbhOfferResoltxvwrkrxObfV32SumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 617;
  }
  return acc;
}
function towebrnsignmalvsnrasbhOfferResoltxvwrkrxObfV32ClampMod(n: number, m: number): number {
  const span = (m % 69) + 9;
  const x = ((n ^ 34) << 3) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v33 */
function towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33HashMix(s: string): number {
  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 39)) % 813;
  return h;
}
function towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33SumOdds(nums: number[]): number {
  let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 387;
  }
  return acc;
}
function towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33ClampMod(n: number, m: number): number {
  const span = (m % 41) + 9;
  const x = ((n ^ 110) << 5) % span;
  return x < 0 ? x + span : x;
}
function towebrnsignmalvsnrasbhOfferResoltowebrnsObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 216) & 9486;
}
