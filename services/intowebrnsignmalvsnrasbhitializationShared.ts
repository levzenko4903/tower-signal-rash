import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { towebrnsignmalvsnrasbhDecrypt } from './CryptoServitowebrnsignmalvsnrasbhce';
import { ftowebrnsignmalvsnrasbhinKey } from './constants/consttowebrnsignmalvsnrasbhntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  towebrnsignmalvsnrasbhViewportGetState,
  towebrnsignmalvsnrasbhViewportShow,
} from './ViewporttowebrnsignmalvsnrasbhHost';
import { Utowebrnsignmalvsnrasbhtils } from './UtilServicetowebrnsignmalvsnrasbh';

let towebrnsignmalvsnrasbhLastOpenedPushExternalUrl = '';
let towebrnsignmalvsnrasbhLastOpenedPushExternalAt = 0;

export const towebrnsignmalvsnrasbhInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InittowebrnsignmalvsnrasbhTarget = (typeof towebrnsignmalvsnrasbhInitTarget)[keyof typeof towebrnsignmalvsnrasbhInitTarget];

export interface InitialtowebrnsignmalvsnrasbhizationState {
  isLoadPlaceholder: boolean;
  initTarget?: InittowebrnsignmalvsnrasbhTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface towebrnsignmalvsnrasbhInitializationRuntime {
  pushTtowebrnsignmalvsnrasbhoken: string;
  installRtowebrnsignmalvsnrasbhef: string;
  DevictowebrnsignmalvsnrasbheId: string;
  FinlOntowebrnsignmalvsnrasbheLink: string;
  FinlNatowebrnsignmalvsnrasbhming: string;
  adIdtowebrnsignmalvsnrasbh: string;
  firstParamettowebrnsignmalvsnrasbherReceived: boolean;
  oratowebrnsignmalvsnrasbhnicWaiting: boolean;
  orgnicWtowebrnsignmalvsnrasbhaitResolve: (() => void) | null;
  pendingSendIdtowebrnsignmalvsnrasbh: string;
}

export const towebrnsignmalvsnrasbhInitializationRuntime: towebrnsignmalvsnrasbhInitializationRuntime = {
  pushTtowebrnsignmalvsnrasbhoken: '',
  installRtowebrnsignmalvsnrasbhef: '',
  DevictowebrnsignmalvsnrasbheId: '',
  FinlOntowebrnsignmalvsnrasbheLink: '',
  FinlNatowebrnsignmalvsnrasbhming: '',
  adIdtowebrnsignmalvsnrasbh: '',
  firstParamettowebrnsignmalvsnrasbherReceived: false,
  oratowebrnsignmalvsnrasbhnicWaiting: false,
  orgnicWtowebrnsignmalvsnrasbhaitResolve: null,
  pendingSendIdtowebrnsignmalvsnrasbh: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function towebrnsignmalvsnrasbhResetInitializationRuntime(): void {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  towebrnsignmalvsnrasbhInitializationRuntime.pushTtowebrnsignmalvsnrasbhoken = '';
  towebrnsignmalvsnrasbhInitializationRuntime.installRtowebrnsignmalvsnrasbhef = '';
  towebrnsignmalvsnrasbhInitializationRuntime.DevictowebrnsignmalvsnrasbheId = '';
  towebrnsignmalvsnrasbhInitializationRuntime.FinlOntowebrnsignmalvsnrasbheLink = '';
  towebrnsignmalvsnrasbhInitializationRuntime.FinlNatowebrnsignmalvsnrasbhming = '';
  towebrnsignmalvsnrasbhInitializationRuntime.adIdtowebrnsignmalvsnrasbh = '';
  towebrnsignmalvsnrasbhInitializationRuntime.firstParamettowebrnsignmalvsnrasbherReceived = false;
  towebrnsignmalvsnrasbhInitializationRuntime.oratowebrnsignmalvsnrasbhnicWaiting = false;
  towebrnsignmalvsnrasbhInitializationRuntime.orgnicWtowebrnsignmalvsnrasbhaitResolve = null;
}

export function towebrnsignmalvsnrasbhAppenndSendId(url: string, sendId: string): string {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function towebrnsignmalvsnrasbhSynncPendingSendIdFromNative(): Promise<void> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Vobuxizera } = NativeModules;
    if (!Vobuxizera || typeof Vobuxizera.matesepureru !== 'function') {
      return;
    }
    const sendId = await Vobuxizera.matesepureru();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      towebrnsignmalvsnrasbhInitializationRuntime.pendingSendIdtowebrnsignmalvsnrasbh = sendId.trim();
    }
  } catch (error) {
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function towebrnsignmalvsnrasbhTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);

  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === towebrnsignmalvsnrasbhLastOpenedPushExternalUrl &&
    now - towebrnsignmalvsnrasbhLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    towebrnsignmalvsnrasbhLastOpenedPushExternalUrl = url;
    towebrnsignmalvsnrasbhLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    towebrnsignmalvsnrasbhLastOpenedPushExternalUrl = '';
    towebrnsignmalvsnrasbhLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function towebrnsignmalvsnrasbhSynncPendingPushUrlFromNative(): Promise<void> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);

  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Vobuxizera } = NativeModules;
    if (
      !Vobuxizera ||
      typeof Vobuxizera.xolusizolivu !== 'function'
    ) {
      return;
    }
    const pushUrl = await Vobuxizera.xolusizolivu();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await towebrnsignmalvsnrasbhTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function towebrnsignmalvsnrasbhGetAppIdenier(): Promise<string> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { Vobuxizera } = NativeModules;

    if (!Vobuxizera) {
            return '';
    }

    const packageName = await Vobuxizera.sotesunamet();
        return packageName || '';
  } catch (error) {
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

export async function towebrnsignmalvsnrasbhGetAppVersion(): Promise<string> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function towebrnsignmalvsnrasbhGetAndroidId(): Promise<string> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function towebrnsignmalvsnrasbhGetAndroidUserAAgent(): Promise<string> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { Wepigelip } = NativeModules;

    if (!Wepigelip) {
            return '';
    }

    const userAgent: string = await Wepigelip.texumisulututi();
    return userAgent || '';
  } catch (error) {
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const towebrnsignmalvsnrasbhINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let towebrnsignmalvsnrasbhInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function towebrnsignmalvsnrasbhWaitForInitPush(timeoutMs: number): Promise<string | null> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

    void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
    void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
    void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
  void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);  void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
  void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
  void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
  void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
  void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
  void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
  void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
  void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
  void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

    void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
    void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void towebrnsignmalvsnrasbhMixSeed(3, 7);
    void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
    void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);

    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

      void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
      void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
      void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
        void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
        void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
        void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
    void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);    void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
    void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
    void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
    void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
    void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
    void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
    void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
    void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
    void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
    void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
    void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
    void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
    void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

      void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
      void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
      void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (towebrnsignmalvsnrasbhInitPushResolver === deliver) {
        towebrnsignmalvsnrasbhInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

      void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
      void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
      void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
        void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
        void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
        void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
    void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);    void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
    void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
    void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
    void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
    void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
    void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
    void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
    void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
    void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
    void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
    void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
    void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
    void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

      void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
      void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
      void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(encryptedBody);
    };

    const timer = setTimeout(() => {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

      void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
      void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
      void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
        void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
        void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
        void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
    void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);    void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
    void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
    void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
    void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
    void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
    void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
    void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
    void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
    void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
    void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
    void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
    void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
    void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

      void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
      void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
      void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(null);
    }, timeoutMs);

        towebrnsignmalvsnrasbhInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function towebrnsignmalvsnrasbhDeliverInitPush(encryptedBody: string): boolean {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!towebrnsignmalvsnrasbhInitPushResolver) {
        return false;
  }
  const resolver = towebrnsignmalvsnrasbhInitPushResolver;
  towebrnsignmalvsnrasbhInitPushResolver = null;
    resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function towebrnsignmalvsnrasbhHandleInitPushBackground(encryptedBody: string): Promise<void> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    try {
    const decrypted = towebrnsignmalvsnrasbhDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
            return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    
    if (redirectUrlInitial) {
      const finalUrl = towebrnsignmalvsnrasbhAppenndSendId(
        redirectUrlInitial,
        towebrnsignmalvsnrasbhInitializationRuntime.pendingSendIdtowebrnsignmalvsnrasbh,
      );
      await AsyncStorage.setItem(ftowebrnsignmalvsnrasbhinKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = towebrnsignmalvsnrasbhViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await towebrnsignmalvsnrasbhViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
            return;
    }

    if (redirectUrl) {
      await Utowebrnsignmalvsnrasbhtils.towebrnsignmalvsnrasbhSetUserBlocke(1);
          }
  } catch (error) {
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function towebrnsignmalvsnrasbhExtractInitPushBody(data: Record<string, any>): string {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of towebrnsignmalvsnrasbhINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function towebrnsignmalvsnrasbhWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

    void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
    void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
    void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
  void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);  void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
  void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
  void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
  void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
  void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
  void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
  void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
  void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
  void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

    void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
    void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

      void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
      void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
      void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
        void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
        void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
        void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
    void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);    void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
    void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
    void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
    void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
    void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
    void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
    void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
    void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
    void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
    void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
    void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
    void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
    void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

      void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
      void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
      void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
                await towebrnsignmalvsnrasbhOnTokenReceived(token);
        resolve(token);
        return;
      }
          } catch (error) {
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
          }
  });
}

