import { network, ethers } from "hardhat";
import type { BigNumber } from "ethers";
import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/utc";
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

console.log(dayjs().tz("Europe/Lisbon"));

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
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const now = dayjs();

  switch (network) {
    case "hardhat": {
      const saleStart = now;
      const saleEnd = saleStart.add(5, "minutes");
      const sale2Start = saleStart.add(2, "minutes");
      const sale2End = saleEnd;
      const vestingStart = saleEnd;

      return {
        ctndSale1: {
          start: saleStart.unix(),
          end: saleEnd.unix(),
          supply: parseUnits("10"),
        },
        ctndVesting: {
          start: vestingStart.unix(),
        },
        ctndSale2: {
          start: sale2Start.unix(),
          end: sale2End.unix(),
          supply: parseUnits("10"),
        },
        registry: {
          root: owner.address,
        },
      };
    }

    case "mandala":
      const saleStart = dayjs(); //.tz("2022-5-12 09:00", "Europe/Lisbon");
      const saleEnd = saleStart.add(20, "minutes");
      const vestingStart = saleEnd;

      return {
        ctndSale1: {
          start: saleStart.unix(),
          end: saleEnd.unix(),
          supply: parseUnits("10"),
        },
        ctndVesting: {
          start: vestingStart.unix(),
        },
        ctndSale2: undefined,
        registry: {
          root: MANDALA_REGISTRY_ROOT,
        },
      };

    case "acala":
    case "karura":
      throw "not yet implemented";
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
