import {TRAIL_THRESHOLDS} from '../constants/config';

export interface Trail {
  id: string;
  name: string;
  threshold: number;
  colors: string[];
}

export const TRAILS: Trail[] = [
  {id: 'cyan', name: 'CYAN PULSE', threshold: TRAIL_THRESHOLDS[0], colors: ['#22D3EE', '#06B6D4']},
  {id: 'violet', name: 'VIOLET DRIFT', threshold: TRAIL_THRESHOLDS[1], colors: ['#A78BFA', '#6D28D9']},
  {id: 'ember', name: 'EMBER WARN', threshold: TRAIL_THRESHOLDS[2], colors: ['#FB923C', '#C2410C']},
  {id: 'frost', name: 'FROST LINE', threshold: TRAIL_THRESHOLDS[3], colors: ['#A5F3FC', '#0E7490']},
  {id: 'night', name: 'NIGHT CIRCUIT', threshold: TRAIL_THRESHOLDS[4], colors: ['#334155', '#06B6D4']},
  {id: 'prism', name: 'PRISM RELAY', threshold: TRAIL_THRESHOLDS[5], colors: ['#06B6D4', '#8B5CF6']},
];

export function unlockedCount(bestScore: number): number {
  let count = 0;
  for (const trail of TRAILS) {
    if (bestScore >= trail.threshold) {
      count++;
    }
  }
  return Math.max(1, count);
}

export function isUnlocked(trail: Trail, bestScore: number): boolean {
  return bestScore >= trail.threshold;
}

export function trailById(id: string): Trail {
  const found = TRAILS.find(t => t.id === id);
  return found ? found : TRAILS[0];
}
