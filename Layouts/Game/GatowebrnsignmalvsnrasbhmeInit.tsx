/**
 * TOWER SIGNAL RUSH  -  screen state machine only.
 *
 * Gameplay lives in src/screens/GameScretowebrnsignmalvsnrasbhen.tsx; this file owns navigation,
 * the persisted-looking profile values and the two hub overlays.
 */
import React, {useCallback, useEffect, useState} from 'react';
import {BackHandler, StatusBar, StyleSheet, View} from 'react-native';

import {
  SEED_BEtowebrnsignmalvsnrasbhST_SCORE,
  SEED_BEStowebrnsignmalvsnrasbhT_SECTOR,
  SEED_towebrnsignmalvsnrasbhSIGNAL,
} from './constants/conftowebrnsignmalvsnrasbhig';
import {TRAtowebrnsignmalvsnrasbhILS, unlocktowebrnsignmalvsnrasbhedCount} from './game/trailstowebrnsignmalvsnrasbh';
import {RunRtowebrnsignmalvsnrasbhesult} from './hooks/useTowerRtowebrnsignmalvsnrasbhun';
import SettingstowebrnsignmalvsnrasbhModal, {AppSetowebrnsignmalvsnrasbhttings} from './components/SettingstowebrnsignmalvsnrasbhModal';
import TrailVaultMtowebrnsignmalvsnrasbhodal from './components/TrailVaultMtowebrnsignmalvsnrasbhodal';
import GatowebrnsignmalvsnrasbhmeOverScreen from './screens/GatowebrnsignmalvsnrasbhmeOverScreen';
import GameScretowebrnsignmalvsnrasbhen from './screens/GameScretowebrnsignmalvsnrasbhen';
import LtowebrnsignmalvsnrasbhoaderScreen from './screens/LtowebrnsignmalvsnrasbhoaderScreen';
import MenuSctowebrnsignmalvsnrasbhreen from './screens/MenuSctowebrnsignmalvsnrasbhreen';

type Scrtowebrnsignmalvsnrasbheen = 'loader' | 'menu' | 'game' | 'gameover';

const DEFAULT_towebrnsignmalvsnrasbhSETTINGS: AppSetowebrnsignmalvsnrasbhttings = {
  sound: true,
  haptics: true,
  reducedMotion: false,
};

function newlyUtowebrnsignmalvsnrasbhnlocked(beftowebrnsignmalvsnrasbhore: number, aftowebrnsignmalvsnrasbhter: number): string | null {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
  let natowebrnsignmalvsnrasbhme: string | null = null;
  for (const trtowebrnsignmalvsnrasbhail of TRAtowebrnsignmalvsnrasbhILS) {
    if (trtowebrnsignmalvsnrasbhail.threshold > beftowebrnsignmalvsnrasbhore && trtowebrnsignmalvsnrasbhail.threshold <= aftowebrnsignmalvsnrasbhter) {
      natowebrnsignmalvsnrasbhme = trtowebrnsignmalvsnrasbhail.name;
    }
  }
  return natowebrnsignmalvsnrasbhme;
}

