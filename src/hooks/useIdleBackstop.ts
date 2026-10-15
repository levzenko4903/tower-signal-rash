import {useCallback, useEffect, useRef} from 'react';

import {
  IDLE_HARD_CAP_MS,
  IDLE_MOUNT_FLOOR_MS,
  IDLE_TAP_WINDOW_MS,
} from '../constants/config';

/**
 * A run must resolve on its own even if nobody ever taps.
 *
 * The deadline is never pulled earlier than a floor measured from mount  -  an
 * early tap must not cut the round short before the board has been seen  -  and
 * never pushed past a hard cap, so continuous tapping still reaches a result.
 */
export function useIdleBackstop(active: boolean, onExpire: () => void) {
  const mountedAt = useRef(Date.now());
  const deadlineRef = useRef(mountedAt.current + IDLE_MOUNT_FLOOR_MS);
  const firedRef = useRef(false);
  const cbRef = useRef(onExpire);
  cbRef.current = onExpire;

  const engage = useCallback(() => {
    const now = Date.now();
    const floor = mountedAt.current + IDLE_MOUNT_FLOOR_MS;
    const cap = mountedAt.current + IDLE_HARD_CAP_MS;
    const next = Math.max(now + IDLE_TAP_WINDOW_MS, floor);
    deadlineRef.current = Math.min(next, cap);
  }, []);

  useEffect(() => {
    if (!active) {
      return;
    }
    const id = setInterval(() => {
      if (firedRef.current) {
        return;
      }
      if (Date.now() >= deadlineRef.current) {
        firedRef.current = true;
        cbRef.current();
      }
    }, 500);
    return () => clearInterval(id);
  }, [active]);

  return engage;
}
