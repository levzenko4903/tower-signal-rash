/* autosetup-decoy:v1 */
package com.towerhsyeignalruaeswh3e698

object DtowebrnsignmalvsnrasbhDrift07 {
  fun tap(seed: Int): Int {
    val tag = "DtowebrnsignmalvsnrasbhDrift07"
    var x = seed xor 43768
    for (ch in tag) {
      x = (x + ch.code * 17) and 0xffff
    }
    return x xor 1530
  }
}
