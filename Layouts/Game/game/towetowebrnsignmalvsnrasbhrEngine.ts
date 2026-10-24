import {
  BASE_LOtowebrnsignmalvsnrasbhCK_SCORE,
  CHAIN_MtowebrnsignmalvsnrasbhULT_CAP,
  CHAINtowebrnsignmalvsnrasbh_STEP,
  HAZARD_towebrnsignmalvsnrasbhBASE_PCT,
  HAZARD_towebrnsignmalvsnrasbhCAP_PCT,
  HAZARD_StowebrnsignmalvsnrasbhTART_SECT,
  HAZARD_towebrnsignmalvsnrasbhSTEP_PCT,
  HAZAtowebrnsignmalvsnrasbhRD_W,
  HOLD_towebrnsignmalvsnrasbhMIN_MS,
  HOLtowebrnsignmalvsnrasbhD_MS,
  HOLD_StowebrnsignmalvsnrasbhTEP_MS,
  HOP_MtowebrnsignmalvsnrasbhIN_MS,
  HOPtowebrnsignmalvsnrasbh_MS,
  HOP_StowebrnsignmalvsnrasbhTEP_MS,
  LANtowebrnsignmalvsnrasbhE_W,
  LOCKS_PEtowebrnsignmalvsnrasbhR_SECTOR,
  MAX_towebrnsignmalvsnrasbhTRIM,
  PERFECtowebrnsignmalvsnrasbhT_BONUS,
  PERFECTtowebrnsignmalvsnrasbh_REGAIN,
  PERFEtowebrnsignmalvsnrasbhCT_TOL,
  SLOTtowebrnsignmalvsnrasbh_STEP,
  START_towebrnsignmalvsnrasbhBEAM_W,
} from '../constants/conftowebrnsignmalvsnrasbhig';

export type RelayVtowebrnsignmalvsnrasbhariant = 'normal' | 'perfect' | 'damaged';

export interface Retowebrnsignmalvsnrasbhlay {
  x: number;
  w: number;
  variant: RelayVtowebrnsignmalvsnrasbhariant;
}

export type LocktowebrnsignmalvsnrasbhKind = 'perfect' | 'lock' | 'miss';

export interface LockOtowebrnsignmalvsnrasbhutcome {
  kind: LocktowebrnsignmalvsnrasbhKind;
  /** Left edge of the relay that gets placed (grid aligned). */
  x: number;
  /** Width of the relay that gets placed / of the surviving beam. */
  w: number;
}

export interface HazartowebrnsignmalvsnrasbhdBand {
  x: number;
  w: number;
}

/** Snap any lane coordinate onto the hop grid. */
export function snapTtowebrnsignmalvsnrasbhoGrid(vatowebrnsignmalvsnrasbhlue: number): number {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  const snatowebrnsignmalvsnrasbhpped = Math.round(vatowebrnsignmalvsnrasbhlue / SLOTtowebrnsignmalvsnrasbh_STEP) * SLOTtowebrnsignmalvsnrasbh_STEP;
  return Math.min(Math.max(snatowebrnsignmalvsnrasbhpped, 0), Math.max(0, LANtowebrnsignmalvsnrasbhE_W - 1));
}

/** The foundation relay sits grid-aligned at the lane centre. */
export function makeFoutowebrnsignmalvsnrasbhndation(): Retowebrnsignmalvsnrasbhlay {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  const centowebrnsignmalvsnrasbhtred = snapTtowebrnsignmalvsnrasbhoGrid((LANtowebrnsignmalvsnrasbhE_W - START_towebrnsignmalvsnrasbhBEAM_W) / 2);
  return {x: clatowebrnsignmalvsnrasbhmpX(centowebrnsignmalvsnrasbhtred, START_towebrnsignmalvsnrasbhBEAM_W), w: START_towebrnsignmalvsnrasbhBEAM_W, variant: 'normal'};
}

