'use server';

import { Address, createPublicClient, http, publicActions } from 'viem';
import { anvil } from 'viem/chains';

import { saleAbi } from './abi';

const saleContractAddress = '0x5613c3007f77a5095702f887b7e863cc5b5192a6';

const client = createPublicClient({
  chain: anvil,
  transport: http(),
}).extend(publicActions);

export const computeRisingTideCap = async () => {
  const purchases = await client.getContractEvents({
    address: saleContractAddress,
    abi: saleAbi,
    eventName: 'Purchase',
    fromBlock: 0n,
  });

  const available = await client.readContract({
    address: saleContractAddress,
    abi: saleAbi,
    functionName: 'totalTokensForSale',
  });

  const events = purchases.filter(
    (purchase) => purchase.args.from !== undefined,
  ) as PurchaseEvent[];
  const amounts = reduceAmounts(events);

  // calculate cap
  let cap = BigInt(0);
  let capNextIdx = 0;
  let investorsLeft = BigInt(amounts.length);
  let accum = BigInt(0);

  // increase until cap is exceeded
  while (true) {
    if (capNextIdx == amounts.length) {
      return cap;
    }

    cap = amounts[capNextIdx];
    let hypotheticalAllocation = cap * investorsLeft;

    if (hypotheticalAllocation > available) {
      // this is already too much. break and reduce
      break;
    }

    accum = accum + cap;
    capNextIdx++;
    investorsLeft--;
  }

  console.log(available - accum / investorsLeft);

  // at this point, the cap is just whatever amount is not yet allocated (i.e.:
  // without the small investors) divided equally by everyone else
  return available - accum / investorsLeft;
};

interface PurchaseEvent {
  args: {
    from: Address;
    tokenAmount: bigint;
  };
}

function reduceAmounts(purchases: PurchaseEvent[]): bigint[] {
  return Object.values(
    purchases.reduce(
      (accounts: Record<string, bigint>, purchase: PurchaseEvent) => {
        const { from, tokenAmount } = purchase.args;
        const previousAmount = accounts[from] ? accounts[from] : 0n;

        accounts[from] = tokenAmount + previousAmount;

        return accounts;
      },
      {},
    ),
  ).sort((a1, a2) => {
    if (a1 < a2) {
      return -1;
    } else if (a1 > a2) {
      return 1;
    } else {
      return 0;
    }
  });
}
