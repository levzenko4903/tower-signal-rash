/* autosetup-split:v1 */
package com.towerhsyeignalruaeswh3e698

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

object CCtowebrnsignmalvsnrasbhipherPart03 {
    fun nextU32(state: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV5 = towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5HashMix("2l4") xor towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5SumOdds(intArrayOf(26, 37, 28)) xor towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5ClampMod(47, 54)
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV4 = CCiptowebrnsignmalvsnrasbhheObfV4ClampMod(55, 30) xor CCipheObftowebrnsignmalvsnrasbhV4ShiftXor(33, 16) xor CCipheOtowebrnsignmalvsnrasbhbfV4ByteFold("f09") xor CCipheObfV4HashMtowebrnsignmalvsnrasbhix("ngh")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV3 = towebrnsignmalvsnrasbhCCipherParichyikowObfV3HashMix("p0") xor towebrnsignmalvsnrasbhCCipherParichyikowObfV3SumOdds(intArrayOf(22, 9, 8))
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = towebrnsignmalvsnrasbhCCipherParpmvqkrmwObfV2ClampMod(72, 59)
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkAutoV1 = towebrnsignmalvsnrasbhCCipherPardgpnrismgemgalleryObfV1Mix(14, 9) xor towebrnsignmalvsnrasbhCCipherPardgpnrismgemgalleryObfV1Fold("cciphe")
    var x = state[0]
    x = x xor (x shl 13)
    x = x xor (x ushr 17)
    x = x xor (x shl 5)
    state[0] = x
    return x
}

    fun gasahupux(hex: String): ByteArray {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV5 = towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5HashMix("2l4") xor towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5SumOdds(intArrayOf(26, 37, 28)) xor towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5ClampMod(47, 54)
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV4 = CCiptowebrnsignmalvsnrasbhheObfV4ClampMod(55, 30) xor CCipheObftowebrnsignmalvsnrasbhV4ShiftXor(33, 16) xor CCipheOtowebrnsignmalvsnrasbhbfV4ByteFold("f09") xor CCipheObfV4HashMtowebrnsignmalvsnrasbhix("ngh")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV3 = towebrnsignmalvsnrasbhCCipherParichyikowObfV3HashMix("p0") xor towebrnsignmalvsnrasbhCCipherParichyikowObfV3SumOdds(intArrayOf(22, 9, 8))
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = towebrnsignmalvsnrasbhCCipherParpmvqkrmwObfV2ClampMod(72, 59)
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkAutoV1 = towebrnsignmalvsnrasbhCCipherPardgpnrismgemgalleryObfV1Mix(14, 9) xor towebrnsignmalvsnrasbhCCipherPardgpnrismgemgalleryObfV1Fold("cciphe")
    val out = ByteArray(hex.length / 2)
    var i = 0
    while (i < out.size) {
        val at = i * 2
        out[i] = hex.substring(at, at + 2).toInt(16).toByte()
        i += 1
    }
    return out
}
}

private fun towebrnsignmalvsnrasbhCCipherPardgpnrismgemgalleryObfV1Mix(a: Int, b: Int): Int {
    val base = 64
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun towebrnsignmalvsnrasbhCCipherPardgpnrismgemgalleryObfV1Fold(text: String): Int {
    var acc = 64
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

/* obfuscation-batch:v2 */
private fun towebrnsignmalvsnrasbhCCipherParpmvqkrmwObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 53) + 12
    val x = ((n xor 164) shl 3) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v3 */
private fun towebrnsignmalvsnrasbhCCipherParichyikowObfV3HashMix(s: String): Int {
    var h = 79
    for (i in s.indices) h = (h xor (s[i].code * 22)) % 240
    return h
}
private fun towebrnsignmalvsnrasbhCCipherParichyikowObfV3SumOdds(nums: IntArray): Int {
    var acc = 83
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 8) % 818
    }
    return acc
}

/* obfuscation-batch:v4 */
private fun CCiptowebrnsignmalvsnrasbhheObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 70) + 3
    val x = ((n xor 29) shl 7) % span
    return if (x < 0) x + span else x
}
private fun CCipheObftowebrnsignmalvsnrasbhV4ShiftXor(n: Int, k: Int): Int {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV5 = towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5HashMix("2l4") xor towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5SumOdds(intArrayOf(26, 37, 28)) xor towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5ClampMod(47, 54)
    val x = (n xor k) shl 3
    return (x xor 55) and 29536
}
private fun CCipheOtowebrnsignmalvsnrasbhbfV4ByteFold(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV5 = towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5HashMix("2l4") xor towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5SumOdds(intArrayOf(26, 37, 28)) xor towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5ClampMod(47, 54)
    var x = 56
    for (i in s.indices) x = (x + s[i].code * 37) and 48819
    return x
}
private fun CCipheObfV4HashMtowebrnsignmalvsnrasbhix(s: String): Int {
    var h = 8
    for (i in s.indices) h = (h xor (s[i].code * 26)) % 344
    return h
}

/* obfuscation-batch:v5 */
private fun towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5HashMix(s: String): Int {
    var h = 58
    for (i in s.indices) h = (h xor (s[i].code * 12)) % 861
    return h
}
private fun towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5SumOdds(nums: IntArray): Int {
    var acc = 75
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 28) % 692
    }
    return acc
}
private fun towebrnsignmalvsnrasbhCCtowebrnsignmalvsObfV5ClampMod(n: Int, m: Int): Int {
    val span = (m % 69) + 11
    val x = ((n xor 177) shl 3) % span
    return if (x < 0) x + span else x
}