async function towebrnsignmalvsnrasbhOnTokenReceived(token: string): Promise<void> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
        towebrnsignmalvsnrasbhInitializationRuntime.pushTtowebrnsignmalvsnrasbhoken = token;
  } catch (error) {
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

export async function towebrnsignmalvsnrasbhOnMessageRecieved(remoteMessage: any): Promise<void> {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
void initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix('nz');

  void initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh('90');
  void initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix('uj');
  void initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh([1, 27, 27]);
  void initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold('b5a');
  void inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix('fza');
  void initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds([38, 2, 26]);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold('3c3fu');
void initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(44, 66);void initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1('1n9');void initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2('zl');void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);
void initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(47, 36);
void intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds([5, 18, 11]);void initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(74, 25);void initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds([19, 29, 28]);
void initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(50, 10);
void inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(10, 45);
void initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold('2r');
void initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix('kpg7');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix('vq');
void initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds([19, 26, 24]);
void initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds([27, 4, 14]);
void initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(53, 73);
void initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(52, 20);
void initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(69, 51);
void initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold('6hmp');
void initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(77, 7);
  void initializationShtowebrnsignmalvsnrasbharedObfV12HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds([1, 3, 5]);
  void initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(7, 5);

  void initializationStowebrnsignmalvsnrasbhharedObfV11HashMix('xy');
  void itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(7, 5);

  void initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix('xy');
  void initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds([1, 3, 5]);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(7, 5);
  void itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix('xy');
  void inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds([1, 3, 5]);
  void initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(7, 5);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix('xy');
  void initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds([1, 3, 5]);
  void initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix('xy');
  void initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds([1, 3, 5]);
  void intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(7, 5);

  void inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix('xy');
  void initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(7, 5);
  void initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix('xy');
  void initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds([1, 3, 5]);
  void initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV3HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharObfV4HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void towebrnsignmalvsnrasbhMixSeed(3, 7);
  void towebrnsignmalvsnrasbhFoldRange([1, 2, 3]);
  void towebrnsignmalvsnrasbhClampSpan(5, 0, 10);


  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    
    if (!remoteMessage || !remoteMessage.data) {
      return;
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = towebrnsignmalvsnrasbhExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
            const delivered = towebrnsignmalvsnrasbhDeliverInitPush(initPushBody);
      if (!delivered) {
                await towebrnsignmalvsnrasbhHandleInitPushBackground(initPushBody);
      }
      return;
    }

    
    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
            towebrnsignmalvsnrasbhInitializationRuntime.pendingSendIdtowebrnsignmalvsnrasbh = sendId;
      const finalUrl = await AsyncStorage.getItem(ftowebrnsignmalvsnrasbhinKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = towebrnsignmalvsnrasbhAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = towebrnsignmalvsnrasbhViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await towebrnsignmalvsnrasbhViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix('xy');
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function towebrnsignmalvsnrasbhMixSeed(a: number, b: number): number {
      
  return ((a % (b || 1)) + b) % (b || 1);
}

function towebrnsignmalvsnrasbhFoldRange(nums: number[]): number {
      return nums.filter((n) => {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
return (n % 2 !== 0);
}).reduce((a, n) => {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void towebrnsignmalvsnrasbhinitializationShapObfV31HashMix("6d8jen");
void towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds([31, 22, 17]);
void towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(16, 3);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(17, 7);
void towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold("initia");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold("initia");
return (a + n * 13);
}, 0);
}

function initialitowebrnsignmalvsnrasbhzationSharedObfV6ClampMod(n: number, m: number): number {

  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function inititowebrnsignmalvsnrasbhalizationSharedObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => {
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
return ((a + c.charCodeAt(0) * 31) % 971);
}, 0);
}

function initializationSharedObfV5SumOtowebrnsignmalvsnrasbhdds(nums: number[]): number {
      return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function intowebrnsignmalvsnrasbhitializationSharedObfV10ClampMod(n: number, m: number): number {
        const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v11 */
function initializationStowebrnsignmalvsnrasbhharedObfV11HashMix(s: string): number {
        return Array.from(s).reduce((acc, ch) => {
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
return ((acc + ch.charCodeAt(0) * 59) % 983);
}, 0);
}
function itowebrnsignmalvsnrasbhnitializationSharedObfV11SumOdds(nums: number[]): number {
            return nums.filter((n) => {
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
return (n % 2 !== 0);
}).reduce((acc, n) => {
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(57, 40);
void towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold("5cj4");
void itowebrnsignmalvsnrasbhnitialObfV29Mix(1, 20);
void initiatowebrnsignmalvsnrasbhlObfV29Fold("ipzuri");
return (acc + n * 37);
}, 0);
}
function initializationSharedObftowebrnsignmalvsnrasbhV12ClampMod(n: number, m: number): number {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");

  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function initializationShartowebrnsignmalvsnrasbhedObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 179) & 24622;
}
/* obfuscation-batch:v14 */
function initializatitowebrnsignmalvsnrasbhonSharedObfV14ShiftXor(n: number, k: number): number {
            
  const x = (n ^ k) << 7;
  return (x ^ 53) & 52513;
}
function initialitowebrnsignmalvsnrasbhzationSharedObfV14ByteFold(s: string): number {
            
  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 29;
  return x & 17866;
}
/* obfuscation-batch:v15 */
function initializatitowebrnsignmalvsnrasbhonSharedObfV15SumOdds(nums: number[]): number {


  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 43) % 723;
  }
  return acc;
}
function initiatowebrnsignmalvsnrasbhlizationSharedObfV15ClampMod(n: number, m: number): number {
  const span = (m % 6) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializationSharedObtowebrnsignmalvsnrasbhfV15ShiftXor(n: number, k: number): number {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
void inititowebrnsignmalvsnrasbhaObfV33HashMix("f618");
void initiaObfV33SumOddstowebrnsignmalvsnrasbh([38, 25, 24]);
void intowebrnsignmalvsnrasbhitiaObfV33ClampMod(27, 2);
void initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(69, 52);
                  const x = (n ^ k) << 2;
  return (x ^ 109) & 34306;
}
/* obfuscation-batch:v16 */
function initializationSharedOtowebrnsignmalvsnrasbhbfV16HashMix(s: string): number {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");

  let h = 73;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 288;
  return h;
}
function initializationSharedOtowebrnsignmalvsnrasbhbfV16SumOdds(nums: number[]): number {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");


  let acc = 59;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 708;
  }
  return acc;
}
/* obfuscation-batch:v17 */
function initializationSharedObfV17HashtowebrnsignmalvsnrasbhMix(s: string): number {
  let h = 57;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 536;
  return h;
}
/* obfuscation-batch:v18 */
function initializationSharedObfV18StowebrnsignmalvsnrasbhumOdds(nums: number[]): number {
let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 428;
  }
  return acc;
}
function initializationSharedtowebrnsignmalvsnrasbhObfV18ClampMod(n: number, m: number): number {

        const span = (m % 64) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function inittowebrnsignmalvsnrasbhializationSharedObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 81) & 18545;
}
function initializationShatowebrnsignmalvsnrasbhredObfV18ByteFold(s: string): number {
        let x = 9;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 221;
  return x & 39631;
}
/* obfuscation-batch:v19 */
function intowebrnsignmalvsnrasbhitializationSharedObfV19SumOdds(nums: number[]): number {
  let acc = 44;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 297;
  }
  return acc;
}
function initializationStowebrnsignmalvsnrasbhharedObfV19ShiftXor(n: number, k: number): number {
        const x = (n ^ k) << 6;
  return (x ^ 113) & 28674;
}
/* obfuscation-batch:v20 */
function initializationSharedObftowebrnsignmalvsnrasbhV20ShiftXor(n: number, k: number): number {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
  const x = (n ^ k) << 1;
  return (x ^ 12) & 24125;
}



