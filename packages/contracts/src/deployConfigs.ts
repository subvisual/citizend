import { network, ethers } from "hardhat";
import type { BigNumber } from "ethers";
import dayjs from "dayjs";

const MANDALA_REGISTRY_ROOT = "0xC3e923e0CE5125088cDa62935056d6B5F14F234c";

interface CTNDSale {
  start: number;
  end: number;
  supply: BigNumber;
}

interface CTNDVesting {
  start: number;
}

interface Registry {
  root: string;
}

interface Config {
  ctndSale1: CTNDSale;
  ctndSale2?: CTNDSale;
  ctndVesting: CTNDVesting;
  registry: Registry;
}

const { parseUnits } = ethers.utils;

async function networkConfigs(chainId: number): Promise<Config> {
  const network = await chainIdToNetwork(chainId);
  const [owner] = await ethers.getSigners();

  const now = currentTimestamp();
  const nextMonth = beginningOfNextMonthTimestamp();

  switch (network) {
    case "hardhat": {
      return {
        ctndSale1: {
          start: now,
          end: now + THIRTY_MIN,
          supply: parseUnits("10"),
        },
        ctndVesting: {
          start: now + THIRTY_MIN * 2,
        },
        ctndSale2: {
          start: now + THIRTY_MIN,
          end: now + THIRTY_MIN,
          supply: parseUnits("10"),
        },
        registry: {
          root: owner.address,
        },
      };
    }

    case "mandala":
      return {
        ctndSale1: {
          start: now,
          end: now + THIRTY_MIN,
          supply: parseUnits("10"),
        },
        ctndVesting: {
          start: now + THIRTY_MIN,
        },
        ctndSale2: undefined,
        registry: {
          root: MANDALA_REGISTRY_ROOT,
        },
      };

    case "acala":
    case "karura":
      throw "not yet implemented";
      const saleStart = dayjs("2022-04-26");
    // return {
    //   ctndSale1: {
    //     start: saleStart.unix(),
    //     end: saleStart.add(5, "days").unix(), // TODO
    //     supply: parseUnits("5000000"), // TODO
    //   },
    //   ctndSale2: {
    //     start: 0, // TODO
    //     end: 0, // TODO
    //     supply: parseUnits("10000000"),
    //   },
    //   ctndVesting: {
    //     start: 0, //TODO
    //   },
    // };
  }

  throw "error";
}

const chainIdToNetwork = (chainId: number): string => {
  return { 686: "karura", 787: "acala", 31337: "hardhat", 595: "mandala" }[
    chainId
  ]!;
};

export const getNetworkName = (): string => {
  return chainIdToNetwork(network.config.chainId!);
};

export const getNetworkConfig = async () => {
  return await networkConfigs(network.config.chainId!);
};

function currentTimestamp(): number {
  const date = new Date();
  return Math.floor(date.getTime() / 1000);
}

function beginningOfNextMonthTimestamp(): number {
  const date = new Date();
  const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1, 12);

  return Math.floor(nextMonth.getTime() / 1000);
}

const THIRTY_MIN = 30 * 60;
