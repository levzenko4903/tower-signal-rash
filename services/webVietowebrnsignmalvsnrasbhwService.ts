import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  AppState,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAtowebrnsignmalvsnrasbhST_KEY,
  STORAGtowebrnsignmalvsnrasbhE_KEYS,
  towebrnsignmalvsnrasbhConstTouch,
} from './constants/consttowebrnsignmalvsnrasbhntsVariable';
// autosetup-split-begin
import { webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds, webViewServicePart02ObfV11SumOddtowebrnsignmalvsnrasbhs, webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix, webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix, webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix, webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod, webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold, webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod, webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod, webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod, webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs, webtowebrnsignmalvsnrasbhObfV3HashMix, webObfV3ClampModtowebrnsignmalvsnrasbh, webObfV4SumOtowebrnsignmalvsnrasbhdds, wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod, swefgdetguhjhoioesMixSeed, swefgdetguhjhoioesClampSpan, webViewServictowebrnsignmalvsnrasbhePart01ObfV11SumOdds, webViewServictowebrnsignmalvsnrasbhePart02ObfV27ByteFold, webViewServicePart02ObfV27HashMitowebrnsignmalvsnrasbhx, webViewServicePartowebrnsignmalvsnrasbht02ObfV27SumOdds, towebrnsignmalvsnrasbhwebViewServicePart0prissmgecObfV28Mix, towebrnsignmalvsnrasbhwebViewServicePart0prissmgecObfV28Fold, webViewObfV29towebrnsignmalvsnrasbhMix, wetowebrnsignmalvsnrasbhbViewObfV29Fold, towebrnsignmalvsnrasbhwebViewSerdgpnrismgemgalleryObfV30Mix, towebrnsignmalvsnrasbhwebViewSerdgpnrismgemgalleryObfV30Fold, webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold, wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod, webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod, webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx, webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds, webViewServObfV1HashMitowebrnsignmalvsnrasbhx, webViewServicePart02ObtowebrnsignmalvsnrasbhfV11HashMix, webViewServicePart03ObfV13ClatowebrnsignmalvsnrasbhmpMod, webtowebrnsignmalvsnrasbhViewServicePart01ObfV15SumOdds, webViewtowebrnsignmalvsnrasbhServicePart02ObfV22ShiftXor } from './webViewServtowebrnsignmalvsnrasbhicePart01';
import { wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix, webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix, webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds, webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds, wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod, webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds, webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod, webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd, webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor, towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix, towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold, towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix, towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold, webViewSeObtowebrnsignmalvsnrasbhfV29Mix, webViewSeObfVtowebrnsignmalvsnrasbh29Fold, webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor, webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1, webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2, webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold, webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd, webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor, webViewServicePatowebrnsignmalvsnrasbhrt02ObfV11ClampMod, webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds, webViewServicetowebrnsignmalvsnrasbhPart02ObfV15ClampMod, webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds, webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix, webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor, webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds, wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod, webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds, webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds, webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod, webViewServObftowebrnsignmalvsnrasbhV2SumOdds, webViewServicePart01ObfV13HatowebrnsignmalvsnrasbhshMix, webViewServicePart03ObfV1towebrnsignmalvsnrasbh3ByteFold, wtowebrnsignmalvsnrasbhebViewServicePart01ObfV15ShiftXor, webViewStowebrnsignmalvsnrasbhervicePart02ObfV23SumOdds } from './webViewSetowebrnsignmalvsnrasbhrvicePart02';
// autosetup-split-end
import { swefgdetguhjhoioesFoldRange, wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold, webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds, webViewServitowebrnsignmalvsnrasbhceObfV20HashMix, webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds, webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod, webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold, webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold, webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix, webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds, webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod, webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds, webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds, webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor, webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix, webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix, webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod, webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds, webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix, webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod, webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix, wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds, wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix, webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod, webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix, wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix, webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod, webOtowebrnsignmalvsnrasbhbfV3SumOdds, webObftowebrnsignmalvsnrasbhV4HashMix, wtowebrnsignmalvsnrasbhebObfV4ClampMod, webViewServObfV1SumOtowebrnsignmalvsnrasbhdds, wetowebrnsignmalvsnrasbhbViewServObfV2HashMix, webViewServObfV2CltowebrnsignmalvsnrasbhampMod, webViewServicetowebrnsignmalvsnrasbhPart01ObfV11HashMix, webViewServicePart01ObfV1towebrnsignmalvsnrasbh1ClampMod, webViewSetowebrnsignmalvsnrasbhrvicePart01ObfV13ByteFold, webViewServicePart02ObfV13SumOtowebrnsignmalvsnrasbhdds, webViewStowebrnsignmalvsnrasbhervicePart03ObfV13ShiftXor, webViewServictowebrnsignmalvsnrasbhePart03ObfV13HashMix, webViewtowebrnsignmalvsnrasbhServicePart01ObfV15HashMix, webViewServicePart01ObfV15towebrnsignmalvsnrasbhClampMod, webVietowebrnsignmalvsnrasbhwServicePart02ObfV15ShiftXor, webVietowebrnsignmalvsnrasbhwServicePart02ObfV15ByteFold } from './webViewServitowebrnsignmalvsnrasbhcePart01';

