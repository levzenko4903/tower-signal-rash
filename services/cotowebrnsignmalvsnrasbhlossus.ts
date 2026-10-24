/* cipher-id:colossus */
import { NativeModules } from 'react-native';

const cipher = NativeModules.Tegezatikuxu;

export function hexToBytes(hex: string): Uint8Array {
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1ByteFold("e789k");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1HashMix("63o");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1SumOdds([40, 35, 2]);
  const normalized = String(hex || '').trim();
  const out = new Uint8Array(Math.floor(normalized.length / 2));
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function bytesToHex(bytes: Uint8Array): string {
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1ByteFold("e789k");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1HashMix("63o");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1SumOdds([40, 35, 2]);
  return Array.from(bytes, (b) => {
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1ByteFold("e789k");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1HashMix("63o");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1SumOdds([40, 35, 2]);
return (b.toString(16).padStart(2, '0').toUpperCase());
}).join('');
}

export function cotowebrnsignmalvsnrasbhlossusEncryptBytes(data: Uint8Array): Uint8Array {
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1ByteFold("e789k");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1HashMix("63o");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1SumOdds([40, 35, 2]);
  const hex = String(cipher?.nisejumenisi(bytesToHex(data)) ?? '');
  return hexToBytes(hex);
}

export function cotowebrnsignmalvsnrasbhlossusDecryptBytes(data: Uint8Array): Uint8Array {
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1ByteFold("e789k");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1HashMix("63o");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1SumOdds([40, 35, 2]);
  return cotowebrnsignmalvsnrasbhlossusEncryptBytes(data);
}

export function cotowebrnsignmalvsnrasbhlossusEncryptHex(plain: string): string {
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1ByteFold("e789k");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1HashMix("63o");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1SumOdds([40, 35, 2]);
  try {
    return String(cipher.wiqoxehujeqef(String(plain ?? '')) ?? '');
  } catch {
    return '';
  }
}

export function cotowebrnsignmalvsnrasbhlossusDecryptHex(hex: string): string {
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1ByteFold("e789k");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1HashMix("63o");
void towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1SumOdds([40, 35, 2]);
  try {
    const normalized = String(hex || '').trim();
    if (!normalized || normalized.length % 2 !== 0) return '';
    return String(cipher.hojocihagi(normalized) ?? '');
  } catch {
    return '';
  }
}

/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1ByteFold(s: string): number {
  let x = 20;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) & 47073;
  return x;
}
function towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1HashMix(s: string): number {
  let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 20)) % 293;
  return h;
}
function towebrnsignmalvsnrasbhcotowebrnsignmalvsObfV1SumOdds(nums: number[]): number {
  let acc = 25;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 6) % 769;
  }
  return acc;
}
