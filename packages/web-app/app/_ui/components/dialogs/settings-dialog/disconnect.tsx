'use client';

import { Button } from '../..';
import { Disconnect as DisconnectIcon } from '../../svg/disconnect';
import { useDialog } from '@/app/_providers/dialog/context';
import { useDisconnect } from "wagmi";

export const DisconnectMenu = () => {
  const { close } = useDialog();
  const { disconnect } = useDisconnect();

  return (
    <>
      <DisconnectIcon />
      <Button
        variant="secondary"
        className="pb-0 pl-0 pr-0 pt-0 font-normal text-mono-950 hover:text-blue-400"
        onClick={async () => {
          disconnect();
          close();
        }}
      >
        Disconnect
      </Button>
    </>
  );
};
