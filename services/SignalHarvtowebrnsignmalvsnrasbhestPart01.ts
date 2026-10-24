/* autosetup-split:v1 */

export function SignalHarvesttowebrnsignmalvsnrasbhObfV17ShiftXor(n: number, k: number): number {
        const x = (n ^ k) << 1;
return (x ^ 122) & 14366;
}

export function SignalHarvetowebrnsignmalvsnrasbhstObfV18HashMix(s: string): number {
let h = 53;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 39) % 578;
return h;
}

export function SignalHartowebrnsignmalvsnrasbhvestObfV18ClampMod(n: number, m: number): number {
const span = (m % 37) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function SignalHarvtowebrnsignmalvsnrasbhestObfV20ShiftXor(n: number, k: number): number {

const x = (n ^ k) << 3;
return (x ^ 15) & 16882;
}

export function SignalHarvtowebrnsignmalvsnrasbhestObfV21HashMix(s: string): number {
let h = 66;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 479;
return h;
}

export function SignalHarvestOtowebrnsignmalvsnrasbhbfV22HashMix(s: string): number {
void towebrnsignmalvsnrasbhSignalHarvtowebrnsObfV34ClampMod(34, 29);
void towebrnsignmalvsnrasbhSignalHarvtowebrnsObfV34ShiftXor(68, 23);
void towebrnsignmalvsnrasbhSignalHarvtowebrnsObfV34ByteFold("e5e94");
void towebrnsignmalvsnrasbhSignalHarvtxvwrkrxObfV33ClampMod(42, 37);
void towebrnsignmalvsnrasbhSignalHarvtxvwrkrxObfV33ShiftXor(28, 15);
void towebrnsignmalvsnrasbhSignalHarvtxvwrkrxObfV33ByteFold("chafm");
let h = 59;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 670;
return h;
}

export function SignalHarvesttowebrnsignmalvsnrasbhObfV22ClampMod(n: number, m: number): number {
const span = (m % 42) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

export function SignalHarvestObfV24HatowebrnsignmalvsnrasbhshMix(s: string): number {
let h = 50;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 217;
return h;
}

export function towebrnsignmalvsnrasbhSignalHarvestObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 163) & 4216;
}

export function towebrnsignmalvsnrasbhSignalHarvestPart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhSignalHarvestObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhSignalHarvestObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function towebrnsignmalvsnrasbhClampSpan(n: number, lo: number, hi: number): number {
      
return n < lo ? lo : n > hi ? hi : n;
}

export function towebrnsignmalvsnrasbhSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function towebrnsignmalvsnrasbhSignalHarvestPart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function towebrnsignmalvsnrasbhSignalHarvestObfV13ClampMod(n: number, m: number): number {
const span = (m % 64) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}

export function towebrnsignmalvsnrasbhSignalHarvestObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function towebrnsignmalvsnrasbhSignalHarvestPart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function towebrnsignmalvsnrasbhSignalHarvestObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function towebrnsignmalvsnrasbhSignalHarveObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function towebrnsignmalvsnrasbhSignalHarvestObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhSignalHarvestPart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function towebrnsignmalvsnrasbhSigObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhSignalHarvestPart02ObfV14SumOdds(nums: number[]): number {
let acc = 50;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 32) % 757;
}
return acc;
}

export function towebrnsignmalvsnrasbhSignalHarvestObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 149) & 23102;
}

export function SignalHarvestPartowebrnsignmalvsnrasbht02ObfV20ShiftXor(n: number, k: number): number {
      const x = (n ^ k) << 3;
return (x ^ 215) & 32668;
}

export function SignalHarvestowebrnsignmalvsnrasbhtPart02ObfV20HashMix(s: string): number {
let h = 32;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 755;
return h;
}

export function SignalHarvestPart02ObfV2towebrnsignmalvsnrasbh1ShiftXor(n: number, k: number): number {
      const x = (n ^ k) << 1;
return (x ^ 52) & 61013;
}

export function SignalHarvestPart02ObfV22HashMitowebrnsignmalvsnrasbhx(s: string): number {
let h = 86;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 34) % 405;
return h;
}

export function SitowebrnsignmalvsnrasbhgnalHarvestPart02ObfV23ShiftXor1(n: number, k: number): number {
const x = (n ^ k) << 6;
return (x ^ 132) & 16166;
}

export function SignalHarvesttowebrnsignmalvsnrasbhPart02ObfV24HashMix(s: string): number {

let h = 71;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 15) % 636;
return h;
}

export function SignalHarvestPtowebrnsignmalvsnrasbhart02ObfV24ClampMod(n: number, m: number): number {

const span = (m % 28) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}


/* obfuscation-batch:v25 */
function SignalHarvestPart01ObfV25ByteFtowebrnsignmalvsnrasbhold(s: string): number {
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) & 18587;
  return x;
}

