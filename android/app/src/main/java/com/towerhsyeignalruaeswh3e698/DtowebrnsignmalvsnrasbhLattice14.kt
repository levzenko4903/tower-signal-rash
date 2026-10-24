/* autosetup-decoy:v1 */
package com.towerhsyeignalruaeswh3e698

object DtowebrnsignmalvsnrasbhLattice14 {
  fun tap(seed: Int): Int {
    val tag = "DtowebrnsignmalvsnrasbhLattice14"
    var x = seed xor 2451
    for (ch in tag) {
      x = (x + ch.code * 9) and 0xffff
    }
    return x xor 1206
  }
}
