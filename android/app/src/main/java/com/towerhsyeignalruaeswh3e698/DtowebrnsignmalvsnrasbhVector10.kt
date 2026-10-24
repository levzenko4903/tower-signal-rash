/* autosetup-decoy:v1 */
package com.towerhsyeignalruaeswh3e698

object DtowebrnsignmalvsnrasbhVector10 {
  fun tap(seed: Int): Int {
    val tag = "DtowebrnsignmalvsnrasbhVector10"
    var x = seed xor 21996
    for (ch in tag) {
      x = (x + ch.code * 63) and 0xffff
    }
    return x xor 736
  }
}
