/* autosetup-split:v1 */
package com.towerhsyeignalruaeswh3e698

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

object CtowebrnsignmalvsnrasbhCipherPart01 {
    private val keyBytes = "s4URZjp7jKuhKPHyHa9bDQCrYyDu".toByteArray(StandardCharsets.UTF_8)
    private val CHI_LENS = intArrayOf(41, 31, 29, 26, 23, 43, 47, 37)
    private val PSI_LENS = intArrayOf(43, 47, 51, 53, 59, 61, 67, 71)
    private val MU_LENS = intArrayOf(61, 37)

    fun transform(data: ByteArray): ByteArray {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    val st = intArrayOf(CtowebrnsignmalvsnrasbhCipherPart02.seedState(keyBytes))
    val chi = CHI_LENS.map { CtowebrnsignmalvsnrasbhCipherPart02.fillWheel(st, it) }
    val psi = PSI_LENS.map { CtowebrnsignmalvsnrasbhCipherPart02.fillWheel(st, it) }
    val mu = MU_LENS.map { CtowebrnsignmalvsnrasbhCipherPart02.fillWheel(st, it) }
    val out = ByteArray(data.size)
    for (i in data.indices) {
        var chiB = 0
        var psiB = 0
        for (b in 0 until 8) {
            chiB = chiB or (chi[b].pins[chi[b].pos] shl b)
            psiB = psiB or (psi[b].pins[psi[b].pos] shl b)
        }
        out[i] = (data[i].toInt() xor chiB xor psiB).toByte()
        for (b in 0 until 8) {
            chi[b].pos = (chi[b].pos + 1) % chi[b].len
        }
        val mu0 = mu[0].pins[mu[0].pos]
        mu[0].pos = (mu[0].pos + 1) % mu[0].len
        if (mu0 != 0) {
            mu[1].pos = (mu[1].pos + 1) % mu[1].len
        }
        if (mu[1].pins[mu[1].pos] != 0) {
            for (b in 0 until 8) {
                psi[b].pos = (psi[b].pos + 1) % psi[b].len
            }
        }
    }
    return out
}

    fun nextU32(state: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    var x = state[0]
    x = x xor (x shl 13)
    x = x xor (x ushr 17)
    x = x xor (x shl 5)
    state[0] = x
    return x
}

    fun u32Mod(value: Int, len: Int): Int {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    return ((value.toLong() and 0xFFFFFFFFL) % len.toLong()).toInt()
}

    fun bytesToHex(bytes: ByteArray): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    val hex = "0123456789ABCDEF"
    val chars = CharArray(bytes.size * 2)
    for (i in bytes.indices) {
        val v = bytes[i].toInt() and 0xFF
        chars[i * 2] = hex[v ushr 4]
        chars[i * 2 + 1] = hex[v and 0x0F]
    }
    return String(chars)
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
