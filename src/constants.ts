export const HEADER_HEIGHT_VALUE = 96;
export const HEADER_HEIGHT = `--header-height: ${HEADER_HEIGHT_VALUE}px;`;

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
