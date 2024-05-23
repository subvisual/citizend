import { Dialog } from '@headlessui/react';
import { Spinner } from '../../svg/spinner';
import { Error } from '../../svg/error';
import { Done } from '../done';
import { Check } from '../../svg/check';
import { WriteContractErrorType, formatEther } from 'viem';
import {
  useReadCtzndSaleRefundAmount,
  useWriteCtzndSaleRefund,
} from '@/wagmi.generated';
import { use } from 'react';
import { useAccount } from 'wagmi';
import { useEffectSafe } from '@/app/_lib/hooks';

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

export const RefundDialog = () => {
  const { address } = useAccount();
  const { data: refundValue } = useReadCtzndSaleRefundAmount({
    args: [address!],
  });
  const formattedValue =
    refundValue !== undefined ? formatEther(refundValue) : '0';

  const { writeContract, data: txHash, error } = useWriteCtzndSaleRefund();

  useEffectSafe(() => {
    if (!address) return;
    writeContract({ args: [address] });
  }, [address]);

  if (error) {
    console.log('error', error);
  }

  return (
    <>
      <Dialog.Title
        as="h2"
        className="relative flex w-full flex-col items-center justify-center gap-4 p-8 text-mono-950"
      >
        <Title
          txHash={txHash}
          error={(error as unknown as any)?.shortMessage || null}
        />
      </Dialog.Title>
      <div className="flex flex-col">
        <div className="my-6 flex flex-col gap-6 border-b border-t border-mono-200 py-6 text-sm">
          <div className="flex justify-between">
            <div className="uppercase text-mono-800">
              Refund After cap calculations
            </div>
            <div className="text-mono-950">{formattedValue} USDC</div>
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
