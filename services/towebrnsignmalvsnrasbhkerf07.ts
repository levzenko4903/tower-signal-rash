/* autosetup-decoy:v1 */

export function towebrnsignmalvsnrasbhkerf07Touch(seed: number): number {
void towebrnsignmalvsnrasbhtowebrnsignmalvsnrObfV1SumOdds([24, 3, 2]);
  let x = (seed + 56093) | 0;
  x = (x << 1) | 0;
  x = (x ^ 3368) & 0xffff;
  return x;
}

/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhtowebrnsignmalvsnrObfV1SumOdds(nums: number[]): number {
  let acc = 4;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 208;
  }
  return acc;
}