type ViewtowebrnsignmalvsnrasbhportBannanaModule = {
  somakoqohir: (url: string) => Promise<boolean>;
  kegavocefane: () => Promise<boolean>;
};

function viewportowebrnsignmalvsnrasbhtBridge(): ViewtowebrnsignmalvsnrasbhportBannanaModule | undefined {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

  void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
  void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');

  return NativeModules.Sezivomomo;
}
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  /** System permission sheet is on screen. Its own pause must not count as a new launch. */
  private swefgdetguhjhoioesPushUiInFlight = false;
  /** Ignore the resume that follows closing the system sheet. */
  private swefgdetguhjhoioesPushUiQuietUntil = 0;
  /** User left the app (Home / recents), not the permission dialog. */
  private swefgdetguhjhoioesLeftAppForReal = false;
  _dummypicklfo5409vb33 = 0;

  constructor() {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
    void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
    void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');

    void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
    void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
    this.swefgdetguhjhoioesBindPushLaunchWatcher();
  }

  towebrnsignmalvsnrasbhubscribe(listener: swefgdetguhjhoioesListener): () => void {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

      void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
      void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
        void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
        void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
        void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
    void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
    void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');    void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
    void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
    void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
    void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
    void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
    void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
    void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
    void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
    void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
    void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
    void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
    void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
    void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
    void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
    void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
    void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
    void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

      void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
      void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
      void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
      void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
      void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
      void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
      void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
      void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
      void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
      void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
      void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
      void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
      void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
      void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
      void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void towebrnsignmalvsnrasbhConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

      void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
      void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
        void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
        void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
        void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
    void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
    void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');    void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
    void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
    void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
    void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
    void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
    void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
    void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
    void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
    void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
    void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
    void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
    void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
    void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
    void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
    void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
    void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
    void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

      void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
      void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
      void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
      return (l(this.state));
    });
  }

  /**
   * A second app open is not always a new process. Home → icon keeps JS alive,
   * so the one-shot session flag would skip the repeat native ask. The system
   * sheet itself also backgrounds the activity; that pause is not a launch.
   */
  private swefgdetguhjhoioesBindPushLaunchWatcher(): void {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
    void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
    void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');

    void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
    void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);

    AppState.addEventListener('change', (next) => {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

      void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
      void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
        void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
        void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
        void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
    void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
    void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');    void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
    void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
    void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
      void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
      void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');

      void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
      void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);

      const quiet = Date.now() < this.swefgdetguhjhoioesPushUiQuietUntil;
      if (next === 'background') {
        if (!this.swefgdetguhjhoioesPushUiInFlight && !quiet) {
          this.swefgdetguhjhoioesLeftAppForReal = true;
        }
        return;
      }
      if (next !== 'active') {
        return;
      }
      if (this.swefgdetguhjhoioesPushUiInFlight || quiet) {
        this.swefgdetguhjhoioesLeftAppForReal = false;
        return;
      }
      if (!this.swefgdetguhjhoioesLeftAppForReal) {
        return;
      }
      this.swefgdetguhjhoioesLeftAppForReal = false;
      this.swefgdetguhjhoioesNativePushAskedThisSession = false;
      this.swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
      if (this.state.visible || this.openingInProgress) {
        void this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
    });
  }

  private swefgdetguhjhoioesBeginPushUi(): void {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
    void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
    void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');

    void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = true;
  }

  private swefgdetguhjhoioesEndPushUi(): void {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
    void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
    void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');

    void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = false;
    this.swefgdetguhjhoioesPushUiQuietUntil = Date.now() + 1200;
  }

  private async swefgdetguhjhoioesOpenPushSettings(): Promise<void> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
    void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
    void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');

    void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
    void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);

    try {
      if (Platform.OS === 'android') {
        const { Vobuxizera } = NativeModules;
        const packageName =
          Vobuxizera && typeof Vobuxizera.sotesunamet === 'function'
            ? await Vobuxizera.sotesunamet()
            : '';
        if (packageName) {
          await Linking.sendIntent('android.settings.APP_NOTIFICATION_SETTINGS', [
            {
              key: 'android.provider.extra.APP_PACKAGE',
              value: String(packageName),
            },
          ]);
          return;
        }
      }
    } catch {
      // Fall through to the app details screen.
    }
    try {
      await Linking.openSettings();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

  void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
  void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
  void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
  void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
  void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
  void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
  void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
                if (alreadyGranted) {
          return true;
        }
        this.swefgdetguhjhoioesBeginPushUi();
        try {
          const result = await PermissionsAndroid.request(permission);
          return result === PermissionsAndroid.RESULTS.GRANTED;
        } finally {
          this.swefgdetguhjhoioesEndPushUi();
        }
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
                const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          this.swefgdetguhjhoioesBeginPushUi();
          try {
            const newStatus = await requestPermission(messaging);
            return (
              newStatus === AuthorizationStatus.AUTHORIZED ||
              newStatus === AuthorizationStatus.PROVISIONAL
            );
          } finally {
            this.swefgdetguhjhoioesEndPushUi();
          }
        }
        return false;
      }
    } catch (error) {
      void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
      void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
      void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
      void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
      void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
      void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
            void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

            void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
            void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
              void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
              void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
              void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
          void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
          void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');          void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
          void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
          void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
          void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
          void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
          void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
          void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
          void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
          void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
          void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
          void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
          void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
          void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
          void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
          void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
          void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
          void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

            void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
            void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
            void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
            void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
            void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
            void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
            void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
            void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
            void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
            void this.swefgdetguhjhoioesOpenPushSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGtowebrnsignmalvsnrasbhE_KEYS.PUSH_MAIN_ASKEDtowebrnsignmalvsnrasbh,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native dialog per launch. The 2nd native ask waits until the user leaves and opens the app again.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: first launch. askCount === 1: second launch, ask again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGtowebrnsignmalvsnrasbhE_KEYS.PUSH_MAIN_ASKEDtowebrnsignmalvsnrasbh,
        String(nextCount),
      );

      // Second denial → custom prompt (later launches hit askCount >= 2 above).
      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

  void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
  void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
  void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
  void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
  void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
  void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
  void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewportowebrnsignmalvsnrasbhtBridge()?.somakoqohir) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await viewportowebrnsignmalvsnrasbhtBridge().somakoqohir(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewportowebrnsignmalvsnrasbhtBridge()?.kegavocefane) {
      return;
    }

    try {
      await viewportowebrnsignmalvsnrasbhtBridge().kegavocefane();
    } catch {
      // silent
    }
  }

  async showtowebrnsignmalvsnrasbh(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

  void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
  void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
  void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
  void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
  void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
  void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
  void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
  void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.towebrnsignmalvsnrasbhaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async towebrnsignmalvsnrasbhaveLastUrl(url: string): Promise<boolean> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.towebrnsignmalvsnrasbhaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async towebrnsignmalvsnrasbhaveLastUrlToStorage(url: string): Promise<void> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAtowebrnsignmalvsnrasbhST_KEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
void webVieObftowebrnsignmalvsnrasbhV33SumOdds([33, 40, 35]);
void webVtowebrnsignmalvsnrasbhieObfV33ClampMod(58, 37);
void towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix("ofanm7");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix("jc56");
void towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds([4, 15, 6]);
void webViewSeObtowebrnsignmalvsnrasbhfV29Mix(9, 16);
void webViewSeObfVtowebrnsignmalvsnrasbh29Fold("wedgpn");
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Mix(16, 6);
void towebrnsignmalvsnrasbhwebViewServicepzurisymgeqmgaObfV28Fold("webvie");
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Mix(12, 7);
void towebrnsignmalvsnrasbhwebViewServiceprissmgecmsgalObfV27Fold("webvie");
void webViewServiceObfV27ClampMotowebrnsignmalvsnrasbhd(4, 8);
void webVtowebrnsignmalvsnrasbhiewServiceObfV27ShiftXor(61, 62);

    void webViewServiceOtowebrnsignmalvsnrasbhbfV26SumOdds([37, 37, 25]);
    void webViewServiceObfV2towebrnsignmalvsnrasbh6ClampMod(50, 22);
  void webViewServitowebrnsignmalvsnrasbhceObfV25SumOdds([29, 25, 9]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV25ClampMod(61, 21);
  void webViewServiceObfV25towebrnsignmalvsnrasbhShiftXor(38, 58);
  void webViewSetowebrnsignmalvsnrasbhrviceObfV24ByteFold('ntt');
  void webViewServiceObfVtowebrnsignmalvsnrasbh24HashMix('u2c39');
  void webViewServiceObfV2towebrnsignmalvsnrasbh4SumOdds([83, 15, 11]);
  void webViewServiceObfV24ClampMotowebrnsignmalvsnrasbhd(12, 33);
void wetowebrnsignmalvsnrasbhbViewServiceObfV23HashMix('zat');void webViewServiceObtowebrnsignmalvsnrasbhfV23SumOdds1([31, 25, 32]);void webViewServitowebrnsignmalvsnrasbhceObfV23ClampMod2(15, 27);void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);
  void webViewServitowebrnsignmalvsnrasbhceObfV20HashMix('7v');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV20SumOdds([21, 27, 16]);
void webViewServiceObfV19HastowebrnsignmalvsnrasbhhMix('pmqf');void webVtowebrnsignmalvsnrasbhiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceObfV19ByttowebrnsignmalvsnrasbheFold('xhp');  void webViewServiceObfV18ClampMtowebrnsignmalvsnrasbhod(39, 8);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV18ShiftXor(76, 79);
  void webViewServiceObtowebrnsignmalvsnrasbhfV18ByteFold('rrrh');
  void webViewServiceObfV17ByttowebrnsignmalvsnrasbheFold('fv9f');
  void webViewServiceObfV17HashtowebrnsignmalvsnrasbhMix('fv2');
  void webViewServiceObfV1towebrnsignmalvsnrasbh6HashMix('h3tb');
  void webViewSertowebrnsignmalvsnrasbhviceObfV16SumOdds([26, 28, 24]);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV16ClampMod(54, 53);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV15SumOdds([19, 18, 23]);
  void webViewServiceOtowebrnsignmalvsnrasbhbfV15ClampMod(42, 62);
  void webViewServiceObfV14HashtowebrnsignmalvsnrasbhMix('hq9');
  void webViewServiceObfV1towebrnsignmalvsnrasbh4SumOdds([18, 16, 22]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh14ClampMod(65, 12);
  void webViewServiceObfV13SumOdtowebrnsignmalvsnrasbhds([2, 22, 2]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh13ClampMod(64, 55);
  void webVitowebrnsignmalvsnrasbhewServiceObfV13ShiftXor(6, 23);
  void webViewServiceObfV13BytetowebrnsignmalvsnrasbhFold('9k6');
  void webViewServiceOtowebrnsignmalvsnrasbhbfV12HashMix('xy');
  void webViewtowebrnsignmalvsnrasbhServiceObfV12SumOdds([1, 3, 5]);
  void webViewtowebrnsignmalvsnrasbhServiceObfV12ClampMod(7, 5);

  void webViewSetowebrnsignmalvsnrasbhrviceObfV11HashMix('xy');
  void webViewServicetowebrnsignmalvsnrasbhObfV11SumOdds([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh11ClampMod(7, 5);

  void webViewServiceObfV7HashMitowebrnsignmalvsnrasbhx('xy');
  void webtowebrnsignmalvsnrasbhViewServiceObfV7SumOdds([1, 3, 5]);
  void webtowebrnsignmalvsnrasbhViewServiceObfV7ClampMod(7, 5);
  void webViewSertowebrnsignmalvsnrasbhviceObfV8HashMix('xy');
  void webViewServitowebrnsignmalvsnrasbhceObfV8SumOdds([1, 3, 5]);
  void webViewServicetowebrnsignmalvsnrasbhObfV8ClampMod(7, 5);
  void webVtowebrnsignmalvsnrasbhiewServiceObfV9HashMix('xy');
  void wetowebrnsignmalvsnrasbhbViewServiceObfV9SumOdds([1, 3, 5]);
  void webViewServiceObtowebrnsignmalvsnrasbhfV9ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV10HashMix('xy');
  void webViewServiceObfVtowebrnsignmalvsnrasbh10SumOdds([1, 3, 5]);
  void webViewServiceObfV10CtowebrnsignmalvsnrasbhlampMod(7, 5);

    void webViewServiceObfV5HtowebrnsignmalvsnrasbhashMix('xy');
    void webViewServiceObfV5towebrnsignmalvsnrasbhSumOdds([1, 3, 5]);
    void webViewtowebrnsignmalvsnrasbhServiceObfV5ClampMod(7, 5);
  void wetowebrnsignmalvsnrasbhbViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
  void webViewServiceObfVtowebrnsignmalvsnrasbh6ClampMod(7, 5);
    void webtowebrnsignmalvsnrasbhObfV3HashMix('xy');
    void webOtowebrnsignmalvsnrasbhbfV3SumOdds([1, 3, 5]);
    void webObfV3ClampModtowebrnsignmalvsnrasbh(7, 5);
    void webObftowebrnsignmalvsnrasbhV4HashMix('xy');
    void webObfV4SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebObfV4ClampMod(7, 5);
    void webViewServObfV1HashMitowebrnsignmalvsnrasbhx('xy');
    void webViewServObfV1SumOtowebrnsignmalvsnrasbhdds([1, 3, 5]);
    void wtowebrnsignmalvsnrasbhebViewServObfV1ClampMod(7, 5);
    void wetowebrnsignmalvsnrasbhbViewServObfV2HashMix('xy');
    void webViewServObftowebrnsignmalvsnrasbhV2SumOdds([1, 3, 5]);
    void webViewServObfV2CltowebrnsignmalvsnrasbhampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAtowebrnsignmalvsnrasbhST_KEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void webViewServicetowebrnsignmalvsnrasbhPart01ObfV11HashMix('xy');
void webViewServictowebrnsignmalvsnrasbhePart01ObfV11SumOdds([1, 3, 5]);
void webViewServicePart01ObfV1towebrnsignmalvsnrasbh1ClampMod(7, 5);
/* obfuscation-batch:v11 */

void webViewServicePart02ObtowebrnsignmalvsnrasbhfV11HashMix('xy');
void webViewServicePart02ObfV11SumOddtowebrnsignmalvsnrasbhs([1, 3, 5]);
void webViewServicePatowebrnsignmalvsnrasbhrt02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
void webViewSetowebrnsignmalvsnrasbhrvicePart01ObfV13ByteFold('dzzw');
void webViewServicePart01ObfV13HatowebrnsignmalvsnrasbhshMix('fs');

/* obfuscation-batch:v13 */
void webViewServicePart02ObfV13SumOtowebrnsignmalvsnrasbhdds([18, 4, 4]);

/* obfuscation-batch:v13 */
void webViewServicePart03ObfV13ClatowebrnsignmalvsnrasbhmpMod(9, 24);
void webViewStowebrnsignmalvsnrasbhervicePart03ObfV13ShiftXor(6, 10);
void webViewServicePart03ObfV1towebrnsignmalvsnrasbh3ByteFold('rwq');
void webViewServictowebrnsignmalvsnrasbhePart03ObfV13HashMix('kbw');
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void webViewtowebrnsignmalvsnrasbhServicePart01ObfV15HashMix('96nm');
void webtowebrnsignmalvsnrasbhViewServicePart01ObfV15SumOdds([24, 26, 30]);
void webViewServicePart01ObfV15towebrnsignmalvsnrasbhClampMod(30, 11);
void wtowebrnsignmalvsnrasbhebViewServicePart01ObfV15ShiftXor(4, 31);

/* obfuscation-batch:v15 */
void webViewServicetowebrnsignmalvsnrasbhPart02ObfV15ClampMod(14, 63);
void webVietowebrnsignmalvsnrasbhwServicePart02ObfV15ShiftXor(41, 49);
void webVietowebrnsignmalvsnrasbhwServicePart02ObfV15ByteFold('8f');
/* obfuscation-batch:v16 */

/* obfuscation-batch:v17 */
/* obfuscation-batch:v18 */
/* obfuscation-batch:v19 */
/* obfuscation-batch:v20 */

/* obfuscation-batch:v21 */

void wtowebrnsignmalvsnrasbhebViewServiceObfV21ByteFold('2m');
void webViewtowebrnsignmalvsnrasbhServiceObfV21HashMix('7am4');
void webViewServiceObfVtowebrnsignmalvsnrasbh21SumOdds([17, 15, 13]);
void wtowebrnsignmalvsnrasbhebViewServiceObfV21ClampMod(81, 10);

/* obfuscation-batch:v22 */
void webViewtowebrnsignmalvsnrasbhServiceObfV22ShiftXor(89, 68);
/* obfuscation-batch:v23 */
/* obfuscation-batch:v24 */

/* obfuscation-batch:v25 */

/* obfuscation-batch:v26 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v22 */
void webViewtowebrnsignmalvsnrasbhServicePart02ObfV22ShiftXor(83, 4);
/* obfuscation-batch:v23 */
void webViewStowebrnsignmalvsnrasbhervicePart02ObfV23SumOdds([23, 29, 8]);
/* obfuscation-batch:v24 */
function webViewServicePart02ObfV24BtowebrnsignmalvsnrasbhyteFold(s: string): number {
          let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 55769;
  return x;
}
function webViewServicePart02ObfVtowebrnsignmalvsnrasbh24HashMix(s: string): number {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);

  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 3) % 92;
  return h;
}
function webViewServicePartowebrnsignmalvsnrasbht02ObfV24SumOdds(nums: number[]): number {
          let acc = 76;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 428;
  }
  return acc;
}

/* obfuscation-batch:v25 */
function wetowebrnsignmalvsnrasbhbViewServicePart02ObfV25ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 129) & 43284;
}

