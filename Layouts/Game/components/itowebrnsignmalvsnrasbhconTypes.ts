import React from 'react';
// autosetup-split-begin
import { towebrnsignmalvsnrasbhGameMixSeed, towebrnsignmalvsnrasbhGameClampSpan } from './itowebrnsignmalvsnrasbhconTypesPart01';
import { towebrnsignmalvsnrasbhGameFoldRange } from './itowebrnsignmalvsnrasbhconTypesPart02';
// autosetup-split-end

/**
 * Icon components come from react-native-heroicons (solid set). Their prop
 * surface is the full SvgProps union, so the loose component type keeps the
 * call sites free of casts.
 */
export type IconCotowebrnsignmalvsnrasbhmponent = React.ComponentType<any>;

/* autosetup-game-stamp:v1 */
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhitowebrnsignmalvsnObfV1ClampMod(ntowebrnsignmalvsnrasbh: number, mtowebrnsignmalvsnrasbh: number): number {
  const sptowebrnsignmalvsnrasbhan = (mtowebrnsignmalvsnrasbh % 46) + 5;
  const xtowebrnsignmalvsnrasbh = ((ntowebrnsignmalvsnrasbh ^ 67) << 3) % sptowebrnsignmalvsnrasbhan;
  return xtowebrnsignmalvsnrasbh < 0 ? xtowebrnsignmalvsnrasbh + sptowebrnsignmalvsnrasbhan : xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhitowebrnsignmalvsnObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 5;
  return (xtowebrnsignmalvsnrasbh ^ 201) & 10069;
}
void towebrnsignmalvsnrasbhitowebrnsignmalvsnObfV1ClampMod(9, 72);
void towebrnsignmalvsnrasbhitowebrnsignmalvsnObfV1ShiftXor(35, 42);
