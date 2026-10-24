import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  DimensionValue,
  GestureResponderEvent,
  Image,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {asstowebrnsignmalvsnrasbhets} from '../assets';
import {LOADER_DUtowebrnsignmalvsnrasbhRATION_MS} from '../constants/conftowebrnsignmalvsnrasbhig';
import {thetowebrnsignmalvsnrasbhme} from '../constants/thetowebrnsignmalvsnrasbhme';
import {
  LoaderRetowebrnsignmalvsnrasbhlayShard,
  RelaytowebrnsignmalvsnrasbhBurst,
  makeReltowebrnsignmalvsnrasbhayBurst,
} from '../components/LoaderRelayShard';
import ProgretowebrnsignmalvsnrasbhssBar from '../components/ProgretowebrnsignmalvsnrasbhssBar';
import ScreentowebrnsignmalvsnrasbhShell from '../components/ScreentowebrnsignmalvsnrasbhShell';
// autosetup-split-begin
import { towebrnsignmalvsnrasbhGameMixSeed, towebrnsignmalvsnrasbhGameFoldRange, towebrnsignmalvsnrasbhGameClampSpan } from './LtowebrnsignmalvsnrasbhoaderScreenPart01';
// autosetup-split-end

type Prtowebrnsignmalvsnrasbhops = {
  onDone?: () => void;
  onDonetowebrnsignmalvsnrasbh?: () => void;
  doneOnFirstCycle?: boolean;
  doneOnFirstCyctowebrnsignmalvsnrasbhle?: boolean;
};

const BAtowebrnsignmalvsnrasbhR_W = 212;
const SCANtowebrnsignmalvsnrasbh_ROWS: DimensionValue[] = ['22%', '54%', '79%'];
const BAR_towebrnsignmalvsnrasbhVERBS = ['LOADING', 'RELAYING', 'CHARGING'] as const;
const MAX_BtowebrnsignmalvsnrasbhURSTS = 4;

/**
 * Idle play on the relay mark and empty field. The uplink timer is independent
 * of taps, holds, and shards — the host unmounts this screen when it fires.
 */
