/**
 * Module dependencies.
 */

import { Container } from 'src/components/core/container';
import { Modal } from 'src/components/core/modal';
import { ModalTitle } from './styles';
import { Svg } from 'src/components/core/svg';
import { Text } from 'src/components/core/text';
import { colors } from 'src/styles/colors';
import { toast } from 'react-toastify';
import { useReferralUrl } from 'src/hooks/use-referral-url';
import React, { useMemo } from 'react';
import linkSvg from 'src/assets/svgs/link-hexagon.svg';
import styled from 'styled-components';
import twitterSvg from 'src/assets/svgs/twitter.svg';

/**
 * `Props` type.
 */

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

/**
 * `Title` styled component.
 */

const Title = styled(ModalTitle)`
  margin-bottom: 2rem;
`;

/**
 * `Content` styled component.
 */

const Content = styled.div`
  max-width: 325px;
  padding-top: 3rem;
`;

/**
 * `SocialActions` styled component.
 */

const SocialActions = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-bottom: 4rem;
  padding: 2rem 0 0;
  width: 100%;
`;

/**
 * `SocialAction` styled component.
 */

const SocialAction = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  justify-content: center;
  transition: color var(--transition-default);

  &:hover,
  &:focus {
    color: ${colors.blue200};
  }
`;

/**
 * Export `ShareReferralModal` component.
 */

export function ShareReferralModal(props: Props) {
  const { isOpen, onRequestClose } = props;
  const referralUrl = useReferralUrl();
  const social = useMemo(
    () => [
      {
        icon: linkSvg,
        label: 'Copy link',
        onClick: () => {
          navigator.clipboard.writeText(referralUrl).then(() => {
            toast.info('Referral URL copied to clipboard.');
          });
        }
      },
      {
        icon: twitterSvg,
        label: 'Tweet',
        onClick: () => {
          window.open(
            `https://twitter.com/intent/tweet?url=${encodeURI(referralUrl)}`,
            'TwitterShare',
            'width=600,height=450'
          );
        }
      }
    ],
    [referralUrl]
  );

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Title>{'Spread the word & earn CTND rewards'}</Title>

      <Container centered>
        <Text>
          {
            'Share your unique link and earn 150 CTND for each friend who contributes to the token sale.'
          }
        </Text>

        <Content>
          <Text as={'p'} variant={'label'}>
            {'My referral link'}
          </Text>

          <Text as={'p'} style={{ wordBreak: 'break-word' }}>
            {referralUrl}
          </Text>

          <SocialActions>
            {social.map(({ icon, label, onClick }) => (
              <li key={label}>
                <SocialAction onClick={onClick} type={'button'}>
                  <Svg icon={icon} size={'2.5rem'} />
                  <Text>{label}</Text>
                </SocialAction>
              </li>
            ))}
          </SocialActions>
        </Content>

        <Text>
          {
            'This link will keep available in the settings until the token sale ends. The rewards will be distributed after the sale has completed.'
          }
        </Text>
      </Container>
    </Modal>
  );
}
