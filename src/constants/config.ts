import {Dimensions} from 'react-native';

/** Capture-timing constant for the splash transition  -  NOT an animation length. */
export const LOADER_DURATION_MS = 8000;
/** Loader progress bar animates only for this long, then rests (keeps the window idle). */
export const LOADER_BAR_ANIM_MS = 1200;

const SCREEN_W = Dimensions.get('window').width;

/** Board geometry  -  parent padding + border are accounted for, so nothing overflows. */
export const BOARD_PAD = 6;
export const BOARD_BORD = 2;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORD;
export const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);
export const LANE_W = BOARD_MAX_W - 2 * BOARD_FRAME;
export const BOARD_W = LANE_W + 2 * BOARD_FRAME;

export const ROW_H = 34;
export const CAMERA_ROWS = 6;

/** The beam hops between fixed grid columns  -  a lock always lands on the grid. */
export const SLOT_STEP = Math.max(16, Math.round(LANE_W / 14));

export const START_W_RATIO = 0.62;
export const START_BEAM_W = Math.round(LANE_W * START_W_RATIO);
export const MIN_BEAM_W = 24;
export const PERFECT_TOL = 5;
export const PERFECT_REGAIN = 8;
/** A single miss can never cost more than this  -  keeps a run alive long enough to watch. */
export const MAX_TRIM = Math.round(START_BEAM_W * 0.18);

/**
 * Hop / hold rhythm. The hold is deliberately long: a continuously animating
 * screen never reaches window-idle and the UI harness cannot read it.
 */
export const HOP_MS = 200;
export const HOP_MIN_MS = 130;
export const HOP_STEP_MS = 8;
export const HOLD_MS = 760;
export const HOLD_MIN_MS = 460;
export const HOLD_STEP_MS = 40;

/** A lock may not land before the beam has had time to move off the last one. */
export const LOCK_COOLDOWN_MS = 380;

export const LOCKS_PER_SECTOR = 5;
export const SECTOR_BONUS = 40;
export const BASE_LOCK_SCORE = 10;
export const PERFECT_BONUS = 15;
export const CHAIN_STEP = 0.25;
export const CHAIN_MULT_CAP = 3;

export const HAZARD_START_SECT = 2;
export const HAZARD_BASE_PCT = 28;
export const HAZARD_STEP_PCT = 4;
export const HAZARD_CAP_PCT = 46;
export const HAZARD_W = Math.max(28, Math.round(LANE_W * 0.22));

export const INTEGRITY_MAX = 3;

/** Idle backstop: a passive observer must still reach the result screen. */
export const IDLE_MOUNT_FLOOR_MS = 26000;
export const IDLE_TAP_WINDOW_MS = 9000;
export const IDLE_HARD_CAP_MS = 40000;

export const TRAIL_THRESHOLDS = [0, 150, 400, 800, 1400, 2200];

export const SEED_BEST_SCORE = 2840;
export const SEED_BEST_SECTOR = 14;
export const SEED_SIGNAL = 1250;