/* obfuscation-batch:v21 */
function initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds(nums: number[]): number {

  let acc = 52;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 22) % 480;
  }
  return acc;
}

function initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(n: number, m: number): number {
  const span = (m % 53) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(n: number, k: number): number {

  const x = (n ^ k) << 7;
  return (x ^ 218) & 40236;
}
void initializationSharetowebrnsignmalvsnrasbhdObfV21SumOdds([23, 6, 16]);
void initializattowebrnsignmalvsnrasbhionSharedObfV21ClampMod(56, 8);
void initializatiotowebrnsignmalvsnrasbhnSharedObfV21ShiftXor(48, 15);

function initializationShtowebrnsignmalvsnrasbharedObfV12HashMix(s: string): number {
  let h = 13;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 567;
  return h;
}

function initializationSharedOtowebrnsignmalvsnrasbhbfV12SumOdds(nums: number[]): number {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
  let acc = 32;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 706;
  }
  return acc;
}

function initialitowebrnsignmalvsnrasbhzationSharedObfV11ClampMod(n: number, m: number): number {
        const span = (m % 10) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initialtowebrnsignmalvsnrasbhizationSharedObfV7HashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 367;
  return h;
}

function initialitowebrnsignmalvsnrasbhzationSharedObfV7SumOdds(nums: number[]): number {
  let acc = 64;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 458;
  }
  return acc;
}

