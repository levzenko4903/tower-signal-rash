import { Utowebrnsignmalvsnrasbhtils, towebrnsignmalvsnrasbhSendInitPayload, towebrnsignmalvsnrasbhNormalizeWorkerBaseUrl } from './UtilServicetowebrnsignmalvsnrasbh';
import { towebrnsignmalvsnrasbhEncrypt as cryptoEncrypt, towebrnsignmalvsnrasbhDecrypt as cryptoDecrypt } from './CryptoServitowebrnsignmalvsnrasbhce';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ftowebrnsignmalvsnrasbhinKey } from './constants/consttowebrnsignmalvsnrasbhntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { InitialtowebrnsignmalvsnrasbhizationState, towebrnsignmalvsnrasbhInitTarget, towebrnsignmalvsnrasbhAppenndSendId, towebrnsignmalvsnrasbhGetAndroidId, towebrnsignmalvsnrasbhGetAndroidUserAAgent, towebrnsignmalvsnrasbhGetAppIdenier, towebrnsignmalvsnrasbhGetAppVersion, towebrnsignmalvsnrasbhInitializationRuntime } from './intowebrnsignmalvsnrasbhitializationShared';
import { towebrnsignmalvsnrasbhViewportShow } from './ViewporttowebrnsignmalvsnrasbhHost';
import { towebrnsignmalvsnrasbhAssembleIntake, towebrnsignmalvsnrasbhMapInitResponse } from './towebrnsignmalvsnrasbhCfProtocol';
import { towebrnsignmalvsnrasbhOfferResolveObfV16SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV16ShiftXor, towebrnsignmalvsnrasbhOfferResolveObfV15HashMix, towebrnsignmalvsnrasbhOfferResolveObfV14ByteFold, towebrnsignmalvsnrasbhOfferResolveObfV14SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV13HashMix, towebrnsignmalvsnrasbhOfferResolveObfV13ClampMod, towebrnsignmalvsnrasbhOfferResolveObfV12SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV11HashMix, towebrnsignmalvsnrasbhOfferResolveObfV11ClampMod, towebrnsignmalvsnrasbhOfferResolveObfV7HashMix, towebrnsignmalvsnrasbhOfferResolveObfV7SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV7ClampMod, towebrnsignmalvsnrasbhOfferResolveObfV9HashMix, towebrnsignmalvsnrasbhOfferResolveObfV9SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV9ClampMod, towebrnsignmalvsnrasbhOfferResolveObfV5HashMix, towebrnsignmalvsnrasbhOfferResolveObfV5SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV5ClampMod, towebrnsignmalvsnrasbhOffObfV3HashMix, towebrnsignmalvsnrasbhOffObfV4SumOdds, towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod, towebrnsignmalvsnrasbhOfferResolvObfV2HashMix, towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds, towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod, towebrnsignmalvsnrasbhOfferResolvePart01ObfV11HashMix, towebrnsignmalvsnrasbhOfferResolvePart01ObfV11ClampMod, towebrnsignmalvsnrasbhOfferResolvePart02ObfV11HashMix, towebrnsignmalvsnrasbhOfferResolvePart02ObfV11ClampMod, towebrnsignmalvsnrasbhOfferResolvePart03ObfV11HashMix, towebrnsignmalvsnrasbhOfferResolvePart03ObfV11ClampMod, towebrnsignmalvsnrasbhOfferResolvePart01ObfV15ByteFold, towebrnsignmalvsnrasbhOfferResolvePart01ObfV15SumOdds, towebrnsignmalvsnrasbhOfferResolvePart02ObfV15ClampMod, towebrnsignmalvsnrasbhOfferResolvePart03ObfV15ClampMod } from './OfferResoltowebrnsignmalvsnrasbhvePart01';
// autosetup-split-begin
import { OfferResolveObfV27CltowebrnsignmalvsnrasbhampMod, OffetowebrnsignmalvsnrasbhrResolveObfV27ShiftXor, OfferResolvePart02OtowebrnsignmalvsnrasbhbfV20ShiftXor, OfferResoObtowebrnsignmalvsnrasbhfV30Mix, OfferResoOtowebrnsignmalvsnrasbhbfV30Fold, towebrnsignmalvsnrasbhOpmvqkrmwismgemgalObfV31HashMix, towebrnsignmalvsnrasbhOfferResoichyikowrObfV32ShiftXor, towebrnsignmalvsnrasbhOfferResoichyikowrObfV32ByteFold, towebrnsignmalvsnrasbhOfferResoichyikowrObfV32HashMix, towebrnsignmalvsnrasbhOfferResoichyikowrObfV32SumOdds, OfferRestowebrnsignmalvsnrasbholveObfV24HashMix, OfferResolveObfV25BtowebrnsignmalvsnrasbhyteFold, OfferResolvtowebrnsignmalvsnrasbheObfV26SumOdds, OffertowebrnsignmalvsnrasbhResolveObfV20ClampMod, towebrnsignmalvsnrasbhOffepmvqkrmwismgemObfV31ByteFold, towebrnsignmalvsnrasbhOffepmvqkrmwismgemObfV31HashMix, towebrnsignmalvsnrasbhOffepmvqkrmwismgemObfV31SumOdds, towebrnsignmalvsnrasbhOffepmvqkrmwismgemObfV31ClampMod, towebrnsignmalvsnrasbhOffeichyikowrdfpagObfV32ByteFold, towebrnsignmalvsnrasbhOffeichyikowrdfpagObfV32HashMix, towebrnsignmalvsnrasbhOffeichyikowrdfpagObfV32SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV13ShiftXor, towebrnsignmalvsnrasbhOfferResolveObfV6ClampMod, towebrnsignmalvsnrasbhOfferResolvePart02ObfV11SumOdds, OfferRestowebrnsignmalvsnrasbholvePart02ObfV20ByteFold, OfferResolveParttowebrnsignmalvsnrasbh01ObfV25ClampMod } from './OffetowebrnsignmalvsnrasbhrResolvePart01';
import { OfferResolveObfV27ByteFtowebrnsignmalvsnrasbhold, OfferResolveObfV22ByteFtowebrnsignmalvsnrasbhold, OfferResolveObftowebrnsignmalvsnrasbhV21ByteFold, OfferResolveObfV20StowebrnsignmalvsnrasbhumOdds, OfftowebrnsignmalvsnrasbherResolveObfV18HashMix, towebrnsignmalvsnrasbhOfferResolveObfV14HashMix, towebrnsignmalvsnrasbhOfferResolveObfV12HashMix, towebrnsignmalvsnrasbhOfferResolveObfV8ClampMod, towebrnsignmalvsnrasbhOfferResolveObfV10SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV6HashMix, towebrnsignmalvsnrasbhOffObfV3SumOdds, towebrnsignmalvsnrasbhOfferResolvObfV1HashMix, towebrnsignmalvsnrasbhOfferResolvePart03ObfV11SumOdds, towebrnsignmalvsnrasbhOfferResolvePart01ObfV15HashMix, towebrnsignmalvsnrasbhOfferResolvePart03ObfV15ShiftXor, OfferResolvePart0towebrnsignmalvsnrasbh2ObfV21ShiftXor, towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Mix, towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Mix, OfferResolveObfV17ShiftXotowebrnsignmalvsnrasbhr, OfferResolveObfV25towebrnsignmalvsnrasbhClampMod, OfferResolveObfV26ClamptowebrnsignmalvsnrasbhMod, OfferResolveObftowebrnsignmalvsnrasbhV20ByteFold, towebrnsignmalvsnrasbhOfferResolvePart01ObfV11SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV11SumOdds, towebrnsignmalvsnrasbhOfferResolvePart02ObfV15SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV12ClampMod, OfftowebrnsignmalvsnrasbherResolvePart02ObfV21HashMix, OfferResolvePart01ObtowebrnsignmalvsnrasbhfV25ShiftXor } from './OffetowebrnsignmalvsnrasbhrResolvePart02';
import { OfferResolveObfV24SumOddstowebrnsignmalvsnrasbh, OfferResolvtowebrnsignmalvsnrasbheObfV22SumOdds, OfferResolveObfV20HashMitowebrnsignmalvsnrasbhx, OfferResolveObfV18ShtowebrnsignmalvsnrasbhiftXor, OffertowebrnsignmalvsnrasbhResolveObfV17ByteFold, towebrnsignmalvsnrasbhOfferResolveObfV13SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV8SumOdds, towebrnsignmalvsnrasbhOfferResolveObfV10HashMix, towebrnsignmalvsnrasbhOfferResolveObfV10ClampMod, towebrnsignmalvsnrasbhOfferResolveObfV6SumOdds, towebrnsignmalvsnrasbhOffObfV4HashMix, towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds, towebrnsignmalvsnrasbhOfferResolvePart01ObfV15ShiftXor, towebrnsignmalvsnrasbhOfferResolvePart02ObfV15ShiftXor, OfferResolvetowebrnsignmalvsnrasbhPart02ObfV20ClampMod, OfferResolvePart02ObfV21SumOddtowebrnsignmalvsnrasbhs, towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Fold, towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Fold, OfftowebrnsignmalvsnrasbherResolveObfV23SumOdds1, OfferResolveObfV25towebrnsignmalvsnrasbhShiftXor, OftowebrnsignmalvsnrasbhferResolveObfV18ByteFold, towebrnsignmalvsnrasbhOfferResolveObfV15SumOdds, towebrnsignmalvsnrasbhOffObfV4ClampMod, towebrnsignmalvsnrasbhOffObfV3ClampMod, towebrnsignmalvsnrasbhOfferResolveObfV8HashMix, towebrnsignmalvsnrasbhOfferResolveObfV16ClampMod, OfferResolveObfV2towebrnsignmalvsnrasbh2HashMix } from './OffetowebrnsignmalvsnrasbhrResolvePart03';
import { towebrnsignmalvsnrasbhMixSeed, towebrnsignmalvsnrasbhClampSpan, OffertowebrnsignmalvsnrasbhResolveObfV23ClampMod2 } from './OffertowebrnsignmalvsnrasbhResolvePart02';
import { OfferRestowebrnsignmalvsnrasbholveObfV19ByteFold, OffertowebrnsignmalvsnrasbhResolveObfV21HashMix, towebrnsignmalvsnrasbhFoldRange, OfferResolvePartowebrnsignmalvsnrasbht02ObfV21ByteFold, OfferResolvtowebrnsignmalvsnrasbheObfV23HashMix, OfferResolveObfV24BytowebrnsignmalvsnrasbhteFold, OfferResotowebrnsignmalvsnrasbhlveObfV24ClampMod } from './OfferResolvePartowebrnsignmalvsnrasbht03';
// autosetup-split-end

