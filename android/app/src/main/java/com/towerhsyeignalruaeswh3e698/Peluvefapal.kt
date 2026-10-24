package com.towerhsyeignalruaeswh3e698

import android.content.Context
import android.webkit.WebSettings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Peluvefapal(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhPeluvefapalObfV1SumOdds(intArrayOf(28, 39, 22))
        return "Wepigelip"
    }

    @ReactMethod
    fun texumisulututi(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhPeluvefapalObfV1SumOdds(intArrayOf(28, 39, 22))
        var dexLane = reactApplicationContext.hashCode()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2042
            1 -> dexLane + 1660
            else -> dexLane + 2048
        }
        val laneWord = "indd"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(97, 20, 118)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 24712
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = try {
            walunulurumupu(reactApplicationContext)
        } catch (e: Exception) {
            ""
        }
        promise.resolve(dexValue)
    }

    private fun walunulurumupu(context: Context): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhPeluvefapalObfV1SumOdds(intArrayOf(28, 39, 22))
        val loaded = WebSettings.getDefaultUserAgent(context)
        if (loaded == null) {
            return ""
        }
        return loaded
    }
}

/* obfuscation-batch:v1 */
private fun towebrnsignmalvsnrasbhPeluvefapalObfV1SumOdds(nums: IntArray): Int {
    var acc = 25
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 34) % 740
    }
    return acc
}
