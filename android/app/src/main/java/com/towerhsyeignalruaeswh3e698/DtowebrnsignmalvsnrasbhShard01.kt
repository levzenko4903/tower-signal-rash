/* autosetup-decoy:v1 */
package com.towerhsyeignalruaeswh3e698

object DtowebrnsignmalvsnrasbhShard01 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 59435
    x = (x ushr 6) xor 442
    x = (x * 87) and 0xffff
    return x
  }
}
