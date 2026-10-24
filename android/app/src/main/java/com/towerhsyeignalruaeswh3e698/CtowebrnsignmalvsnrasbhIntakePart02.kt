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

object CtowebrnsignmalvsnrasbhIntakePart02 {
    fun packPipe(layout: Array<String>, values: Map<String, String>): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    if (layout.isEmpty()) return ""
    val out = ArrayList<String>(layout.size)
    var pad = 0
    for (slot in layout) {
        if (slot == "pad") {
            out.add("p" + pad.toString(16) + values.size)
            pad += 1
        } else {
            out.add(values[slot] ?: "")
        }
    }
    return out.joinToString("|")
}

    fun enc(value: String): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
        return URLEncoder.encode(value, "UTF-8")
    }

private fun workerUrl(base: String): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    val root = base.trimEnd('/')
    val params = CtowebrnsignmalvsnrasbhIntakePart01.extraQuery.entries.joinToString("&") { (key, value) ->
        URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
    }
    return root + "/dok" + if (params.isEmpty()) "" else "?" + params
}

    fun mapResponse(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    val map = Arguments.createMap()
    CtowebrnsignmalvsnrasbhIntakePart01.writeNullable(map, "redirectUrl", pick(obj, "hah", "redirectUrl"))
    CtowebrnsignmalvsnrasbhIntakePart01.writeNullable(map, "redirectUrlInitial", pick(obj, "mu", "redirectUrlInitial"))
    CtowebrnsignmalvsnrasbhIntakePart01.writeNullable(map, "error", pick(obj, "wo", "error"))
    map.putBoolean("blockUser", asBool(CtowebrnsignmalvsnrasbhIntakePart01.pickRaw(obj, "dep", "blockUser")))
    return map
}

    fun pick(obj: JSONObject, alias: String, fallback: String): String? {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    val raw = CtowebrnsignmalvsnrasbhIntakePart01.pickRaw(obj, alias, fallback) ?: return null
    val text = raw.toString()
    return if (text.isEmpty()) null else text
}

    fun asBool(value: Any?): Boolean {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
        return when (value) {
    null -> false
    is Boolean -> value
    is Number -> value.toDouble() != 0.0
    is String -> value.isNotEmpty() && value != "0" && !value.equals("false", true)
    else -> true
}
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
