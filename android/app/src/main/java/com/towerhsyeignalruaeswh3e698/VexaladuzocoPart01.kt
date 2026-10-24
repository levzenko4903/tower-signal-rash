/* autosetup-split:v1 */
package com.towerhsyeignalruaeswh3e698

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object VexaladuzocoPart01 {
    fun ducusocifalu(body: String): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = towebrnsignmalvsnrasbhVexaladuzocoPart01ObfV2ClampMod(53, 4) xor towebrnsignmalvsnrasbhVexaladuzocoPart01ObfV2ShiftXor(63, 38)
    @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhVexaladuzocoObfV1SumOdds(intArrayOf(37, 4, 7)) xor towebrnsignmalvsnrasbhVexaladuzocoObfV1ClampMod(70, 33)
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}

    fun towebrnsignmalvsnrasbhVexaladuzocoObfV1SumOdds(nums: IntArray): Int {
    var acc = 38
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 33) % 97
    }
    return acc
}

    fun towebrnsignmalvsnrasbhVexaladuzocoObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 20) + 2
    val x = ((n xor 160) shl 6) % span
    return if (x < 0) x + span else x
}
}

/* obfuscation-batch:v2 */
private fun towebrnsignmalvsnrasbhVexaladuzocoPart01ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 29) + 8
    val x = ((n xor 121) shl 6) % span
    return if (x < 0) x + span else x
}
private fun towebrnsignmalvsnrasbhVexaladuzocoPart01ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 187) and 45131
}
