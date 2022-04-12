/**
 * Module dependencies.
 */

import { Text } from 'src/components/core/text';
import React from 'react';
import styled from 'styled-components';

/**
 * Terms URL.
 */

const termsUrl = process.env.NEXT_PUBLIC_TERMS_URL;

/**
 * Privacy policy URL.
 */

const privacyPolicyUrl = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;

/**
 * `Link` styled component.
 */

const Link = styled.a`
  font-weight: bold;
  text-decoration: underline;
  transition: color var(--transition-default);

  :focus,
  :hover {
    color: var(--color-blue200);
  }
`;

/**
 * Export `TermsAndPrivacyLink` component.
 */

export function TermsAndPrivacyLink() {
  return (
    <Text noMargin>
      {'By connecting my wallet, I confirm I have read and accepted the '}

      <Link href={termsUrl} rel={'noopener'} target={'_blank'}>
        {'Terms of Service'}
      </Link>

      {' and '}

      <Link href={privacyPolicyUrl} rel={'noopener'} target={'_blank'}>
        {'Privacy Policy'}
      </Link>
    </Text>
  );
}
