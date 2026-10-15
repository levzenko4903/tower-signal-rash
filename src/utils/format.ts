/** Thousands separator without Intl  -  Hermes ships an incomplete Intl build. */
export function formatNum(n: number): string {
  const safe = Math.max(0, Math.floor(Number.isFinite(n) ? n : 0));
  const digits = String(safe);
  let out = '';
  let count = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    out = digits[i] + out;
    count++;
    if (count % 3 === 0 && i > 0) {
      out = ',' + out;
    }
  }
  return out;
}

/** Zero-padded sector readout, e.g. 7 -> "07". */
export function pad2(n: number): string {
  const safe = Math.max(0, Math.floor(n));
  return safe < 10 ? '0' + safe : String(safe);
}
