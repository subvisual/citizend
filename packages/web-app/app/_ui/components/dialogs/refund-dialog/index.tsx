import { Dialog } from '@headlessui/react';
import { Spinner } from '../../svg/spinner';
import { Error } from '../../svg/error';
import { Done } from '../done';
import { Check } from '../../svg/check';
import { WriteContractErrorType } from 'viem';

type TTitleProps = {
  txHash?: `0x${string}`;
  error: string | null;
};

const Title = ({ txHash, error }: TTitleProps) => {
  if (txHash) {
    return (
      <>
        <Check className="h-8 w-8 text-blue-500" />
        Contribution submitted
        <div className="text-sm">
          <Done hash={txHash} />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Error className="h-8 w-8 text-red-700" />
        <div>Failed</div>
        <div className="flex text-sm">{error || "Couldn't submit refund"}</div>
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

type TRefundDialogProps = {
  refundValue: string;
  txHash?: `0x${string}`;
  error: string | null;
};

export const RefundDialog = ({
  refundValue,
  txHash,
  error,
}: TRefundDialogProps) => {
  console.log('%c==>', 'color: green; background: red; font-size: 20px', error);

  return (
    <>
      <Dialog.Title
        as="h2"
        className="relative flex w-full flex-col items-center justify-center gap-4 p-8 text-mono-950"
      >
        <Title txHash={txHash} error={error} />
      </Dialog.Title>
      <div className="flex flex-col">
        <div className="my-6 flex flex-col gap-6 border-b border-t border-mono-200 py-6 text-sm">
          <div className="flex justify-between">
            <div className="uppercase text-mono-800">
              Refund After cap calculations
            </div>
            <div className="text-mono-950">{refundValue} USDC</div>
          </div>
        </div>
        <p className="pt-8 text-sm">
          Keep in mind you need to use the same wallet you used when
          contributing.
        </p>
      </div>
    </>
  );
};

RefundDialog.displayName = 'refundDialog';