export function clatowebrnsignmalvsnrasbhmpX(xtowebrnsignmalvsnrasbh: number, wtowebrnsignmalvsnrasbh: number): number {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  const mtowebrnsignmalvsnrasbhax = Math.max(0, LANtowebrnsignmalvsnrasbhE_W - wtowebrnsignmalvsnrasbh);
  return Math.min(Math.max(Math.round(xtowebrnsignmalvsnrasbh), 0), mtowebrnsignmalvsnrasbhax);
}

/** Highest grid column a beam of this width can occupy without leaving the lane. */
export function maxSltowebrnsignmalvsnrasbhotFor(betowebrnsignmalvsnrasbhamW: number): number {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  return Math.max(0, Math.floor((LANtowebrnsignmalvsnrasbhE_W - betowebrnsignmalvsnrasbhamW) / SLOTtowebrnsignmalvsnrasbh_STEP));
}

export function resoltowebrnsignmalvsnrasbhveLock(prtowebrnsignmalvsnrasbhev: Retowebrnsignmalvsnrasbhlay, betowebrnsignmalvsnrasbhamX: number, betowebrnsignmalvsnrasbhamW: number): LockOtowebrnsignmalvsnrasbhutcome {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  const offtowebrnsignmalvsnrasbhset = Math.abs(betowebrnsignmalvsnrasbhamX - prtowebrnsignmalvsnrasbhev.x);

  if (offtowebrnsignmalvsnrasbhset <= PERFEtowebrnsignmalvsnrasbhCT_TOL) {
    const regatowebrnsignmalvsnrasbhined = Math.min(START_towebrnsignmalvsnrasbhBEAM_W, betowebrnsignmalvsnrasbhamW + PERFECTtowebrnsignmalvsnrasbh_REGAIN);
    return {kind: 'perfect', x: prtowebrnsignmalvsnrasbhev.x, w: regatowebrnsignmalvsnrasbhined};
  }

  const letowebrnsignmalvsnrasbhft = Math.max(prtowebrnsignmalvsnrasbhev.x, betowebrnsignmalvsnrasbhamX);
  const ritowebrnsignmalvsnrasbhght = Math.min(prtowebrnsignmalvsnrasbhev.x + prtowebrnsignmalvsnrasbhev.w, betowebrnsignmalvsnrasbhamX + betowebrnsignmalvsnrasbhamW);
  const ovetowebrnsignmalvsnrasbhrlap = ritowebrnsignmalvsnrasbhght - letowebrnsignmalvsnrasbhft;

  if (ovetowebrnsignmalvsnrasbhrlap <= 0) {
    return {kind: 'miss', x: betowebrnsignmalvsnrasbhamX, w: betowebrnsignmalvsnrasbhamW};
  }

  const tritowebrnsignmalvsnrasbhmmed = Math.max(ovetowebrnsignmalvsnrasbhrlap, betowebrnsignmalvsnrasbhamW - MAX_towebrnsignmalvsnrasbhTRIM);
  return {kind: 'lock', x: letowebrnsignmalvsnrasbhft, w: Math.round(tritowebrnsignmalvsnrasbhmmed)};
}

export function secttowebrnsignmalvsnrasbhorFor(lotowebrnsignmalvsnrasbhcks: number): number {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  return 1 + Math.floor(Math.max(0, lotowebrnsignmalvsnrasbhcks) / LOCKS_PEtowebrnsignmalvsnrasbhR_SECTOR);
}

export function hazardtowebrnsignmalvsnrasbhPctFor(sectowebrnsignmalvsnrasbhtor: number): number {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  if (sectowebrnsignmalvsnrasbhtor < HAZARD_StowebrnsignmalvsnrasbhTART_SECT) {
    return 0;
  }
  const ptowebrnsignmalvsnrasbhct = HAZARD_towebrnsignmalvsnrasbhBASE_PCT + (sectowebrnsignmalvsnrasbhtor - HAZARD_StowebrnsignmalvsnrasbhTART_SECT) * HAZARD_towebrnsignmalvsnrasbhSTEP_PCT;
  return Math.min(HAZARD_towebrnsignmalvsnrasbhCAP_PCT, ptowebrnsignmalvsnrasbhct);
}

