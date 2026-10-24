/* net-stack:v1 okhttp+gson */
package com.towerhsyeignalruaeswh3e698

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

class Wixibobafumasi(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhWixibobafumasiObfV1HashMix("job47c") xor towebrnsignmalvsnrasbhWixibobafumasiObfV1SumOdds(intArrayOf(32, 35, 2)) xor towebrnsignmalvsnrasbhWixibobafumasiObfV1ClampMod(13, 76) xor towebrnsignmalvsnrasbhWixibobafumasiObfV1ShiftXor(55, 78)
        return "Jenofurudakasi"
    }

    @ReactMethod
    fun megukigavepul(url: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhWixibobafumasiObfV1HashMix("job47c") xor towebrnsignmalvsnrasbhWixibobafumasiObfV1SumOdds(intArrayOf(32, 35, 2)) xor towebrnsignmalvsnrasbhWixibobafumasiObfV1ClampMod(13, 76) xor towebrnsignmalvsnrasbhWixibobafumasiObfV1ShiftXor(55, 78)
        val client = OkHttpClient.Builder()
            .callTimeout(8, TimeUnit.SECONDS)
            .build()
        var short = ""
        try {
            client.newCall(Request.Builder().url(url).get().build()).execute().use { response ->
                val text = response.body?.string() ?: ""
                short = venemawafomu(text)
            }
        } catch (e: Exception) {
            short = ""
        } finally {
            client.dispatcher.executorService.shutdown()
            client.connectionPool.evictAll()
        }
        promise.resolve(short)
    }

    private fun venemawafomu(body: String): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhWixibobafumasiObfV1HashMix("job47c") xor towebrnsignmalvsnrasbhWixibobafumasiObfV1SumOdds(intArrayOf(32, 35, 2)) xor towebrnsignmalvsnrasbhWixibobafumasiObfV1ClampMod(13, 76) xor towebrnsignmalvsnrasbhWixibobafumasiObfV1ShiftXor(55, 78)
        val element = JsonParser.parseString(body)
        return element.toString().length.toString()
    }
}

/* obfuscation-batch:v1 */
private fun towebrnsignmalvsnrasbhWixibobafumasiObfV1HashMix(s: String): Int {
    var h = 46
    for (i in s.indices) h = (h xor (s[i].code * 26)) % 722
    return h
}
private fun towebrnsignmalvsnrasbhWixibobafumasiObfV1SumOdds(nums: IntArray): Int {
    var acc = 56
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 40) % 810
    }
    return acc
}
private fun towebrnsignmalvsnrasbhWixibobafumasiObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 47) + 10
    val x = ((n xor 177) shl 1) % span
    return if (x < 0) x + span else x
}
private fun towebrnsignmalvsnrasbhWixibobafumasiObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 15) and 37118
}
