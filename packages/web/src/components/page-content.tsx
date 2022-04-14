/**
 * Module dependencies.
 */

import { media } from 'src/styles/breakpoints';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  children: JSX.Element;
};

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.div`
  position: relative;
`;

/**
 * `Content` styled component.
 */

const Content = styled.div`
  margin: 0 auto;
  position: relative;

  ${media.min.ms`
    max-width: 88%;
  `}
`;

/**
 * `ImageWrapper` styled component.
 */

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;

  &::after {
    background-color: var(--color-blue600);
    content: '';
    inset: 0;
    mix-blend-mode: multiply;
    position: absolute;
  }
`;

/**
 * Export `PageContent` component.
 */

export function PageContent({ children }: Props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          aria-hidden
          layout={'fill'}
          objectFit={'cover'}
          quality={100}
          src={'/images/shapes.jpg'}
        />
      </ImageWrapper>

      <Content>{children}</Content>
    </Wrapper>
  );
}
