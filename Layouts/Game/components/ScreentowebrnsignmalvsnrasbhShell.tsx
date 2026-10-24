import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Prtowebrnsignmalvsnrasbhops = {
  source: ImageSourcePropType;
  overlay: string[];
  children: React.ReactNode;
  decor?: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
};

/** Depth stack shared by every screen: image -> gradient overlay -> decor -> content. */
export default function ScreentowebrnsignmalvsnrasbhShell({
  source: soutowebrnsignmalvsnrasbhrce,
  overlay: ovetowebrnsignmalvsnrasbhrlay,
  children: chiltowebrnsignmalvsnrasbhdren,
  decor: detowebrnsignmalvsnrasbhcor,
  contentStyle: contentowebrnsignmalvsnrasbhtStyle,
}: Prtowebrnsignmalvsnrasbhops) {
void towebrnsignmalvsnrasbhScreentowebrnsignmObfV1ShiftXor(66, 29);
void towebrnsignmalvsnrasbhScreentowebrnsignmObfV1ByteFold("kl81k");
void towebrnsignmalvsnrasbhScreentowebrnsignmObfV1HashMix("4ni923");
  return (
    <ImageBackground source={soutowebrnsignmalvsnrasbhrce} style={stytowebrnsignmalvsnrasbhles.btowebrnsignmalvsnrasbhg} resizeMode="cover">
      <LinearGradient
        colors={ovetowebrnsignmalvsnrasbhrlay}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      {detowebrnsignmalvsnrasbhcor ? (
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          {detowebrnsignmalvsnrasbhcor}
        </View>
      ) : null}
      <View style={[stytowebrnsignmalvsnrasbhles.contowebrnsignmalvsnrasbhtent, contentowebrnsignmalvsnrasbhtStyle]}>{chiltowebrnsignmalvsnrasbhdren}</View>
    </ImageBackground>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  btowebrnsignmalvsnrasbhg: {flex: 1, backgroundColor: '#0A101C'},
  contowebrnsignmalvsnrasbhtent: {flex: 1},
});

/* autosetup-game-stamp:v1 */
function towebrnsignmalvsnrasbhGameMixSeed(xtowebrnsignmalvsnrasbh: number, ytowebrnsignmalvsnrasbh: number): number {
  return ((xtowebrnsignmalvsnrasbh % (ytowebrnsignmalvsnrasbh || 1)) + ytowebrnsignmalvsnrasbh) % (ytowebrnsignmalvsnrasbh || 1);
}
function towebrnsignmalvsnrasbhGameFoldRange(nutowebrnsignmalvsnrasbhms: number[]): number {
  return nutowebrnsignmalvsnrasbhms.reduce((atowebrnsignmalvsnrasbhcc, ntowebrnsignmalvsnrasbh) => atowebrnsignmalvsnrasbhcc + ntowebrnsignmalvsnrasbh, 0);
}
function towebrnsignmalvsnrasbhGameClampSpan(ntowebrnsignmalvsnrasbh: number, ltowebrnsignmalvsnrasbho: number, htowebrnsignmalvsnrasbhi: number): number {
  return ntowebrnsignmalvsnrasbh < ltowebrnsignmalvsnrasbho ? ltowebrnsignmalvsnrasbho : ntowebrnsignmalvsnrasbh > htowebrnsignmalvsnrasbhi ? htowebrnsignmalvsnrasbhi : ntowebrnsignmalvsnrasbh;
}
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);


/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhScreentowebrnsignmObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 4;
  return (xtowebrnsignmalvsnrasbh ^ 60) & 35316;
}
function towebrnsignmalvsnrasbhScreentowebrnsignmObfV1ByteFold(stowebrnsignmalvsnrasbh: string): number {
  let xtowebrnsignmalvsnrasbh = 4;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) xtowebrnsignmalvsnrasbh = (xtowebrnsignmalvsnrasbh + stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 33) & 43694;
  return xtowebrnsignmalvsnrasbh;
}
function towebrnsignmalvsnrasbhScreentowebrnsignmObfV1HashMix(stowebrnsignmalvsnrasbh: string): number {
  let htowebrnsignmalvsnrasbh = 14;
  for (let itowebrnsignmalvsnrasbh = 0; itowebrnsignmalvsnrasbh < stowebrnsignmalvsnrasbh.length; itowebrnsignmalvsnrasbh++) htowebrnsignmalvsnrasbh = (htowebrnsignmalvsnrasbh ^ (stowebrnsignmalvsnrasbh.charCodeAt(itowebrnsignmalvsnrasbh) * 39)) % 724;
  return htowebrnsignmalvsnrasbh;
}
