'use client';

import { useIdOS } from '@/app/_providers/idos';
import { Button } from '../components';
import { ApplyDialog } from '../components/dialogs';
import { useDialog } from '@/app/_providers/dialog/context';
import { useProject } from '@/app/_providers/project/context';
import { Spinner } from '../components/svg/spinner';
import { ERRORS } from '@/app/_providers/kyc';

type TApplyButtonProps = {
  isLoading: boolean;
  error: string | null;
};

export const ApplyButton = ({ isLoading, error }: TApplyButtonProps) => {
  const { address } = useIdOS();
  const { projectId } = useProject();
  const { open } = useDialog();

  if (isLoading || (error && error !== ERRORS.MISSING_FRACTAL_AG)) {
    return (
      <Button disabled variant="primary-disabled">
        {isLoading ? (
          <Spinner className="animate-spin" />
        ) : (
          'Something went wrong'
        )}
      </Button>
    );
  }

  if (!address)
    return (
      <Button disabled variant="primary-disabled">
        Connect wallet first
      </Button>
    );

  return (
    <Button onClick={() => open(ApplyDialog.displayName, { projectId })}>
      Apply to participate
    </Button>
  );
};
