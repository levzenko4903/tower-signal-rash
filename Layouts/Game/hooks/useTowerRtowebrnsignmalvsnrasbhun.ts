import {useCallback, useRef, useState} from 'react';

import {
  INTEGRtowebrnsignmalvsnrasbhITY_MAX,
  MIN_BtowebrnsignmalvsnrasbhEAM_W,
  SECTORtowebrnsignmalvsnrasbh_BONUS,
  START_towebrnsignmalvsnrasbhBEAM_W,
} from '../constants/conftowebrnsignmalvsnrasbhig';
import {
  beamHittowebrnsignmalvsnrasbhsHazard,
  clatowebrnsignmalvsnrasbhmpX,
  HazartowebrnsignmalvsnrasbhdBand,
  LocktowebrnsignmalvsnrasbhKind,
  makeFoutowebrnsignmalvsnrasbhndation,
  Retowebrnsignmalvsnrasbhlay,
  resoltowebrnsignmalvsnrasbhveLock,
  rollHtowebrnsignmalvsnrasbhazard,
  scortowebrnsignmalvsnrasbheFor,
  secttowebrnsignmalvsnrasbhorFor,
} from '../game/towetowebrnsignmalvsnrasbhrEngine';
// autosetup-split-begin
import { towebrnsignmalvsnrasbhGameMixSeed, towebrnsignmalvsnrasbhGameClampSpan } from './useTowerRtowebrnsignmalvsnrasbhunPart01';
import { towebrnsignmalvsnrasbhGameFoldRange } from './useTowerRtowebrnsignmalvsnrasbhunPart02';
// autosetup-split-end

export type Vertowebrnsignmalvsnrasbhdict = 'uplink' | 'overload' | 'timeout';

export interface RunStowebrnsignmalvsnrasbhtate {
  stack: Retowebrnsignmalvsnrasbhlay[];
  beamW: number;
  locks: number;
  sector: number;
  integrity: number;
  score: number;
  chain: number;
  bestChain: number;
  perfects: number;
  hazard: HazartowebrnsignmalvsnrasbhdBand | null;
  over: boolean;
  verdict: Vertowebrnsignmalvsnrasbhdict | null;
}

export interface RunRtowebrnsignmalvsnrasbhesult {
  score: number;
  sector: number;
  perfects: number;
  bestChain: number;
  locks: number;
  verdict: Vertowebrnsignmalvsnrasbhdict;
}

export interface LockFetowebrnsignmalvsnrasbhedback {
  kind: LocktowebrnsignmalvsnrasbhKind;
  hazardHit: boolean;
  gained: number;
  sectorUp: boolean;
  over: boolean;
  ignored: boolean;
}

function initiatowebrnsignmalvsnrasbhlState(): RunStowebrnsignmalvsnrasbhtate {
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ShiftXor(2, 29);
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ByteFold("on2");
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1HashMix("cl8lil");
  return {
    stack: [makeFoutowebrnsignmalvsnrasbhndation()],
    beamW: START_towebrnsignmalvsnrasbhBEAM_W,
    locks: 0,
    sector: 1,
    integrity: INTEGRtowebrnsignmalvsnrasbhITY_MAX,
    score: 0,
    chain: 0,
    bestChain: 0,
    perfects: 0,
    hazard: null,
    over: false,
    verdict: null,
  };
}

const IGNtowebrnsignmalvsnrasbhORED: LockFetowebrnsignmalvsnrasbhedback = {
  kind: 'miss',
  hazardHit: false,
  gained: 0,
  sectorUp: false,
  over: false,
  ignored: true,
};

