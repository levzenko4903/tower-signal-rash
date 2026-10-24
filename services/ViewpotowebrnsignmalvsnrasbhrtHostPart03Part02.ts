/* autosetup-split:v1 */

export function towebrnsignmalvsnrasbhViewportHopzurisymgeqmgallseObfV28Mix(a: number, b: number): number {
const base = 61;
const denom = (b % 97) + 3;
return ((a + base) % denom) ^ (base & 15);
}

export function towebrnsignmalvsnrasbhViewportHopzurisymgeqmgallseObfV28Fold(text: string): number {
let acc = 61;
for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
return acc;
}

/* obfuscation-batch:v29 */
function towebrnsignmalvsnrasbhViewportHostPpmvqkObfV29ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 90) & 50118;
}
void towebrnsignmalvsnrasbhViewportHostPpmvqkObfV29ShiftXor(80, 19);

/* obfuscation-batch:v30 */
function towebrnsignmalvsnrasbhViewportHoichyikowObfV30ByteFold(s: string): number {
  let x = 49;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 33676;
  return x;
}
function towebrnsignmalvsnrasbhViewportHoichyikowObfV30HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 25)) % 341;
  return h;
}
void towebrnsignmalvsnrasbhViewportHoichyikowObfV30ByteFold("beh");
void towebrnsignmalvsnrasbhViewportHoichyikowObfV30HashMix("he1");

/* obfuscation-batch:v31 */
function ViewpotowebrnsignmalvsnrasbhObfV31ByteFold(s: string): number {
  let x = 37;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 12916;
  return x;
}
function ViewpoObfV31HashMitowebrnsignmalvsnrasbhx(s: string): number {
  let h = 35;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 18)) % 97;
  return h;
}
void ViewpotowebrnsignmalvsnrasbhObfV31ByteFold("j6l");
void ViewpoObfV31HashMitowebrnsignmalvsnrasbhx("7oj6dc");

/* obfuscation-batch:v32 */
function towebrnsignmalvsnrasbhViewpotowebrnsignmObfV32ClampMod(n: number, m: number): number {
  const span = (m % 31) + 12;
  const x = ((n ^ 44) << 2) % span;
  return x < 0 ? x + span : x;
}
function towebrnsignmalvsnrasbhViewpotowebrnsignmObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 94) & 41431;
}
function towebrnsignmalvsnrasbhViewpotowebrnsignmObfV32ByteFold(s: string): number {
  let x = 68;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 35) & 11718;
  return x;
}
void towebrnsignmalvsnrasbhViewpotowebrnsignmObfV32ClampMod(62, 73);
void towebrnsignmalvsnrasbhViewpotowebrnsignmObfV32ShiftXor(80, 3);
void towebrnsignmalvsnrasbhViewpotowebrnsignmObfV32ByteFold("ij");
