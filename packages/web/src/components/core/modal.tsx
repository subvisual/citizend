/**
 * Module dependencies.
 */

import { Svg } from 'src/components/core/svg';
import { media } from 'src/styles/breakpoints';
import React from 'react';
import ReactModal, { Props } from 'react-modal';
import crossSvg from 'src/assets/svgs/cross.svg';
import styled, { createGlobalStyle } from 'styled-components';

/**
 * Hide content from screenreaders when open.
 */

ReactModal.setAppElement('#__next');

/**
 * Remove modal default styles.
 */

ReactModal.defaultStyles = {};

/**
 * Modal styles.
 */

const modalStyles = {
  content: {
    backgroundColor: 'var(--modal-background-color)',
    border: 'none',
    borderRadius: '0.25rem',
    padding: '5rem 1.25rem'
  },
  overlay: {
    backdropFilter: 'blur(20px)',
    backgroundColor: 'var(--modal-backdrop-background-color)'
  }
};

/**
 * `CloseButton` styled component.
 */

const CloseButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  border-radius: 50%;
  color: var(--color-white);
  display: flex;
  height: 2rem;
  justify-content: center;
  line-height: 0;
  padding: 0;
  position: absolute;
  right: 1.75rem;
  top: 1.75rem;
  transform: rotate(0deg);
  transition: var(--transition-default);
  transition-property: color, transform;
  width: 2rem;

  :focus,
  :hover {
    transform: rotate(180deg);
  }

  :focus-visible {
    background-color: var(--color-blue400);
    color: var(--color-white);
    outline: none;
  }
`;

/**
 * `ModalGlobalStyle` component.
 */

const ModalGlobalStyle = createGlobalStyle`
  .ReactModal__Html--open,
  .ReactModal__Body--open {
    overflow: hidden;
  }

  .ReactModal__Overlay {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: fixed;
    text-align: center;
    top: 0;
    transition: opacity var(--transition-default);
    width: 100vw;
    z-index: var(--modal-z-index);

    &--after-open {
      opacity: 1;
    }

    &--before-close{
      opacity: 0;
    }
  }

  .ReactModal__Content {
    max-height: calc(100vh - 2rem);
    max-width: calc(100vw - 2rem);
    overflow-y: auto;
    position: relative;
    width: 90%;

    ${media.min.sm`
      max-width: 620px;
      width: 80%;
    `}

    &:focus-visible {
      outline: none;
    }
  }
`;

/**
 * Export `Modal` component.
 */

export function Modal(props: Props) {
  const { children, onRequestClose, ...rest } = props;

  return (
    <>
      <ModalGlobalStyle />

      <ReactModal
        {...rest}
        closeTimeoutMS={200}
        onRequestClose={onRequestClose}
        parentSelector={() => document.getElementById('modalPortal')}
        style={modalStyles}
      >
        {onRequestClose && (
          <CloseButton onClick={onRequestClose}>
            <Svg icon={crossSvg} size={'1.5rem'} />
          </CloseButton>
        )}

        {children}
      </ReactModal>
    </>
  );
}
