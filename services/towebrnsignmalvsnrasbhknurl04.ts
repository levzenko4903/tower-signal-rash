/* autosetup-decoy:v1 */

export function towebrnsignmalvsnrasbhknurl04Touch(seed: number): number {
void towebrnsignmalvsnrasbhtowebrnsignmalvsnrObfV1SumOdds([24, 3, 2]);
  let x = Math.imul(seed | 0, 23);
  x = (x ^ 4973) % 2023;
  if (x < 0) x += 2023;
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
