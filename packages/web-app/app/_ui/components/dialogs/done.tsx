import Link from 'next/link';
import { Spinner } from '../svg/spinner';
import { useTransaction } from 'wagmi';
import { sepolia, mainnet } from 'viem/chains';

export const Done = ({ hash }: { hash: `0x${string}` }) => {
  const { data } = useTransaction({
    hash,
    chainId:
      process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
        ? sepolia.id
        : mainnet.id,
    query: {
      staleTime: 0,
      refetchInterval: 1000,
      refetchIntervalInBackground: true,
    },
  });

  if (data?.blockHash) {
    return (
      <Link
        href={`https://sepolia.etherscan.io/tx/${hash}`}
        target="_blank"
        className="text-blue-500"
      >
        View on etherscan
      </Link>
    );
  }

  return (
    <div className="flex content-center items-center justify-center gap-1">
      <Spinner className="h-5 w-5 text-blue-500" />
      <Link
        href={`https://sepolia.etherscan.io/tx/${hash}`}
        target="_blank"
        className="text-blue-500"
      >
        Validating Transaction
      </Link>
    </div>
  );
};
