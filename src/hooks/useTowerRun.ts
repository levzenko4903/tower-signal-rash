import {useCallback, useRef, useState} from 'react';

import {
  INTEGRITY_MAX,
  MIN_BEAM_W,
  SECTOR_BONUS,
  START_BEAM_W,
} from '../constants/config';
import {
  beamHitsHazard,
  clampX,
  HazardBand,
  LockKind,
  makeFoundation,
  Relay,
  resolveLock,
  rollHazard,
  scoreFor,
  sectorFor,
} from '../game/towerEngine';

export type Verdict = 'uplink' | 'overload' | 'timeout';

export interface RunState {
  stack: Relay[];
  beamW: number;
  locks: number;
  sector: number;
  integrity: number;
  score: number;
  chain: number;
  bestChain: number;
  perfects: number;
  hazard: HazardBand | null;
  over: boolean;
  verdict: Verdict | null;
}

export interface RunResult {
  score: number;
  sector: number;
  perfects: number;
  bestChain: number;
  locks: number;
  verdict: Verdict;
}

export interface LockFeedback {
  kind: LockKind;
  hazardHit: boolean;
  gained: number;
  sectorUp: boolean;
  over: boolean;
  ignored: boolean;
}

function initialState(): RunState {
  return {
    stack: [makeFoundation()],
    beamW: START_BEAM_W,
    locks: 0,
    sector: 1,
    integrity: INTEGRITY_MAX,
    score: 0,
    chain: 0,
    bestChain: 0,
    perfects: 0,
    hazard: null,
    over: false,
    verdict: null,
  };
}

const IGNORED: LockFeedback = {
  kind: 'miss',
  hazardHit: false,
  gained: 0,
  sectorUp: false,
  over: false,
  ignored: true,
};

export function useTowerRun() {
  const [state, setState] = useState<RunState>(initialState);
  const ref = useRef(state);

  const commit = useCallback((next: RunState) => {
    ref.current = next;
    setState(next);
  }, []);

  const lock = useCallback(
    (beamX: number): LockFeedback => {
      const prevState = ref.current;
      if (prevState.over) {
        return IGNORED;
      }

      const below = prevState.stack[prevState.stack.length - 1];
      const outcome = resolveLock(below, beamX, prevState.beamW);
      const hazardHit = beamHitsHazard(prevState.hazard, beamX, prevState.beamW);

      let integrity = prevState.integrity;
      let chain = prevState.chain;
      let perfects = prevState.perfects;
      let locks = prevState.locks;
      let beamW = prevState.beamW;
      let gained = 0;
      let stack = prevState.stack;

      if (outcome.kind === 'miss') {
        integrity -= 1;
        chain = 0;
      } else {
        gained = scoreFor(outcome.kind === 'perfect', chain);
        if (outcome.kind === 'perfect') {
          perfects += 1;
          chain += 1;
        } else {
          chain = 0;
        }
        if (hazardHit) {
          integrity -= 1;
          chain = 0;
        }
        const variant = hazardHit
          ? 'damaged'
          : outcome.kind === 'perfect'
          ? 'perfect'
          : 'normal';
        const placed: Relay = {
          x: clampX(outcome.x, outcome.w),
          w: outcome.w,
          variant,
        };
        stack = prevState.stack.concat([placed]);
        beamW = outcome.w;
        locks += 1;
      }

      const sector = sectorFor(locks);
      const sectorUp = sector > prevState.sector;
      if (sectorUp) {
        gained += SECTOR_BONUS;
      }

      const bestChain = Math.max(prevState.bestChain, chain);
      const score = prevState.score + gained;

      let over = false;
      let verdict: Verdict | null = null;
      if (integrity <= 0) {
        over = true;
        verdict = 'uplink';
        integrity = 0;
      } else if (beamW < MIN_BEAM_W) {
        over = true;
        verdict = 'overload';
      }

      const next: RunState = {
        stack,
        beamW,
        locks,
        sector,
        integrity,
        score,
        chain,
        bestChain,
        perfects,
        hazard: over ? null : rollHazard(sector),
        over,
        verdict,
      };
      commit(next);

      return {
        kind: outcome.kind,
        hazardHit,
        gained,
        sectorUp,
        over,
        ignored: false,
      };
    },
    [commit],
  );

  const endRun = useCallback(
    (verdict: Verdict) => {
      const prevState = ref.current;
      if (prevState.over) {
        return;
      }
      commit({...prevState, over: true, verdict, hazard: null});
    },
    [commit],
  );

  const reset = useCallback(() => {
    commit(initialState());
  }, [commit]);

  return {state, stateRef: ref, lock, endRun, reset};
}
