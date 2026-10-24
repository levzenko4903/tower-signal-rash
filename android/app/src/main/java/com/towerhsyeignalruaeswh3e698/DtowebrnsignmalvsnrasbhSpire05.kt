/* autosetup-decoy:v1 */
package com.towerhsyeignalruaeswh3e698

object DtowebrnsignmalvsnrasbhSpire05 {
  fun tap(seed: Int): Int {
    val tag = "DtowebrnsignmalvsnrasbhSpire05"
    var x = seed xor 21728
    for (ch in tag) {
      x = (x + ch.code * 73) and 0xffff
    }
    return x xor 1669
  }
}
