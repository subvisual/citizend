/**
 * Module dependencies.
 */

import styled, { keyframes } from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  size?: number;
};

/**
 * `spin` animation.
 */

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(-360deg)
  }
`;

/**
 * `getBoxShadow` util.
 */

function getBoxShadow({ size }: Props) {
  const large = size * 2;
  const small = size * 1.5;

  return `
    height: ${size}rem;
    width: ${size}rem;

    box-shadow: 0 -${large}em 0 rgba(255, 255, 255, 1),
    ${small}em -${small}em rgba(255, 255, 255, 0.875),
    ${large}em 0 rgba(255, 255, 255, 0.75),
    ${small}em ${small}em rgba(255, 255, 255, 0.625),
    0 ${large}em rgba(255, 255, 255, 0.5),
    -${small}em ${small}em rgba(255, 255, 255, 0.375),
    -${large}em 0 rgba(255, 255, 255, 0.25),
    -${small}em -${small}em rgba(255, 255, 255, 0.125);
  `;
}

/**
 * `Spinner` component.
 */

const Spinner = styled.div<Props>`
  ${getBoxShadow}

  animation: ${spin} 1.8s linear infinite;
  border-radius: 50%; ;
`;

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.div<Props>`
  ${({ size }) => `
    align-items: center;
    display: inline-flex;
    height: ${size * 5}rem;
    justify-content: center;
    width: ${size * 5}rem;
  `}
`;

/**
 * Export `Loader` component.
 */

export function Loader(props: Props) {
  const { size = 0.5 } = props;

  return (
    <Wrapper size={size}>
      <Spinner size={size} />
    </Wrapper>
  );
}
