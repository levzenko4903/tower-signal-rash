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

object CtowebrnsignmalvsnrasbhIntakePart01 {
    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("pad", "network", "deviceID", "naming", "pushToken")
    private val headerLayout = arrayOf("timezone", "referer", "manufacturer", "androidId", "screen", "adId", "pad", "pad", "pad", "locale")
    private val dummyBodyKeys = arrayOf("qajimo", "xajugin")
    internal val extraQuery = linkedMapOf("jewa" to "tij", "cin" to "lawa", "de" to "zihi", "jegu" to "bigiqo")
    private val fieldRoutes = linkedMapOf("appId" to "body", "deviceID" to "cookie", "adId" to "header", "pushToken" to "cookie", "referer" to "header", "oneLink" to "body", "naming" to "cookie", "userAgent" to "body", "app_version" to "body", "androidId" to "header", "event" to "body", "device_model" to "body", "manufacturer" to "header", "locale" to "header", "timezone" to "header", "network" to "cookie", "screen" to "header", "session_id" to "body", "play_integrity_token" to "body")

    fun assemble(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    val values = LinkedHashMap<String, String>()
    for (pair in parseForm(bodyPlain)) {
        values[pair.first] = pair.second
    }
    for (index in requiredFields.indices) {
        val key = requiredFields[index]
        val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
        if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
    }
    val cookie = CtowebrnsignmalvsnrasbhIntakePart02.packPipe(cookieLayout, values)
    val header = CtowebrnsignmalvsnrasbhIntakePart02.packPipe(headerLayout, values)
    val bodyParts = ArrayList<String>()
    for ((key, value) in values) {
        if (dummyBodyKeys.contains(key)) continue
        val route = fieldRoutes[key]
        if (route != null && route != "body") continue
        bodyParts.add(CtowebrnsignmalvsnrasbhIntakePart02.enc(key) + "=" + CtowebrnsignmalvsnrasbhIntakePart02.enc(value))
    }
    dummyBodyKeys.forEachIndexed { index, key ->
        bodyParts.add(CtowebrnsignmalvsnrasbhIntakePart02.enc(key) + "=" + CtowebrnsignmalvsnrasbhIntakePart02.enc((index + bodyPlain.length).toString()))
    }
    val json = JSONObject()
    json.put("cookie", cookie)
    json.put("header", header)
    json.put("body", bodyParts.joinToString("&"))
    return json.toString()
}

    fun parseForm(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    if (plain.isEmpty()) return emptyList()
    return plain.split("&").mapNotNull { part ->
        if (part.isEmpty()) return@mapNotNull null
        val at = part.indexOf("=")
        if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
    }
}

    fun workerUrl(base: String): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    val root = base.trimEnd('/')
    val params = extraQuery.entries.joinToString("&") { (key, value) ->
        URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
    }
    return root + "/dok" + if (params.isEmpty()) "" else "?" + params
}

    fun writeNullable(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    if (value == null) map.putNull(key) else map.putString(key, value)
}

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1SumOdds(intArrayOf(19, 34, 13)) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ClampMod(60, 15) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ShiftXor(46, 41) xor towebrnsignmalvsnrasbhCtowebrnsignmalvsnObfV1ByteFold("eni18")
    if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
    if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
    return null
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
