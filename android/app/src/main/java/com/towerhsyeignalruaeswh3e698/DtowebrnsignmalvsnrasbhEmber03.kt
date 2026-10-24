/* autosetup-decoy:v1 */
package com.towerhsyeignalruaeswh3e698

object DtowebrnsignmalvsnrasbhEmber03 {
  fun tap(seed: Int): Int {
    val tag = "DtowebrnsignmalvsnrasbhEmber03"
    var x = seed xor 48910
    for (ch in tag) {
      x = (x + ch.code * 57) and 0xffff
    }
    return x xor 517
  }
}