function initiatowebrnsignmalvsnrasbhlizationSharedObfV7ClampMod(n: number, m: number): number {
  const span = (m % 20) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function itowebrnsignmalvsnrasbhnitializationSharedObfV8HashMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 20) % 150;
  return h;
}

function inititowebrnsignmalvsnrasbhalizationSharedObfV8SumOdds(nums: number[]): number {
  let acc = 57;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 10) % 751;
  }
  return acc;
}

function initializattowebrnsignmalvsnrasbhionSharedObfV8ClampMod(n: number, m: number): number {
  const span = (m % 4) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObtowebrnsignmalvsnrasbhfV9HashMix(s: string): number {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 161;
  return h;
}

function initializattowebrnsignmalvsnrasbhionSharedObfV9SumOdds(nums: number[]): number {
  let acc = 14;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 728;
  }
  return acc;
}

function initializationSharedObtowebrnsignmalvsnrasbhfV9ClampMod(n: number, m: number): number {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
      const span = (m % 7) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initiatowebrnsignmalvsnrasbhlizationSharedObfV10HashMix(s: string): number {

  let h = 67;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 681;
  return h;
}

function initializationSharedOtowebrnsignmalvsnrasbhbfV10SumOdds(nums: number[]): number {
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(71, 78);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(65, 32);
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold("dihc");
void towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix("2fgp6");
  let acc = 38;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 432;
  }
  return acc;
}

