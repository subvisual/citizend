/**
 * Module dependencies.
 */

import { colors } from 'src/styles/colors';
import { createGlobalStyle } from 'styled-components';
import { media } from './breakpoints';
import styledNormalize from 'styled-normalize';

/**
 * Get colors from palette.
 */

const CssColorsSheet = Object.entries(colors).reduce(
  (previous: string, [colorName, value]) => {
    return `${previous} --color-${colorName}: ${value};`;
  },
  ''
);

/**
 * Root variables.
 */

const rootVariables = `
  :root {
    ${CssColorsSheet}

    /* Fonts */
    --montserrat-font-family: 'Montserrat', sans-serif;
    --druke-wide-font-family: 'Druk Wide', sans-serif;

    /* Container */
    --container-padding: 2rem;

    /* Transition */
    --transition-default-animation: cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: 150ms var(--transition-default-animation);
    --transition-default: 350ms var(--transition-default-animation);

    /* Modal */
    --modal-backdrop-background-color: #5463824d;
    --modal-background-color: var(--color-blue650);

    ${media.min.ms`
      --container-padding: 3rem;
    `}
  }
`;

/**
 * Export `GlobalStyle` component.
 */

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  ${rootVariables}

  @font-face {
    font-family: 'Druk Wide';
    font-style: bold;
    font-weight: 700;
    src: url('/fonts/druk-wide-bold.otf');
  }

  @font-face {
    font-family: 'Druk Wide';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/druk-wide-medium.otf');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    background-color: var(--color-blue700);
    color: var(--color-white);
    height: 100%;
  }

  body {
    line-height: 1.5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  b,
  strong {
    font-weight: 700;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button, [role="button"] {
    appearance: none;
    cursor: pointer;
  }

  #root,
  #__next {
    isolation: isolate;
  }
`;