export function useTowerRtowebrnsignmalvsnrasbhun() {
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ShiftXor(2, 29);
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ByteFold("on2");
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1HashMix("cl8lil");
  const [sttowebrnsignmalvsnrasbhate, setStowebrnsignmalvsnrasbhtate] = useState<RunStowebrnsignmalvsnrasbhtate>(initiatowebrnsignmalvsnrasbhlState);
  const rtowebrnsignmalvsnrasbhef = useRef(sttowebrnsignmalvsnrasbhate);

  const comtowebrnsignmalvsnrasbhmit = useCallback((netowebrnsignmalvsnrasbhxt: RunStowebrnsignmalvsnrasbhtate) => {
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ShiftXor(2, 29);
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ByteFold("on2");
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1HashMix("cl8lil");
    rtowebrnsignmalvsnrasbhef.current = netowebrnsignmalvsnrasbhxt;
    setStowebrnsignmalvsnrasbhtate(netowebrnsignmalvsnrasbhxt);
  }, []);

  const lotowebrnsignmalvsnrasbhck = useCallback(
    (betowebrnsignmalvsnrasbhamX: number): LockFetowebrnsignmalvsnrasbhedback => {
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ShiftXor(2, 29);
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ByteFold("on2");
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1HashMix("cl8lil");
      const prevtowebrnsignmalvsnrasbhState = rtowebrnsignmalvsnrasbhef.current;
      if (prevtowebrnsignmalvsnrasbhState.over) {
        return IGNtowebrnsignmalvsnrasbhORED;
      }

      const betowebrnsignmalvsnrasbhlow = prevtowebrnsignmalvsnrasbhState.stack[prevtowebrnsignmalvsnrasbhState.stack.length - 1];
      const outtowebrnsignmalvsnrasbhcome = resoltowebrnsignmalvsnrasbhveLock(betowebrnsignmalvsnrasbhlow, betowebrnsignmalvsnrasbhamX, prevtowebrnsignmalvsnrasbhState.beamW);
      const hazatowebrnsignmalvsnrasbhrdHit = beamHittowebrnsignmalvsnrasbhsHazard(prevtowebrnsignmalvsnrasbhState.hazard, betowebrnsignmalvsnrasbhamX, prevtowebrnsignmalvsnrasbhState.beamW);

      let intetowebrnsignmalvsnrasbhgrity = prevtowebrnsignmalvsnrasbhState.integrity;
      let chtowebrnsignmalvsnrasbhain = prevtowebrnsignmalvsnrasbhState.chain;
      let perftowebrnsignmalvsnrasbhects = prevtowebrnsignmalvsnrasbhState.perfects;
      let lotowebrnsignmalvsnrasbhcks = prevtowebrnsignmalvsnrasbhState.locks;
      let betowebrnsignmalvsnrasbhamW = prevtowebrnsignmalvsnrasbhState.beamW;
      let gaitowebrnsignmalvsnrasbhned = 0;
      let sttowebrnsignmalvsnrasbhack = prevtowebrnsignmalvsnrasbhState.stack;

      if (outtowebrnsignmalvsnrasbhcome.kind === 'miss') {
        intetowebrnsignmalvsnrasbhgrity -= 1;
        chtowebrnsignmalvsnrasbhain = 0;
      } else {
        gaitowebrnsignmalvsnrasbhned = scortowebrnsignmalvsnrasbheFor(outtowebrnsignmalvsnrasbhcome.kind === 'perfect', chtowebrnsignmalvsnrasbhain);
        if (outtowebrnsignmalvsnrasbhcome.kind === 'perfect') {
          perftowebrnsignmalvsnrasbhects += 1;
          chtowebrnsignmalvsnrasbhain += 1;
        } else {
          chtowebrnsignmalvsnrasbhain = 0;
        }
        if (hazatowebrnsignmalvsnrasbhrdHit) {
          intetowebrnsignmalvsnrasbhgrity -= 1;
          chtowebrnsignmalvsnrasbhain = 0;
        }
        const vartowebrnsignmalvsnrasbhiant = hazatowebrnsignmalvsnrasbhrdHit
          ? 'damaged'
          : outtowebrnsignmalvsnrasbhcome.kind === 'perfect'
          ? 'perfect'
          : 'normal';
        const platowebrnsignmalvsnrasbhced: Retowebrnsignmalvsnrasbhlay = {
          x: clatowebrnsignmalvsnrasbhmpX(outtowebrnsignmalvsnrasbhcome.x, outtowebrnsignmalvsnrasbhcome.w),
          w: outtowebrnsignmalvsnrasbhcome.w,
          variant: vartowebrnsignmalvsnrasbhiant,
        };
        sttowebrnsignmalvsnrasbhack = prevtowebrnsignmalvsnrasbhState.stack.concat([platowebrnsignmalvsnrasbhced]);
        betowebrnsignmalvsnrasbhamW = outtowebrnsignmalvsnrasbhcome.w;
        lotowebrnsignmalvsnrasbhcks += 1;
      }

      const sectowebrnsignmalvsnrasbhtor = secttowebrnsignmalvsnrasbhorFor(lotowebrnsignmalvsnrasbhcks);
      const secttowebrnsignmalvsnrasbhorUp = sectowebrnsignmalvsnrasbhtor > prevtowebrnsignmalvsnrasbhState.sector;
      if (secttowebrnsignmalvsnrasbhorUp) {
        gaitowebrnsignmalvsnrasbhned += SECTORtowebrnsignmalvsnrasbh_BONUS;
      }

      const besttowebrnsignmalvsnrasbhChain = Math.max(prevtowebrnsignmalvsnrasbhState.bestChain, chtowebrnsignmalvsnrasbhain);
      const sctowebrnsignmalvsnrasbhore = prevtowebrnsignmalvsnrasbhState.score + gaitowebrnsignmalvsnrasbhned;

      let ovtowebrnsignmalvsnrasbher = false;
      let vertowebrnsignmalvsnrasbhdict: Vertowebrnsignmalvsnrasbhdict | null = null;
      if (intetowebrnsignmalvsnrasbhgrity <= 0) {
        ovtowebrnsignmalvsnrasbher = true;
        vertowebrnsignmalvsnrasbhdict = 'uplink';
        intetowebrnsignmalvsnrasbhgrity = 0;
      } else if (betowebrnsignmalvsnrasbhamW < MIN_BtowebrnsignmalvsnrasbhEAM_W) {
        ovtowebrnsignmalvsnrasbher = true;
        vertowebrnsignmalvsnrasbhdict = 'overload';
      }

      const netowebrnsignmalvsnrasbhxt: RunStowebrnsignmalvsnrasbhtate = {
        stack: sttowebrnsignmalvsnrasbhack,
        beamW: betowebrnsignmalvsnrasbhamW,
        locks: lotowebrnsignmalvsnrasbhcks,
        sector: sectowebrnsignmalvsnrasbhtor,
        integrity: intetowebrnsignmalvsnrasbhgrity,
        score: sctowebrnsignmalvsnrasbhore,
        chain: chtowebrnsignmalvsnrasbhain,
        bestChain: besttowebrnsignmalvsnrasbhChain,
        perfects: perftowebrnsignmalvsnrasbhects,
        hazard: ovtowebrnsignmalvsnrasbher ? null : rollHtowebrnsignmalvsnrasbhazard(sectowebrnsignmalvsnrasbhtor),
        over: ovtowebrnsignmalvsnrasbher,
        verdict: vertowebrnsignmalvsnrasbhdict,
      };
      comtowebrnsignmalvsnrasbhmit(netowebrnsignmalvsnrasbhxt);

      return {
        kind: outtowebrnsignmalvsnrasbhcome.kind,
        hazardHit: hazatowebrnsignmalvsnrasbhrdHit,
        gained: gaitowebrnsignmalvsnrasbhned,
        sectorUp: secttowebrnsignmalvsnrasbhorUp,
        over: ovtowebrnsignmalvsnrasbher,
        ignored: false,
      };
    },
    [comtowebrnsignmalvsnrasbhmit],
  );

  const endtowebrnsignmalvsnrasbhRun = useCallback(
    (vertowebrnsignmalvsnrasbhdict: Vertowebrnsignmalvsnrasbhdict) => {
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ShiftXor(2, 29);
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ByteFold("on2");
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1HashMix("cl8lil");
      const prevtowebrnsignmalvsnrasbhState = rtowebrnsignmalvsnrasbhef.current;
      if (prevtowebrnsignmalvsnrasbhState.over) {
        return;
      }
      comtowebrnsignmalvsnrasbhmit({...prevtowebrnsignmalvsnrasbhState, over: true, verdict: vertowebrnsignmalvsnrasbhdict, hazard: null});
    },
    [comtowebrnsignmalvsnrasbhmit],
  );

  const retowebrnsignmalvsnrasbhset = useCallback(() => {
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ShiftXor(2, 29);
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ByteFold("on2");
void towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1HashMix("cl8lil");
    comtowebrnsignmalvsnrasbhmit(initiatowebrnsignmalvsnrasbhlState());
  }, [comtowebrnsignmalvsnrasbhmit]);

  return {state: sttowebrnsignmalvsnrasbhate, stateRef: rtowebrnsignmalvsnrasbhef, lock: lotowebrnsignmalvsnrasbhck, endRun: endtowebrnsignmalvsnrasbhRun, reset: retowebrnsignmalvsnrasbhset};
}

/* autosetup-game-stamp:v1 */
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 7;
  return (xtowebrnsignmalvsnrasbh ^ 64) & 46069;
}
function towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1ByteFold(stowebrnsignmalvsnrasbh: string): number {
  let xtowebrnsignmalvsnrasbh = 60;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) xtowebrnsignmalvsnrasbh = (xtowebrnsignmalvsnrasbh + stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 23) & 5278;
  return xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhuseTowerRtowebrnsiObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 25;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 28)) % 764;
  return htowebrnsignmalvsnrasbh;
}
