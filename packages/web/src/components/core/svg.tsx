/**
 * Module dependencies.
 */

import { ifProp, prop } from 'styled-tools';
import React from 'react';
import styled, { css } from 'styled-components';

/**
 * Export `SvgProps` interface.
 */

export interface SvgProps {
  className?: string;
  color?: string;
  icon: string;
  size: string;
}

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.span`
  display: inline-block;
  line-height: 0;
  max-width: ${prop('size')};
  position: relative;
  width: ${prop('size')};

  ${ifProp(
    'color',
    css`
      color: ${prop('color')};
    `
  )}
`;

/**
 * Export `Svg` component.
 */

export function Svg({ icon, ...rest }: SvgProps) {
  const innerHtml = {
    __html: icon // eslint-disable-line id-match
  };

  return <Wrapper {...rest} aria-hidden dangerouslySetInnerHTML={innerHtml} />;
}
