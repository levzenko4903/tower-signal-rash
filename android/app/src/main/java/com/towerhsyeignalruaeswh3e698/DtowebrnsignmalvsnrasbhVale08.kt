/* autosetup-decoy:v1 */
package com.towerhsyeignalruaeswh3e698

object DtowebrnsignmalvsnrasbhVale08 {
  fun tap(seed: Int): Int {
    val tag = "DtowebrnsignmalvsnrasbhVale08"
    var x = seed xor 41801
    for (ch in tag) {
      x = (x + ch.code * 83) and 0xffff
    }
    return x xor 583
  }
}
