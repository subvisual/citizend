import { network, ethers } from "hardhat";
import type { BigNumber } from "ethers";

interface CTNDSale {
  start: number;
  end: number;
  supply: BigNumber;
}

interface CTNDVesting {
  start: number;
}

interface Config {
  ctndSale1: CTNDSale;
  ctndSale2: CTNDSale;
  ctndVesting: CTNDVesting;
}

const { parseUnits } = ethers.utils;

async function networkConfigs(chainId: number): Promise<Config> {
  const network = await chainIdToNetwork(chainId);

  switch (network) {
    case "hardhat": {
      const date = new Date();
      const beginningOfNextMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1,
        12
      );
      const now = Math.floor(date.getTime() / 1000);
      const oneDay = 60 * 60 * 24;

      return {
        ctndSale1: {
          start: now,
          end: now + oneDay,
          supply: parseUnits("10"),
        },
        ctndVesting: {
          start: beginningOfNextMonth.getTime() / 1000,
        },
        ctndSale2: {
          start: now + 60 * 60 * 24 * 2,
          end: now + 60 * 60 * 24 * 3,
          supply: parseUnits("15"),
        },
      };
    }

    case "acala":
    case "karura":
      throw "not yet implemented";
      return {
        ctndSale1: {
          start: 0, // TODO
          end: 0, // TODO
          supply: parseUnits("5000000"),
        },
        ctndSale2: {
          start: 0, // TODO
          end: 0, // TODO
          supply: parseUnits("10000000"),
        },
        ctndVesting: {
          start: 0, //TODO
        },
      };
  }

  throw "error";
}

const chainIdToNetwork = (chainId: number): string => {
  return { 686: "karura", 787: "acala", 31337: "hardhat" }[chainId]!;
};

export const getNetworkConfig = async () => {
  return await networkConfigs(network.config.chainId!);
};
