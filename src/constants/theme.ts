/**
 * CYBERPUNK preset (design-system/presets.ts), accents overridden to the
 * brief's exact hexes. The `name` field stays 'cyberpunk'  -  inventing a new
 * preset name is forbidden.
 *
 * Gradient colour arrays are plain string[] on purpose: a readonly tuple
 * (`as const`) breaks LinearGradient's `colors` prop typing.
 */
export const theme = {
  name: 'cyberpunk',

  colors: {
    bgDeep: '#0A101C',
    bgBase: '#111827',
    surface: '#18212F',
    surfaceRaised: '#1E2A3C',

    cyan: '#06B6D4',
    cyanDark: '#0E7490',
    cyanLight: '#22D3EE',
    violet: '#8B5CF6',
    violetDark: '#6D28D9',
    warn: '#F97316',

    textPrimary: '#F9FAFB',
    textSecondary: '#94A3B8',
    textMuted: '#64748B',

    hairline: 'rgba(249,250,251,0.08)',
    glassFill: 'rgba(249,250,251,0.05)',
    glassBorder: 'rgba(249,250,251,0.12)',
  },

  gradients: {
    cta: ['#06B6D4', '#0E7490'] as string[],
    violet: ['#8B5CF6', '#6D28D9'] as string[],
    beam: ['#22D3EE', '#06B6D4'] as string[],
    relay: ['#06B6D4', '#0891B2'] as string[],
    relayPerfect: ['#8B5CF6', '#6D28D9'] as string[],
    relayDamaged: ['#F97316', '#C2410C'] as string[],
    bar: ['#06B6D4', '#8B5CF6'] as string[],
    loaderOverlay: [
      'rgba(5,8,15,0.93)',
      'rgba(10,16,28,0.90)',
      'rgba(17,24,39,0.95)',
    ] as string[],
    menuOverlay: [
      'rgba(17,24,39,0.70)',
      'rgba(24,33,47,0.78)',
      'rgba(10,16,28,0.90)',
    ] as string[],
    gameOverlay: [
      'rgba(10,16,28,0.80)',
      'rgba(17,24,39,0.74)',
      'rgba(10,16,28,0.90)',
    ] as string[],
    resultOverlay: [
      'rgba(5,8,15,0.90)',
      'rgba(24,33,47,0.84)',
      'rgba(10,16,28,0.94)',
    ] as string[],
  },

  typography: {
    hero: {fontSize: 54, fontWeight: '900' as const, letterSpacing: 1},
    display: {fontSize: 34, fontWeight: '900' as const, letterSpacing: 4},
    title: {fontSize: 21, fontWeight: '900' as const, letterSpacing: 2},
    body: {fontSize: 15, fontWeight: '600' as const, lineHeight: 21},
    caption: {fontSize: 10, fontWeight: '700' as const, letterSpacing: 2},
  },

  spacing: {xs: 4, sm: 8, md: 12, lg: 16, xl: 24},

  radius: {sm: 6, md: 10, lg: 14, xl: 18, pill: 999},
};

export type Theme = typeof theme;
