/**
 * Module dependencies.
 */

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
 * `Content` styled component.
 */

const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
`;

/**
 * `ImageWrapper` styled component.
 */

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;

  &::after {
    background-color: #42526c;
    content: '';
    inset: 0;
    mix-blend-mode: multiply;
    position: absolute;
  }
`;

/**
 * `PageContent` component.
 */

export function PageContent({ children }: Props) {
  return (
    <>
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
    </>
  );
}
