/**
 * Module dependencies.
 */

import { Svg } from 'src/components/core/svg';
import React from 'react';
import hexagonSvg from 'src/assets/svgs/hexagon.svg';
import logoSvg from 'src/assets/svgs/logo.svg';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  className?: string;
};

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

/**
 * `Hexagon` styled component.
 */

const Hexagon = styled(Svg).attrs({
  icon: hexagonSvg,
  size: '336px'
})`
  filter: drop-shadow(1px 0px 16px rgba(0, 0, 0, 0.15));
`;

/**
 * `Logo` styled component.
 */

const Logo = styled(Svg).attrs({
  icon: logoSvg,
  size: '150px'
})`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

/**
 * Export `HexagonShape` component.
 */

export function HexagonShape(props: Props) {
  return (
    <Wrapper {...props}>
      <Hexagon />
      <Logo />
    </Wrapper>
  );
}
