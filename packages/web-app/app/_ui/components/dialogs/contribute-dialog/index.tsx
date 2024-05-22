'use client';

import { useCtzndPaymentTokenAllowance, useEffectSafe } from '@/app/_lib/hooks';
import { Dialog } from '@headlessui/react';
import { formatEther, formatUnits } from 'viem';
import {
  useBuyCtzndTokens,
  useSetPaymentTokenAllowance,
} from '@/app/_lib/actions';
import { Spinner } from '../../svg/spinner';
import { Check } from '../../svg/check';
import { Error } from '../../svg/error';
import { Done } from '../done';
import { use } from 'react';
import { appSignal } from '@/app/app-signal';
import { useTotalInvestedUsdcCtznd } from '@/app/_lib/queries';
import { calculateTokenPrice } from '@/app/_ui/utils/calculateTokenPrice';

type TAllowFundsProps = {
  amount: number;
  amountInWei: bigint;
};

const AllowFunds = ({ amountInWei }: TAllowFundsProps) => {
  const { error, setAllowance, allowanceTxHash } =
    useSetPaymentTokenAllowance();

  useEffectSafe(() => {
    if (allowanceTxHash) return;

    setAllowance(amountInWei);
  }, []);

  if (allowanceTxHash) {
    return (
      <>
        <Check className="h-8 w-8 text-blue-500" />
        Allowance submitted
        <div className="text-sm">
          <Done hash={allowanceTxHash} />
        </div>
      </>
    );
  }

  if (error) {
    const errorMessage = error as unknown as any;
    return (
      <>
        <Error className="h-8 w-8 text-red-700" />
        <div>Failed</div>
        <div className="flex text-sm">
          {errorMessage?.shortMessage || "Couldn't submit allowance"}
        </div>
      </>
    );
  }

  return (
    <>
      <Spinner className="h-8 w-8 text-blue-500" />
      Proceed in your wallet
    </>
  );
};

type TContributeProps = {
  tokensToBuyInWei: bigint;
  contributionTxHash?: `0x${string}`;
  buyCtzndTokens: (tokensToBuyInWei: bigint) => void;
  error: any;
};

const Contribute = ({
  tokensToBuyInWei,
  contributionTxHash,
  buyCtzndTokens,
  error,
}: TContributeProps) => {
  useEffectSafe(() => {
    if (!tokensToBuyInWei || contributionTxHash) return;

    buyCtzndTokens(tokensToBuyInWei);
  }, []);

  if (contributionTxHash) {
    return (
      <>
        <Check className="h-8 w-8 text-blue-500" />
        Contribution submitted
        <div className="text-sm">
          <Done hash={contributionTxHash} />
        </div>
      </>
    );
  }

  if (error) {
    const errorMessage = error as unknown as any;
    return (
      <>
        <Error className="h-8 w-8 text-red-700" />
        <div>Failed</div>
        <div className="flex text-sm">
          {errorMessage?.shortMessage || "Couldn't submit contribution"}
        </div>
      </>
    );
  }

  return (
    <>
      <Spinner className="h-8 w-8 text-blue-500" />
      Proceed in your wallet
    </>
  );
};

type TDescriptionProps = {
  amount: number;
};

const Description = ({ amount }: TDescriptionProps) => {
  const totalContributions = useTotalInvestedUsdcCtznd();
  const currentTokenPrice = calculateTokenPrice(Number(totalContributions));

  return (
    <div className="my-6 flex flex-col gap-6 border-b border-t border-mono-200 py-6 text-sm">
      <div className="flex justify-between">
        <div className="uppercase text-mono-800">My Contribution</div>
        <div className="text-mono-950">{amount} USDC</div>
      </div>
      <div className="flex justify-between">
        <div className="uppercase text-mono-800">CTND Amount</div>
        <div className="text-mono-950">{(amount / currentTokenPrice).toFixed(0)} CTND</div>
      </div>
    </div>
  );
}

export type TContributeDialogProps = {
  userAddress: `0x${string}`;
  amount: number;
  tokensToBuy: number;
  amountInWei: bigint;
  tokensToBuyInWei: bigint;
  tokensToBuyInSzabo: bigint;
};

export function ContributeDialog({
  userAddress,
  amount,
  tokensToBuy,
  amountInWei,
  tokensToBuyInWei,
}: TContributeDialogProps) {
  const { allowance, isLoading, error } =
    useCtzndPaymentTokenAllowance(userAddress);
  const {
    contributionTxHash,
    buyCtzndTokens,
    error: buyError,
  } = useBuyCtzndTokens();
  useEffectSafe(() => {
    const reportError = error || buyError;

    if (!reportError) return;

    appSignal.sendError(reportError);
  }, [error, buyError]);

  if (isLoading && !allowance)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (error || allowance === undefined) return <div>{error?.message}</div>;

  const hasEnoughAllowance = allowance && allowance >= amountInWei;
  if (hasEnoughAllowance || contributionTxHash)
    return (
      <>
        <Dialog.Title
          as="h2"
          className="relative flex w-full flex-col items-center justify-center gap-4 p-8 text-mono-950"
        >
          <Contribute
            tokensToBuyInWei={tokensToBuyInWei}
            contributionTxHash={contributionTxHash}
            buyCtzndTokens={buyCtzndTokens}
            error={buyError}
          />
        </Dialog.Title>
        <div className="-mt-6 flex flex-col">
          <Description amount={amount} />
          <p className="text-sm">
            Keep in mind that if you want to contribute again, you’ll need to
            use the same wallet.
          </p>
        </div>
      </>
    );

  return (
    <>
      <Dialog.Title
        as="h2"
        className="relative flex w-full flex-col items-center justify-center gap-4 p-8 text-mono-950"
      >
        <AllowFunds amount={amount} amountInWei={amountInWei} />
      </Dialog.Title>
      <p>
        In order to contribute to this project, you need to allow the app to
        withdraw your USDC funds.
      </p>
      <br />
      <p>
        Please make sure you allow at least the amount you wish to contribute (
        {amount} USDC).
      </p>
      <div className="flex flex-col">
        <Description amount={amount} />
        <div className="flex justify-between pb-6 text-sm">
          <div className="uppercase text-mono-800">Current allowed value:</div>
          <div className="text-mono-950">
            {allowance ? formatUnits(allowance, 6) : 0} USDC
          </div>
        </div>
      </div>
    </>
  );
}

ContributeDialog.displayName = 'contributeDialog';
