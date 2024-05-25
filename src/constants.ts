export const HEADER_HEIGHT = '--header-height: 96px;';

export const BREAKPOINTS = {
  laptopMax: 1500,
  tabletMax: 768,
  mobileMax: 375,
};

export const QUERIES = {
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax}px)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
  mobileAndDown: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
};

export const DARK_COLORS = {
  '--color-text': 'hsl(0deg, 0%, 100%)',
  '--color-background': 'hsl(210deg, 30%, 8%)',
  '--color-primary': 'hsl(230deg, 100%, 69%)',
  '--color-muted': 'hsl(210deg, 38%, 15%)',
  '--color-decorative': 'hsl(200deg, 50%, 60%)',
  '--color-success': 'hsl(160deg, 100%, 40%)',
  '--color-error': 'hsl(340deg, 95%, 60%)',
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
};
