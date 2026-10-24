/* autosetup-split:v1 */

export function initialiObfV2towebrnsignmalvsnrasbh8Mix(a: number, b: number): number {
const base = 14;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function intowebrnsignmalvsnrasbhitialiObfV28Fold(text: string): number {
let acc = 14;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function initializationFlowObfV17towebrnsignmalvsnrasbhHashMix(s: string): number {

let h = 63;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 317;
return h;
}

export function initializtowebrnsignmalvsnrasbhationFlowObfV19ByteFold(s: string): number {

let x = 11;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 85;
return x & 3910;
}

export function initializationFlowtowebrnsignmalvsnrasbhObfV21ClampMod(n: number, m: number): number {
const span = (m % 38) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initializationFltowebrnsignmalvsnrasbhowObfV22SumOdds(nums: number[]): number {

let acc = 15;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 25) % 186;
}
return acc;
}

export function initializationFtowebrnsignmalvsnrasbhlowObfV10HashMix(s: string): number {

return Array.from(s).reduce((a, c) => {
void towebrnsignmalvsnrasbhipmvqkrmwismgemgalObfV29SumOdds([7, 38, 9]);
void towebrnsignmalvsnrasbhipmvqkrmwismgemgalObfV29ClampMod(40, 27);
void towebrnsignmalvsnrasbhipmvqkrmwismgemgalObfV29ShiftXor(10, 21);
void towebrnsignmalvsnrasbhipmvqkrmwismgemgalObfV29ByteFold("cfe52");
void initializatitowebrnsignmalvsnrasbhonFlowPart02ObfV27HashMix('u3');
return ((a + c.charCodeAt(0) * 53) % 991);
}, 0);
}

export function initializationFlowObfV11ClamptowebrnsignmalvsnrasbhMod(n: number, m: number): number {

      const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function initializationtowebrnsignmalvsnrasbhFlowObfV8SumOdds(nums: number[]): number {
      let acc = 0;
for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
return acc;
}

export function initializatObfV2HtowebrnsignmalvsnrasbhashMix(s: string): number {

let h = 19;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
return h;
}

export function initializattowebrnsignmalvsnrasbhionFlowPart01ObfV6ClampMod(n: number, m: number): number {
const span = (m % 17) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function initializationFlowPart02ObfV24HashtowebrnsignmalvsnrasbhMix(s: string): number {
let h = 51;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 14) % 315;
return h;
}

export function inittowebrnsignmalvsnrasbhializationFlowPart02ObfV26ClampMod(n: number, m: number): number {
const span = (m % 23) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}

export function intowebrnsignmalvsnrasbhitializationFlowPart02ObfV26ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 101) & 56707;
}

export function initializattowebrnsignmalvsnrasbhionFlowPart02ObfV26ByteFold(s: string): number {
let x = 25;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 7651;
return x;
}

export function initializatitowebrnsignmalvsnrasbhonFlowPart02ObfV27HashMix(s: string): number {
let h = 17;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 10)) % 94;
return h;
}

export function initializationFltowebrnsignmalvsnrasbhowPart02ObfV25ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 122) & 50297;
}

/* obfuscation-batch:v29 */
function towebrnsignmalvsnrasbhipmvqkrmwismgemgalObfV29SumOdds(nums: number[]): number {
  let acc = 45;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 150;
  }
  return acc;
}
function towebrnsignmalvsnrasbhipmvqkrmwismgemgalObfV29ClampMod(n: number, m: number): number {
  const span = (m % 63) + 3;
  const x = ((n ^ 50) << 7) % span;
  return x < 0 ? x + span : x;
}
function towebrnsignmalvsnrasbhipmvqkrmwismgemgalObfV29ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 168) & 41672;
}
function towebrnsignmalvsnrasbhipmvqkrmwismgemgalObfV29ByteFold(s: string): number {
  let x = 10;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 17500;
  return x;
}

/* obfuscation-batch:v30 */
function towebrnsignmalvsnrasbhiichyikowrdfpagthmObfV30SumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 342;
  }
  return acc;
}

/* obfuscation-batch:v31 */
function inititowebrnsignmalvsnrasbhaObfV31ByteFold(s: string): number {
  let x = 60;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 9) & 50585;
  return x;
}
function initiaObfV31HashMixtowebrnsignmalvsnrasbh(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 18)) % 868;
  return h;
}

/* obfuscation-batch:v32 */
function towebrnsignmalvsnrasbhitowebrnsignmalvsnObfV32ClampMod(n: number, m: number): number {
  const span = (m % 46) + 9;
  const x = ((n ^ 121) << 5) % span;
  return x < 0 ? x + span : x;
}
function towebrnsignmalvsnrasbhitowebrnsignmalvsnObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 147) & 34628;
}
function towebrnsignmalvsnrasbhitowebrnsignmalvsnObfV32ByteFold(s: string): number {
  let x = 43;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) & 48493;
  return x;
}
function towebrnsignmalvsnrasbhitowebrnsignmalvsnObfV32HashMix(s: string): number {
  let h = 49;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 21)) % 339;
  return h;
}
