/**
 * TOWER SIGNAL RUSH  -  screen state machine only.
 *
 * Gameplay lives in src/screens/GameScreen.tsx; this file owns navigation,
 * the persisted-looking profile values and the two hub overlays.
 */
import React, {useCallback, useEffect, useState} from 'react';
import {BackHandler, StatusBar, StyleSheet, View} from 'react-native';

import {
  SEED_BEST_SCORE,
  SEED_BEST_SECTOR,
  SEED_SIGNAL,
} from './src/constants/config';
import {TRAILS, unlockedCount} from './src/game/trails';
import {RunResult} from './src/hooks/useTowerRun';
import SettingsModal, {AppSettings} from './src/components/SettingsModal';
import TrailVaultModal from './src/components/TrailVaultModal';
import GameOverScreen from './src/screens/GameOverScreen';
import GameScreen from './src/screens/GameScreen';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';

type Screen = 'loader' | 'menu' | 'game' | 'gameover';

const DEFAULT_SETTINGS: AppSettings = {
  sound: true,
  haptics: true,
  reducedMotion: false,
};

function newlyUnlocked(before: number, after: number): string | null {
  let name: string | null = null;
  for (const trail of TRAILS) {
    if (trail.threshold > before && trail.threshold <= after) {
      name = trail.name;
    }
  }
  return name;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('loader');
  const [runId, setRunId] = useState(0);

  const [bestScore, setBestScore] = useState(SEED_BEST_SCORE);
  const [bestSector, setBestSector] = useState(SEED_BEST_SECTOR);
  const [signal, setSignal] = useState(SEED_SIGNAL);
  const [equippedTrail, setEquippedTrail] = useState('cyan');
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);

  const [result, setResult] = useState<RunResult | null>(null);
  const [newRecord, setNewRecord] = useState(false);
  const [unlockedTrail, setUnlockedTrail] = useState<string | null>(null);

  const [trailsOpen, setTrailsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const goMenu = useCallback(() => {
    setScreen('menu');
  }, []);

  const startRun = useCallback(() => {
    setRunId(id => id + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback(
    (run: RunResult) => {
      const record = run.score > bestScore;
      const nextBest = record ? run.score : bestScore;
      setUnlockedTrail(newlyUnlocked(bestScore, nextBest));
      setNewRecord(record);
      if (record) {
        setBestScore(run.score);
      }
      if (run.sector > bestSector) {
        setBestSector(run.sector);
      }
      setSignal(value => value + run.score);
      setResult(run);
      setScreen('gameover');
    },
    [bestScore, bestSector],
  );

  const resetRecords = useCallback(() => {
    setBestScore(0);
    setBestSector(1);
    setSignal(0);
    setEquippedTrail('cyan');
  }, []);

  /** Never let a back press drop the player out to the launcher. */
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (settingsOpen) {
        setSettingsOpen(false);
        return true;
      }
      if (trailsOpen) {
        setTrailsOpen(false);
        return true;
      }
      if (screen === 'game' || screen === 'gameover') {
        setScreen('menu');
        return true;
      }
      return true;
    });
    return () => sub.remove();
  }, [screen, settingsOpen, trailsOpen]);

  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {screen === 'loader' ? <LoaderScreen onDone={goMenu} /> : null}

      {screen === 'menu' ? (
        <MenuScreen
          bestScore={bestScore}
          bestSector={bestSector}
          signal={signal}
          trailsUnlocked={unlockedCount(bestScore)}
          onLaunch={startRun}
          onOpenTrails={() => setTrailsOpen(true)}
          onOpenSettings={() => setSettingsOpen(true)}
        />
      ) : null}

      {screen === 'game' ? (
        <GameScreen
          key={runId}
          equippedTrail={equippedTrail}
          haptics={settings.haptics}
          reducedMotion={settings.reducedMotion}
          onExit={goMenu}
          onGameOver={handleGameOver}
        />
      ) : null}

      {screen === 'gameover' && result !== null ? (
        <GameOverScreen
          result={result}
          newRecord={newRecord}
          unlockedTrail={unlockedTrail}
          onAgain={startRun}
          onMenu={goMenu}
        />
      ) : null}

      <TrailVaultModal
        visible={trailsOpen}
        bestScore={bestScore}
        equipped={equippedTrail}
        onEquip={id => {
          setEquippedTrail(id);
          setTrailsOpen(false);
        }}
        onClose={() => setTrailsOpen(false)}
      />

      <SettingsModal
        visible={settingsOpen}
        settings={settings}
        onChange={setSettings}
        onReset={resetRecords}
        onClose={() => setSettingsOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#0A101C'},
});
