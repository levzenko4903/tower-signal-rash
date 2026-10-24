/* cf-cipher:v1 */
package com.towerhsyeignalruaeswh3e698

// autosetup-split-begin
// autosetup-split-end
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

class Tegezatikuxu(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = towebrnsignmalvsnrasbhTegezatikuxuObfV2ByteFold("gf2") xor towebrnsignmalvsnrasbhTegezatikuxuObfV2HashMix("0d85") xor towebrnsignmalvsnrasbhTegezatikuxuObfV2SumOdds(intArrayOf(21, 20, 7))
        return "Tegezatikuxu"
    }

    private val keyString = "s4URZjp7jKuhKPHyHa9bDQCrYyDu"
    @Suppress("unused")
    private val ivString = "QweGTEhtnkHKw5x7MN"
    private val keyBytes = keyString.toByteArray(StandardCharsets.UTF_8)

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun wiqoxehujeqef(plain: String): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = towebrnsignmalvsnrasbhTegezatikuxuObfV2ByteFold("gf2") xor towebrnsignmalvsnrasbhTegezatikuxuObfV2HashMix("0d85") xor towebrnsignmalvsnrasbhTegezatikuxuObfV2SumOdds(intArrayOf(21, 20, 7))
        return try {
            CtowebrnsignmalvsnrasbhCipherPart01.bytesToHex(CtowebrnsignmalvsnrasbhCipherPart01.transform(plain.toByteArray(StandardCharsets.UTF_8)))
        } catch (_: Exception) {
            ""
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun hojocihagi(hex: String): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = towebrnsignmalvsnrasbhTegezatikuxuObfV2ByteFold("gf2") xor towebrnsignmalvsnrasbhTegezatikuxuObfV2HashMix("0d85") xor towebrnsignmalvsnrasbhTegezatikuxuObfV2SumOdds(intArrayOf(21, 20, 7))
        return try {
            val normalized = hex.trim()
            if (normalized.isEmpty() || normalized.length % 2 != 0) return ""
            String(CtowebrnsignmalvsnrasbhCipherPart01.transform(CtowebrnsignmalvsnrasbhCipherPart02.hexToBytes(normalized)), StandardCharsets.UTF_8)
        } catch (_: Exception) {
            ""
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun nisejumenisi(hex: String): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV2 = towebrnsignmalvsnrasbhTegezatikuxuObfV2ByteFold("gf2") xor towebrnsignmalvsnrasbhTegezatikuxuObfV2HashMix("0d85") xor towebrnsignmalvsnrasbhTegezatikuxuObfV2SumOdds(intArrayOf(21, 20, 7))
        return try {
            val normalized = hex.trim()
            if (normalized.isEmpty() || normalized.length % 2 != 0) return ""
            CtowebrnsignmalvsnrasbhCipherPart01.bytesToHex(CtowebrnsignmalvsnrasbhCipherPart01.transform(CtowebrnsignmalvsnrasbhCipherPart02.hexToBytes(normalized)))
        } catch (_: Exception) {
            ""
        }
    }

    private class Wheel(val pins: IntArray, var pos: Int) {
        val len: Int = pins.size
    }

    companion object {
        private val CHI_LENS = intArrayOf(41, 31, 29, 26, 23, 43, 47, 37)
        private val PSI_LENS = intArrayOf(43, 47, 51, 53, 59, 61, 67, 71)
        private val MU_LENS = intArrayOf(61, 37)
    }
}

/* obfuscation-batch:v2 */
private fun towebrnsignmalvsnrasbhTegezatikuxuObfV2ByteFold(s: String): Int {
    var x = 30
    for (i in s.indices) x = (x + s[i].code * 40) and 22250
    return x
}
private fun towebrnsignmalvsnrasbhTegezatikuxuObfV2HashMix(s: String): Int {
    var h = 76
    for (i in s.indices) h = (h xor (s[i].code * 3)) % 487
    return h
}
private fun towebrnsignmalvsnrasbhTegezatikuxuObfV2SumOdds(nums: IntArray): Int {
    var acc = 17
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 26) % 94
    }
    return acc
}
