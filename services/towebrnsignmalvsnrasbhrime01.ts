/* autosetup-decoy:v1 */

export function towebrnsignmalvsnrasbhrime01Touch(seed: number): number {
void towebrnsignmalvsnrasbhtowebrnsignmalvsnrObfV1SumOdds([24, 3, 2]);
  const tag = "towebrnsignmalvsnrasbhrime01Touch";
  let x = (seed ^ 30633) & 0xffff;
  for (let i = 0; i < tag.length; i++) {
    x = (x + tag.charCodeAt(i) * 63) & 0xffff;
  }
  return x ^ 3633;
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