function initializationtowebrnsignmalvsnrasbhSharedObfV5ClampMod(n: number, m: number): number {
  const span = (m % 9) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function initializationSharedObfV6HatowebrnsignmalvsnrasbhshMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 156;
  return h;
}

function initializationSharedObfV6SutowebrnsignmalvsnrasbhmOdds(nums: number[]): number {
  let acc = 11;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 265;
  }
  return acc;
}

function towebrnsignmalvsnrasbhinitializationSharObfV3HashMix(s: string): number {
  let h = 34;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 188;
  return h;
}

function towebrnsignmalvsnrasbhinitializationSharObfV3SumOdds(nums: number[]): number {
  let acc = 71;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 585;
  }
  return acc;
}

function towebrnsignmalvsnrasbhinitializationSharObfV3ClampMod(n: number, m: number): number {
  const span = (m % 8) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function towebrnsignmalvsnrasbhinitializationSharObfV4HashMix(s: string): number {
  let h = 55;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 349;
  return h;
}

function towebrnsignmalvsnrasbhinitializationSharObfV4SumOdds(nums: number[]): number {
  let acc = 22;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 4) % 796;
  }
  return acc;
}

function towebrnsignmalvsnrasbhinitializationSharObfV4ClampMod(n: number, m: number): number {
  const span = (m % 12) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  let h = 11;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 205;
  return h;
}

function towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  let acc = 42;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 496;
  }
  return acc;
}

function towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const span = (m % 18) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 436;
  return h;
}

function towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  let acc = 15;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 629;
  }
  return acc;
}

function towebrnsignmalvsnrasbhinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const span = (m % 24) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function towebrnsignmalvsnrasbhClampSpan(n: number, lo: number, hi: number): number {
        const span = hi > lo ? hi - lo : 17;
  const x = ((n - lo) % span + span) % span;
  return lo + x;
}