export default function LtowebrnsignmalvsnrasbhoaderScreen({
  onDone: onDtowebrnsignmalvsnrasbhone,
  onDonetowebrnsignmalvsnrasbh: onHosttowebrnsignmalvsnrasbhDone,
  doneOnFirstCycle: doneOntowebrnsignmalvsnrasbhFirst,
  doneOnFirstCyctowebrnsignmalvsnrasbhle: doneHosttowebrnsignmalvsnrasbhFirst,
}: Prtowebrnsignmalvsnrasbhops) {
  const matowebrnsignmalvsnrasbhrk = useRef(new Animated.Value(0.82)).current;
  const chatowebrnsignmalvsnrasbhrge = useRef(new Animated.Value(1)).current;
  const titowebrnsignmalvsnrasbhlt = useRef(new Animated.Value(0)).current;
  const gltowebrnsignmalvsnrasbhow = useRef(new Animated.Value(0)).current;
  const ritowebrnsignmalvsnrasbhng = useRef(new Animated.Value(0.9)).current;
  const bortowebrnsignmalvsnrasbhder = useRef(new Animated.Value(0)).current;
  const toutowebrnsignmalvsnrasbhched = useRef(false);
  const prestowebrnsignmalvsnrasbhsedAt = useRef(0);
  const shtowebrnsignmalvsnrasbhot = useRef(0);
  const burtowebrnsignmalvsnrasbhstId = useRef(1);
  const fitowebrnsignmalvsnrasbheld = useRef({w: 360, h: 640});
  const [phtowebrnsignmalvsnrasbhase, setPtowebrnsignmalvsnrasbhhase] = useState<(typeof BAR_towebrnsignmalvsnrasbhVERBS)[number]>('LOADING');
  const [burtowebrnsignmalvsnrasbhsts, setBtowebrnsignmalvsnrasbhursts] = useState<RelaytowebrnsignmalvsnrasbhBurst[]>([]);

  const playtowebrnsignmalvsnrasbhGlow = useCallback(() => {
    gltowebrnsignmalvsnrasbhow.stopAnimation();
    gltowebrnsignmalvsnrasbhow.setValue(0);
    Animated.sequence([
      Animated.timing(gltowebrnsignmalvsnrasbhow, {toValue: 1, duration: 140, useNativeDriver: true}),
      Animated.timing(gltowebrnsignmalvsnrasbhow, {toValue: 0, duration: 320, useNativeDriver: true}),
    ]).start();
  }, [gltowebrnsignmalvsnrasbhow]);

  const playtowebrnsignmalvsnrasbhRing = useCallback(() => {
    gltowebrnsignmalvsnrasbhow.stopAnimation();
    ritowebrnsignmalvsnrasbhng.stopAnimation();
    ritowebrnsignmalvsnrasbhng.setValue(0.9);
    gltowebrnsignmalvsnrasbhow.setValue(0.85);
    Animated.parallel([
      Animated.sequence([
        Animated.timing(ritowebrnsignmalvsnrasbhng, {
          toValue: 1.15,
          duration: 180,
          useNativeDriver: true,
        }),
        Animated.timing(ritowebrnsignmalvsnrasbhng, {
          toValue: 1,
          duration: 240,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(gltowebrnsignmalvsnrasbhow, {toValue: 0, duration: 420, useNativeDriver: true}),
    ]).start();
  }, [gltowebrnsignmalvsnrasbhow, ritowebrnsignmalvsnrasbhng]);

  const playBtowebrnsignmalvsnrasbhorder = useCallback(() => {
    bortowebrnsignmalvsnrasbhder.stopAnimation();
    bortowebrnsignmalvsnrasbhder.setValue(0);
    Animated.sequence([
      Animated.timing(bortowebrnsignmalvsnrasbhder, {toValue: 1, duration: 80, useNativeDriver: true}),
      Animated.timing(bortowebrnsignmalvsnrasbhder, {
        toValue: 0.12,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(bortowebrnsignmalvsnrasbhder, {toValue: 1, duration: 80, useNativeDriver: true}),
      Animated.timing(bortowebrnsignmalvsnrasbhder, {toValue: 0, duration: 200, useNativeDriver: true}),
    ]).start();
  }, [bortowebrnsignmalvsnrasbhder]);

  const playtowebrnsignmalvsnrasbhTick = useCallback(() => {
    const pitowebrnsignmalvsnrasbhck = shtowebrnsignmalvsnrasbhot.current % 3;
    shtowebrnsignmalvsnrasbhot.current += 1;
    if (pitowebrnsignmalvsnrasbhck === 0) {
      playtowebrnsignmalvsnrasbhGlow();
    } else if (pitowebrnsignmalvsnrasbhck === 1) {
      playtowebrnsignmalvsnrasbhRing();
    } else {
      playBtowebrnsignmalvsnrasbhorder();
    }
  }, [playBtowebrnsignmalvsnrasbhorder, playtowebrnsignmalvsnrasbhGlow, playtowebrnsignmalvsnrasbhRing]);

  const releastowebrnsignmalvsnrasbheCharge = useCallback(() => {
    chatowebrnsignmalvsnrasbhrge.stopAnimation();
    Animated.spring(chatowebrnsignmalvsnrasbhrge, {
      toValue: 1,
      friction: 6,
      tension: 80,
      useNativeDriver: true,
    }).start();
    Animated.spring(titowebrnsignmalvsnrasbhlt, {
      toValue: 0,
      friction: 7,
      tension: 60,
      useNativeDriver: true,
    }).start();
  }, [chatowebrnsignmalvsnrasbhrge, titowebrnsignmalvsnrasbhlt]);

  const handtowebrnsignmalvsnrasbhlers = useRef({
    grant: () => {},
    move: (_towebrnsignmalvsnrasbhg: {dx: number; dy: number}) => {},
    release: (_towebrnsignmalvsnrasbhg: {dx: number; dy: number}) => {},
    nudge: () => {},
  });
  handtowebrnsignmalvsnrasbhlers.current.nudge = playtowebrnsignmalvsnrasbhRing;
  handtowebrnsignmalvsnrasbhlers.current.grant = () => {
    toutowebrnsignmalvsnrasbhched.current = true;
    prestowebrnsignmalvsnrasbhsedAt.current = Date.now();
    gltowebrnsignmalvsnrasbhow.stopAnimation();
    Animated.timing(chatowebrnsignmalvsnrasbhrge, {
      toValue: 1.12,
      duration: 480,
      useNativeDriver: true,
    }).start();
    Animated.timing(gltowebrnsignmalvsnrasbhow, {
      toValue: 0.9,
      duration: 480,
      useNativeDriver: true,
    }).start();
  };
  handtowebrnsignmalvsnrasbhlers.current.move = gtowebrnsignmalvsnrasbh => {
    if (Math.abs(gtowebrnsignmalvsnrasbh.dx) < 8 && Math.abs(gtowebrnsignmalvsnrasbh.dy) < 8) {
      return;
    }
    titowebrnsignmalvsnrasbhlt.setValue(Math.max(-28, Math.min(28, gtowebrnsignmalvsnrasbh.dx)));
  };
  handtowebrnsignmalvsnrasbhlers.current.release = gtowebrnsignmalvsnrasbh => {
    const motowebrnsignmalvsnrasbhved = Math.abs(gtowebrnsignmalvsnrasbh.dx) > 8 || Math.abs(gtowebrnsignmalvsnrasbh.dy) > 8;
    const hetowebrnsignmalvsnrasbhld = Date.now() - prestowebrnsignmalvsnrasbhsedAt.current > 260;
    releastowebrnsignmalvsnrasbheCharge();
    if (motowebrnsignmalvsnrasbhved) {
      gltowebrnsignmalvsnrasbhow.stopAnimation();
      Animated.timing(gltowebrnsignmalvsnrasbhow, {
        toValue: 0,
        duration: 180,
        useNativeDriver: true,
      }).start();
      return;
    }
    if (hetowebrnsignmalvsnrasbhld) {
      playtowebrnsignmalvsnrasbhRing();
      return;
    }
    playtowebrnsignmalvsnrasbhTick();
  };

  const ptowebrnsignmalvsnrasbhan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => handtowebrnsignmalvsnrasbhlers.current.grant(),
      onPanResponderMove: (_towebrnsignmalvsnrasbh, gtowebrnsignmalvsnrasbh) => handtowebrnsignmalvsnrasbhlers.current.move(gtowebrnsignmalvsnrasbh),
      onPanResponderRelease: (_towebrnsignmalvsnrasbh, gtowebrnsignmalvsnrasbh) => handtowebrnsignmalvsnrasbhlers.current.release(gtowebrnsignmalvsnrasbh),
      onPanResponderTerminate: (_towebrnsignmalvsnrasbh, gtowebrnsignmalvsnrasbh) => handtowebrnsignmalvsnrasbhlers.current.release(gtowebrnsignmalvsnrasbh),
    }),
  ).current;

  useEffect(() => {
    const entowebrnsignmalvsnrasbhter = Animated.spring(matowebrnsignmalvsnrasbhrk, {
      toValue: 1,
      tension: 42,
      friction: 7,
      useNativeDriver: true,
    });
    entowebrnsignmalvsnrasbhter.start();
    const detowebrnsignmalvsnrasbhlay = 2000 + Math.floor(Math.random() * 2001);
    const idtowebrnsignmalvsnrasbhle = setTimeout(() => {
      if (!toutowebrnsignmalvsnrasbhched.current) {
        handtowebrnsignmalvsnrasbhlers.current.nudge();
      }
    }, detowebrnsignmalvsnrasbhlay);
    return () => {
      entowebrnsignmalvsnrasbhter.stop();
      clearTimeout(idtowebrnsignmalvsnrasbhle);
      matowebrnsignmalvsnrasbhrk.stopAnimation();
      chatowebrnsignmalvsnrasbhrge.stopAnimation();
      gltowebrnsignmalvsnrasbhow.stopAnimation();
      ritowebrnsignmalvsnrasbhng.stopAnimation();
      bortowebrnsignmalvsnrasbhder.stopAnimation();
      titowebrnsignmalvsnrasbhlt.stopAnimation();
    };
  }, [bortowebrnsignmalvsnrasbhder, chatowebrnsignmalvsnrasbhrge, gltowebrnsignmalvsnrasbhow, matowebrnsignmalvsnrasbhrk, ritowebrnsignmalvsnrasbhng, titowebrnsignmalvsnrasbhlt]);

  const vetowebrnsignmalvsnrasbhrb = useRef(0);
  const firstFilledtowebrnsignmalvsnrasbh = useRef(false);
  const earlytowebrnsignmalvsnrasbh =
    doneOntowebrnsignmalvsnrasbhFirst === true ||
    doneHosttowebrnsignmalvsnrasbhFirst === true;
  const onBartowebrnsignmalvsnrasbhCycle = useCallback(() => {
    setPtowebrnsignmalvsnrasbhhase(BAR_towebrnsignmalvsnrasbhVERBS[vetowebrnsignmalvsnrasbhrb.current % BAR_towebrnsignmalvsnrasbhVERBS.length]);
    vetowebrnsignmalvsnrasbhrb.current += 1;
  }, []);
  const onFirstFilltowebrnsignmalvsnrasbh = useCallback(() => {
    if (!earlytowebrnsignmalvsnrasbh || firstFilledtowebrnsignmalvsnrasbh.current) {
      return;
    }
    firstFilledtowebrnsignmalvsnrasbh.current = true;
    const notetowebrnsignmalvsnrasbhify =
      onHosttowebrnsignmalvsnrasbhDone ?? onDtowebrnsignmalvsnrasbhone;
    notetowebrnsignmalvsnrasbhify?.();
  }, [
    earlytowebrnsignmalvsnrasbh,
    onDtowebrnsignmalvsnrasbhone,
    onHosttowebrnsignmalvsnrasbhDone,
  ]);

  useEffect(() => {
    if (earlytowebrnsignmalvsnrasbh || !onDtowebrnsignmalvsnrasbhone) {
      return;
    }
    const letowebrnsignmalvsnrasbhave = setTimeout(
      onDtowebrnsignmalvsnrasbhone,
      LOADER_DUtowebrnsignmalvsnrasbhRATION_MS,
    );
    return () => clearTimeout(letowebrnsignmalvsnrasbhave);
  }, [earlytowebrnsignmalvsnrasbh, onDtowebrnsignmalvsnrasbhone]);

  const droptowebrnsignmalvsnrasbhBurst = useCallback((itowebrnsignmalvsnrasbhd: number) => {
    setBtowebrnsignmalvsnrasbhursts(prtowebrnsignmalvsnrasbhev => prtowebrnsignmalvsnrasbhev.filter(butowebrnsignmalvsnrasbhrst => butowebrnsignmalvsnrasbhrst.id !== itowebrnsignmalvsnrasbhd));
  }, []);

  const onFtowebrnsignmalvsnrasbhield = (evtowebrnsignmalvsnrasbhent: GestureResponderEvent) => {
    const {locationX: locatowebrnsignmalvsnrasbhtionX, locationY: locatowebrnsignmalvsnrasbhtionY} = evtowebrnsignmalvsnrasbhent.nativeEvent;
    const itowebrnsignmalvsnrasbhd = burtowebrnsignmalvsnrasbhstId.current++;
    const butowebrnsignmalvsnrasbhrst = makeReltowebrnsignmalvsnrasbhayBurst(
      itowebrnsignmalvsnrasbhd,
      locatowebrnsignmalvsnrasbhtionX,
      locatowebrnsignmalvsnrasbhtionY,
      fitowebrnsignmalvsnrasbheld.current.w,
      fitowebrnsignmalvsnrasbheld.current.h,
    );
    setBtowebrnsignmalvsnrasbhursts(prtowebrnsignmalvsnrasbhev => {
      const rotowebrnsignmalvsnrasbhom = prtowebrnsignmalvsnrasbhev.length >= MAX_BtowebrnsignmalvsnrasbhURSTS ? prtowebrnsignmalvsnrasbhev.slice(prtowebrnsignmalvsnrasbhev.length - (MAX_BtowebrnsignmalvsnrasbhURSTS - 1)) : prtowebrnsignmalvsnrasbhev;
      return [...rotowebrnsignmalvsnrasbhom, butowebrnsignmalvsnrasbhrst];
    });
  };

  const shtowebrnsignmalvsnrasbhear = titowebrnsignmalvsnrasbhlt.interpolate({
    inputRange: [-28, 28],
    outputRange: ['-8deg', '8deg'],
    extrapolate: 'clamp',
  });

  const detowebrnsignmalvsnrasbhcor = (
    <View style={StyleSheet.absoluteFill}>
      {SCANtowebrnsignmalvsnrasbh_ROWS.map(rtowebrnsignmalvsnrasbhow => (
        <View key={String(rtowebrnsignmalvsnrasbhow)} style={[stytowebrnsignmalvsnrasbhles.sctowebrnsignmalvsnrasbhan, {top: rtowebrnsignmalvsnrasbhow}]} />
      ))}
      <View style={[stytowebrnsignmalvsnrasbhles.bratowebrnsignmalvsnrasbhcket, stytowebrnsignmalvsnrasbhles.bractowebrnsignmalvsnrasbhketTl]} />
      <View style={[stytowebrnsignmalvsnrasbhles.bratowebrnsignmalvsnrasbhcket, stytowebrnsignmalvsnrasbhles.bractowebrnsignmalvsnrasbhketBr]} />
    </View>
  );

  return (
    <ScreentowebrnsignmalvsnrasbhShell
      source={asstowebrnsignmalvsnrasbhets.bgLoader}
      overlay={thetowebrnsignmalvsnrasbhme.gradients.loaderOverlay}
      decor={detowebrnsignmalvsnrasbhcor}>
      <View
        style={stytowebrnsignmalvsnrasbhles.sttowebrnsignmalvsnrasbhage}
        onLayout={evtowebrnsignmalvsnrasbhent => {
          fitowebrnsignmalvsnrasbheld.current = {
            w: evtowebrnsignmalvsnrasbhent.nativeEvent.layout.width,
            h: evtowebrnsignmalvsnrasbhent.nativeEvent.layout.height,
          };
        }}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onFtowebrnsignmalvsnrasbhield} />
        <View style={stytowebrnsignmalvsnrasbhles.botowebrnsignmalvsnrasbhdy} pointerEvents="box-none">
          <View style={stytowebrnsignmalvsnrasbhles.martowebrnsignmalvsnrasbhkHit} {...ptowebrnsignmalvsnrasbhan.panHandlers}>
            <Animated.View
              pointerEvents="none"
              style={[
                stytowebrnsignmalvsnrasbhles.hatowebrnsignmalvsnrasbhlo,
                {opacity: gltowebrnsignmalvsnrasbhow, transform: [{scale: ritowebrnsignmalvsnrasbhng}]},
              ]}
            />
            <Animated.View
              style={[
                stytowebrnsignmalvsnrasbhles.marktowebrnsignmalvsnrasbhFrame,
                {
                  transform: [
                    {scale: Animated.multiply(matowebrnsignmalvsnrasbhrk, chatowebrnsignmalvsnrasbhrge)},
                    {rotate: shtowebrnsignmalvsnrasbhear},
                  ],
                },
              ]}>
              <Animated.View
                pointerEvents="none"
                style={[stytowebrnsignmalvsnrasbhles.glowtowebrnsignmalvsnrasbhWash, {opacity: gltowebrnsignmalvsnrasbhow}]}
              />
              <Image source={asstowebrnsignmalvsnrasbhets.spriteRelayCore} style={stytowebrnsignmalvsnrasbhles.matowebrnsignmalvsnrasbhrk} />
            </Animated.View>
            <Animated.View
              pointerEvents="none"
              style={[stytowebrnsignmalvsnrasbhles.bordetowebrnsignmalvsnrasbhrBlink, {opacity: bortowebrnsignmalvsnrasbhder}]}
            />
          </View>

          <View pointerEvents="none" style={stytowebrnsignmalvsnrasbhles.cotowebrnsignmalvsnrasbhpy}>
            <Text style={stytowebrnsignmalvsnrasbhles.brantowebrnsignmalvsnrasbhdTop}>TOWER SIGNAL</Text>
            <Text style={stytowebrnsignmalvsnrasbhles.brandtowebrnsignmalvsnrasbhBottom}>RUSH</Text>
            <Text style={stytowebrnsignmalvsnrasbhles.ttowebrnsignmalvsnrasbhag}>RELAY UPLINK INITIALISING</Text>
            <Text style={stytowebrnsignmalvsnrasbhles.hitowebrnsignmalvsnrasbhnt}>FIDGET AS THE UPLINK LOADS</Text>
          </View>

          <View
            style={stytowebrnsignmalvsnrasbhles.bartowebrnsignmalvsnrasbhWrap}
            onStartShouldSetResponder={() => true}>
            <ProgretowebrnsignmalvsnrasbhssBar
              trackWidth={BAtowebrnsignmalvsnrasbhR_W}
              onCycle={onBartowebrnsignmalvsnrasbhCycle}
              onFillEnd={onFirstFilltowebrnsignmalvsnrasbh}
            />
          </View>
          <Text style={stytowebrnsignmalvsnrasbhles.ptowebrnsignmalvsnrasbhct} pointerEvents="none">
            {phtowebrnsignmalvsnrasbhase}
          </Text>
        </View>
        <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
          {burtowebrnsignmalvsnrasbhsts.map(butowebrnsignmalvsnrasbhrst => (
            <LoaderRetowebrnsignmalvsnrasbhlayShard key={butowebrnsignmalvsnrasbhrst.id} burst={butowebrnsignmalvsnrasbhrst} onDone={droptowebrnsignmalvsnrasbhBurst} />
          ))}
        </View>
      </View>
    </ScreentowebrnsignmalvsnrasbhShell>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  sttowebrnsignmalvsnrasbhage: {flex: 1},
  botowebrnsignmalvsnrasbhdy: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  cotowebrnsignmalvsnrasbhpy: {alignItems: 'center'},
  martowebrnsignmalvsnrasbhkHit: {
    width: 156,
    height: 156,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hatowebrnsignmalvsnrasbhlo: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: thetowebrnsignmalvsnrasbhme.colors.cyanLight,
  },
  marktowebrnsignmalvsnrasbhFrame: {
    width: 132,
    height: 132,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(6,182,212,0.55)',
    borderRadius: 6,
    backgroundColor: 'rgba(10,16,28,0.65)',
    shadowColor: thetowebrnsignmalvsnrasbhme.colors.cyan,
    shadowOpacity: 0.5,
    shadowRadius: 22,
    shadowOffset: {width: 0, height: 0},
    elevation: 10,
  },
  glowtowebrnsignmalvsnrasbhWash: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 6,
    backgroundColor: 'rgba(34,211,238,0.32)',
  },
  bordetowebrnsignmalvsnrasbhrBlink: {
    position: 'absolute',
    width: 132,
    height: 132,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: thetowebrnsignmalvsnrasbhme.colors.violet,
  },
  matowebrnsignmalvsnrasbhrk: {width: 104, height: 104, resizeMode: 'contain'},
  brantowebrnsignmalvsnrasbhdTop: {
    marginTop: 22,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 6,
    color: thetowebrnsignmalvsnrasbhme.colors.textPrimary,
    textShadowColor: 'rgba(6,182,212,0.65)',
    textShadowRadius: 16,
    textShadowOffset: {width: 0, height: 0},
  },
  brandtowebrnsignmalvsnrasbhBottom: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 12,
    color: thetowebrnsignmalvsnrasbhme.colors.cyanLight,
    textShadowColor: 'rgba(139,92,246,0.55)',
    textShadowRadius: 18,
    textShadowOffset: {width: 0, height: 0},
  },
  ttowebrnsignmalvsnrasbhag: {
    marginTop: 14,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    color: thetowebrnsignmalvsnrasbhme.colors.cyan,
  },
  hitowebrnsignmalvsnrasbhnt: {
    marginTop: 16,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.2,
    color: thetowebrnsignmalvsnrasbhme.colors.textMuted,
  },
  bartowebrnsignmalvsnrasbhWrap: {marginTop: 22},
  ptowebrnsignmalvsnrasbhct: {
    marginTop: 12,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
    color: thetowebrnsignmalvsnrasbhme.colors.textMuted,
  },
  sctowebrnsignmalvsnrasbhan: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(6,182,212,0.22)',
  },
  bratowebrnsignmalvsnrasbhcket: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderColor: 'rgba(249,115,22,0.35)',
  },
  bractowebrnsignmalvsnrasbhketTl: {
    top: 64,
    left: 24,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  bractowebrnsignmalvsnrasbhketBr: {
    bottom: 64,
    right: 24,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
});

/* autosetup-game-stamp:v1 */
void towebrnsignmalvsnrasbhGameMixSeed(3, 7);
void towebrnsignmalvsnrasbhGameFoldRange([1, 2, 3]);
void towebrnsignmalvsnrasbhGameClampSpan(5, 0, 10);
