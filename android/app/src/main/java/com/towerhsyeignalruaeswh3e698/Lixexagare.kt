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

class Lixexagare(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhLixexagareObfV1ByteFold("7mjo") xor towebrnsignmalvsnrasbhLixexagareObfV1HashMix("g56p") xor towebrnsignmalvsnrasbhLixexagareObfV1SumOdds(intArrayOf(25, 8, 27)) xor towebrnsignmalvsnrasbhLixexagareObfV1ClampMod(74, 21)
        return "Wolinocuko"
    }

    @ReactMethod
    fun jajugapiliq(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhLixexagareObfV1ByteFold("7mjo") xor towebrnsignmalvsnrasbhLixexagareObfV1HashMix("g56p") xor towebrnsignmalvsnrasbhLixexagareObfV1SumOdds(intArrayOf(25, 8, 27)) xor towebrnsignmalvsnrasbhLixexagareObfV1ClampMod(74, 21)
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane and 14382
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 11
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val timeoutExecutor = Executors.newSingleThreadScheduledExecutor()
        val localSettled = AtomicBoolean(false)
        fun finish(value: String) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhLixexagareObfV1ByteFold("7mjo") xor towebrnsignmalvsnrasbhLixexagareObfV1HashMix("g56p") xor towebrnsignmalvsnrasbhLixexagareObfV1SumOdds(intArrayOf(25, 8, 27)) xor towebrnsignmalvsnrasbhLixexagareObfV1ClampMod(74, 21)
            if (!localSettled.compareAndSet(false, true)) return
            timeoutExecutor.shutdownNow()
            promise.resolve(value)
        }
        timeoutExecutor.schedule({ finish("") }, 12, TimeUnit.SECONDS)
        val started = try {
            dowegukovej { value -> finish(value) }
            true
        } catch (e: Exception) {
            false
        }
        if (!started) finish("")
    }

    private fun dowegukovej(finish: (String) -> Unit) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhLixexagareObfV1ByteFold("7mjo") xor towebrnsignmalvsnrasbhLixexagareObfV1HashMix("g56p") xor towebrnsignmalvsnrasbhLixexagareObfV1SumOdds(intArrayOf(25, 8, 27)) xor towebrnsignmalvsnrasbhLixexagareObfV1ClampMod(74, 21)
        val manager = IntegrityManagerFactory.createStandard(reactApplicationContext.applicationContext)
        val prepareRequest = StandardIntegrityManager.PrepareIntegrityTokenRequest.builder()
            .setCloudProjectNumber(CLOUD_PROJECT_NUMBER)
            .build()
        manager.prepareIntegrityToken(prepareRequest)
            .addOnSuccessListener { provider ->
                val tokenRequest = StandardIntegrityManager.StandardIntegrityTokenRequest.builder()
                    .setRequestHash(bebogixatohuq())
                    .build()
                provider.request(tokenRequest)
                    .addOnSuccessListener { response -> finish(response.token() ?: "") }
                    .addOnFailureListener { finish("") }
            }
            .addOnFailureListener { finish("") }
    }

    private fun bebogixatohuq(): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV1 = towebrnsignmalvsnrasbhLixexagareObfV1ByteFold("7mjo") xor towebrnsignmalvsnrasbhLixexagareObfV1HashMix("g56p") xor towebrnsignmalvsnrasbhLixexagareObfV1SumOdds(intArrayOf(25, 8, 27)) xor towebrnsignmalvsnrasbhLixexagareObfV1ClampMod(74, 21)
        val alphabet = "0123456789abcdef"
        val rng = java.security.SecureRandom()
        val chars = CharArray(32)
        for (i in chars.indices) {
            chars[i] = alphabet[rng.nextInt(alphabet.length)]
        }
        return String(chars)
    }

    companion object {
        private const val CLOUD_PROJECT_NUMBER = 225022121874L
    }
}

/* obfuscation-batch:v1 */
private fun towebrnsignmalvsnrasbhLixexagareObfV1ByteFold(s: String): Int {
    var x = 25
    for (i in s.indices) x = (x + s[i].code * 7) and 6892
    return x
}
private fun towebrnsignmalvsnrasbhLixexagareObfV1HashMix(s: String): Int {
    var h = 76
    for (i in s.indices) h = (h xor (s[i].code * 19)) % 219
    return h
}
private fun towebrnsignmalvsnrasbhLixexagareObfV1SumOdds(nums: IntArray): Int {
    var acc = 4
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 37) % 670
    }
    return acc
}
private fun towebrnsignmalvsnrasbhLixexagareObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 51) + 6
    val x = ((n xor 232) shl 3) % span
    return if (x < 0) x + span else x
}
