import { calcEthereumTransactionParams } from "@acala-network/eth-providers";
import { ethers, network } from "hardhat";

import type { HardhatRuntimeEnvironment } from "hardhat/types";
import type { DeployOptions } from "hardhat-deploy/types";

export async function isAcala() {
  return [595].includes(network.config.chainId!);
}

export async function acalaDeploy(
  hre: HardhatRuntimeEnvironment,
  name: string,
  opts: DeployOptions
) {
  const { deploy, execute, getOrNull } = hre.deployments;

  const existing = getOrNull(name);

  const result = await deploy(name, {
    ...opts,
    ...(await acalaDeployParams()),
  });

  if ((await isAcala()) && !existing) {
    await execute("EVM", opts, "publishContract", result.address);
  }

  return result;
}

export async function acalaDeployParams() {
  if (!(await isAcala())) {
    return {};
  }

  const txFeePerGas = "199999946752";
  const storageByteDeposit = "100000000000000";
  const blockNumber = await ethers.provider.getBlockNumber();

  const ethParams = calcEthereumTransactionParams({
    gasLimit: "31000000",
    validUntil: (blockNumber + 100).toString(),
    storageLimit: "64001",
    txFeePerGas,
    storageByteDeposit,
  });

  return {
    gasPrice: ethParams.txGasPrice,
    gasLimit: ethParams.txGasLimit,
  };
}
