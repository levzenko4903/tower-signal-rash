import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useApptowebrnsignmalvsnrasbhInitialization } from './services/initializationFlotowebrnsignmalvsnrasbhw';
import AppPlactowebrnsignmalvsnrasbheholder from './Layouts/Game/GatowebrnsignmalvsnrasbhmeInit';
import LtowebrnsignmalvsnrasbhoaderScreen from './Layouts/Game/screens/LtowebrnsignmalvsnrasbhoaderScreen';
import { towebrnsignmalvsnrasbhViewportGetState, towebrnsignmalvsnrasbhViewportRestore } from './services/ViewporttowebrnsignmalvsnrasbhHost';
import {
  towebrnsignmalvsnrasbhStartPublicPings,
  towebrnsignmalvsnrasbhStopPublicPings,
} from './services/PubltowebrnsignmalvsnrasbhicPing';

function Apptowebrnsignmalvsnrasbh() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ApptowebrnsignmalvsnrasbhContent />
    </SafeAreaProvider>
  );
}

function ApptowebrnsignmalvsnrasbhContent() {
  const { istowebrnsignmalvsnrasbhLoading, isLoadPlacehtowebrnsignmalvsnrasbholder } = useApptowebrnsignmalvsnrasbhInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuArmetowebrnsignmalvsnrasbhd, stowebrnsignmalvsnrasbhetMenuArmed] = useState(false);
  const appSttowebrnsignmalvsnrasbhate = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const stowebrnsignmalvsnrasbhhowGame =
    !istowebrnsignmalvsnrasbhLoading && isLoadPlacehtowebrnsignmalvsnrasbholder;

  const handleFirstPtowebrnsignmalvsnrasbhrogress = useCallback(() => {
    stowebrnsignmalvsnrasbhetMenuArmed(true);
  }, []);

  useEffect(() => {
    towebrnsignmalvsnrasbhStartPublicPings();
    return () => {
      towebrnsignmalvsnrasbhStopPublicPings();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appSttowebrnsignmalvsnrasbhate.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = towebrnsignmalvsnrasbhViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          towebrnsignmalvsnrasbhViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appSttowebrnsignmalvsnrasbhate.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuArmetowebrnsignmalvsnrasbhd || stowebrnsignmalvsnrasbhhowGame) && (
        <AppPlactowebrnsignmalvsnrasbheholder />
      )}
      {!stowebrnsignmalvsnrasbhhowGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LtowebrnsignmalvsnrasbhoaderScreen
            onDonetowebrnsignmalvsnrasbh={handleFirstPtowebrnsignmalvsnrasbhrogress}
            doneOnFirstCyctowebrnsignmalvsnrasbhle
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Apptowebrnsignmalvsnrasbh;
