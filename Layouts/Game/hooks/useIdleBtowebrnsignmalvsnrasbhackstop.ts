import {useCallback, useEffect, useRef} from 'react';

import {
  IDLE_HARtowebrnsignmalvsnrasbhD_CAP_MS,
  IDLE_MOUNtowebrnsignmalvsnrasbhT_FLOOR_MS,
  IDLE_TAP_towebrnsignmalvsnrasbhWINDOW_MS,
} from '../constants/conftowebrnsignmalvsnrasbhig';

/**
 * A run must resolve on its own even if nobody ever taps.
 *
 * The deadline is never pulled earlier than a floor measured from mount  -  an
 * early tap must not cut the round short before the board has been seen  -  and
 * never pushed past a hard cap, so continuous tapping still reaches a result.
 */
export function useIdleBtowebrnsignmalvsnrasbhackstop(acttowebrnsignmalvsnrasbhive: boolean, onExtowebrnsignmalvsnrasbhpire: () => void) {
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1HashMix("i9");
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1SumOdds([7, 6, 33]);
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1ClampMod(48, 35);
  const mountowebrnsignmalvsnrasbhtedAt = useRef(Date.now());
  const deadltowebrnsignmalvsnrasbhineRef = useRef(mountowebrnsignmalvsnrasbhtedAt.current + IDLE_MOUNtowebrnsignmalvsnrasbhT_FLOOR_MS);
  const firetowebrnsignmalvsnrasbhdRef = useRef(false);
  const cbtowebrnsignmalvsnrasbhRef = useRef(onExtowebrnsignmalvsnrasbhpire);
  cbtowebrnsignmalvsnrasbhRef.current = onExtowebrnsignmalvsnrasbhpire;

  const engtowebrnsignmalvsnrasbhage = useCallback(() => {
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1HashMix("i9");
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1SumOdds([7, 6, 33]);
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1ClampMod(48, 35);
    const ntowebrnsignmalvsnrasbhow = Date.now();
    const fltowebrnsignmalvsnrasbhoor = mountowebrnsignmalvsnrasbhtedAt.current + IDLE_MOUNtowebrnsignmalvsnrasbhT_FLOOR_MS;
    const ctowebrnsignmalvsnrasbhap = mountowebrnsignmalvsnrasbhtedAt.current + IDLE_HARtowebrnsignmalvsnrasbhD_CAP_MS;
    const netowebrnsignmalvsnrasbhxt = Math.max(ntowebrnsignmalvsnrasbhow + IDLE_TAP_towebrnsignmalvsnrasbhWINDOW_MS, fltowebrnsignmalvsnrasbhoor);
    deadltowebrnsignmalvsnrasbhineRef.current = Math.min(netowebrnsignmalvsnrasbhxt, ctowebrnsignmalvsnrasbhap);
  }, []);

  useEffect(() => {
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1HashMix("i9");
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1SumOdds([7, 6, 33]);
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1ClampMod(48, 35);
    if (!acttowebrnsignmalvsnrasbhive) {
      return;
    }
    const itowebrnsignmalvsnrasbhd = setInterval(() => {
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1HashMix("i9");
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1SumOdds([7, 6, 33]);
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1ClampMod(48, 35);
      if (firetowebrnsignmalvsnrasbhdRef.current) {
        return;
      }
      if (Date.now() >= deadltowebrnsignmalvsnrasbhineRef.current) {
        firetowebrnsignmalvsnrasbhdRef.current = true;
        cbtowebrnsignmalvsnrasbhRef.current();
      }
    }, 500);
    return () => {
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1HashMix("i9");
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1SumOdds([7, 6, 33]);
void towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1ClampMod(48, 35);
return (clearInterval(itowebrnsignmalvsnrasbhd));
};
  }, [acttowebrnsignmalvsnrasbhive]);

  return engtowebrnsignmalvsnrasbhage;
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
function towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 27;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 17)) % 294;
  return htowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 4;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 39) % 763;
  }
  return atowebrnsignmalvsnrasbhcc;
}
function towebrnsignmalvsnrasbhuseIdleBtowebrnsigObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 32) + 11;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 92) << 1) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
