'use client';

import { Button } from '../..';
import { useDisconnect } from 'wagmi';
import { Disconnect as DisconnectIcon } from '../../svg/disconnect';
import { useDialog } from '@/app/_providers/dialog/context';

export const DisconnectMenu = () => {
  const { disconnect } = useDisconnect();
  const { close } = useDialog();

  return (
    <>
      <DisconnectIcon />
      <Button
        variant="secondary"
        className="pb-0 pl-0 pr-0 pt-0 font-normal text-mono-950 hover:text-blue-400"
        onClick={() => {
          disconnect();
          close();
        }}
      >
        Disconnect
      </Button>
    </>
  );
};
