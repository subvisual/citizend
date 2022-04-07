/**
 * Module dependencies.
 */

import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

/**
 * Export `GlobalStyle` component.
 */

export default createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  b,
  strong {
    font-weight: 700;
  }

  svg {
    display: block;
  }
`;
