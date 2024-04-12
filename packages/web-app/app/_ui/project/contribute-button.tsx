'use client';

import { useIdOS } from '@/app/_providers/idos';
import { Button } from '../components';
import { ApplyDialog } from '../components/dialogs';
import { useDialog } from '@/app/_providers/dialog/context';
import { useProject } from '@/app/_providers/project/context';
import { Spinner } from '../components/svg/spinner';

type TContributeButtonProps = {
  isLoading: boolean;
  error: boolean;
};

export const ContributeButton = ({
  isLoading,
  error,
}: TContributeButtonProps) => {
  const { address } = useIdOS();
  const { projectId } = useProject();
  const { open } = useDialog();

  if (isLoading || error) {
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