function webViewServiceParttowebrnsignmalvsnrasbh02ObfV25ByteFold(s: string): number {
  let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 50908;
  return x;
}

function webViewServicePart02ObfV25HatowebrnsignmalvsnrasbhshMix(s: string): number {
  let h = 80;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 779;
  return h;
}

function webViewtowebrnsignmalvsnrasbhServicePart02ObfV25SumOdds(nums: number[]): number {
  let acc = 35;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 681;
  }
  return acc;
}

/* obfuscation-batch:v26 */
function wetowebrnsignmalvsnrasbhbViewServicePart02ObfV26HashMix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 37) % 610;
  return h;
}

function webVietowebrnsignmalvsnrasbhwServicePart02ObfV26SumOdds(nums: number[]): number {
  let acc = 47;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 211;
  }
  return acc;
}

function webViewServicePart02ObfV26ClampMotowebrnsignmalvsnrasbhd(n: number, m: number): number {
  const span = (m % 59) + 13;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewSertowebrnsignmalvsnrasbhvicePart02ObfV26ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 115) & 34227;
}

/* obfuscation-batch:v27 */

/* obfuscation-batch:v28 */

/* obfuscation-batch:v29 */

/* obfuscation-batch:v30 */

/* obfuscation-batch:v31 */
function towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31HashMix(s: string): number {
  let h = 89;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 9)) % 749;
  return h;
}
function towebrnsignmalvsnrasbhwebViewServpmvqkrmObfV31SumOdds(nums: number[]): number {
  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 348;
  }
  return acc;
}

/* obfuscation-batch:v32 */
function towebrnsignmalvsnrasbhwichyikowrdfpagthmObfV32HashMix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 37)) % 829;
  return h;
}

/* obfuscation-batch:v33 */
function webVieObftowebrnsignmalvsnrasbhV33SumOdds(nums: number[]): number {
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix("6n6d");
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds([25, 32, 11]);
void towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(18, 61);
  let acc = 13;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 816;
  }
  return acc;
}
function webVtowebrnsignmalvsnrasbhieObfV33ClampMod(n: number, m: number): number {
  const span = (m % 53) + 5;
  const x = ((n ^ 154) << 7) % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v34 */
function towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34HashMix(s: string): number {
  let h = 37;
  for (let i = 0; i < s.length; i++) h = (h ^ (s.charCodeAt(i) * 7)) % 264;
  return h;
}
function towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34SumOdds(nums: number[]): number {
  let acc = 85;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 842;
  }
  return acc;
}
function towebrnsignmalvsnrasbhwebVietowebrnsignmObfV34ClampMod(n: number, m: number): number {
  const span = (m % 39) + 12;
  const x = ((n ^ 22) << 4) % span;
  return x < 0 ? x + span : x;
}
