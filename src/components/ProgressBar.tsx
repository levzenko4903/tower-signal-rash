import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {LOADER_BAR_ANIM_MS} from '../constants/config';
import {theme} from '../constants/theme';

type Props = {trackWidth: number};

/**
 * The fill sweeps once, briefly, and then rests. Tying the sweep to the whole
 * splash duration keeps the window repainting for its entire life and the
 * automated walkthrough can never read the screen.
 */
export default function ProgressBar({trackWidth}: Props) {
  const grow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.timing(grow, {
      toValue: 1,
      duration: LOADER_BAR_ANIM_MS,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    });
    anim.start();
    return () => anim.stop();
  }, [grow]);

  const fill = grow.interpolate({
    inputRange: [0, 1],
    outputRange: [0, trackWidth],
  });

  return (
    <View style={[styles.track, {width: trackWidth}]}>
      <Animated.View style={[styles.fill, {width: fill}]}>
        <LinearGradient
          colors={theme.gradients.bar}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(249,250,251,0.10)',
  },
  fill: {height: 4, borderRadius: 2, overflow: 'hidden'},
});
