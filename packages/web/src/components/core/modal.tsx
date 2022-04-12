/**
 * Module dependencies.
 */

import { Svg } from 'src/components/core/svg';
import React from 'react';
import ReactModal, { Props } from 'react-modal';
import crossSvg from 'src/assets/svgs/cross.svg';
import styled, { createGlobalStyle } from 'styled-components';

/**
 * Hide content from screenreaders when open.
 */

ReactModal.setAppElement('#__next');

/**
 * Modal styles.
 */

const modalStyles = {
  content: {
    backgroundColor: 'var(--modal-background-color)',
    border: 'none',
    borderRadius: '0.25rem',
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    maxWidth: '650px',
    padding: '5rem 1.25rem',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%'
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
  background: none;
  border: none;
  color: var(--color-white);
  line-height: 0;
  position: absolute;
  right: 1.75rem;
  top: 1.75rem;
  transform: rotate(0deg);
  transition: var(--transition-default);
  transition-property: color, transform;

  :focus,
  :hover {
    color: var(--color-blue200);
    transform: rotate(190deg);
  }
`;

/**
 * `ModalGlobalStyle` component.
 */

const ModalGlobalStyle = createGlobalStyle`
  .ReactModal__Overlay {
    opacity: 0;
    text-align: center;
    transition: opacity var(--transition-default);

    &--after-open {
      opacity: 1;
    }

    &--before-close{
      opacity: 0;
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
