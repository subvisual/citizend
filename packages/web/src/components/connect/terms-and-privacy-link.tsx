/**
 * Module dependencies.
 */

import { Link } from 'src/components/core/link';
import { Text } from 'src/components/core/text';
import React from 'react';

/**
 * Terms URL.
 */

const termsUrl = process.env.NEXT_PUBLIC_TERMS_URL;

/**
 * Privacy policy URL.
 */

const privacyPolicyUrl = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;

/**
 * Export `TermsAndPrivacyLink` component.
 */

export function TermsAndPrivacyLink() {
  return (
    <Text noMargin>
      {'By connecting my wallet, I confirm I have read and accepted the '}

      <Link href={termsUrl}>{'Terms of Service'}</Link>

      {' and '}

      <Link href={privacyPolicyUrl}>{'Privacy Policy'}</Link>
    </Text>
  );
}