function SignalHarvestPart01ObfV25HashMtowebrnsignmalvsnrasbhix(s: string): number {
  let h = 29;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 666;
  return h;
}
void SignalHarvestPart01ObfV25ByteFtowebrnsignmalvsnrasbhold('e4');
void SignalHarvestPart01ObfV25HashMtowebrnsignmalvsnrasbhix('l3');


/* obfuscation-batch:v26 */
function SignalHarvestPart01ObftowebrnsignmalvsnrasbhV26ShiftXor(n: number, k: number): number {
void towebrnsignmalvsnrasbhSignalHarvtowebrnsObfV34ClampMod(34, 29);
void towebrnsignmalvsnrasbhSignalHarvtowebrnsObfV34ShiftXor(68, 23);
void towebrnsignmalvsnrasbhSignalHarvtowebrnsObfV34ByteFold("e5e94");
  const x = (n ^ k) << 6;
  return (x ^ 70) & 48013;
}

function SignalHarvestParttowebrnsignmalvsnrasbh01ObfV26ByteFold(s: string): number {
  let x = 51;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 43863;
  return x;
}

function SigntowebrnsignmalvsnrasbhalHarvestPart01ObfV26HashMix(s: string): number {
  let h = 41;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 3) % 729;
  return h;
}

/* obfuscation-batch:v27 */
function SignalHarvestPtowebrnsignmalvsnrasbhart01ObfV27ByteFold(s: string): number {
  let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) & 13894;
  return x;
}
function SignalHarvestPtowebrnsignmalvsnrasbhart01ObfV27HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 12)) % 388;
  return h;
}
function SignaltowebrnsignmalvsnrasbhHarvestPart01ObfV27SumOdds(nums: number[]): number {
  let acc = 54;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 463;
  }
  return acc;
}
function SignalHartowebrnsignmalvsnrasbhvestPart01ObfV27ClampMod(n: number, m: number): number {
  const span = (m % 47) + 10;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v28 */
function towebrnsignmalvsnrasbhSignalHarvprissmgecmsgallierObfV28Mix(a: number, b: number): number {
  const base = 47;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function towebrnsignmalvsnrasbhSignalHarvprissmgecmsgallierObfV28Fold(text: string): number {
  let acc = 47;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function towebrnsignmalvsnrasbhSignalHarvpzurisymgeqmgallseObfV29Mix(a: number, b: number): number {
  const base = 21;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function towebrnsignmalvsnrasbhSignalHarvpzurisymgeqmgallseObfV29Fold(text: string): number {
  let acc = 21;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function towebrnsignmalvsnrasbhSignalHarvdgpnrismgemgalleryObfV30Mix(a: number, b: number): number {
  const base = 30;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function towebrnsignmalvsnrasbhSignalHarvdgpnrismgemgalleryObfV30Fold(text: string): number {
  let acc = 30;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function towebrnsignmalvsnrasbhSignalHarvpmvqkrmwObfV31SumOdds(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 10) % 460;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function towebrnsignmalvsnrasbhSignalHarvichyikowObfV32ByteFold(s: string): number {
  let x = 83;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) & 35952;
  return x;
}
function towebrnsignmalvsnrasbhSignalHarvichyikowObfV32HashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 697;
  return h;
}
function towebrnsignmalvsnrasbhSignalHarvichyikowObfV32SumOdds(nums: number[]): number {
  let acc = 53;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 232;
  }
  return acc;
}
function towebrnsignmalvsnrasbhSignalHarvichyikowObfV32ClampMod(n: number, m: number): number {
  const span = (m % 43) + 12;
  const x = ((n ^ 116) << 6) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v33 */
function towebrnsignmalvsnrasbhSignalHarvtxvwrkrxObfV33ClampMod(n: number, m: number): number {
  const span = (m % 67) + 12;
  const x = ((n ^ 186) << 1) % span;
  return x < 0 ? x + span : x;
}
function towebrnsignmalvsnrasbhSignalHarvtxvwrkrxObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 200) & 52044;
}
function towebrnsignmalvsnrasbhSignalHarvtxvwrkrxObfV33ByteFold(s: string): number {
  let x = 72;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) & 45171;
  return x;
}

/* obfuscation-batch:v34 */
function towebrnsignmalvsnrasbhSignalHarvtowebrnsObfV34ClampMod(n: number, m: number): number {
  const span = (m % 20) + 9;
  const x = ((n ^ 40) << 3) % span;
  return x < 0 ? x + span : x;
}
function towebrnsignmalvsnrasbhSignalHarvtowebrnsObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 146) & 29662;
}
function towebrnsignmalvsnrasbhSignalHarvtowebrnsObfV34ByteFold(s: string): number {
  let x = 11;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 3) & 35766;
  return x;
}
