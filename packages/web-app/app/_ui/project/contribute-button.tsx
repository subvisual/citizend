'use client';

import { useIdOS } from '@/app/_providers/idos';
import { Button } from '../components';
import { ApplyDialog } from '../components/dialogs';
import { useDialog } from '@/app/_providers/dialog/context';
import { useProject } from '@/app/_providers/project/context';

const ConnectedButton = () => {
  const { open } = useDialog();
  const { projectId } = useProject();
  // check the stage we are on the token sale for this specific project
  const stage = 'apply';

  if (stage === 'apply') {
    return (
      <Button onClick={() => open(ApplyDialog.displayName, { projectId })}>
        Apply to participate
      </Button>
    );
  }

  if (stage === 'contribute') {
    return (
      <Button
      // onClick={() => open(ApplyDialog.displayName)}
      >
        Contribute
      </Button>
    );
  }

  return (
    <Button disabled variant="primary-disabled">
      Closed
    </Button>
  );
};

export const ContributeButton = () => {
  const { address } = useIdOS();

  // should split connect, apply & contribute buttons
  if (process.env.NEXT_PUBLIC_APPLY_OPEN !== 'true') return null;

  if (!address)
    return (
      <Button disabled variant="primary-disabled">
        Connect wallet first
      </Button>
    );

  return <ConnectedButton />;
};
