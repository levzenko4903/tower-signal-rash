/* dex-lanes:v1 */
package com.towerhsyeignalruaeswh3e698

object DtowebrnsignmalvsnrasbhDexLanes {
    fun lane00(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 47693
        dexLane = dexLane % 47
        val laneNums = intArrayOf(105, 196, 184)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane or 32292
        return dexLane
    }

    fun lane01(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 3
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 1140
        }
        dexLane = dexLane * 25
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 55
        return dexLane
    }

    fun lane02(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 26384
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 781
            1 -> dexLane + 2160
            else -> dexLane + 500
        }
        dexLane = dexLane and 9579
        if ((dexLane and 8) == 0) {
            dexLane = dexLane + 3172
        }
        dexLane = dexLane * 33
        return dexLane
    }

    fun lane03(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 8
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2098
            1 -> dexLane + 2592
            else -> dexLane + 1239
        }
        dexLane = dexLane xor 50571
        dexLane = dexLane and 20364
        val laneWord = "nknm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane04(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 6439
        dexLane = dexLane xor 6454
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 8
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 921
            1 -> dexLane + 3330
            else -> dexLane + 1663
        }
        return dexLane
    }

    fun lane05(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 28) == 0) {
            dexLane = dexLane + 521
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane and 9503
        dexLane = dexLane.inv()
        dexLane = dexLane + 28498
        return dexLane
    }

    fun lane06(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(13, 83, 27)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane and 1359
        val laneWord = "oclj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 61
        return dexLane
    }

    fun lane07(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 4
        dexLane = dexLane shl 2
        dexLane = dexLane and 12543
        dexLane = dexLane ushr 4
        dexLane = dexLane + 42469
        return dexLane
    }

    fun lane08(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 34523
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3137
            1 -> dexLane + 2494
            else -> dexLane + 2909
        }
        dexLane = dexLane and 27223
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "eado"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane09(seed: Int): Int {
        var dexLane = seed
        val laneWord = "pfek"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 4
        dexLane = dexLane shl 2
        val laneNums = intArrayOf(106, 175, 91)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane10(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 3
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3652
            1 -> dexLane + 2822
            else -> dexLane + 2874
        }
        dexLane = dexLane and 25622
        dexLane = dexLane or 15114
        if ((dexLane and 26) == 0) {
            dexLane = dexLane + 3238
        }
        return dexLane
    }

    fun lane11(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 10
        dexLane = dexLane or 16905
        dexLane = dexLane * 7
        val laneNums = intArrayOf(183, 166, 148)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "kope"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane12(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 11
        dexLane = dexLane * 30
        if ((dexLane and 9) == 0) {
            dexLane = dexLane + 963
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2034
            1 -> dexLane + 3250
            else -> dexLane + 170
        }
        val laneNums = intArrayOf(177, 158, 16)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane13(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 22017
        dexLane = dexLane % 80
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 1807
        }
        dexLane = dexLane * 36
        dexLane = dexLane and 18482
        return dexLane
    }

    fun lane14(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 59322
        dexLane = dexLane.inv()
        dexLane = dexLane shl 6
        if ((dexLane and 7) == 0) {
            dexLane = dexLane + 3017
        }
        dexLane = dexLane or 2402
        return dexLane
    }

    fun lane15(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 27025
        dexLane = dexLane xor 134
        dexLane = dexLane % 67
        val laneNums = intArrayOf(154, 144, 182)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 20153
        return dexLane
    }

    fun lane16(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 23
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 46
        dexLane = dexLane xor 31777
        dexLane = dexLane or 25359
        return dexLane
    }

    fun lane17(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3096
            1 -> dexLane + 593
            else -> dexLane + 3920
        }
        dexLane = dexLane + 39687
        dexLane = dexLane and 1499
        dexLane = dexLane % 50
        dexLane = dexLane ushr 10
        return dexLane
    }

    fun lane18(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 49224
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(158, 69, 8)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 23) == 0) {
            dexLane = dexLane + 1355
        }
        dexLane = dexLane or 22420
        return dexLane
    }

    fun lane19(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 846
        }
        dexLane = dexLane shl 5
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 18
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2818
            1 -> dexLane + 2538
            else -> dexLane + 2287
        }
        return dexLane
    }

    fun lane20(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 3726
        dexLane = dexLane + 14526
        dexLane = dexLane xor 46464
        dexLane = dexLane or 7622
        dexLane = dexLane shl 3
        return dexLane
    }

    fun lane21(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 7
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 2156
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 2469
        }
        dexLane = dexLane % 34
        return dexLane
    }

    fun lane22(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 30359
        dexLane = dexLane or 56275
        dexLane = dexLane * 32
        if ((dexLane and 20) == 0) {
            dexLane = dexLane + 3309
        }
        val laneNums = intArrayOf(122, 111, 156)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane23(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 12
        val laneNums = intArrayOf(175, 125, 122)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 14) == 0) {
            dexLane = dexLane + 126
        }
        val laneWord = "chie"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane24(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane or 42013
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3431
            1 -> dexLane + 920
            else -> dexLane + 3562
        }
        dexLane = dexLane + 19238
        dexLane = dexLane shl 12
        return dexLane
    }

    fun lane25(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 63
        val laneNums = intArrayOf(120, 14, 198)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1284
            1 -> dexLane + 3358
            else -> dexLane + 268
        }
        dexLane = dexLane or 11453
        val laneWord = "ggnh"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane26(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 276
        }
        dexLane = dexLane.inv()
        dexLane = dexLane or 39860
        dexLane = dexLane % 28
        dexLane = dexLane shl 3
        return dexLane
    }

    fun lane27(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 54
        dexLane = dexLane ushr 7
        dexLane = dexLane shl 9
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane + 43224
        return dexLane
    }

    fun lane28(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane and 9968
        val laneNums = intArrayOf(35, 142, 185)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 3
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane29(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(8, 69, 47)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane + 51356
        dexLane = dexLane xor 7078
        dexLane = dexLane ushr 10
        dexLane = dexLane and 20492
        return dexLane
    }

    fun lane30(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 3
        dexLane = dexLane shl 9
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(138, 137, 125)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane31(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 3
        val laneWord = "idol"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 16203
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 53
        return dexLane
    }

    fun lane32(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 25500
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 21
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1946
            1 -> dexLane + 2535
            else -> dexLane + 1062
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane33(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1097
            1 -> dexLane + 329
            else -> dexLane + 1147
        }
        dexLane = dexLane.inv()
        dexLane = dexLane xor 11827
        dexLane = dexLane + 43096
        val laneWord = "cdbf"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane34(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "cgab"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 79
        dexLane = dexLane * 30
        val laneNums = intArrayOf(30, 113, 184)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane35(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 10
        val laneNums = intArrayOf(76, 148, 154)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 11935
        dexLane = dexLane ushr 9
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3518
            1 -> dexLane + 3287
            else -> dexLane + 1733
        }
        return dexLane
    }

    fun lane36(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(145, 31, 100)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane xor 1950
        dexLane = dexLane * 34
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 11
        return dexLane
    }

    fun lane37(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 3265
        dexLane = dexLane % 47
        val laneNums = intArrayOf(104, 30, 6)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane xor 25704
        return dexLane
    }

    fun lane38(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 48884
        dexLane = dexLane shl 4
        dexLane = dexLane.inv()
        dexLane = dexLane % 72
        val laneNums = intArrayOf(21, 202, 74)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane39(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(153, 189, 182)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane ushr 1
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 3338
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3439
            1 -> dexLane + 3656
            else -> dexLane + 2127
        }
        dexLane = dexLane or 59662
        return dexLane
    }

    fun lane40(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 26
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 461
            1 -> dexLane + 1372
            else -> dexLane + 3870
        }
        dexLane = dexLane % 44
        dexLane = dexLane shl 6
        dexLane = dexLane and 24032
        return dexLane
    }

    fun lane41(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 18) == 0) {
            dexLane = dexLane + 426
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 32
        val laneNums = intArrayOf(162, 176, 139)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 35311
        return dexLane
    }

    fun lane42(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3729
            1 -> dexLane + 2899
            else -> dexLane + 3943
        }
        dexLane = dexLane * 38
        dexLane = dexLane and 7058
        dexLane = dexLane shl 5
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 825
        }
        return dexLane
    }

    fun lane43(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 10
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 1225
        }
        val laneNums = intArrayOf(134, 177, 41)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane * 22
        dexLane = dexLane + 3509
        return dexLane
    }

    fun lane44(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(134, 163, 141)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane + 14657
        if ((dexLane and 20) == 0) {
            dexLane = dexLane + 3221
        }
        dexLane = dexLane % 72
        dexLane = dexLane ushr 3
        return dexLane
    }

    fun lane45(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(193, 196, 79)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 20112
        if ((dexLane and 30) == 0) {
            dexLane = dexLane + 1701
        }
        val laneWord = "knjm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane46(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 14) == 0) {
            dexLane = dexLane + 3615
        }
        dexLane = dexLane.inv()
        dexLane = dexLane or 38878
        dexLane = dexLane and 6695
        return dexLane
    }

    fun lane47(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane + 15748
        dexLane = dexLane % 39
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1214
            1 -> dexLane + 3943
            else -> dexLane + 2530
        }
        return dexLane
    }

    fun lane48(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 8367
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(145, 58, 162)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 64
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane49(seed: Int): Int {
        var dexLane = seed
        val laneWord = "gkpn"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 9
        dexLane = dexLane shl 2
        dexLane = dexLane % 52
        dexLane = dexLane * 24
        return dexLane
    }

    fun lane50(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 5
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 21
        dexLane = dexLane shl 12
        return dexLane
    }

    fun lane51(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 4414
        dexLane = dexLane * 36
        dexLane = dexLane shl 11
        val laneWord = "kgap"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 5
        return dexLane
    }

    fun lane52(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 3361
        }
        dexLane = dexLane % 81
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 6
        dexLane = dexLane and 29541
        return dexLane
    }

    fun lane53(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 30253
        if ((dexLane and 15) == 0) {
            dexLane = dexLane + 786
        }
        dexLane = dexLane shl 10
        val laneWord = "ecia"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 4
        return dexLane
    }

    fun lane54(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 12427
        dexLane = dexLane and 30350
        dexLane = dexLane or 53542
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 44925
        return dexLane
    }

    fun lane55(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 10
        dexLane = dexLane xor 1127
        dexLane = dexLane + 12227
        dexLane = dexLane % 44
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane56(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 132
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 40
        val laneWord = "nbfh"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 26393
        return dexLane
    }

    fun lane57(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 368
            1 -> dexLane + 1997
            else -> dexLane + 2151
        }
        dexLane = dexLane or 19341
        dexLane = dexLane ushr 12
        val laneWord = "bkbi"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 31
        return dexLane
    }

    fun lane58(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 3
        dexLane = dexLane or 29629
        dexLane = dexLane ushr 1
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane59(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 8) == 0) {
            dexLane = dexLane + 2429
        }
        val laneWord = "lceg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3038
            1 -> dexLane + 739
            else -> dexLane + 3201
        }
        dexLane = dexLane * 30
        dexLane = dexLane % 69
        return dexLane
    }

    fun lane60(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 24
        dexLane = dexLane shl 12
        dexLane = dexLane.inv()
        val laneWord = "hlkg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 28) == 0) {
            dexLane = dexLane + 2698
        }
        return dexLane
    }

    fun lane61(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 11205
        dexLane = dexLane + 10334
        val laneWord = "lpoe"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 11
        dexLane = dexLane % 20
        return dexLane
    }

    fun lane62(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        if ((dexLane and 19) == 0) {
            dexLane = dexLane + 3408
        }
        val laneNums = intArrayOf(178, 10, 137)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane ushr 6
        dexLane = dexLane + 37361
        return dexLane
    }

    fun lane63(seed: Int): Int {
        var dexLane = seed
        val laneWord = "ocgk"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 7
        dexLane = dexLane * 42
        dexLane = dexLane or 11028
        return dexLane
    }

    fun lane64(seed: Int): Int {
        var dexLane = seed
        val laneWord = "ncgc"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3823
            1 -> dexLane + 3145
            else -> dexLane + 3467
        }
        dexLane = dexLane % 27
        dexLane = dexLane.inv()
        dexLane = dexLane shl 10
        return dexLane
    }

    fun lane65(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 60
        dexLane = dexLane.inv()
        dexLane = dexLane + 33843
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 7
        return dexLane
    }

    fun lane66(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        val laneWord = "hleo"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 20124
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane + 41115
        return dexLane
    }

    fun lane67(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 6
        dexLane = dexLane ushr 5
        if ((dexLane and 22) == 0) {
            dexLane = dexLane + 546
        }
        dexLane = dexLane + 4410
        val laneWord = "khnh"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane68(seed: Int): Int {
        var dexLane = seed
        val laneWord = "kglp"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2881
            1 -> dexLane + 2493
            else -> dexLane + 1722
        }
        dexLane = dexLane % 25
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane + 17249
        return dexLane
    }

    fun lane69(seed: Int): Int {
        var dexLane = seed
        val laneWord = "hfhf"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(73, 96, 185)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 7
        return dexLane
    }

    fun lane70(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 6
        dexLane = dexLane * 15
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 75
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane71(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 30
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3278
            1 -> dexLane + 3001
            else -> dexLane + 3711
        }
        dexLane = dexLane and 22535
        dexLane = dexLane xor 4903
        dexLane = dexLane shl 1
        return dexLane
    }

    fun lane72(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 8162
        dexLane = dexLane % 77
        val laneWord = "mkpl"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 634
            1 -> dexLane + 1091
            else -> dexLane + 623
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane73(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(133, 27, 118)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 32499
        val laneWord = "fogl"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 59192
        dexLane = dexLane % 8
        return dexLane
    }

    fun lane74(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 45827
        dexLane = dexLane shl 9
        if ((dexLane and 20) == 0) {
            dexLane = dexLane + 3250
        }
        dexLane = dexLane ushr 8
        dexLane = dexLane xor 11878
        return dexLane
    }

    fun lane75(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 17669
        dexLane = dexLane shl 4
        if ((dexLane and 15) == 0) {
            dexLane = dexLane + 1785
        }
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 8
        return dexLane
    }

    fun lane76(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 15553
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 56035
        dexLane = dexLane ushr 7
        dexLane = dexLane * 23
        return dexLane
    }

    fun lane77(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 23
        dexLane = dexLane shl 1
        dexLane = dexLane xor 36418
        val laneWord = "jdak"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 5
        return dexLane
    }

    fun lane78(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 4
        dexLane = dexLane ushr 12
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2181
            1 -> dexLane + 1173
            else -> dexLane + 2960
        }
        dexLane = dexLane % 31
        if ((dexLane and 21) == 0) {
            dexLane = dexLane + 192
        }
        return dexLane
    }

    fun lane79(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 49
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 2518
        }
        dexLane = dexLane or 53257
        dexLane = dexLane and 17388
        val laneNums = intArrayOf(151, 94, 114)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane80(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 80
        val laneNums = intArrayOf(36, 103, 162)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 29) == 0) {
            dexLane = dexLane + 2108
        }
        dexLane = dexLane or 42972
        dexLane = dexLane + 10681
        return dexLane
    }

    fun lane81(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 7
        dexLane = dexLane shl 3
        val laneWord = "blje"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane82(seed: Int): Int {
        var dexLane = seed
        val laneWord = "kgci"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 24
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane xor 21100
        return dexLane
    }

    fun lane83(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(85, 152, 8)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 80
        dexLane = dexLane + 29832
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 3963
        }
        dexLane = dexLane shl 11
        return dexLane
    }

    fun lane84(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(164, 111, 41)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "nhao"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 7) == 0) {
            dexLane = dexLane + 2347
        }
        dexLane = dexLane ushr 10
        return dexLane
    }

    fun lane85(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 52892
        dexLane = dexLane shl 1
        dexLane = dexLane xor 4600
        val laneWord = "clfe"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane86(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 32930
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(14, 170, 165)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane * 3
        dexLane = dexLane and 13884
        return dexLane
    }

    fun lane87(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane * 11
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1243
            1 -> dexLane + 2322
            else -> dexLane + 2702
        }
        dexLane = dexLane or 19594
        return dexLane
    }

    fun lane88(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(64, 127, 197)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane * 41
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2884
            1 -> dexLane + 1668
            else -> dexLane + 824
        }
        dexLane = dexLane or 5484
        return dexLane
    }

    fun lane89(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 22046
        dexLane = dexLane or 3372
        dexLane = dexLane + 21463
        if ((dexLane and 26) == 0) {
            dexLane = dexLane + 1222
        }
        val laneWord = "pkcp"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane90(seed: Int): Int {
        var dexLane = seed
        val laneWord = "dobc"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 17631
        dexLane = dexLane + 388
        dexLane = dexLane xor 40348
        dexLane = dexLane shl 3
        return dexLane
    }

    fun lane91(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3074
            1 -> dexLane + 1421
            else -> dexLane + 3138
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(172, 35, 125)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 11
        dexLane = dexLane + 22667
        return dexLane
    }

    fun lane92(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 272
            1 -> dexLane + 2016
            else -> dexLane + 3727
        }
        dexLane = dexLane * 28
        dexLane = dexLane or 31259
        if ((dexLane and 16) == 0) {
            dexLane = dexLane + 3582
        }
        val laneNums = intArrayOf(87, 28, 180)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane93(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 30
        dexLane = dexLane and 15807
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1137
            1 -> dexLane + 591
            else -> dexLane + 3840
        }
        dexLane = dexLane ushr 9
        val laneNums = intArrayOf(9, 70, 155)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane94(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 61
        dexLane = dexLane and 12791
        if ((dexLane and 16) == 0) {
            dexLane = dexLane + 251
        }
        dexLane = dexLane xor 42380
        dexLane = dexLane * 39
        return dexLane
    }

    fun lane95(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 21422
        dexLane = dexLane * 30
        dexLane = dexLane shl 7
        dexLane = dexLane.inv()
        dexLane = dexLane + 26637
        return dexLane
    }

    fun touch(seed: Int) {
        var acc = seed
        acc = lane00(acc)
        acc = lane01(acc)
        acc = lane02(acc)
        acc = lane03(acc)
        acc = lane04(acc)
        acc = lane05(acc)
        acc = lane06(acc)
        acc = lane07(acc)
        acc = lane08(acc)
        acc = lane09(acc)
        acc = lane10(acc)
        acc = lane11(acc)
        acc = lane12(acc)
        acc = lane13(acc)
        acc = lane14(acc)
        acc = lane15(acc)
        acc = lane16(acc)
        acc = lane17(acc)
        acc = lane18(acc)
        acc = lane19(acc)
        acc = lane20(acc)
        acc = lane21(acc)
        acc = lane22(acc)
        acc = lane23(acc)
        acc = lane24(acc)
        acc = lane25(acc)
        acc = lane26(acc)
        acc = lane27(acc)
        acc = lane28(acc)
        acc = lane29(acc)
        acc = lane30(acc)
        acc = lane31(acc)
        acc = lane32(acc)
        acc = lane33(acc)
        acc = lane34(acc)
        acc = lane35(acc)
        acc = lane36(acc)
        acc = lane37(acc)
        acc = lane38(acc)
        acc = lane39(acc)
        acc = lane40(acc)
        acc = lane41(acc)
        acc = lane42(acc)
        acc = lane43(acc)
        acc = lane44(acc)
        acc = lane45(acc)
        acc = lane46(acc)
        acc = lane47(acc)
        acc = lane48(acc)
        acc = lane49(acc)
        acc = lane50(acc)
        acc = lane51(acc)
        acc = lane52(acc)
        acc = lane53(acc)
        acc = lane54(acc)
        acc = lane55(acc)
        acc = lane56(acc)
        acc = lane57(acc)
        acc = lane58(acc)
        acc = lane59(acc)
        acc = lane60(acc)
        acc = lane61(acc)
        acc = lane62(acc)
        acc = lane63(acc)
        acc = lane64(acc)
        acc = lane65(acc)
        acc = lane66(acc)
        acc = lane67(acc)
        acc = lane68(acc)
        acc = lane69(acc)
        acc = lane70(acc)
        acc = lane71(acc)
        acc = lane72(acc)
        acc = lane73(acc)
        acc = lane74(acc)
        acc = lane75(acc)
        acc = lane76(acc)
        acc = lane77(acc)
        acc = lane78(acc)
        acc = lane79(acc)
        acc = lane80(acc)
        acc = lane81(acc)
        acc = lane82(acc)
        acc = lane83(acc)
        acc = lane84(acc)
        acc = lane85(acc)
        acc = lane86(acc)
        acc = lane87(acc)
        acc = lane88(acc)
        acc = lane89(acc)
        acc = lane90(acc)
        acc = lane91(acc)
        acc = lane92(acc)
        acc = lane93(acc)
        acc = lane94(acc)
        acc = lane95(acc)
        if (acc == Int.MIN_VALUE) {
            android.util.Log.v("DtowebrnsignmalvsnrasbhDexLanes", "lane")
        }
    }
}
