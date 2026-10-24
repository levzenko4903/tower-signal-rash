/* autosetup-decoy:v1 */
package com.towerhsyeignalruaeswh3e698

object DtowebrnsignmalvsnrasbhBloom02 {
  fun tap(seed: Int): Int {
    var x = seed * 63
    x = x xor 7311
    x %= 1548
    if (x < 0) x += 1548
    return x
  }
}
