import type { ContractReceipt, ContractTransaction, Event } from "ethers";

export async function findEvent(
  tx: ContractTransaction,
  name: string,
): Promise<Event | undefined> {
  const receipt: ContractReceipt = await tx.wait();

  return receipt.events?.find((e) => {
    return e.event === name;
  });
}
