package com.towerhsyeignalruaeswh3e698

import android.opengl.GLES20
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

class Vobuxizera(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV31 = towebrnsignmalvsnrasbhVobuxizeraObfV31HashMix("f498") xor towebrnsignmalvsnrasbhVobuxizeraObfV31SumOdds(intArrayOf(8, 35, 26))
        return "Vobuxizera"
    }

    @ReactMethod
    fun sotesunamet(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV31 = towebrnsignmalvsnrasbhVobuxizeraObfV31HashMix("f498") xor towebrnsignmalvsnrasbhVobuxizeraObfV31SumOdds(intArrayOf(8, 35, 26))
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane and 19126
        dexLane = dexLane * 5
        dexLane = dexLane.inv()
        dexLane = dexLane xor 10132
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = try {
            reactApplicationContext.packageName ?: ""
        } catch (e: Exception) {
            ""
        }
        promise.resolve(dexValue)
    }

    @ReactMethod
    fun hobopuhevuj(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV31 = towebrnsignmalvsnrasbhVobuxizeraObfV31HashMix("f498") xor towebrnsignmalvsnrasbhVobuxizeraObfV31SumOdds(intArrayOf(8, 35, 26))
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane xor 522
        dexLane = dexLane shl 10
        dexLane = dexLane % 17
        dexLane = dexLane and 9663
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve(0)
            return
        }
        val dexValue = try {
            reactApplicationContext.packageManager.getPackageInfo(reactApplicationContext.packageName, 0).versionCode
        } catch (e: Exception) {
            0
        }
        promise.resolve(dexValue)
    }

    @ReactMethod
    fun bulejofutapej(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV31 = towebrnsignmalvsnrasbhVobuxizeraObfV31HashMix("f498") xor towebrnsignmalvsnrasbhVobuxizeraObfV31SumOdds(intArrayOf(8, 35, 26))
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane or 24944
        dexLane = dexLane ushr 6
        if ((dexLane and 30) == 0) {
            dexLane = dexLane + 555
        }
        dexLane = dexLane and 541
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = try {
            reactApplicationContext.packageManager.getPackageInfo(reactApplicationContext.packageName, 0).versionName ?: ""
        } catch (e: Exception) {
            ""
        }
        promise.resolve(dexValue)
    }

    @ReactMethod
    fun zofagebuqade(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV31 = towebrnsignmalvsnrasbhVobuxizeraObfV31HashMix("f498") xor towebrnsignmalvsnrasbhVobuxizeraObfV31SumOdds(intArrayOf(8, 35, 26))
        var dexLane = reactApplicationContext.hashCode()
        if ((dexLane and 30) == 0) {
            dexLane = dexLane + 1261
        }
        dexLane = dexLane and 24296
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1414
            1 -> dexLane + 366
            else -> dexLane + 3062
        }
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = try {
            wajepegagomuwu()
        } catch (e: Exception) {
            ""
        }
        promise.resolve(dexValue)
    }

    @ReactMethod
    fun matesepureru(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV31 = towebrnsignmalvsnrasbhVobuxizeraObfV31HashMix("f498") xor towebrnsignmalvsnrasbhVobuxizeraObfV31SumOdds(intArrayOf(8, 35, 26))
        var dexLane = reactApplicationContext.hashCode()
        if ((dexLane and 17) == 0) {
            dexLane = dexLane + 1355
        }
        dexLane = dexLane and 20171
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3129
            1 -> dexLane + 313
            else -> dexLane + 3890
        }
        dexLane = dexLane.inv()
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = try {
            var picked = ""
            val activity = reactApplicationContext.currentActivity
            val intent = activity?.intent
            val fromIntent = intent?.getStringExtra("sendid")
            if (!fromIntent.isNullOrBlank()) {
                picked = fromIntent
                intent?.removeExtra("sendid")
            } else {
                val stored = SharedtowebrnsignmalvsnrasbhPreferencesHelper.loadString("pendingSendId", "")
                if (!stored.isNullOrBlank()) picked = stored
            }
            if (picked.isNotEmpty()) SharedtowebrnsignmalvsnrasbhPreferencesHelper.removeKey("pendingSendId")
            picked
        } catch (e: Exception) {
            ""
        }
        promise.resolve(dexValue)
    }

    @ReactMethod
    fun xolusizolivu(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV31 = towebrnsignmalvsnrasbhVobuxizeraObfV31HashMix("f498") xor towebrnsignmalvsnrasbhVobuxizeraObfV31SumOdds(intArrayOf(8, 35, 26))
        var dexLane = reactApplicationContext.hashCode()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1972
            1 -> dexLane + 3502
            else -> dexLane + 2433
        }
        dexLane = dexLane xor 4338
        if ((dexLane and 22) == 0) {
            dexLane = dexLane + 874
        }
        dexLane = dexLane or 34927
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = try {
            var picked = ""
            val activity = reactApplicationContext.currentActivity
            val intent = activity?.intent
            val fromIntent = intent?.getStringExtra("url")
            if (!fromIntent.isNullOrBlank()) {
                picked = fromIntent
                intent?.removeExtra("url")
            } else {
                val stored = SharedtowebrnsignmalvsnrasbhPreferencesHelper.loadString("pendingPushUrl", "")
                if (!stored.isNullOrBlank()) picked = stored
            }
            if (picked.isNotEmpty()) SharedtowebrnsignmalvsnrasbhPreferencesHelper.removeKey("pendingPushUrl")
            picked
        } catch (e: Exception) {
            ""
        }
        promise.resolve(dexValue)
    }

    fun wajepegagomuwu(): String {
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV31 = towebrnsignmalvsnrasbhVobuxizeraObfV31HashMix("f498") xor towebrnsignmalvsnrasbhVobuxizeraObfV31SumOdds(intArrayOf(8, 35, 26))
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV30 = JuserojofePart01.towebrnsignmalvsnrasbhJuserojofeObfV30ByteFold("af8l")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV29 = JuserojofePart01.towebrnsignmalvsnrasbhHozaminajaObfV29ShiftXor(63, 70) xor JuserojofePart02.towebrnsignmalvsnrasbhHozaminajaObfV29ByteFold("pmf0") xor JuserojofePart01.towebrnsignmalvsnrasbhHozaminajaObfV29HashMix("chg") xor JuserojofePart02.towebrnsignmalvsnrasbhHozaminajaObfV29SumOdds(intArrayOf(16, 11, 26))
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV28 = JuserojofePart01.towebrnsignmalvsnrasbhHozaminajaObfV29HashMix("e5a")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV27 = GogovamapasutoPart02.GogovamatowebrnsignmalvsnrasbhpasutoObfV26ClampMod(26, 7) xor JuserojofePart01.towebrnsignmalvsnrasbhHozaminajaObfV29ShiftXor(36, 41) xor JuserojofePart02.towebrnsignmalvsnrasbhHozaminajaObfV29ByteFold("t4zm") xor JuserojofePart01.towebrnsignmalvsnrasbhHozaminajaObfV29HashMix("kh")

      @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV26 = GogovamapasutoPart01.GogovamapasutoObfV26SumOdtowebrnsignmalvsnrasbhds(intArrayOf(17, 31, 39)) xor GogovamapasutoPart02.GogovamatowebrnsignmalvsnrasbhpasutoObfV26ClampMod(49, 31)
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV25 = SacunonidPart01.towebrnsignmalvsnrasbhSacunonidObfV25ByteFold("b84m8") xor SacunonidPart02.towebrnsignmalvsnrasbhSacunonidObfV25HashMix("qp")
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV24 = SacunonidPart03.VofovimafogObfV24ByteFold("egrs") xor SacunonidPart01.VofovimafogObfV24HashMix("yvr8") xor SacunonidPart02.VofovimafogObfV24SumOdds(intArrayOf(66, 87, 70))
      @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV23 = BaqalaxokPart01.BatowebrnsignmalvsnrasbhqalaxokObfV23ShiftXor(82, 82) xor BaqalaxokPart02.BaqalaxokObfV23BtowebrnsignmalvsnrasbhyteFold1("u3")

    @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV22 = WirahikolPart01.WirahikolObfV22towebrnsignmalvsnrasbhHashMix("7h7") xor WirahikolPart02.WtowebrnsignmalvsnrasbhirahikolObfV22ShiftXor(60, 3)

        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV21 = PunasowicorozPart01.PunasowicorozObfV21BytetowebrnsignmalvsnrasbhFold("btf8") xor PunasowicorozPart02.PunatowebrnsignmalvsnrasbhsowicorozObfV21HashMix("6s8h")

        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV20 = PunasowicorozPart03.towebrnsignmalvsnrasbhQonewozucuvonObfV20ByteFold("f7") xor PunasowicorozPart01.towebrnsignmalvsnrasbhQonewozucuvonObfV20HashMix("z2q") xor PunasowicorozPart02.towebrnsignmalvsnrasbhQonewozucuvonObfV20SumOdds(intArrayOf(8, 10, 29))
        @Suppress("UNUSED_VARIABLE") val towebrnsignmalvsnrasbhSinkV19 = PunasowicorozPart03.PexazavaluObtowebrnsignmalvsnrasbhfV19ByteFold("hwz") xor PunasowicorozPart01.PexazavaluObfV19HashMitowebrnsignmalvsnrasbhx("q3t4") xor PunasowicorozPart02.PexazavaluObfV19SumOddstowebrnsignmalvsnrasbh(intArrayOf(6, 19, 12))
    val egl = EGLContext.getEGL() as EGL10
    val display = egl.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY)
    if (display === EGL10.EGL_NO_DISPLAY) {
    return ""
    }

    val version = IntArray(2)
    if (!egl.eglInitialize(display, version)) {
    return ""
    }

    val attribList = intArrayOf(
    EGL10.EGL_RED_SIZE, 8,
    EGL10.EGL_GREEN_SIZE, 8,
    EGL10.EGL_BLUE_SIZE, 8,
    EGL10.EGL_ALPHA_SIZE, 8,
    EGL10.EGL_RENDERABLE_TYPE, 4,
    EGL10.EGL_NONE,
    )
    val configs = arrayOfNulls<EGLConfig>(1)
    val numConfigs = IntArray(1)
    if (!egl.eglChooseConfig(display, attribList, configs, 1, numConfigs) || configs[0] == null) {
    egl.eglTerminate(display)
    return ""
    }

    val contextAttribs = intArrayOf(0x3098, 2, EGL10.EGL_NONE)
    val context = egl.eglCreateContext(
    display,
    configs[0],
    EGL10.EGL_NO_CONTEXT,
    contextAttribs,
    )
    if (context === EGL10.EGL_NO_CONTEXT) {
    egl.eglTerminate(display)
    return ""
    }

    val surfaceAttribs = intArrayOf(EGL10.EGL_WIDTH, 1, EGL10.EGL_HEIGHT, 1, EGL10.EGL_NONE)
    val surface = egl.eglCreatePbufferSurface(display, configs[0], surfaceAttribs)
    if (surface === EGL10.EGL_NO_SURFACE) {
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    return ""
    }

    var renderer = ""
    try {
    if (egl.eglMakeCurrent(display, surface, surface, context)) {
    renderer = GLES20.glGetString(GLES20.GL_RENDERER) ?: ""
    }
    } finally {
    egl.eglMakeCurrent(
    display,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_CONTEXT,
    )
    egl.eglDestroySurface(display, surface)
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    }

    return renderer
    }
}

/* obfuscation-batch:v31 */
private fun towebrnsignmalvsnrasbhVobuxizeraObfV31HashMix(s: String): Int {
    var h = 27
    for (i in s.indices) h = (h xor (s[i].code * 33)) % 540
    return h
}
private fun towebrnsignmalvsnrasbhVobuxizeraObfV31SumOdds(nums: IntArray): Int {
    var acc = 89
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 8) % 354
    }
    return acc
}
