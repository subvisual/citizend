/**
 * Module dependencies.
 */

import { Button } from 'src/components/core/button';
import { Card } from 'src/components/core/card';
import { ErrorModal } from './error-modal';
import { InputField } from 'src/components/core/form/input-field';
import { Link } from 'src/components/core/link';
import { SaleConfirmingModal } from './sale-confirming-modal';
import { Text } from 'src/components/core/text';
import { currencyConfig } from 'src/core/constants';
import { formatCurrency } from 'src/core/utils/formatters';
import { ifProp } from 'styled-tools';
import { media } from 'src/styles/breakpoints';
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
 * Fractal KYC URL.
 */

const fractalKycUrl = process.env.NEXT_PUBLIC_FRACTAL_KYC_URL;

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
 * Export `SaleForm` component.
 */

export function SaleForm(props: Props) {
  const [amount, setAmount] = useState<string>('');
  const { disabled, tokenPrice } = props;
  const isValid = new BigNumber(amount).isNaN();
  const handleOnChange = useCallback(event => {
    setAmount(event.target.value.replace(/[^0-9]/g, ''));
  }, []);

  const {
    error,
    isPending,
    run: buy,
    setData
  } = useSaleBuy({
    onResolve: () => {
      setAmount('');
    }
  });

  const { isFundsError, isRejectByUser } = useMemo(() => {
    const isRejectByUser = (error as any)?.code === 4001;
    const message = (error as any)?.data?.message;

    return {
      isFundsError: !isRejectByUser && message?.includes('exceeds balance'),
      isRejectByUser
    };
  }, [error]);

  const convertedAmount = useMemo(() => {
    return new BigNumber(amount || 0)
      .times(tokenPrice)
      .decimalPlaces(4)
      .toString();
  }, [amount, tokenPrice]);

  return (
    <Wrapper>
      {disabled && (
        <Text as={'h4'}>
          {'Please '}
          <Link href={fractalKycUrl}>{'verify your ID'}</Link>
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
            error={!!amount && isValid && 'Invalid Amount'}
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

          <Button disabled={!amount && isValid} type={'submit'}>
            {'Contribute'}
          </Button>
        </form>
      </StyledCard>

      <SaleConfirmingModal
        amount={formatCurrency(amount, currencyConfig.aUsd)}
        isOpen={isPending}
        tokenAmount={formatCurrency(convertedAmount, currencyConfig.ctnd)}
      />

      <ErrorModal
        isOpen={isFundsError}
        lead={'Please add funds to your wallet and try again.'}
        onRequestClose={() => {
          setData(undefined);
        }}
        title={'Insufficient funds'}
      />

      <ErrorModal
        isOpen={!isFundsError && !!error && !isRejectByUser}
        lead={'Unfortunately, your transaction failed. Please try again.'}
        onRequestClose={() => {
          setData(undefined);
        }}
        title={'Transaction failed'}
      />
    </Wrapper>
  );
}