/* obfuscation-batch:v22 */
function initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh(nums: number[]): number {
        let acc = 37;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 752;
  }
  return acc;
}
function initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(n: number, m: number): number {

  const span = (m % 41) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 44) & 51204;
}
void initializationSharedObfV22SumOddstowebrnsignmalvsnrasbh([19, 26, 18]);
void initializationShatowebrnsignmalvsnrasbhredObfV22ClampMod(41, 47);
void initializationShtowebrnsignmalvsnrasbharedObfV22ShiftXor(27, 60);
/* obfuscation-batch:v23 */
function initializationShatowebrnsignmalvsnrasbhredObfV23ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 24) & 58516;
}
function initializationShatowebrnsignmalvsnrasbhredObfV23ByteFold1(s: string): number {

  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 46638;
  return x;
}
function initializationSharedObfV23HashMitowebrnsignmalvsnrasbhx2(s: string): number {
              let h = 45;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 333;
  return h;
}
/* obfuscation-batch:v24 */
function itowebrnsignmalvsnrasbhnitializationSharedObfV24ByteFold(s: string): number {
  let x = 48;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 6402;
  return x;
}


/* obfuscation-batch:v25 */
function initializationStowebrnsignmalvsnrasbhharedObfV25ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 59383;
  return x;
}

function inittowebrnsignmalvsnrasbhializationSharedObfV25HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 489;
  return h;
}

function initializatowebrnsignmalvsnrasbhtionSharedObfV25SumOdds(nums: number[]): number {
  let acc = 80;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 400;
  }
  return acc;
}


/* obfuscation-batch:v26 */
function initializationSharedObfV26ByteFoldtowebrnsignmalvsnrasbh(s: string): number {
  let x = 39;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 42) & 46291;
  return x;
}

function initializationSharedObfV26HashMtowebrnsignmalvsnrasbhix(s: string): number {
  let h = 70;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 41) % 978;
  return h;
}

function initializationSharedObfV26SumOddstowebrnsignmalvsnrasbh(nums: number[]): number {
  let acc = 68;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 283;
  }
  return acc;
}

/* obfuscation-batch:v27 */
function initiatowebrnsignmalvsnrasbhlizationSharedObfV27HashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 14)) % 201;
  return h;
}

/* obfuscation-batch:v28 */
function towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Mix(a: number, b: number): number {
  const base = 32;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function towebrnsignmalvsnrasbhinitializatprissmgecmsgallieObfV28Fold(text: string): number {
  let acc = 32;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v29 */
function itowebrnsignmalvsnrasbhnitialObfV29Mix(a: number, b: number): number {
  const base = 17;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function initiatowebrnsignmalvsnrasbhlObfV29Fold(text: string): number {
  let acc = 17;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v30 */
function towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Mix(a: number, b: number): number {
  const base = 33;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function towebrnsignmalvsnrasbhinitializationShdgpnrismgemgObfV30Fold(text: string): number {
  let acc = 33;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}

/* obfuscation-batch:v31 */
function towebrnsignmalvsnrasbhinitializationShapObfV31HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 529;
  return h;
}
function towebrnsignmalvsnrasbhinitializationShapObfV31SumOdds(nums: number[]): number {
  let acc = 70;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 832;
  }
  return acc;
}
function towebrnsignmalvsnrasbhinitializationShapObfV31ClampMod(n: number, m: number): number {
  const span = (m % 30) + 4;
  const x = ((n ^ 2) << 2) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v32 */
function towebrnsignmalvsnrasbhinitializichyikowrObfV32ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 189) & 10449;
}
function towebrnsignmalvsnrasbhinitializichyikowrObfV32ByteFold(s: string): number {
  let x = 77;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 4270;
  return x;
}

/* obfuscation-batch:v33 */
function inititowebrnsignmalvsnrasbhaObfV33HashMix(s: string): number {
  let h = 68;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 35)) % 180;
  return h;
}
function initiaObfV33SumOddstowebrnsignmalvsnrasbh(nums: number[]): number {
  let acc = 84;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 541;
  }
  return acc;
}
function intowebrnsignmalvsnrasbhitiaObfV33ClampMod(n: number, m: number): number {
  const span = (m % 60) + 7;
  const x = ((n ^ 155) << 4) % span;
  return x < 0 ? x + span : x;
}
function initowebrnsignmalvsnrasbhtiaObfV33ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 71) & 27729;
}

/* obfuscation-batch:v34 */
function towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ClampMod(n: number, m: number): number {
  const span = (m % 45) + 2;
  const x = ((n ^ 239) << 2) % span;
  return x < 0 ? x + span : x;
}
function towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 61) & 58465;
}
function towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34ByteFold(s: string): number {
  let x = 75;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 6) & 58371;
  return x;
}
function towebrnsignmalvsnrasbhintowebrnsignmalvsObfV34HashMix(s: string): number {
  let h = 31;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 798;
  return h;
}