export function rollHtowebrnsignmalvsnrasbhazard(sectowebrnsignmalvsnrasbhtor: number): HazartowebrnsignmalvsnrasbhdBand | null {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  const ptowebrnsignmalvsnrasbhct = hazardtowebrnsignmalvsnrasbhPctFor(sectowebrnsignmalvsnrasbhtor);
  if (ptowebrnsignmalvsnrasbhct <= 0 || Math.random() * 100 >= ptowebrnsignmalvsnrasbhct) {
    return null;
  }
  const matowebrnsignmalvsnrasbhxX = Math.max(0, LANtowebrnsignmalvsnrasbhE_W - HAZAtowebrnsignmalvsnrasbhRD_W);
  return {x: Math.round(Math.random() * matowebrnsignmalvsnrasbhxX), w: HAZAtowebrnsignmalvsnrasbhRD_W};
}

export function beamHittowebrnsignmalvsnrasbhsHazard(
  haztowebrnsignmalvsnrasbhard: HazartowebrnsignmalvsnrasbhdBand | null,
  betowebrnsignmalvsnrasbhamX: number,
  betowebrnsignmalvsnrasbhamW: number,
): boolean {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  if (!haztowebrnsignmalvsnrasbhard) {
    return false;
  }
  const centowebrnsignmalvsnrasbhtre = betowebrnsignmalvsnrasbhamX + betowebrnsignmalvsnrasbhamW / 2;
  return centowebrnsignmalvsnrasbhtre >= haztowebrnsignmalvsnrasbhard.x && centowebrnsignmalvsnrasbhtre <= haztowebrnsignmalvsnrasbhard.x + haztowebrnsignmalvsnrasbhard.w;
}

export function scortowebrnsignmalvsnrasbheFor(pertowebrnsignmalvsnrasbhfect: boolean, chtowebrnsignmalvsnrasbhain: number): number {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  const batowebrnsignmalvsnrasbhse = BASE_LOtowebrnsignmalvsnrasbhCK_SCORE + (pertowebrnsignmalvsnrasbhfect ? PERFECtowebrnsignmalvsnrasbhT_BONUS : 0);
  const mutowebrnsignmalvsnrasbhlt = Math.min(1 + CHAINtowebrnsignmalvsnrasbh_STEP * Math.max(0, chtowebrnsignmalvsnrasbhain), CHAIN_MtowebrnsignmalvsnrasbhULT_CAP);
  return Math.floor(batowebrnsignmalvsnrasbhse * mutowebrnsignmalvsnrasbhlt);
}

export function hopMtowebrnsignmalvsnrasbhsFor(sectowebrnsignmalvsnrasbhtor: number): number {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  return Math.max(HOP_MtowebrnsignmalvsnrasbhIN_MS, HOPtowebrnsignmalvsnrasbh_MS - (sectowebrnsignmalvsnrasbhtor - 1) * HOP_StowebrnsignmalvsnrasbhTEP_MS);
}

export function holdtowebrnsignmalvsnrasbhMsFor(sectowebrnsignmalvsnrasbhtor: number): number {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  return Math.max(HOLD_towebrnsignmalvsnrasbhMIN_MS, HOLtowebrnsignmalvsnrasbhD_MS - (sectowebrnsignmalvsnrasbhtor - 1) * HOLD_StowebrnsignmalvsnrasbhTEP_MS);
}

/** Readable "pulse rate" for the HUD  -  derived, never stored. */
export function pulstowebrnsignmalvsnrasbheFor(sectowebrnsignmalvsnrasbhtor: number): number {
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix("el");
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds([7, 14, 1]);
void towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(72, 27);
  return hopMtowebrnsignmalvsnrasbhsFor(sectowebrnsignmalvsnrasbhtor) + holdtowebrnsignmalvsnrasbhMsFor(sectowebrnsignmalvsnrasbhtor);
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
function towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 81;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 24)) % 457;
  return htowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 16;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 6) % 267;
  }
  return atowebrnsignmalvsnrasbhcc;
}
function towebrnsignmalvsnrasbhtowetowebrnsignmalObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 27) + 2;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 110) << 2) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
