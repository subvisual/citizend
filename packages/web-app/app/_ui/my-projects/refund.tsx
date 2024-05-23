import { useDialog } from '@/app/_providers/dialog/context';
import { useReadCtzndSaleRefundAmount } from '@/wagmi.generated';
import { EdgeButton } from '../components/edge';

export const Refund = ({ address }: { address: `0x${string}` }) => {
  const { data: refundValue } = useReadCtzndSaleRefundAmount({
    args: [address],
  });

  const { open } = useDialog();

  if (!refundValue || refundValue === 0n) {
    return null;
  }

  return (
    <div className="md:self-end">
      <EdgeButton onClick={() => open('refundDialog')}>
        <div className="w-40">Refund</div>
      </EdgeButton>
    </div>
  );
};
