import { network } from "hardhat";
import { BigNumber } from "ethers";

export async function goToTime(seconds: BigNumber): Promise<void> {
  let currentTime = new Date().getTime() / 1000;

  await network.provider.send("evm_increaseTime", [
    seconds.toNumber() - currentTime,
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
