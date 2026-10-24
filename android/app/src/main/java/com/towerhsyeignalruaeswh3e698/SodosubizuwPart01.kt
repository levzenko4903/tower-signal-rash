/* autosetup-split:v1 */
package com.towerhsyeignalruaeswh3e698

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

object SodosubizuwPart01 {
    fun dilowuzowugu(): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV31 = towebrnsignmalvsnrasbhSodosubizuwPart01ObfV31HashMix("2fe")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV30 = towebrnsignmalvsnrasbhSodosubizuwPart01ObfV30ClampMod(12, 79)
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV29 = towebrnsignmalvsnrasbhSodosubizuwPart01ObfV29SumOdds(intArrayOf(23, 6, 33)) xor towebrnsignmalvsnrasbhSodosubizuwPart01ObfV29ClampMod(16, 35) xor towebrnsignmalvsnrasbhSodosubizuwPart01ObfV29ShiftXor(34, 45) xor towebrnsignmalvsnrasbhSodosubizuwPart01ObfV29ByteFold("mhg1mf")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV28 = towebrnsignmalvsnrasbhSodosubizuwPart01ObfV28ShiftXor(56, 43)
    @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV27 = towebrnsignmalvsnrasbhSodosubizuwObfV27ShiftXor(34, 53)

    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}
}

private fun towebrnsignmalvsnrasbhSodosubizuwObfV27ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 41) and 31827
}

/* obfuscation-batch:v28 */
private fun towebrnsignmalvsnrasbhSodosubizuwPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 92) and 49142
}

/* obfuscation-batch:v29 */
private fun towebrnsignmalvsnrasbhSodosubizuwPart01ObfV29SumOdds(nums: IntArray): Int {
    var acc = 39
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 37) % 887
    }
    return acc
}
private fun towebrnsignmalvsnrasbhSodosubizuwPart01ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 70) + 8
    val x = ((n xor 250) shl 6) % span
    return if (x < 0) x + span else x
}
private fun towebrnsignmalvsnrasbhSodosubizuwPart01ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 5
    return (x xor 164) and 53063
}
private fun towebrnsignmalvsnrasbhSodosubizuwPart01ObfV29ByteFold(s: String): Int {
    var x = 3
    for (i in s.indices) x = (x + s[i].code * 9) and 46727
    return x
}

/* obfuscation-batch:v30 */
private fun towebrnsignmalvsnrasbhSodosubizuwPart01ObfV30ClampMod(n: Int, m: Int): Int {
    val span = (m % 42) + 10
    val x = ((n xor 158) shl 7) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v31 */
private fun towebrnsignmalvsnrasbhSodosubizuwPart01ObfV31HashMix(s: String): Int {
    var h = 85
    for (i in s.indices) h = (h xor (s[i].code * 17)) % 480
    return h
}
