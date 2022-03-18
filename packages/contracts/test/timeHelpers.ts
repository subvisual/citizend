import { network } from "hardhat";
import BN from "bn.js";

export async function goToTime(seconds: BN): Promise<void> {
  let currentTime = new Date().getTime() / 1000;

  await network.provider.send("evm_increaseTime", [
    seconds.toNumber() - currentTime,
  ]);
  await network.provider.send("evm_mine");
}

export async function increaseTime(seconds: BN): Promise<void> {
  await network.provider.send("evm_increaseTime", [seconds.toNumber()]);
  await network.provider.send("evm_mine");
}

export async function decreaseTime(seconds: BN): Promise<void> {
  await network.provider.send("evm_increaseTime", [seconds.toNumber() * -1]);
  await network.provider.send("evm_mine");
}
