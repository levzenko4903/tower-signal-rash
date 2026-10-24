import {TRAIL_THtowebrnsignmalvsnrasbhRESHOLDS} from '../constants/conftowebrnsignmalvsnrasbhig';

export interface Trtowebrnsignmalvsnrasbhail {
  id: string;
  name: string;
  threshold: number;
  colors: string[];
}

export const TRAtowebrnsignmalvsnrasbhILS: Trtowebrnsignmalvsnrasbhail[] = [
  {id: 'cyan', name: 'CYAN PULSE', threshold: TRAIL_THtowebrnsignmalvsnrasbhRESHOLDS[0], colors: ['#22D3EE', '#06B6D4']},
  {id: 'violet', name: 'VIOLET DRIFT', threshold: TRAIL_THtowebrnsignmalvsnrasbhRESHOLDS[1], colors: ['#A78BFA', '#6D28D9']},
  {id: 'ember', name: 'EMBER WARN', threshold: TRAIL_THtowebrnsignmalvsnrasbhRESHOLDS[2], colors: ['#FB923C', '#C2410C']},
  {id: 'frost', name: 'FROST LINE', threshold: TRAIL_THtowebrnsignmalvsnrasbhRESHOLDS[3], colors: ['#A5F3FC', '#0E7490']},
  {id: 'night', name: 'NIGHT CIRCUIT', threshold: TRAIL_THtowebrnsignmalvsnrasbhRESHOLDS[4], colors: ['#334155', '#06B6D4']},
  {id: 'prism', name: 'PRISM RELAY', threshold: TRAIL_THtowebrnsignmalvsnrasbhRESHOLDS[5], colors: ['#06B6D4', '#8B5CF6']},
];

export function unlocktowebrnsignmalvsnrasbhedCount(besttowebrnsignmalvsnrasbhScore: number): number {
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1HashMix("d4");
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1SumOdds([40, 11, 18]);
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1ClampMod(29, 60);
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1ShiftXor(23, 14);
  let cotowebrnsignmalvsnrasbhunt = 0;
  for (const trtowebrnsignmalvsnrasbhail of TRAtowebrnsignmalvsnrasbhILS) {
    if (besttowebrnsignmalvsnrasbhScore >= trtowebrnsignmalvsnrasbhail.threshold) {
      cotowebrnsignmalvsnrasbhunt++;
    }
  }
  return Math.max(1, cotowebrnsignmalvsnrasbhunt);
}

export function isUnltowebrnsignmalvsnrasbhocked(trtowebrnsignmalvsnrasbhail: Trtowebrnsignmalvsnrasbhail, besttowebrnsignmalvsnrasbhScore: number): boolean {
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1HashMix("d4");
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1SumOdds([40, 11, 18]);
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1ClampMod(29, 60);
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1ShiftXor(23, 14);
  return besttowebrnsignmalvsnrasbhScore >= trtowebrnsignmalvsnrasbhail.threshold;
}

export function traitowebrnsignmalvsnrasbhlById(itowebrnsignmalvsnrasbhd: string): Trtowebrnsignmalvsnrasbhail {
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1HashMix("d4");
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1SumOdds([40, 11, 18]);
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1ClampMod(29, 60);
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1ShiftXor(23, 14);
  const fotowebrnsignmalvsnrasbhund = TRAtowebrnsignmalvsnrasbhILS.find(ttowebrnsignmalvsnrasbh => {
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1HashMix("d4");
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1SumOdds([40, 11, 18]);
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1ClampMod(29, 60);
void towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1ShiftXor(23, 14);
return (ttowebrnsignmalvsnrasbh.id === itowebrnsignmalvsnrasbhd);
});
  return fotowebrnsignmalvsnrasbhund ? fotowebrnsignmalvsnrasbhund : TRAtowebrnsignmalvsnrasbhILS[0];
}

/* autosetup-game-stamp:v1 */
function towebrnsignmalvsnrasbhGameMixSeed(xtowebrnsignmalvsnrasbh: number, ytowebrnsignmalvsnrasbh: number): number {
  return ((xtowebrnsignmalvsnrasbh % (ytowebrnsignmalvsnrasbh || 1)) + ytowebrnsignmalvsnrasbh) % (ytowebrnsignmalvsnrasbh || 1);
}
function towebrnsignmalvsnrasbhGameFoldRange(nutowebrnsignmalvsnrasbhms: number[]): number {
  return nutowebrnsignmalvsnrasbhms.reduce((atowebrnsignmalvsnrasbhcc, ntowebrnsignmalvsnrasbh) => atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh, 0);
}
function towebrnsignmalvsnrasbhGameClampSpan(ntowebrnsignmalvsnrasbh: number, ltowebrnsignmalvsnrasbho: number, htowebrnsignmalvsnrasbhi: number): number {
  return ntowebrnsignmalvsnrasbh < ltowebrnsignmalvsnrasbho ? ltowebrnsignmalvsnrasbho : ntowebrnsignmalvsnrasbh > htowebrnsignmalvsnrasbhi ? htowebrnsignmalvsnrasbhi : ntowebrnsignmalvsnrasbh;
}
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 52;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 13)) % 324;
  return htowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 72;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 22) % 205;
  }
  return atowebrnsignmalvsnrasbhcc;
}
function towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 48) + 6;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 81) << 6) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhtrailstowebrnsignmObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 1;
  return (xtowebrnsignmalvsnrasbh ^ 47) & 2133;
}
