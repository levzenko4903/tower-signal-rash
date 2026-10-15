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

type Props = {
  source: ImageSourcePropType;
  overlay: string[];
  children: React.ReactNode;
  decor?: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
};

/** Depth stack shared by every screen: image -> gradient overlay -> decor -> content. */
export default function ScreenShell({
  source,
  overlay,
  children,
  decor,
  contentStyle,
}: Props) {
  return (
    <ImageBackground source={source} style={styles.bg} resizeMode="cover">
      <LinearGradient
        colors={overlay}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      {decor ? (
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          {decor}
        </View>
      ) : null}
      <View style={[styles.content, contentStyle]}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {flex: 1, backgroundColor: '#0A101C'},
  content: {flex: 1},
});