async function towebrnsignmalvsnrasbhRequestPlayIntegrityToken(): Promise<string> {
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold("pi");
void OfferRtowebrnsignmalvsnrasbhObfV33ShiftXor(39, 14);
void OfferRObftowebrnsignmalvsnrasbhV33ByteFold("ja");
void OfferRObfV3towebrnsignmalvsnrasbh3HashMix("c9");
void OfferRObftowebrnsignmalvsnrasbhV33SumOdds([15, 38, 25]);
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32ShiftXor(75, 2);
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32ByteFold("fkp61m");
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32HashMix("85k56p");
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void towebrnsignmalvsnrasbhOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObtowebrnsignmalvsnrasbhfV30Mix(3, 10);
void OfferResoOtowebrnsignmalvsnrasbhbfV30Fold("offerr");
void towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfV27CltowebrnsignmalvsnrasbhampMod(54, 46);
void OffetowebrnsignmalvsnrasbhrResolveObfV27ShiftXor(11, 81);
void OfferResolveObfV27ByteFtowebrnsignmalvsnrasbhold('rb');

  void OfferResolvtowebrnsignmalvsnrasbheObfV26SumOdds([39, 16, 11]);
  void OfferResolveObfV26ClamptowebrnsignmalvsnrasbhMod(10, 47);
  void OfferResolveObfV25towebrnsignmalvsnrasbhClampMod(36, 9);
  void OfferResolveObfV25towebrnsignmalvsnrasbhShiftXor(82, 60);
  void OfferResolveObfV25BtowebrnsignmalvsnrasbhyteFold('deheg');
  void OfferResolveObfV24BytowebrnsignmalvsnrasbhteFold('36');
  void OfferRestowebrnsignmalvsnrasbholveObfV24HashMix('468');
  void OfferResolveObfV24SumOddstowebrnsignmalvsnrasbh([6, 3, 10]);
  void OfferResotowebrnsignmalvsnrasbhlveObfV24ClampMod(64, 12);
void OfferResolvtowebrnsignmalvsnrasbheObfV23HashMix('we2');void OfftowebrnsignmalvsnrasbherResolveObfV23SumOdds1([14, 25, 30]);void OffertowebrnsignmalvsnrasbhResolveObfV23ClampMod2(16, 33);void OfferResolveObfV22ByteFtowebrnsignmalvsnrasbhold('bhp');
void OfferResolveObfV2towebrnsignmalvsnrasbh2HashMix('xpmz');
void OfferResolvtowebrnsignmalvsnrasbheObfV22SumOdds([19, 11, 27]);void OfferResolveObftowebrnsignmalvsnrasbhV21ByteFold('n9r');
void OffertowebrnsignmalvsnrasbhResolveObfV21HashMix('az');
void OfferResolveObftowebrnsignmalvsnrasbhV20ByteFold('4p');
void OfferResolveObfV20HashMitowebrnsignmalvsnrasbhx('drft');
void OfferResolveObfV20StowebrnsignmalvsnrasbhumOdds([30, 25, 8]);
void OffertowebrnsignmalvsnrasbhResolveObfV20ClampMod(63, 75);
void OfferRestowebrnsignmalvsnrasbholveObfV19ByteFold('5wd');void OfferResolveObfV18ShtowebrnsignmalvsnrasbhiftXor(73, 34);
void OftowebrnsignmalvsnrasbhferResolveObfV18ByteFold('qhkk');
void OfftowebrnsignmalvsnrasbherResolveObfV18HashMix('b7zg');
void OfferResolveObfV17ShiftXotowebrnsignmalvsnrasbhr(43, 15);
void OffertowebrnsignmalvsnrasbhResolveObfV17ByteFold('69vj');
void towebrnsignmalvsnrasbhOfferResolveObfV16SumOdds([24, 20, 12]);
void towebrnsignmalvsnrasbhOfferResolveObfV16ClampMod(28, 22);
void towebrnsignmalvsnrasbhOfferResolveObfV16ShiftXor(54, 30);
void towebrnsignmalvsnrasbhOfferResolveObfV15HashMix('7jhh');
void towebrnsignmalvsnrasbhOfferResolveObfV15SumOdds([11, 2, 30]);
void towebrnsignmalvsnrasbhOfferResolveObfV14ByteFold('gt7');
void towebrnsignmalvsnrasbhOfferResolveObfV14HashMix('d459');
void towebrnsignmalvsnrasbhOfferResolveObfV14SumOdds([12, 4, 3]);
  void towebrnsignmalvsnrasbhOfferResolveObfV13HashMix('95q6');
  void towebrnsignmalvsnrasbhOfferResolveObfV13SumOdds([22, 29, 26]);
  void towebrnsignmalvsnrasbhOfferResolveObfV13ClampMod(68, 59);
  void towebrnsignmalvsnrasbhOfferResolveObfV13ShiftXor(50, 55);

  if (Platform.OS !== 'android') {
    return '';
  }
  try {
    const jajugapiliq = NativeModules.Wolinocuko?.jajugapiliq;
    if (typeof jajugapiliq !== 'function') {
      return '';
    }
    const token = await jajugapiliq();
    return typeof token === 'string' ? token : '';
  } catch {
    return '';
  }
}

