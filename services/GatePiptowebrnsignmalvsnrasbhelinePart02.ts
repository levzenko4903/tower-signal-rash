/* autosetup-split:v1 */

export function GatePipelineObfV22ByteFoldtowebrnsignmalvsnrasbh(s: string): number {
        let x = 89;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 42) & 65535;
return x;
}

export function GatePipelineObfV22ClamptowebrnsignmalvsnrasbhMod(n: number, m: number): number {
const span = (m % 49) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function GatePipelineObfV25towebrnsignmalvsnrasbhClampMod(n: number, m: number): number {
const span = (m % 57) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}

export function GatePipelineObfV25BytowebrnsignmalvsnrasbhteFold(s: string): number {
let x = 15;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 3) & 52064;
return x;
}

export function GatePipelineObfV26SumOdtowebrnsignmalvsnrasbhds(nums: number[]): number {
let acc = 21;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 21) % 704;
}
return acc;
}

export function GatePipelineObfV26ShiftowebrnsignmalvsnrasbhtXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 147) & 39826;
}

export function GatePipelineObfV27towebrnsignmalvsnrasbhByteFold(s: string): number {
let x = 12;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) & 28889;
return x;
}

export function towebrnsignmalvsnrasbhGatePipelipzurisymgeqmgallseObfV29Fold(text: string): number {
let acc = 90;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function towebrnsignmalvsnrasbhGatepmvqkrmwismgemObfV31ClampMod(n: number, m: number): number {
const span = (m % 36) + 5;
const x = ((n ^ 64) << 7) % span;
return x < 0 ? x + span : x;
}

export function towebrnsignmalvsnrasbhGatepmvqkrmwismgemObfV31ByteFold(s: string): number {
let x = 49;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) & 33088;
return x;
}

export function towebrnsignmalvsnrasbhGateichyikowrdfpagObfV32SumOdds(nums: number[]): number {
let acc = 85;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 41) % 798;
}
return acc;
}

export function towebrnsignmalvsnrasbhGateichyikowrdfpagObfV32ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 6;
return (x ^ 180) & 34565;
}

export function GatePipelineObfV18HatowebrnsignmalvsnrasbhshMix(s: string): number {
let h = 86;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 628;
return h;
}

export function towebrnsignmalvsnrasbhGatePipelineObfV14ClampMod(n: number, m: number): number {
const span = (m % 14) + 8;
const x = n % span;
return x < 0 ? x + span : x;
}

export function towebrnsignmalvsnrasbhGatePipelineObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 87) & 61133;
}

export function towebrnsignmalvsnrasbhGatePipelineObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhGatePipelineObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function towebrnsignmalvsnrasbhGatePipelineObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhGatePipelinePart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function towebrnsignmalvsnrasbhGatObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function towebrnsignmalvsnrasbhGatePipelineObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function towebrnsignmalvsnrasbhGatePipelineObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhGatePipelinePart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function towebrnsignmalvsnrasbhGatObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhGatePipelinePart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function towebrnsignmalvsnrasbhGatePipelinePart01ObfV13SumOdds(nums: number[]): number {
let acc = 63;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 36) % 287;
}
return acc;
}

export function towebrnsignmalvsnrasbhGatePipelineObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function towebrnsignmalvsnrasbhGatePipelinObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function towebrnsignmalvsnrasbhGatObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function towebrnsignmalvsnrasbhGatePipelineObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function towebrnsignmalvsnrasbhGatePipelinePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function towebrnsignmalvsnrasbhGatePipelineObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function towebrnsignmalvsnrasbhGatePipelineObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function towebrnsignmalvsnrasbhGatePipelinePart02ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function towebrnsignmalvsnrasbhGatePipelinePart02ObfV13ByteFold(s: string): number {
let x = 57;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 3) ^ 40;
return x & 64880;
}

export function towebrnsignmalvsnrasbhGatePipelinePart02ObfV13ClampMod(n: number, m: number): number {
const span = (m % 51) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function towebrnsignmalvsnrasbhGatePipelinePart01ObfV14ClampMod(n: number, m: number): number {
const span = (m % 22) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function towebrnsignmalvsnrasbhGatePipelineObfV15ByteFold(s: string): number {
let x = 36;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) ^ 121;
return x & 12689;
}

export function towebrnsignmalvsnrasbhGatePipelineObfV16ClampMod(n: number, m: number): number {
const span = (m % 53) + 6;
const x = n % span;
return x < 0 ? x + span : x;
}

export function GatePipelineObfV1towebrnsignmalvsnrasbh9ByteFold(s: string): number {
let x = 87;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) ^ 230;
return x & 11422;
}

export function GatePipelineObfV21HtowebrnsignmalvsnrasbhashMix(s: string): number {
          let h = 81;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 30) % 810;
return h;
}

export function GatePipelinePart01ObfV22CtowebrnsignmalvsnrasbhlampMod(n: number, m: number): number {
const span = (m % 44) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function GatePipeltowebrnsignmalvsnrasbhinePart01ObfV23ShiftXor1(n: number, k: number): number {
      const x = (n ^ k) << 3;
return (x ^ 117) & 56525;
}

export function GatePipelinePartowebrnsignmalvsnrasbht01ObfV24HashMix(s: string): number {
let h = 61;
for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 12) % 681;
return h;
}

export function GatowebrnsignmalvsnrasbhtePipelinePart01ObfV25SumOdds(nums: number[]): number {
let acc = 37;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 4) % 469;
}
return acc;
}

/* obfuscation-batch:v33 */
function towebrnsignmalvsnrasbhGatePiptowebrnsignObfV33HashMix(s: string): number {
  let h = 23;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 28)) % 123;
  return h;
}
void towebrnsignmalvsnrasbhGatePiptowebrnsignObfV33HashMix("6p2no");
