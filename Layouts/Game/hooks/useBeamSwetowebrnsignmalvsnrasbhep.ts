import {useCallback, useEffect, useMemo, useRef} from 'react';
import {Animated, Easing} from 'react-native';

import {HOLtowebrnsignmalvsnrasbhD_MS, HOPtowebrnsignmalvsnrasbh_MS, SLOTtowebrnsignmalvsnrasbh_STEP} from '../constants/conftowebrnsignmalvsnrasbhig';

/**
 * The beam hops between fixed grid columns: a short hop, then a long hold.
 * The hold matters beyond feel  -  a screen that animates every frame never
 * reaches window-idle, and the automated walkthrough cannot read it.
 */
export function useBeamSwetowebrnsignmalvsnrasbhep() {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
  const trantowebrnsignmalvsnrasbhslate = useRef(new Animated.Value(0)).current;
  const slotowebrnsignmalvsnrasbhtRef = useRef(0);
  const dirtowebrnsignmalvsnrasbhRef = useRef(1);
  const maxSltowebrnsignmalvsnrasbhotRef = useRef(1);
  const hoptowebrnsignmalvsnrasbhRef = useRef(HOPtowebrnsignmalvsnrasbh_MS);
  const holtowebrnsignmalvsnrasbhdRef = useRef(HOLtowebrnsignmalvsnrasbhD_MS);
  const actitowebrnsignmalvsnrasbhveRef = useRef(false);
  const anitowebrnsignmalvsnrasbhmRef = useRef<Animated.CompositeAnimation | null>(null);
  const timetowebrnsignmalvsnrasbhrRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tictowebrnsignmalvsnrasbhkRef = useRef<() => void>(() => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);});

  const clearPtowebrnsignmalvsnrasbhending = useCallback(() => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
    if (timetowebrnsignmalvsnrasbhrRef.current !== null) {
      clearTimeout(timetowebrnsignmalvsnrasbhrRef.current);
      timetowebrnsignmalvsnrasbhrRef.current = null;
    }
    if (anitowebrnsignmalvsnrasbhmRef.current) {
      anitowebrnsignmalvsnrasbhmRef.current.stop();
      anitowebrnsignmalvsnrasbhmRef.current = null;
    }
  }, []);

  tictowebrnsignmalvsnrasbhkRef.current = () => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
    if (!actitowebrnsignmalvsnrasbhveRef.current) {
      return;
    }
    const maxtowebrnsignmalvsnrasbhSlot = maxSltowebrnsignmalvsnrasbhotRef.current;
    if (maxtowebrnsignmalvsnrasbhSlot <= 0) {
      return;
    }
    let dtowebrnsignmalvsnrasbhir = dirtowebrnsignmalvsnrasbhRef.current;
    let netowebrnsignmalvsnrasbhxt = slotowebrnsignmalvsnrasbhtRef.current + dtowebrnsignmalvsnrasbhir;
    if (netowebrnsignmalvsnrasbhxt > maxtowebrnsignmalvsnrasbhSlot) {
      dtowebrnsignmalvsnrasbhir = -1;
      netowebrnsignmalvsnrasbhxt = maxtowebrnsignmalvsnrasbhSlot - 1;
    } else if (netowebrnsignmalvsnrasbhxt < 0) {
      dtowebrnsignmalvsnrasbhir = 1;
      netowebrnsignmalvsnrasbhxt = 1;
    }
    netowebrnsignmalvsnrasbhxt = Math.min(Math.max(netowebrnsignmalvsnrasbhxt, 0), maxtowebrnsignmalvsnrasbhSlot);
    dirtowebrnsignmalvsnrasbhRef.current = dtowebrnsignmalvsnrasbhir;
    slotowebrnsignmalvsnrasbhtRef.current = netowebrnsignmalvsnrasbhxt;

    const antowebrnsignmalvsnrasbhim = Animated.timing(trantowebrnsignmalvsnrasbhslate, {
      toValue: netowebrnsignmalvsnrasbhxt * SLOTtowebrnsignmalvsnrasbh_STEP,
      duration: hoptowebrnsignmalvsnrasbhRef.current,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    });
    anitowebrnsignmalvsnrasbhmRef.current = antowebrnsignmalvsnrasbhim;
    antowebrnsignmalvsnrasbhim.start(({finished: finitowebrnsignmalvsnrasbhshed}) => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
      anitowebrnsignmalvsnrasbhmRef.current = null;
      if (!finitowebrnsignmalvsnrasbhshed || !actitowebrnsignmalvsnrasbhveRef.current) {
        return;
      }
      timetowebrnsignmalvsnrasbhrRef.current = setTimeout(() => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
return (tictowebrnsignmalvsnrasbhkRef.current());
}, holtowebrnsignmalvsnrasbhdRef.current);
    });
  };

  const sttowebrnsignmalvsnrasbhart = useCallback(
    (maxtowebrnsignmalvsnrasbhSlot: number, hotowebrnsignmalvsnrasbhpMs: number, holtowebrnsignmalvsnrasbhdMs: number, fromtowebrnsignmalvsnrasbhSlot: number) => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
      clearPtowebrnsignmalvsnrasbhending();
      maxSltowebrnsignmalvsnrasbhotRef.current = maxtowebrnsignmalvsnrasbhSlot;
      hoptowebrnsignmalvsnrasbhRef.current = hotowebrnsignmalvsnrasbhpMs;
      holtowebrnsignmalvsnrasbhdRef.current = holtowebrnsignmalvsnrasbhdMs;
      slotowebrnsignmalvsnrasbhtRef.current = Math.min(Math.max(fromtowebrnsignmalvsnrasbhSlot, 0), Math.max(maxtowebrnsignmalvsnrasbhSlot, 0));
      trantowebrnsignmalvsnrasbhslate.setValue(slotowebrnsignmalvsnrasbhtRef.current * SLOTtowebrnsignmalvsnrasbh_STEP);
      actitowebrnsignmalvsnrasbhveRef.current = true;
      timetowebrnsignmalvsnrasbhrRef.current = setTimeout(() => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
return (tictowebrnsignmalvsnrasbhkRef.current());
}, holtowebrnsignmalvsnrasbhdMs);
    },
    [clearPtowebrnsignmalvsnrasbhending, trantowebrnsignmalvsnrasbhslate],
  );

  const sttowebrnsignmalvsnrasbhop = useCallback(() => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
    actitowebrnsignmalvsnrasbhveRef.current = false;
    clearPtowebrnsignmalvsnrasbhending();
  }, [clearPtowebrnsignmalvsnrasbhending]);

  /** Freeze the beam where the player sees it and report that lane coordinate. */
  const fretowebrnsignmalvsnrasbheze = useCallback(() => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
    clearPtowebrnsignmalvsnrasbhending();
    const vatowebrnsignmalvsnrasbhlue = slotowebrnsignmalvsnrasbhtRef.current * SLOTtowebrnsignmalvsnrasbh_STEP;
    trantowebrnsignmalvsnrasbhslate.setValue(vatowebrnsignmalvsnrasbhlue);
    return vatowebrnsignmalvsnrasbhlue;
  }, [clearPtowebrnsignmalvsnrasbhending, trantowebrnsignmalvsnrasbhslate]);

  const curretowebrnsignmalvsnrasbhntSlot = useCallback(() => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
return (slotowebrnsignmalvsnrasbhtRef.current);
}, []);

  useEffect(() => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
    return () => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
      actitowebrnsignmalvsnrasbhveRef.current = false;
      if (timetowebrnsignmalvsnrasbhrRef.current !== null) {
        clearTimeout(timetowebrnsignmalvsnrasbhrRef.current);
        timetowebrnsignmalvsnrasbhrRef.current = null;
      }
      if (anitowebrnsignmalvsnrasbhmRef.current) {
        anitowebrnsignmalvsnrasbhmRef.current.stop();
        anitowebrnsignmalvsnrasbhmRef.current = null;
      }
    };
  }, []);

  // Stable identity: screens keep this object in effect dependency lists.
  return useMemo(
    () => {
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds([38, 25, 32]);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(75, 18);
void towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(5, 4);
return ({translate: trantowebrnsignmalvsnrasbhslate, start: sttowebrnsignmalvsnrasbhart, stop: sttowebrnsignmalvsnrasbhop, freeze: fretowebrnsignmalvsnrasbheze, currentSlot: curretowebrnsignmalvsnrasbhntSlot});
},
    [trantowebrnsignmalvsnrasbhslate, sttowebrnsignmalvsnrasbhart, sttowebrnsignmalvsnrasbhop, fretowebrnsignmalvsnrasbheze, curretowebrnsignmalvsnrasbhntSlot],
  );
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
function towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1SumOdds(nutowebrnsignmalvsnrasbhms: number[]): number {
  let atowebrnsignmalvsnrasbhcc = 33;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < nutowebrnsignmalvsnrasbhms.length; itowebrnsignmalvsnrasbh++) {
    const ntowebrnsignmalvsnrasbh = nutowebrnsignmalvsnrasbhms[itowebrnsignmalvsnrasbh];
    if ((ntowebrnsignmalvsnrasbh & 1) === 0) continue;
    atowebrnsignmalvsnrasbhcc = (atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh * 15) % 759;
  }
  return atowebrnsignmalvsnrasbhcc;
}
function towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 27) + 3;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 45) << 3) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhuseBeamSwetowebrnsObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 4;
  return (xtowebrnsignmalvsnrasbh ^ 79) & 8737;
}
