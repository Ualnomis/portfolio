import { createGlobalStyle } from 'styled-components';
import wotfardWoff2 from '../../assets/fonts/wotfard-regular-webfont.woff2';
import wotfardEot from '../../assets/fonts/wotfard-regular-webfont.eot';
import wotfardTff from '../../assets/fonts/wotfard-regular-webfont.ttf';

const GlobalStyles = createGlobalStyle`/*
    Josh's A Modern CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */
/*
    1. Use a more-intuitive box-sizing model.
  */
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
    2. Remove default margin
  */
* {
  margin: 0;
}
/*
    Typographic tweaks!
    3. Add accessible line-height
    4. Improve text rendering
  */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'wotfardregular', 'Fallback', sans-serif;
}
/*
    5. Improve media defaults
  */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
    6. Remove built-in form typography styles
  */
input,
button,
textarea,
select {
  font: inherit;
}
/*
    7. Avoid text overflows
  */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
    8. Create a root stacking context
  */
#root,
#__next {
  isolation: isolate;
}

@font-face {
  font-family: 'wotfardregular';
  src: url(${wotfardWoff2});
  src:
    url(${wotfardEot}) format('embedded-opentype'),
    url(${wotfardWoff2}) format('woff2'),
    url(${wotfardTff}) format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}


:root[data-theme="dark"] {
  --color-text: hsl(0deg, 0%, 100%);
  --color-background: hsl(210deg, 30%, 8%);
  --color-primary: hsl(230deg, 100%, 69%);
  --color-muted: hsl(210deg, 38%, 15%);
  --color-decorative: hsl(200deg, 50%, 60%);
  --color-success: hsl(160deg, 100%, 40%);
  --color-error: hsl(340deg, 95%, 60%);
  --color-blurred-background: hsla(210deg, 30%, 8%, 0.85);
    --color-info: hsl(245deg 100% 60%);
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
`;

export default GlobalStyles;
