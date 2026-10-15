import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

type Props = {
  text: string;
  color: string;
  trigger: number;
};

/** Short rise-and-fade feedback label. One shot per trigger, never a loop. */
export default function FloatingHint({text, color, trigger}: Props) {
  const rise = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (trigger <= 0) {
      return;
    }
    rise.setValue(0);
    const anim = Animated.timing(rise, {
      toValue: 1,
      duration: 520,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [trigger, rise]);

  if (trigger <= 0 || text.length === 0) {
    return null;
  }

  const translateY = rise.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -26],
  });
  const opacity = rise.interpolate({
    inputRange: [0, 0.25, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <Animated.Text
      style={[styles.text, {color: color, opacity, transform: [{translateY}]}]}>
      {text}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
  },
});
