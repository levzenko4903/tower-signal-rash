import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  children?: React.ReactNode;
  accent: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

/** Corner-bracket box  -  the HUD signature used on the loader, shaft and modals. */
export default function HudFrame({children, accent, size = 18, style}: Props) {
  const bracket = {width: size, height: size, borderColor: accent};
  return (
    <View style={[styles.wrap, style]}>
      {children}
      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        <View style={[styles.corner, styles.tl, bracket]} />
        <View style={[styles.corner, styles.tr, bracket]} />
        <View style={[styles.corner, styles.bl, bracket]} />
        <View style={[styles.corner, styles.br, bracket]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {position: 'relative'},
  corner: {position: 'absolute'},
  tl: {top: 0, left: 0, borderTopWidth: 2, borderLeftWidth: 2},
  tr: {top: 0, right: 0, borderTopWidth: 2, borderRightWidth: 2},
  bl: {bottom: 0, left: 0, borderBottomWidth: 2, borderLeftWidth: 2},
  br: {bottom: 0, right: 0, borderBottomWidth: 2, borderRightWidth: 2},
});
