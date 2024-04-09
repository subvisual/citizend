'use client';

import { useIdOS } from '@/app/_providers/idos';
import { useCopyToClipboard } from '@/app/_ui/hooks/useCopyToClipboard';
import { formatAddress } from '@/app/_ui/utils/formatAddress';
import { useCallback, useMemo } from 'react';
import { Button } from '../../button';
import { Check } from '../../svg/check';
import { Clipboard } from '../../svg/clipboard';

export const Address = () => {
  const [copiedText, copy] = useCopyToClipboard();
  const { address } = useIdOS();
  const displayAddress = useMemo(() => {
    if (!address) return;

    return formatAddress(address);
  }, [address]);

  const handleClick = useCallback(() => {
    if (!address) return;

    copy(address);
  }, [address, copy]);

  if (!address) return null;

  return (
    <div>
      <label htmlFor="address" className="sr-only">
        Account Address
      </label>
      <Button
        variant="secondary"
        onClick={handleClick}
        className="content-center items-center gap-1 pb-0 pl-0 pr-0 pt-0 font-normal text-mono-950 hover:text-blue-400"
      >
        <div>{displayAddress}</div>
        {copiedText ? <Check /> : <Clipboard />}
      </Button>
    </div>
  );
};
