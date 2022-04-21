/**
 * Module dependencies.
 */

import 'react-toastify/dist/ReactToastify.css';
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
    --container-padding: 1.25rem;

    /* Transition */
    --transition-default-animation: cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: 150ms var(--transition-default-animation);
    --transition-default: 350ms var(--transition-default-animation);

    /* Modal */
    --modal-backdrop-background-color: #5463824d;
    --modal-background-color: var(--color-blue650);

    /* Toast */
    --toastify-color-dark: var(--modal-background-color);
    --toastify-color-error: var(--color-red500);
    --toastify-color-info: var(--color-blue200);
    --toastify-font-family: var(--montserrat-font-family);
    --toastify-toast-width: clamp(320px, 40vw, 650px);

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

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    appearance: none !important;
    background: none !important;
    background-color: transparent !important;
    transition: color 9999s ease-out, background-color 9999s ease-out;
    transition-delay: 9999s;
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

  .Toastify__close-button {
    position: relative;
    right: -2px;
    top: -2px;

    & > svg {
      height: 16px;
      max-width: 16px;
      width: 16px;
    }
  }

  .Toastify__toast {
    &::after {
      content: '';
      inset: 0 auto 0 0;
      position: absolute;
      width: 0.25rem;
    }

    &-body {
      white-space: pre-line;
    }

    &-icon {
      background: var(--color-white);
      border-radius: 50%;
    }

    &--error::after {
      background: var(--toastify-color-error);
    }

    &--info::after {
      background: var(--toastify-icon-color-info);
    }

    &--success::after {
      background: var(--toastify-color-success);
    }
  }
`;
