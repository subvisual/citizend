import { useReadContract } from 'wagmi';
import { grantsAbi } from '../_server/idos/grants/abi';
import { useIdOS } from '../_providers/idos';
import { arbitrum, arbitrumSepolia } from 'viem/chains';

/** generate a grant message to be signed by the user and later inserted by our server
 */
export const useFetchGrantMessage = (
  grantee: string,
  expiration: number,
  dataId?: string | null, // doesn't run while we don't have a dataId
) => {
  const { address: owner } = useIdOS();

  const chainId =
    process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? arbitrumSepolia.id
      : arbitrum.id;

  return useReadContract({
    chainId: chainId,
    abi: grantsAbi,
    address: process.env.NEXT_PUBLIC_IDOS_CONTRACT_ADDRESS_ARBITRUM,
    functionName: 'insertGrantBySignatureMessage',
    args: [owner, grantee, dataId, expiration],
    query: {
      enabled: !!(owner && grantee && dataId && expiration),
    },
  });
};
