/* autosetup-split:v1 */

export function PublicPintowebrnsignmalvsnrasbhObfV30Fold(text: string): number {
let acc = 31;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function PublicObfV33BtowebrnsignmalvsnrasbhyteFold(s: string): number {
let x = 53;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) & 47070;
return x;
}

export function PublicPingObfV25ShiftXtowebrnsignmalvsnrasbhor(n: number, k: number): number {

const x = (n ^ k) << 4;
return (x ^ 84) & 22111;
}

export function PublicPiObfV28Ftowebrnsignmalvsnrasbhold(text: string): number {
let acc = 75;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function PublicPObfV2towebrnsignmalvsnrasbh9Mix(a: number, b: number): number {
const base = 38;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function towebrnsignmalvsnrasbhPublichyikowrdfpagObfV32ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 17) & 50702;
}

export function towebrnsignmalvsnrasbhPublichyikowrdfpagObfV32ByteFold(s: string): number {
let x = 25;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) & 56799;
return x;
}

export function PublicObfVtowebrnsignmalvsnrasbh33HashMix(s: string): number {
void towebrnsignmalvsnrasbhPubltowebrnsignmalObfV34ClampMod(80, 67);
let h = 60;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 3)) % 196;
return h;
}

export function PublicPingObfV26SumOdtowebrnsignmalvsnrasbhds(nums: number[]): number {
let acc = 33;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 30) % 631;
}
return acc;
}

export function PublictowebrnsignmalvsnrasbhPingObfV27ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 144) & 56409;
}

export function PublicPingPart01ObfV18ClamtowebrnsignmalvsnrasbhpMod(n: number, m: number): number {

            const span = (m % 23) + 8;
const x = n % span;
return x < 0 ? x + span : x;
}

export function PublicPingPart03ObfV25SumOddtowebrnsignmalvsnrasbhs(nums: number[]): number {

let acc = 86;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 26) % 492;
}
return acc;
}

export function PublitowebrnsignmalvsnrasbhcPingPart03ObfV25ByteFold(s: string): number {
let x = 65;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 36) & 57390;
return x;
}

export function PublicPObfV29towebrnsignmalvsnrasbhFold(text: string): number {
let acc = 38;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

export function PublicPingObfVtowebrnsignmalvsnrasbh18ByteFold(s: string): number {
void towebrnsignmalvsnrasbhPubltowebrnsignmalObfV34ClampMod(80, 67);
            let x = 69;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) ^ 143;
return x & 4040;
}

export function PublicPingObfV24ShiftXotowebrnsignmalvsnrasbhr(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 176) & 15860;
}

export function PubtowebrnsignmalvsnrasbhlicPingPart01ObfV17ByteFold(s: string): number {
let x = 79;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) ^ 156;
return x & 16690;
}

export function PublicPingPart03ObfVtowebrnsignmalvsnrasbh25ShiftXor(n: number, k: number): number {
void towebrnsignmalvsnrasbhPubltowebrnsignmalObfV34ClampMod(80, 67);
const x = (n ^ k) << 3;
return (x ^ 141) & 35594;
}

export function PubtowebrnsignmalvsnrasbhlicObfV29HashMix(s: string): number {
let h = 48;
for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 23)) % 375;
return h;
}

export function PublicObfV29ClamtowebrnsignmalvsnrasbhpMod(n: number, m: number): number {
const span = (m % 59) + 6;
const x = ((n ^ 7) << 4) % span;
return x < 0 ? x + span : x;
}

/* obfuscation-batch:v34 */
function towebrnsignmalvsnrasbhPubltowebrnsignmalObfV34ClampMod(n: number, m: number): number {
  const span = (m % 44) + 10;
  const x = ((n ^ 20) << 6) % span;
  return x < 0 ? x + span : x;
}
