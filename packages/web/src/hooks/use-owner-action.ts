/**
 * Module dependencies.
 */

import { useCallback } from 'react';
import { useContracts } from 'src/context/contracts';

/**
 * `bytes32` helper.
 */

function bytes32(value: string): string {
  let result = `0x${value}`;

  while (result.length < 64 + 2) {
    result += '0';
  }

  return result;
}

/**
 * Constants.
 */

export const ListId = bytes32('42');
export const ListName = 'kycPlus';

/**
 * `useOwnerAction`.
 */

export function useOwnerAction() {
  const contracts = useContracts();
  const addToRegistry = useCallback(
    async (address: string) => {
      try {
        await contracts.fractal.addUserAddress(address, ListId);

        const data = await contracts.fractal.addUserToList(ListId, ListName);

        return Promise.resolve(data);
      } catch (error) {
        // TODO: Handle error.
      }
    },
    [contracts.fractal]
  );

  return { addToRegistry };
}
