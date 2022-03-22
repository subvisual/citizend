import { network, ethers } from "hardhat";
import { BigNumber } from "ethers";

export async function currentTimestamp(): Promise<number> {
  const blockNumber = await ethers.provider.getBlockNumber();
  const latestBlock = await ethers.provider.getBlock(blockNumber);

  return latestBlock.timestamp;
}

export async function currentDate(): Promise<Date> {
  return new Date((await currentTimestamp()) * 1000);
}

export async function goToTime(seconds: BigNumber | number): Promise<void> {
  let currentTime = await currentTimestamp();

  await network.provider.send("evm_increaseTime", [
    BigNumber.from(seconds).sub(currentTime).toNumber(),
  ]);
  await network.provider.send("evm_mine");
}

export async function increaseTime(seconds: BigNumber): Promise<void> {
  await network.provider.send("evm_increaseTime", [seconds.toNumber()]);
  await network.provider.send("evm_mine");
}

export async function decreaseTime(seconds: BigNumber): Promise<void> {
  await network.provider.send("evm_increaseTime", [seconds.toNumber() * -1]);
  await network.provider.send("evm_mine");
}
