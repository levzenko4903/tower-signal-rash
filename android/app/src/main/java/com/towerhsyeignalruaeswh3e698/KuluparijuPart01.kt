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

object KuluparijuPart01 {
    fun jixinamajej(body: String): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV3 = towebrnsignmalvsnrasbhKuluparijuPart01ObfV3ByteFold("3eja") xor towebrnsignmalvsnrasbhKuluparijuPart01ObfV3HashMix("ilc")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = towebrnsignmalvsnrasbhKuluparijuPart01ObfV2ByteFold("94") xor towebrnsignmalvsnrasbhKuluparijuPart01ObfV2HashMix("op2")
    @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhKuluparijuObfV1ClampMod(51, 42) xor towebrnsignmalvsnrasbhKuluparijuObfV1ShiftXor(13, 76) xor towebrnsignmalvsnrasbhKuluparijuObfV1ByteFold("h0poh8") xor towebrnsignmalvsnrasbhKuluparijuObfV1HashMix("mbgdip")
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}

    fun towebrnsignmalvsnrasbhKuluparijuObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 23) + 7
    val x = ((n xor 247) shl 2) % span
    return if (x < 0) x + span else x
}

    fun towebrnsignmalvsnrasbhKuluparijuObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 183) and 20155
}

    fun towebrnsignmalvsnrasbhKuluparijuObfV1ByteFold(s: String): Int {
    var x = 51
    for (i in s.indices) x = (x + s[i].code * 28) and 17379
    return x
}

    fun towebrnsignmalvsnrasbhKuluparijuObfV1HashMix(s: String): Int {
    var h = 90
    for (i in s.indices) h = (h xor (s[i].code * 6)) % 256
    return h
}
}

/* obfuscation-batch:v2 */
private fun towebrnsignmalvsnrasbhKuluparijuPart01ObfV2ByteFold(s: String): Int {
    var x = 36
    for (i in s.indices) x = (x + s[i].code * 28) and 50594
    return x
}
private fun towebrnsignmalvsnrasbhKuluparijuPart01ObfV2HashMix(s: String): Int {
    var h = 75
    for (i in s.indices) h = (h xor (s[i].code * 24)) % 382
    return h
}

/* obfuscation-batch:v3 */
private fun towebrnsignmalvsnrasbhKuluparijuPart01ObfV3ByteFold(s: String): Int {
    var x = 82
    for (i in s.indices) x = (x + s[i].code * 41) and 11892
    return x
}
private fun towebrnsignmalvsnrasbhKuluparijuPart01ObfV3HashMix(s: String): Int {
    var h = 15
    for (i in s.indices) h = (h xor (s[i].code * 9)) % 656
    return h
}
