import { network, ethers } from "hardhat";
import type { BigNumber } from "ethers";
import dayjs from "dayjs";

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
  ctndSale2?: CTNDSale;
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
      const thirtyMinutes = 30 * 60;

      return {
        ctndSale1: {
          start: now,
          end: now + thirtyMinutes/15,
          supply: parseUnits("10"),
        },
        ctndVesting: {
          start: now + thirtyMinutes/10,
        },
        ctndSale2: {
          start: now + 60 * 60 * 24 * 2,
          end: now + 60 * 60 * 24 * 3,
          supply: parseUnits("15"),
        },
      };
    }

    case "mandala":
      const date = new Date();
      const beginningOfNextMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1,
        12
      );
      const now = Math.floor(new Date(2022, 4, 5, 11, 30).getTime() / 1000);
      // const now = Math.floor(date.getTime() / 1000);
      const thirtyMinutes = 30 * 60;
      const oneDay = 60 * 60 * 24;

      return {
        ctndSale1: {
          start: now,
          end: now + thirtyMinutes,
          supply: parseUnits("10"),
        },
        ctndVesting: {
          start: now + thirtyMinutes,
        },
        ctndSale2: undefined,
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

export const getNetworkConfig = async () => {
  return await networkConfigs(network.config.chainId!);
};
