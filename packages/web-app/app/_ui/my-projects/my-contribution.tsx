import { useAccount } from 'wagmi';
import { number } from '../utils/intl-formaters/number';
import { EdgeLink } from '../components/edge';
import { useProject } from '@/app/_providers/project/context';
import { useUserTotalInvestedUsdcCtznd } from '@/app/_lib/queries';
import { useCtzndSaleStatus } from '@/app/_lib/hooks';

export const MyContribution = () => {
  const { address } = useAccount();
  const { projectId } = useProject();
  const usdcValue = useUserTotalInvestedUsdcCtznd(address!);
  const status = useCtzndSaleStatus();

  return (
    <div className="flex flex-col gap-2 rounded-md bg-mono-50 px-6 py-8 text-mono-950">
      <h3 className="text-sm text-mono-800">My Contribution</h3>
      <div className="text-3.5xl">{`${number(Number(usdcValue))} USDC`}</div>
      {status === 'live' ? (
        <div className="self-center pt-6">
          <EdgeLink href={`/projects/${projectId}`}>New Contribution</EdgeLink>
        </div>
      ) : null}
    </div>
  );
};
