'use client';

import { Button } from '../..';
import { Disconnect as DisconnectIcon } from '../../svg/disconnect';
import { useDialog } from '@/app/_providers/dialog/context';
import { useIdOS } from '@/app/_providers/idos';

export const DisconnectMenu = () => {
  const { disconnect } = useIdOS();
  const { close } = useDialog();

  return (
    <>
      <DisconnectIcon />
      <Button
        variant="secondary"
        className="pb-0 pl-0 pr-0 pt-0 font-normal text-mono-950 hover:text-blue-400"
        onClick={async () => {
          await disconnect();
          close();
        }}
      >
        Disconnect
      </Button>
    </>
  );
};