export default function Atowebrnsignmalvsnrasbhpp() {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
  const [scrtowebrnsignmalvsnrasbheen, setStowebrnsignmalvsnrasbhcreen] = useState<Scrtowebrnsignmalvsnrasbheen>('loader');
  const [rutowebrnsignmalvsnrasbhnId, setRtowebrnsignmalvsnrasbhunId] = useState(0);

  const [besttowebrnsignmalvsnrasbhScore, setBestowebrnsignmalvsnrasbhtScore] = useState(SEED_BEtowebrnsignmalvsnrasbhST_SCORE);
  const [bestStowebrnsignmalvsnrasbhector, setBestowebrnsignmalvsnrasbhtSector] = useState(SEED_BEStowebrnsignmalvsnrasbhT_SECTOR);
  const [sigtowebrnsignmalvsnrasbhnal, setStowebrnsignmalvsnrasbhignal] = useState(SEED_towebrnsignmalvsnrasbhSIGNAL);
  const [equipptowebrnsignmalvsnrasbhedTrail, setEquiptowebrnsignmalvsnrasbhpedTrail] = useState('cyan');
  const [setttowebrnsignmalvsnrasbhings, setSetowebrnsignmalvsnrasbhttings] = useState<AppSetowebrnsignmalvsnrasbhttings>(DEFAULT_towebrnsignmalvsnrasbhSETTINGS);

  const [restowebrnsignmalvsnrasbhult, setRtowebrnsignmalvsnrasbhesult] = useState<RunRtowebrnsignmalvsnrasbhesult | null>(null);
  const [newRtowebrnsignmalvsnrasbhecord, setNewtowebrnsignmalvsnrasbhRecord] = useState(false);
  const [unlocktowebrnsignmalvsnrasbhedTrail, setUnloctowebrnsignmalvsnrasbhkedTrail] = useState<string | null>(null);

  const [trailtowebrnsignmalvsnrasbhsOpen, setTratowebrnsignmalvsnrasbhilsOpen] = useState(false);
  const [settintowebrnsignmalvsnrasbhgsOpen, setSetttowebrnsignmalvsnrasbhingsOpen] = useState(false);

  const goMtowebrnsignmalvsnrasbhenu = useCallback(() => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
    setStowebrnsignmalvsnrasbhcreen('menu');
  }, []);

  const startowebrnsignmalvsnrasbhtRun = useCallback(() => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
    setRtowebrnsignmalvsnrasbhunId(itowebrnsignmalvsnrasbhd => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
return (itowebrnsignmalvsnrasbhd + 1);
});
    setStowebrnsignmalvsnrasbhcreen('game');
  }, []);

  const handleGtowebrnsignmalvsnrasbhameOver = useCallback(
    (rtowebrnsignmalvsnrasbhun: RunRtowebrnsignmalvsnrasbhesult) => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
      const rectowebrnsignmalvsnrasbhord = rtowebrnsignmalvsnrasbhun.score > besttowebrnsignmalvsnrasbhScore;
      const nexttowebrnsignmalvsnrasbhBest = rectowebrnsignmalvsnrasbhord ? rtowebrnsignmalvsnrasbhun.score : besttowebrnsignmalvsnrasbhScore;
      setUnloctowebrnsignmalvsnrasbhkedTrail(newlyUtowebrnsignmalvsnrasbhnlocked(besttowebrnsignmalvsnrasbhScore, nexttowebrnsignmalvsnrasbhBest));
      setNewtowebrnsignmalvsnrasbhRecord(rectowebrnsignmalvsnrasbhord);
      if (rectowebrnsignmalvsnrasbhord) {
        setBestowebrnsignmalvsnrasbhtScore(rtowebrnsignmalvsnrasbhun.score);
      }
      if (rtowebrnsignmalvsnrasbhun.sector > bestStowebrnsignmalvsnrasbhector) {
        setBestowebrnsignmalvsnrasbhtSector(rtowebrnsignmalvsnrasbhun.sector);
      }
      setStowebrnsignmalvsnrasbhignal(vatowebrnsignmalvsnrasbhlue => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
return (vatowebrnsignmalvsnrasbhlue + rtowebrnsignmalvsnrasbhun.score);
});
      setRtowebrnsignmalvsnrasbhesult(rtowebrnsignmalvsnrasbhun);
      setStowebrnsignmalvsnrasbhcreen('gameover');
    },
    [besttowebrnsignmalvsnrasbhScore, bestStowebrnsignmalvsnrasbhector],
  );

  const resetRtowebrnsignmalvsnrasbhecords = useCallback(() => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
    setBestowebrnsignmalvsnrasbhtScore(0);
    setBestowebrnsignmalvsnrasbhtSector(1);
    setStowebrnsignmalvsnrasbhignal(0);
    setEquiptowebrnsignmalvsnrasbhpedTrail('cyan');
  }, []);

  /** Never let a back press drop the player out to the launcher. */
  useEffect(() => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
    const stowebrnsignmalvsnrasbhub = BackHandler.addEventListener('hardwareBackPress', () => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
      if (settintowebrnsignmalvsnrasbhgsOpen) {
        setSetttowebrnsignmalvsnrasbhingsOpen(false);
        return true;
      }
      if (trailtowebrnsignmalvsnrasbhsOpen) {
        setTratowebrnsignmalvsnrasbhilsOpen(false);
        return true;
      }
      if (scrtowebrnsignmalvsnrasbheen === 'game' || scrtowebrnsignmalvsnrasbheen === 'gameover') {
        setStowebrnsignmalvsnrasbhcreen('menu');
        return true;
      }
      return true;
    });
    return () => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