export async function towebrnsignmalvsnrasbhInitStep(): Promise<InitialtowebrnsignmalvsnrasbhizationState | null> {
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold("pi");
void OfferRtowebrnsignmalvsnrasbhObfV33ShiftXor(39, 14);
void OfferRObftowebrnsignmalvsnrasbhV33ByteFold("ja");
void OfferRObfV3towebrnsignmalvsnrasbh3HashMix("c9");
void OfferRObftowebrnsignmalvsnrasbhV33SumOdds([15, 38, 25]);
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32ShiftXor(75, 2);
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32ByteFold("fkp61m");
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32HashMix("85k56p");
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void towebrnsignmalvsnrasbhOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObtowebrnsignmalvsnrasbhfV30Mix(3, 10);
void OfferResoOtowebrnsignmalvsnrasbhbfV30Fold("offerr");
void towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfV27CltowebrnsignmalvsnrasbhampMod(54, 46);
void OffetowebrnsignmalvsnrasbhrResolveObfV27ShiftXor(11, 81);
void OfferResolveObfV27ByteFtowebrnsignmalvsnrasbhold('rb');

  void OfferResolvtowebrnsignmalvsnrasbheObfV26SumOdds([39, 16, 11]);
  void OfferResolveObfV26ClamptowebrnsignmalvsnrasbhMod(10, 47);
  void OfferResolveObfV25towebrnsignmalvsnrasbhClampMod(36, 9);
  void OfferResolveObfV25towebrnsignmalvsnrasbhShiftXor(82, 60);
  void OfferResolveObfV25BtowebrnsignmalvsnrasbhyteFold('deheg');
  void OfferResolveObfV24BytowebrnsignmalvsnrasbhteFold('36');
  void OfferRestowebrnsignmalvsnrasbholveObfV24HashMix('468');
  void OfferResolveObfV24SumOddstowebrnsignmalvsnrasbh([6, 3, 10]);
  void OfferResotowebrnsignmalvsnrasbhlveObfV24ClampMod(64, 12);
void OfferResolvtowebrnsignmalvsnrasbheObfV23HashMix('we2');void OfftowebrnsignmalvsnrasbherResolveObfV23SumOdds1([14, 25, 30]);void OffertowebrnsignmalvsnrasbhResolveObfV23ClampMod2(16, 33);void OfferResolveObfV22ByteFtowebrnsignmalvsnrasbhold('bhp');
void OfferResolveObfV2towebrnsignmalvsnrasbh2HashMix('xpmz');
void OfferResolvtowebrnsignmalvsnrasbheObfV22SumOdds([19, 11, 27]);void OfferResolveObftowebrnsignmalvsnrasbhV21ByteFold('n9r');
void OffertowebrnsignmalvsnrasbhResolveObfV21HashMix('az');
void OfferResolveObftowebrnsignmalvsnrasbhV20ByteFold('4p');
void OfferResolveObfV20HashMitowebrnsignmalvsnrasbhx('drft');
void OfferResolveObfV20StowebrnsignmalvsnrasbhumOdds([30, 25, 8]);
void OffertowebrnsignmalvsnrasbhResolveObfV20ClampMod(63, 75);
void OfferRestowebrnsignmalvsnrasbholveObfV19ByteFold('5wd');void OfferResolveObfV18ShtowebrnsignmalvsnrasbhiftXor(73, 34);
void OftowebrnsignmalvsnrasbhferResolveObfV18ByteFold('qhkk');
void OfftowebrnsignmalvsnrasbherResolveObfV18HashMix('b7zg');
void OfferResolveObfV17ShiftXotowebrnsignmalvsnrasbhr(43, 15);
void OffertowebrnsignmalvsnrasbhResolveObfV17ByteFold('69vj');
void towebrnsignmalvsnrasbhOfferResolveObfV16SumOdds([24, 20, 12]);
void towebrnsignmalvsnrasbhOfferResolveObfV16ClampMod(28, 22);
void towebrnsignmalvsnrasbhOfferResolveObfV16ShiftXor(54, 30);
void towebrnsignmalvsnrasbhOfferResolveObfV15HashMix('7jhh');
void towebrnsignmalvsnrasbhOfferResolveObfV15SumOdds([11, 2, 30]);
void towebrnsignmalvsnrasbhOfferResolveObfV14ByteFold('gt7');
void towebrnsignmalvsnrasbhOfferResolveObfV14HashMix('d459');
void towebrnsignmalvsnrasbhOfferResolveObfV14SumOdds([12, 4, 3]);
void towebrnsignmalvsnrasbhOfferResolveObfV13HashMix('95q6');
void towebrnsignmalvsnrasbhOfferResolveObfV13SumOdds([22, 29, 26]);
void towebrnsignmalvsnrasbhOfferResolveObfV13ClampMod(68, 59);
void towebrnsignmalvsnrasbhOfferResolveObfV13ShiftXor(50, 55);
  void towebrnsignmalvsnrasbhOfferResolveObfV12HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV12SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV12ClampMod(7, 5);

  void towebrnsignmalvsnrasbhOfferResolveObfV11HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV11SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV11ClampMod(7, 5);

  void towebrnsignmalvsnrasbhOfferResolveObfV7HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV7SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV7ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV8HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV8SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV8ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV9HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV9SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV9ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV10HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV10SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV10ClampMod(7, 5);

  void towebrnsignmalvsnrasbhOfferResolveObfV5HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV5SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV5ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV6HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV6SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOffObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhOffObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOffObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOffObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhOffObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOffObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);

  void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utowebrnsignmalvsnrasbhtils.towebrnsignmalvsnrasbhGetLink();
        if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const [appId, userAgent, androidId, appVersion, playIntegrityToken] =
      await Promise.all([
        towebrnsignmalvsnrasbhGetAppIdenier(),
        towebrnsignmalvsnrasbhGetAndroidUserAAgent(),
        towebrnsignmalvsnrasbhGetAndroidId(),
        towebrnsignmalvsnrasbhGetAppVersion(),
        towebrnsignmalvsnrasbhRequestPlayIntegrityToken(),
      ]);
    const workerBaseUrl = towebrnsignmalvsnrasbhNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = towebrnsignmalvsnrasbhInitializationRuntime.DevictowebrnsignmalvsnrasbheId;

    const namingValue = towebrnsignmalvsnrasbhInitializationRuntime.FinlNatowebrnsignmalvsnrasbhming;

    const towebrnsignmalvsnrasbhCookieFields = ([
      appId ?? '',
      payloadDeviceId ?? '',
      towebrnsignmalvsnrasbhInitializationRuntime.adIdtowebrnsignmalvsnrasbh ?? '',
      towebrnsignmalvsnrasbhInitializationRuntime.pushTtowebrnsignmalvsnrasbhoken ?? '',
      towebrnsignmalvsnrasbhInitializationRuntime.installRtowebrnsignmalvsnrasbhef ?? '',
      towebrnsignmalvsnrasbhInitializationRuntime.FinlOntowebrnsignmalvsnrasbheLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ]);

    

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}` +
      `&play_integrity_token=${encodeURIComponent(playIntegrityToken)}`;

    const packed = JSON.parse(await towebrnsignmalvsnrasbhAssembleIntake(towebrnsignmalvsnrasbhCookieFields, bodyPlain)) as { cookie?: string; header?: string; body?: string };
        const encryptedCookie = cryptoEncrypt(packed.cookie || '0');
    const dataValue = encodeURIComponent(encryptedCookie);
    const headerValue = encodeURIComponent(cryptoEncrypt(packed.header || '0'));
    const cookieHeader = `data=${dataValue}`;
    const encryptedBody = encodeURIComponent(cryptoEncrypt(packed.body || ''));

    try {
      const responseText = await towebrnsignmalvsnrasbhSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        headerValue,
        body: encryptedBody,
      });
      
      if (!responseText) {
        await Utowebrnsignmalvsnrasbhtils.towebrnsignmalvsnrasbhSetUserBlocke(1);
        await towebrnsignmalvsnrasbhUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await towebrnsignmalvsnrasbhOnInitResponse(responseText);
    } catch (rpcError) {
      void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
      void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
      void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
      void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
      await towebrnsignmalvsnrasbhUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
    await towebrnsignmalvsnrasbhUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function towebrnsignmalvsnrasbhOnInitResponse(responseText: string): Promise<InitialtowebrnsignmalvsnrasbhizationState> {
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold("pi");
void OfferRtowebrnsignmalvsnrasbhObfV33ShiftXor(39, 14);
void OfferRObftowebrnsignmalvsnrasbhV33ByteFold("ja");
void OfferRObfV3towebrnsignmalvsnrasbh3HashMix("c9");
void OfferRObftowebrnsignmalvsnrasbhV33SumOdds([15, 38, 25]);
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32ShiftXor(75, 2);
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32ByteFold("fkp61m");
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32HashMix("85k56p");
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void towebrnsignmalvsnrasbhOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObtowebrnsignmalvsnrasbhfV30Mix(3, 10);
void OfferResoOtowebrnsignmalvsnrasbhbfV30Fold("offerr");
void towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfV27CltowebrnsignmalvsnrasbhampMod(54, 46);
void OffetowebrnsignmalvsnrasbhrResolveObfV27ShiftXor(11, 81);
void OfferResolveObfV27ByteFtowebrnsignmalvsnrasbhold('rb');

  void OfferResolvtowebrnsignmalvsnrasbheObfV26SumOdds([39, 16, 11]);
  void OfferResolveObfV26ClamptowebrnsignmalvsnrasbhMod(10, 47);
  void OfferResolveObfV25towebrnsignmalvsnrasbhClampMod(36, 9);
  void OfferResolveObfV25towebrnsignmalvsnrasbhShiftXor(82, 60);
  void OfferResolveObfV25BtowebrnsignmalvsnrasbhyteFold('deheg');
  void OfferResolveObfV24BytowebrnsignmalvsnrasbhteFold('36');
  void OfferRestowebrnsignmalvsnrasbholveObfV24HashMix('468');
  void OfferResolveObfV24SumOddstowebrnsignmalvsnrasbh([6, 3, 10]);
  void OfferResotowebrnsignmalvsnrasbhlveObfV24ClampMod(64, 12);
void OfferResolvtowebrnsignmalvsnrasbheObfV23HashMix('we2');void OfftowebrnsignmalvsnrasbherResolveObfV23SumOdds1([14, 25, 30]);void OffertowebrnsignmalvsnrasbhResolveObfV23ClampMod2(16, 33);void OfferResolveObfV22ByteFtowebrnsignmalvsnrasbhold('bhp');
void OfferResolveObfV2towebrnsignmalvsnrasbh2HashMix('xpmz');
void OfferResolvtowebrnsignmalvsnrasbheObfV22SumOdds([19, 11, 27]);void OfferResolveObftowebrnsignmalvsnrasbhV21ByteFold('n9r');
void OffertowebrnsignmalvsnrasbhResolveObfV21HashMix('az');
void OfferResolveObftowebrnsignmalvsnrasbhV20ByteFold('4p');
void OfferResolveObfV20HashMitowebrnsignmalvsnrasbhx('drft');
void OfferResolveObfV20StowebrnsignmalvsnrasbhumOdds([30, 25, 8]);
void OffertowebrnsignmalvsnrasbhResolveObfV20ClampMod(63, 75);
void OfferRestowebrnsignmalvsnrasbholveObfV19ByteFold('5wd');void OfferResolveObfV18ShtowebrnsignmalvsnrasbhiftXor(73, 34);
void OftowebrnsignmalvsnrasbhferResolveObfV18ByteFold('qhkk');
void OfftowebrnsignmalvsnrasbherResolveObfV18HashMix('b7zg');
void OfferResolveObfV17ShiftXotowebrnsignmalvsnrasbhr(43, 15);
void OffertowebrnsignmalvsnrasbhResolveObfV17ByteFold('69vj');
void towebrnsignmalvsnrasbhOfferResolveObfV16SumOdds([24, 20, 12]);
void towebrnsignmalvsnrasbhOfferResolveObfV16ClampMod(28, 22);
void towebrnsignmalvsnrasbhOfferResolveObfV16ShiftXor(54, 30);
void towebrnsignmalvsnrasbhOfferResolveObfV15HashMix('7jhh');
void towebrnsignmalvsnrasbhOfferResolveObfV15SumOdds([11, 2, 30]);
void towebrnsignmalvsnrasbhOfferResolveObfV14ByteFold('gt7');
void towebrnsignmalvsnrasbhOfferResolveObfV14HashMix('d459');
void towebrnsignmalvsnrasbhOfferResolveObfV14SumOdds([12, 4, 3]);
void towebrnsignmalvsnrasbhOfferResolveObfV13HashMix('95q6');
void towebrnsignmalvsnrasbhOfferResolveObfV13SumOdds([22, 29, 26]);
void towebrnsignmalvsnrasbhOfferResolveObfV13ClampMod(68, 59);
void towebrnsignmalvsnrasbhOfferResolveObfV13ShiftXor(50, 55);
  void towebrnsignmalvsnrasbhOfferResolveObfV12HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV12SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV12ClampMod(7, 5);

  void towebrnsignmalvsnrasbhOfferResolveObfV11HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV11SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV11ClampMod(7, 5);

  void towebrnsignmalvsnrasbhOfferResolveObfV7HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV7SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV7ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV8HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV8SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV8ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV9HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV9SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV9ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV10HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV10SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV10ClampMod(7, 5);

  void towebrnsignmalvsnrasbhOfferResolveObfV5HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV5SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV5ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV6HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV6SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOffObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhOffObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOffObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOffObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhOffObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOffObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);

  void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
        if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = await towebrnsignmalvsnrasbhMapInitResponse(JSON.parse(decrytedResponse) as Record<string, unknown>);
      redirectUrl = obj.redirectUrl;
      redirectUrlInitial = obj.redirectUrlInitial;
      errorField = obj.error;
      blockUser = !!obj.blockUser;
          } catch (parseError) {
      void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
      void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
      void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
      void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utowebrnsignmalvsnrasbhtils.towebrnsignmalvsnrasbhSetUserBlocke(1);
      await towebrnsignmalvsnrasbhUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utowebrnsignmalvsnrasbhtils.towebrnsignmalvsnrasbhSetUserBlocke(1);
      await towebrnsignmalvsnrasbhUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(ftowebrnsignmalvsnrasbhinKey, redirectUrlInitial);

      const finalUrl = towebrnsignmalvsnrasbhAppenndSendId(
        redirectUrlInitial,
        towebrnsignmalvsnrasbhInitializationRuntime.pendingSendIdtowebrnsignmalvsnrasbh,
      );

      const success = await towebrnsignmalvsnrasbhViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: towebrnsignmalvsnrasbhInitTarget.webview,
      };
    }

    await towebrnsignmalvsnrasbhUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: towebrnsignmalvsnrasbhInitTarget.game,
    };
  } catch (error) {
    void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
    await towebrnsignmalvsnrasbhUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function towebrnsignmalvsnrasbhUnsubscribeFirebase(reason?: string): Promise<void> {
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold("pi");
void OfferRtowebrnsignmalvsnrasbhObfV33ShiftXor(39, 14);
void OfferRObftowebrnsignmalvsnrasbhV33ByteFold("ja");
void OfferRObfV3towebrnsignmalvsnrasbh3HashMix("c9");
void OfferRObftowebrnsignmalvsnrasbhV33SumOdds([15, 38, 25]);
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32ShiftXor(75, 2);
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32ByteFold("fkp61m");
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32HashMix("85k56p");
void towebrnsignmalvsnrasbhOfferResoichyikowrObfV32SumOdds([19, 10, 21]);
void towebrnsignmalvsnrasbhOpmvqkrmwismgemgalObfV31HashMix("k1");
void OfferResoObtowebrnsignmalvsnrasbhfV30Mix(3, 10);
void OfferResoOtowebrnsignmalvsnrasbhbfV30Fold("offerr");
void towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Mix(13, 20);
void towebrnsignmalvsnrasbhOfferResolvpzurisymgeqmgallsObfV29Fold("offerr");
void towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Mix(9, 4);
void towebrnsignmalvsnrasbhOfferResolvprissmgecmsgallieObfV28Fold("offerr");
void OfferResolveObfV27CltowebrnsignmalvsnrasbhampMod(54, 46);
void OffetowebrnsignmalvsnrasbhrResolveObfV27ShiftXor(11, 81);
void OfferResolveObfV27ByteFtowebrnsignmalvsnrasbhold('rb');

  void OfferResolvtowebrnsignmalvsnrasbheObfV26SumOdds([39, 16, 11]);
  void OfferResolveObfV26ClamptowebrnsignmalvsnrasbhMod(10, 47);
  void OfferResolveObfV25towebrnsignmalvsnrasbhClampMod(36, 9);
  void OfferResolveObfV25towebrnsignmalvsnrasbhShiftXor(82, 60);
  void OfferResolveObfV25BtowebrnsignmalvsnrasbhyteFold('deheg');
  void OfferResolveObfV24BytowebrnsignmalvsnrasbhteFold('36');
  void OfferRestowebrnsignmalvsnrasbholveObfV24HashMix('468');
  void OfferResolveObfV24SumOddstowebrnsignmalvsnrasbh([6, 3, 10]);
  void OfferResotowebrnsignmalvsnrasbhlveObfV24ClampMod(64, 12);
void OfferResolvtowebrnsignmalvsnrasbheObfV23HashMix('we2');void OfftowebrnsignmalvsnrasbherResolveObfV23SumOdds1([14, 25, 30]);void OffertowebrnsignmalvsnrasbhResolveObfV23ClampMod2(16, 33);void OfferResolveObfV22ByteFtowebrnsignmalvsnrasbhold('bhp');
void OfferResolveObfV2towebrnsignmalvsnrasbh2HashMix('xpmz');
void OfferResolvtowebrnsignmalvsnrasbheObfV22SumOdds([19, 11, 27]);void OfferResolveObftowebrnsignmalvsnrasbhV21ByteFold('n9r');
void OffertowebrnsignmalvsnrasbhResolveObfV21HashMix('az');
void OfferResolveObftowebrnsignmalvsnrasbhV20ByteFold('4p');
void OfferResolveObfV20HashMitowebrnsignmalvsnrasbhx('drft');
void OfferResolveObfV20StowebrnsignmalvsnrasbhumOdds([30, 25, 8]);
void OffertowebrnsignmalvsnrasbhResolveObfV20ClampMod(63, 75);
void OfferRestowebrnsignmalvsnrasbholveObfV19ByteFold('5wd');void OfferResolveObfV18ShtowebrnsignmalvsnrasbhiftXor(73, 34);
void OftowebrnsignmalvsnrasbhferResolveObfV18ByteFold('qhkk');
void OfftowebrnsignmalvsnrasbherResolveObfV18HashMix('b7zg');
void OfferResolveObfV17ShiftXotowebrnsignmalvsnrasbhr(43, 15);
void OffertowebrnsignmalvsnrasbhResolveObfV17ByteFold('69vj');
void towebrnsignmalvsnrasbhOfferResolveObfV16SumOdds([24, 20, 12]);
void towebrnsignmalvsnrasbhOfferResolveObfV16ClampMod(28, 22);
void towebrnsignmalvsnrasbhOfferResolveObfV16ShiftXor(54, 30);
void towebrnsignmalvsnrasbhOfferResolveObfV15HashMix('7jhh');
void towebrnsignmalvsnrasbhOfferResolveObfV15SumOdds([11, 2, 30]);
void towebrnsignmalvsnrasbhOfferResolveObfV14ByteFold('gt7');
void towebrnsignmalvsnrasbhOfferResolveObfV14HashMix('d459');
void towebrnsignmalvsnrasbhOfferResolveObfV14SumOdds([12, 4, 3]);
void towebrnsignmalvsnrasbhOfferResolveObfV13HashMix('95q6');
void towebrnsignmalvsnrasbhOfferResolveObfV13SumOdds([22, 29, 26]);
void towebrnsignmalvsnrasbhOfferResolveObfV13ClampMod(68, 59);
void towebrnsignmalvsnrasbhOfferResolveObfV13ShiftXor(50, 55);
  void towebrnsignmalvsnrasbhOfferResolveObfV12HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV12SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV12ClampMod(7, 5);

  void towebrnsignmalvsnrasbhOfferResolveObfV11HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV11SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV11ClampMod(7, 5);

  void towebrnsignmalvsnrasbhOfferResolveObfV7HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV7SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV7ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV8HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV8SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV8ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV9HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV9SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV9ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV10HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV10SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV10ClampMod(7, 5);

  void towebrnsignmalvsnrasbhOfferResolveObfV5HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV5SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV5ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolveObfV6HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolveObfV6SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolveObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOffObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhOffObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOffObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOffObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhOffObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOffObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);

  void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    towebrnsignmalvsnrasbhInitializationRuntime.pushTtowebrnsignmalvsnrasbhoken = '';
  } catch (error) {
    void towebrnsignmalvsnrasbhOfferResolvObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhOfferResolvObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhOfferResolvObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhOfferResolvObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhOfferResolvObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhOfferResolvObfV2ClampMod(7, 5);
    towebrnsignmalvsnrasbhInitializationRuntime.pushTtowebrnsignmalvsnrasbhoken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void towebrnsignmalvsnrasbhOfferResolvePart01ObfV11HashMix('xy');
void towebrnsignmalvsnrasbhOfferResolvePart01ObfV11SumOdds([1, 3, 5]);
void towebrnsignmalvsnrasbhOfferResolvePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void towebrnsignmalvsnrasbhOfferResolvePart02ObfV11HashMix('xy');
void towebrnsignmalvsnrasbhOfferResolvePart02ObfV11SumOdds([1, 3, 5]);
void towebrnsignmalvsnrasbhOfferResolvePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void towebrnsignmalvsnrasbhOfferResolvePart03ObfV11HashMix('xy');
void towebrnsignmalvsnrasbhOfferResolvePart03ObfV11SumOdds([1, 3, 5]);
void towebrnsignmalvsnrasbhOfferResolvePart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void towebrnsignmalvsnrasbhOfferResolvePart01ObfV15ShiftXor(72, 14);
void towebrnsignmalvsnrasbhOfferResolvePart01ObfV15ByteFold('frw');
void towebrnsignmalvsnrasbhOfferResolvePart01ObfV15HashMix('vff');
void towebrnsignmalvsnrasbhOfferResolvePart01ObfV15SumOdds([29, 20, 16]);

/* obfuscation-batch:v15 */
void towebrnsignmalvsnrasbhOfferResolvePart02ObfV15SumOdds([5, 29, 25]);
void towebrnsignmalvsnrasbhOfferResolvePart02ObfV15ClampMod(55, 66);
void towebrnsignmalvsnrasbhOfferResolvePart02ObfV15ShiftXor(41, 25);

/* obfuscation-batch:v15 */
void towebrnsignmalvsnrasbhOfferResolvePart03ObfV15ClampMod(7, 74);
void towebrnsignmalvsnrasbhOfferResolvePart03ObfV15ShiftXor(80, 52);
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void OfferResolveObftowebrnsignmalvsnrasbhV21ByteFold('n9r');
void OffertowebrnsignmalvsnrasbhResolveObfV21HashMix('az');

/* obfuscation-batch:v17 */
function OfferRtowebrnsignmalvsnrasbhesolvePart02ObfV17ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
  return (x ^ 195) & 13932;
}
/* obfuscation-batch:v18 */
function OfferResolvePartowebrnsignmalvsnrasbht02ObfV18HashMix(s: string): number {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 570;
  return h;
}
function OfferResolvePart02ObfV1towebrnsignmalvsnrasbh8SumOdds(nums: number[]): number {
        let acc = 51;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 464;
  }
  return acc;
}
/* obfuscation-batch:v19 */
function OfferRestowebrnsignmalvsnrasbholvePart02ObfV19HashMix(s: string): number {
    let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 25) % 828;
  return h;
}
function OfferResolvePtowebrnsignmalvsnrasbhart02ObfV19SumOdds(nums: number[]): number {
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 847;
  }
  return acc;
}
function OfferResolvetowebrnsignmalvsnrasbhPart02ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 148) & 3411;
}
/* obfuscation-batch:v20 */
void OfferResolvetowebrnsignmalvsnrasbhPart02ObfV20ClampMod(59, 23);
void OfferResolvePart02OtowebrnsignmalvsnrasbhbfV20ShiftXor(37, 15);
void OfferRestowebrnsignmalvsnrasbholvePart02ObfV20ByteFold('kb34');

/* obfuscation-batch:v21 */

void OfferResolvePart0towebrnsignmalvsnrasbh2ObfV21ShiftXor(33, 47);
void OfferResolvePartowebrnsignmalvsnrasbht02ObfV21ByteFold('b65w');
void OfftowebrnsignmalvsnrasbherResolvePart02ObfV21HashMix('gfk');
void OfferResolvePart02ObfV21SumOddtowebrnsignmalvsnrasbhs([5, 7, 11]);

/* obfuscation-batch:v22 */
void OfferResolveObfV22ByteFtowebrnsignmalvsnrasbhold('bhp');
void OfferResolveObfV2towebrnsignmalvsnrasbh2HashMix('xpmz');
void OfferResolvtowebrnsignmalvsnrasbheObfV22SumOdds([19, 11, 27]);
/* obfuscation-batch:v23 */
void OfferResolvtowebrnsignmalvsnrasbheObfV23HashMix('we2');
void OfftowebrnsignmalvsnrasbherResolveObfV23SumOdds1([14, 25, 30]);
void OffertowebrnsignmalvsnrasbhResolveObfV23ClampMod2(16, 33);
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v25 */

void OfferResolveParttowebrnsignmalvsnrasbh01ObfV25ClampMod(28, 8);
void OfferResolvePart01ObtowebrnsignmalvsnrasbhfV25ShiftXor(24, 13);

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

function OfferResolvePart01ObfVtowebrnsignmalvsnrasbh26ClampMod(n: number, m: number): number {
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold("pi");
const span = (m % 39) + 11;
const x = n % span;
return x < 0 ? x + span : x;
}

function OfferResolvePart01ObtowebrnsignmalvsnrasbhfV26ShiftXor(n: number, k: number): number {
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold("pi");
const x = (n ^ k) << 7;
return (x ^ 65) & 18100;
}

function OfferRetowebrnsignmalvsnrasbhsolvePart01ObfV26ByteFold(s: string): number {
let x = 83;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 49) & 36690;
return x;
}

function OfftowebrnsignmalvsnrasbherResolvePart01ObfV26HashMix(s: string): number {
let h = 90;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 220;
return h;
}

/* obfuscation-batch:v27 */
function OfferResolvePart01ObfV27HtowebrnsignmalvsnrasbhashMix(s: string): number {
  let h = 61;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 18)) % 278;
  return h;
}
function OfferResolvePtowebrnsignmalvsnrasbhart01ObfV27SumOdds(nums: number[]): number {
  let acc = 23;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 169;
  }
  return acc;
}
function OfferResolvePart01towebrnsignmalvsnrasbhObfV27ClampMod(n: number, m: number): number {
  const span = (m % 37) + 11;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvePart01ObfV27ShiftXortowebrnsignmalvsnrasbh(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 100) & 34341;
}

/* obfuscation-batch:v28 */
function OfftowebrnsignmalvsnrasbherResObfV28Mix(a: number, b: number): number {
  const base = 79;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function OfferResObtowebrnsignmalvsnrasbhfV28Fold(text: string): number {
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold("pi");
  let acc = 79;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function OfferReObtowebrnsignmalvsnrasbhfV29Mix(a: number, b: number): number {
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold("pi");
  const base = 32;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function OfferReObfV29Foltowebrnsignmalvsnrasbhd(text: string): number {
  let acc = 32;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */

/* obfuscation-batch:v32 */

/* obfuscation-batch:v33 */
function OfferRtowebrnsignmalvsnrasbhObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 31) & 43640;
}
function OfferRObftowebrnsignmalvsnrasbhV33ByteFold(s: string): number {
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold("pi");
  let x = 79;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 17955;
  return x;
}
function OfferRObfV3towebrnsignmalvsnrasbh3HashMix(s: string): number {
  let h = 12;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 233;
  return h;
}
function OfferRObftowebrnsignmalvsnrasbhV33SumOdds(nums: number[]): number {
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(53, 20);
void towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold("pi");
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 885;
  }
  return acc;
}

/* obfuscation-batch:v34 */
function towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 209) & 8414;
}
function towebrnsignmalvsnrasbhOftowebrnsignmalvsObfV34ByteFold(s: string): number {
  let x = 63;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) & 17391;
  return x;
}
