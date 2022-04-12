/**
 * Module dependencies.
 */

import { ButtonHTMLAttributes } from 'react';
import { Svg } from 'src/components/core/svg';
import buttonSvg from 'src/assets/svgs/button.svg';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.button`
  background: none;
  border: none;
  color: var(--color-white);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 18px;
  min-height: 3rem;
  padding-left: 1rem;
  position: relative;
  transition: color var(--transition-fast);

  :focus,
  :focus-within,
  :hover {
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
  }
`;

/**
 * `StyledSvg` styled component.
 */

const StyledSvg = styled(Svg)`
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

/**
 * Export `Button` component.
 */

export function Button(props: Props) {
  const { children, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <StyledSvg icon={buttonSvg} size={'42px'} />

      {children}
    </Wrapper>
  );
}
