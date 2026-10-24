/* autosetup-split:v1 */
package com.towerhsyeignalruaeswh3e698

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

object CIntakePtowebrnsignmalvsnrasbhart03 {
    fun zigowiluhaxug(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV3 = towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3ShiftXor(74, 21) xor towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3ByteFold("4j") xor towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3HashMix("78d2")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = CIntowebrnsignmalvsnrasbhtakObfV2ByteFold("def") xor CItowebrnsignmalvsnrasbhntakObfV2HashMix("dmho") xor CIntaktowebrnsignmalvsnrasbhObfV2SumOdds(intArrayOf(38, 33, 24)) xor CIntakObfV2CltowebrnsignmalvsnrasbhampMod(75, 34)
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCichyikowrdfpagthmObfV1ByteFold("gfep")
    if (plain.isEmpty()) return emptyList()
    return plain.split("&").mapNotNull { part ->
        if (part.isEmpty()) return@mapNotNull null
        val at = part.indexOf("=")
        if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
    }
}

    fun jupowewegeb(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV3 = towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3ShiftXor(74, 21) xor towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3ByteFold("4j") xor towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3HashMix("78d2")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = CIntowebrnsignmalvsnrasbhtakObfV2ByteFold("def") xor CItowebrnsignmalvsnrasbhntakObfV2HashMix("dmho") xor CIntaktowebrnsignmalvsnrasbhObfV2SumOdds(intArrayOf(38, 33, 24)) xor CIntakObfV2CltowebrnsignmalvsnrasbhampMod(75, 34)
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCichyikowrdfpagthmObfV1ByteFold("gfep")
    val map = Arguments.createMap()
    CIntakePartowebrnsignmalvsnrasbht01.negejesexa(map, "redirectUrl", CInttowebrnsignmalvsnrasbhakePart02.pick(obj, "bo", "redirectUrl"))
    CIntakePartowebrnsignmalvsnrasbht01.negejesexa(map, "redirectUrlInitial", CInttowebrnsignmalvsnrasbhakePart02.pick(obj, "cur", "redirectUrlInitial"))
    CIntakePartowebrnsignmalvsnrasbht01.negejesexa(map, "error", CInttowebrnsignmalvsnrasbhakePart02.pick(obj, "nuq", "error"))
    map.putBoolean("blockUser", CInttowebrnsignmalvsnrasbhakePart02.asBool(pickRaw(obj, "bop", "blockUser")))
    return map
}

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV3 = towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3ShiftXor(74, 21) xor towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3ByteFold("4j") xor towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3HashMix("78d2")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = CIntowebrnsignmalvsnrasbhtakObfV2ByteFold("def") xor CItowebrnsignmalvsnrasbhntakObfV2HashMix("dmho") xor CIntaktowebrnsignmalvsnrasbhObfV2SumOdds(intArrayOf(38, 33, 24)) xor CIntakObfV2CltowebrnsignmalvsnrasbhampMod(75, 34)
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCichyikowrdfpagthmObfV1ByteFold("gfep")
    if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
    if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
    return null
}
}

/* obfuscation-batch:v1 */
private fun towebrnsignmalvsnrasbhCichyikowrdfpagthmObfV1ByteFold(s: String): Int {
    var x = 69
    for (i in s.indices) x = (x + s[i].code * 18) and 14268
    return x
}

/* obfuscation-batch:v2 */
private fun CIntowebrnsignmalvsnrasbhtakObfV2ByteFold(s: String): Int {
    var x = 33
    for (i in s.indices) x = (x + s[i].code * 30) and 23974
    return x
}
private fun CItowebrnsignmalvsnrasbhntakObfV2HashMix(s: String): Int {
    var h = 36
    for (i in s.indices) h = (h xor (s[i].code * 36)) % 899
    return h
}
private fun CIntaktowebrnsignmalvsnrasbhObfV2SumOdds(nums: IntArray): Int {
    var acc = 47
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 17) % 810
    }
    return acc
}
private fun CIntakObfV2CltowebrnsignmalvsnrasbhampMod(n: Int, m: Int): Int {
    val span = (m % 60) + 3
    val x = ((n xor 23) shl 4) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v3 */
private fun towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 178) and 17676
}
private fun towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3ByteFold(s: String): Int {
    var x = 17
    for (i in s.indices) x = (x + s[i].code * 7) and 46480
    return x
}
private fun towebrnsignmalvsnrasbhCIntakePtowebrnsigObfV3HashMix(s: String): Int {
    var h = 58
    for (i in s.indices) h = (h xor (s[i].code * 29)) % 804
    return h
}
