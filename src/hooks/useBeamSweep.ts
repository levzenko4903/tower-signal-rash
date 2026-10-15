import {useCallback, useEffect, useMemo, useRef} from 'react';
import {Animated, Easing} from 'react-native';

import {HOLD_MS, HOP_MS, SLOT_STEP} from '../constants/config';

/**
 * The beam hops between fixed grid columns: a short hop, then a long hold.
 * The hold matters beyond feel  -  a screen that animates every frame never
 * reaches window-idle, and the automated walkthrough cannot read it.
 */
export function useBeamSweep() {
  const translate = useRef(new Animated.Value(0)).current;
  const slotRef = useRef(0);
  const dirRef = useRef(1);
  const maxSlotRef = useRef(1);
  const hopRef = useRef(HOP_MS);
  const holdRef = useRef(HOLD_MS);
  const activeRef = useRef(false);
  const animRef = useRef<Animated.CompositeAnimation | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tickRef = useRef<() => void>(() => {});

  const clearPending = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (animRef.current) {
      animRef.current.stop();
      animRef.current = null;
    }
  }, []);

  tickRef.current = () => {
    if (!activeRef.current) {
      return;
    }
    const maxSlot = maxSlotRef.current;
    if (maxSlot <= 0) {
      return;
    }
    let dir = dirRef.current;
    let next = slotRef.current + dir;
    if (next > maxSlot) {
      dir = -1;
      next = maxSlot - 1;
    } else if (next < 0) {
      dir = 1;
      next = 1;
    }
    next = Math.min(Math.max(next, 0), maxSlot);
    dirRef.current = dir;
    slotRef.current = next;

    const anim = Animated.timing(translate, {
      toValue: next * SLOT_STEP,
      duration: hopRef.current,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    });
    animRef.current = anim;
    anim.start(({finished}) => {
      animRef.current = null;
      if (!finished || !activeRef.current) {
        return;
      }
      timerRef.current = setTimeout(() => tickRef.current(), holdRef.current);
    });
  };

  const start = useCallback(
    (maxSlot: number, hopMs: number, holdMs: number, fromSlot: number) => {
      clearPending();
      maxSlotRef.current = maxSlot;
      hopRef.current = hopMs;
      holdRef.current = holdMs;
      slotRef.current = Math.min(Math.max(fromSlot, 0), Math.max(maxSlot, 0));
      translate.setValue(slotRef.current * SLOT_STEP);
      activeRef.current = true;
      timerRef.current = setTimeout(() => tickRef.current(), holdMs);
    },
    [clearPending, translate],
  );

  const stop = useCallback(() => {
    activeRef.current = false;
    clearPending();
  }, [clearPending]);

  /** Freeze the beam where the player sees it and report that lane coordinate. */
  const freeze = useCallback(() => {
    clearPending();
    const value = slotRef.current * SLOT_STEP;
    translate.setValue(value);
    return value;
  }, [clearPending, translate]);

  const currentSlot = useCallback(() => slotRef.current, []);

  useEffect(() => {
    return () => {
      activeRef.current = false;
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (animRef.current) {
        animRef.current.stop();
        animRef.current = null;
      }
    };
  }, []);

  // Stable identity: screens keep this object in effect dependency lists.
  return useMemo(
    () => ({translate, start, stop, freeze, currentSlot}),
    [translate, start, stop, freeze, currentSlot],
  );
}
