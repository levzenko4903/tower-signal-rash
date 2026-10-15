import {
  BASE_LOCK_SCORE,
  CHAIN_MULT_CAP,
  CHAIN_STEP,
  HAZARD_BASE_PCT,
  HAZARD_CAP_PCT,
  HAZARD_START_SECT,
  HAZARD_STEP_PCT,
  HAZARD_W,
  HOLD_MIN_MS,
  HOLD_MS,
  HOLD_STEP_MS,
  HOP_MIN_MS,
  HOP_MS,
  HOP_STEP_MS,
  LANE_W,
  LOCKS_PER_SECTOR,
  MAX_TRIM,
  PERFECT_BONUS,
  PERFECT_REGAIN,
  PERFECT_TOL,
  SLOT_STEP,
  START_BEAM_W,
} from '../constants/config';

export type RelayVariant = 'normal' | 'perfect' | 'damaged';

export interface Relay {
  x: number;
  w: number;
  variant: RelayVariant;
}

export type LockKind = 'perfect' | 'lock' | 'miss';

export interface LockOutcome {
  kind: LockKind;
  /** Left edge of the relay that gets placed (grid aligned). */
  x: number;
  /** Width of the relay that gets placed / of the surviving beam. */
  w: number;
}

export interface HazardBand {
  x: number;
  w: number;
}

/** Snap any lane coordinate onto the hop grid. */
export function snapToGrid(value: number): number {
  const snapped = Math.round(value / SLOT_STEP) * SLOT_STEP;
  return Math.min(Math.max(snapped, 0), Math.max(0, LANE_W - 1));
}

/** The foundation relay sits grid-aligned at the lane centre. */
export function makeFoundation(): Relay {
  const centred = snapToGrid((LANE_W - START_BEAM_W) / 2);
  return {x: clampX(centred, START_BEAM_W), w: START_BEAM_W, variant: 'normal'};
}

export function clampX(x: number, w: number): number {
  const max = Math.max(0, LANE_W - w);
  return Math.min(Math.max(Math.round(x), 0), max);
}

/** Highest grid column a beam of this width can occupy without leaving the lane. */
export function maxSlotFor(beamW: number): number {
  return Math.max(0, Math.floor((LANE_W - beamW) / SLOT_STEP));
}

export function resolveLock(prev: Relay, beamX: number, beamW: number): LockOutcome {
  const offset = Math.abs(beamX - prev.x);

  if (offset <= PERFECT_TOL) {
    const regained = Math.min(START_BEAM_W, beamW + PERFECT_REGAIN);
    return {kind: 'perfect', x: prev.x, w: regained};
  }

  const left = Math.max(prev.x, beamX);
  const right = Math.min(prev.x + prev.w, beamX + beamW);
  const overlap = right - left;

  if (overlap <= 0) {
    return {kind: 'miss', x: beamX, w: beamW};
  }

  const trimmed = Math.max(overlap, beamW - MAX_TRIM);
  return {kind: 'lock', x: left, w: Math.round(trimmed)};
}

export function sectorFor(locks: number): number {
  return 1 + Math.floor(Math.max(0, locks) / LOCKS_PER_SECTOR);
}

export function hazardPctFor(sector: number): number {
  if (sector < HAZARD_START_SECT) {
    return 0;
  }
  const pct = HAZARD_BASE_PCT + (sector - HAZARD_START_SECT) * HAZARD_STEP_PCT;
  return Math.min(HAZARD_CAP_PCT, pct);
}

export function rollHazard(sector: number): HazardBand | null {
  const pct = hazardPctFor(sector);
  if (pct <= 0 || Math.random() * 100 >= pct) {
    return null;
  }
  const maxX = Math.max(0, LANE_W - HAZARD_W);
  return {x: Math.round(Math.random() * maxX), w: HAZARD_W};
}

export function beamHitsHazard(
  hazard: HazardBand | null,
  beamX: number,
  beamW: number,
): boolean {
  if (!hazard) {
    return false;
  }
  const centre = beamX + beamW / 2;
  return centre >= hazard.x && centre <= hazard.x + hazard.w;
}

export function scoreFor(perfect: boolean, chain: number): number {
  const base = BASE_LOCK_SCORE + (perfect ? PERFECT_BONUS : 0);
  const mult = Math.min(1 + CHAIN_STEP * Math.max(0, chain), CHAIN_MULT_CAP);
  return Math.floor(base * mult);
}

export function hopMsFor(sector: number): number {
  return Math.max(HOP_MIN_MS, HOP_MS - (sector - 1) * HOP_STEP_MS);
}

export function holdMsFor(sector: number): number {
  return Math.max(HOLD_MIN_MS, HOLD_MS - (sector - 1) * HOLD_STEP_MS);
}

/** Readable "pulse rate" for the HUD  -  derived, never stored. */
export function pulseFor(sector: number): number {
  return hopMsFor(sector) + holdMsFor(sector);
}
