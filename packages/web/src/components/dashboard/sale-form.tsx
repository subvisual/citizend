/**
 * Module dependencies.
 */

import { Button } from 'src/components/core/button';
import { Card } from 'src/components/core/card';
import { InputField } from 'src/components/core/form/input-field';
import { Link } from 'src/components/core/link';
import { SaleConfirmingModal } from './sale-confirming-modal';
import { Text } from 'src/components/core/text';
import { currencyConfig } from 'src/core/constants';
import { formatCurrency } from 'src/core/utils/formatters';
import { ifProp } from 'styled-tools';
import { media } from 'src/styles/breakpoints';
import { useFractalKYCUrl } from 'src/hooks/use-kyc-url';
import { useSaleBuy } from 'src/hooks/use-sale';
import BigNumber from 'bignumber.js';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  disabled?: boolean;
  tokenPrice: string;
};

/**
 * Cap calculation info URL.
 */

const capCalculationInfoUrl = process.env.NEXT_PUBLIC_CAP_CALCULATION_INFO_URL;

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 37rem;
`;

/**
 * `StyledCard` styled component.
 */

const StyledCard = styled(Card)<{ blurred: boolean }>`
  ${media.min.md`
    flex-direction: row;
  `}

  ${ifProp(
    'blurred',
    `
      filter: blur(4px);
      pointer-events: none;
    `
  )}
`;

/**
 * `Info` styled component.
 */

const Info = styled(Text).attrs({
  as: 'p'
})`
  margin-bottom: 3rem;
  padding-top: 2rem;
`;

/**
 * `getFieldError`.
 */

function getFieldError(amount: string) {
  const isValid = new BigNumber(amount).isNaN();
  const isZero = new BigNumber(amount).lte(0);

  if (isValid) {
    return 'Invalid Amount';
  }

  if (isZero) {
    return 'Your contribution should be superior to 0';
  }

  return undefined;
}

/**
 * Export `SaleForm` component.
 */

export function SaleForm(props: Props) {
  const [amount, setAmount] = useState<string>('');
  const { disabled, tokenPrice } = props;
  const { isPending, run: buy } = useSaleBuy();
  const fieldError = getFieldError(amount);
  const kycUrl = useFractalKYCUrl();
  const handleOnChange = useCallback(event => {
    setAmount(event.target.value.replace(/[^0-9]/g, ''));
  }, []);

  const convertedAmount = useMemo(() => {
    return new BigNumber(amount || 0)
      .div(tokenPrice)
      .decimalPlaces(4)
      .toString();
  }, [amount, tokenPrice]);

  return (
    <Wrapper>
      {disabled && (
        <Text as={'h4'} style={{ position: 'relative' }}>
          {'Please '}
          <Link href={kycUrl}>{'verify your ID'}</Link>
          {
            " to be able to contribute. If you already started the verification process, you'll be able to contribute once it's finished."
          }
        </Text>
      )}

      <StyledCard blurred={disabled}>
        <form
          onSubmit={event => {
            event.preventDefault();
            buy(amount);
          }}
        >
          <InputField
            autoComplete={'off'}
            error={!!amount && fieldError}
            label={'My Contribution'}
            name={'amount'}
            onChange={handleOnChange}
            placeholder={0}
            suffix={'aUSD'}
            value={amount}
          />

          <InputField
            disabled
            label={'CTND amount'}
            name={'converted'}
            placeholder={0}
            suffix={'CTND'}
            value={convertedAmount || 0}
          />

          <Info>
            {
              'The final amount of tokens can change once the cap calculations are done. '
            }

            <Link href={capCalculationInfoUrl}>{'Learn more'}</Link>

            {' .'}
          </Info>

          <Button disabled={!!amount && !!fieldError} type={'submit'}>
            {'Contribute'}
          </Button>
        </form>
      </StyledCard>

      <SaleConfirmingModal
        amount={formatCurrency(amount, currencyConfig.aUsd)}
        isOpen={isPending}
        tokenAmount={formatCurrency(convertedAmount, currencyConfig.ctnd)}
      />
    </Wrapper>
  );
}
