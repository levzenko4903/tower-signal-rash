/* autosetup-split:v1 */
package com.towerhsyeignalruaeswh3e698

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

object CtowebrnsignmalvsnrasbhCipherPart02 {
    fun seedState(bytes: ByteArray): Int {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    var s = 0x811C9DC5.toInt()
    for (b in bytes) {
        s = s xor (b.toInt() and 0xFF)
        s *= 16777619
    }
    if (bytes.isEmpty()) s = s xor 0xA5A5A5A5.toInt()
    return s
}

    fun fillWheel(st: IntArray, len: Int): Wheel {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    val pins = IntArray(len)
    var ones = 0
    for (i in 0 until len) {
        pins[i] = CtowebrnsignmalvsnrasbhCipherPart01.nextU32(st) and 1
        ones += pins[i]
    }
    if (ones == 0) pins[0] = 1
    if (ones == len) pins[0] = 0
    val pos = CtowebrnsignmalvsnrasbhCipherPart01.u32Mod(CtowebrnsignmalvsnrasbhCipherPart01.nextU32(st), len)
    return Wheel(pins, pos)
}

    fun hexToBytes(hex: String): ByteArray {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
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

/* obfuscation-batch:v1 */
private fun towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(nums: IntArray): Int {
    var acc = 63
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 24) % 145
    }
    return acc
}
private fun towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 20) + 7
    val x = ((n xor 126) shl 2) % span
    return if (x < 0) x + span else x
}
private fun towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 168) and 34355
}
private fun towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold(s: String): Int {
    var x = 27
    for (i in s.indices) x = (x + s[i].code * 16) and 51134
    return x
}