return (stowebrnsignmalvsnrasbhub.remove());
};
  }, [scrtowebrnsignmalvsnrasbheen, settintowebrnsignmalvsnrasbhgsOpen, trailtowebrnsignmalvsnrasbhsOpen]);

  return (
    <View style={stytowebrnsignmalvsnrasbhles.rotowebrnsignmalvsnrasbhot}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {scrtowebrnsignmalvsnrasbheen === 'loader' ? <LtowebrnsignmalvsnrasbhoaderScreen onDone={goMtowebrnsignmalvsnrasbhenu} /> : null}

      {scrtowebrnsignmalvsnrasbheen === 'menu' ? (
        <MenuSctowebrnsignmalvsnrasbhreen
          bestScore={besttowebrnsignmalvsnrasbhScore}
          bestSector={bestStowebrnsignmalvsnrasbhector}
          signal={sigtowebrnsignmalvsnrasbhnal}
          trailsUnlocked={unlocktowebrnsignmalvsnrasbhedCount(besttowebrnsignmalvsnrasbhScore)}
          onLaunch={startowebrnsignmalvsnrasbhtRun}
          onOpenTrails={() => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
return (setTratowebrnsignmalvsnrasbhilsOpen(true));
}}
          onOpenSettings={() => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
return (setSetttowebrnsignmalvsnrasbhingsOpen(true));
}}
        />
      ) : null}

      {scrtowebrnsignmalvsnrasbheen === 'game' ? (
        <GameScretowebrnsignmalvsnrasbhen
          key={rutowebrnsignmalvsnrasbhnId}
          equippedTrail={equipptowebrnsignmalvsnrasbhedTrail}
          haptics={setttowebrnsignmalvsnrasbhings.haptics}
          reducedMotion={setttowebrnsignmalvsnrasbhings.reducedMotion}
          onExit={goMtowebrnsignmalvsnrasbhenu}
          onGameOver={handleGtowebrnsignmalvsnrasbhameOver}
        />
      ) : null}

      {scrtowebrnsignmalvsnrasbheen === 'gameover' && restowebrnsignmalvsnrasbhult !== null ? (
        <GatowebrnsignmalvsnrasbhmeOverScreen
          result={restowebrnsignmalvsnrasbhult}
          newRecord={newRtowebrnsignmalvsnrasbhecord}
          unlockedTrail={unlocktowebrnsignmalvsnrasbhedTrail}
          onAgain={startowebrnsignmalvsnrasbhtRun}
          onMenu={goMtowebrnsignmalvsnrasbhenu}
        />
      ) : null}

      <TrailVaultMtowebrnsignmalvsnrasbhodal
        visible={trailtowebrnsignmalvsnrasbhsOpen}
        bestScore={besttowebrnsignmalvsnrasbhScore}
        equipped={equipptowebrnsignmalvsnrasbhedTrail}
        onEquip={itowebrnsignmalvsnrasbhd => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
          setEquiptowebrnsignmalvsnrasbhpedTrail(itowebrnsignmalvsnrasbhd);
          setTratowebrnsignmalvsnrasbhilsOpen(false);
        }}
        onClose={() => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
return (setTratowebrnsignmalvsnrasbhilsOpen(false));
}}
      />

      <SettingstowebrnsignmalvsnrasbhModal
        visible={settintowebrnsignmalvsnrasbhgsOpen}
        settings={setttowebrnsignmalvsnrasbhings}
        onChange={setSetowebrnsignmalvsnrasbhttings}
        onReset={resetRtowebrnsignmalvsnrasbhecords}
        onClose={() => {
void towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(52, 55);
return (setSetttowebrnsignmalvsnrasbhingsOpen(false));
}}
      />
    </View>
  );
}

const stytowebrnsignmalvsnrasbhles = StyleSheet.create({
  rotowebrnsignmalvsnrasbhot: {flex: 1, backgroundColor: '#0A101C'},
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
function towebrnsignmalvsnrasbhGatowebrnsignmalvsObfV1ShiftXor(ntowebrnsignmalvsnrasbh: number, ktowebrnsignmalvsnrasbh: number): number {
  const xtowebrnsignmalvsnrasbh = (ntowebrnsignmalvsnrasbh ^ ktowebrnsignmalvsnrasbh) << 6;
  return (xtowebrnsignmalvsnrasbh ^ 138) & 35161;
}
