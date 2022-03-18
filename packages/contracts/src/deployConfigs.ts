import { network } from "hardhat";

interface CTNDSale {
  start: number;
  end: number;
}

interface CTNDVesting {
  start: number;
}

interface Config {
  ctndSale1: CTNDSale;
  ctndSale2: CTNDSale;
  ctndVesting: CTNDVesting;
}

async function networkConfigs(chainId: number): Promise<Config> {
  const network = await chainIdToNetwork(chainId);

  switch (network) {
    case "hardhat": {
      const now = Math.floor(new Date().getTime() / 1000);
      return {
        ctndSale1: {
          start: now,
          end: now + 60 * 60 * 24,
        },
        ctndSale2: {
          start: now + 60 * 60 * 24 * 2,
          end: now + 60 * 60 * 24 * 3,
        },
        ctndVesting: {
          start: now,
        },
      };
    }

    case "acala":
    case "karura":
      throw "not yet implemented";
  }

  throw "error";
}

const chainIdToNetwork = (chainId: number): string => {
  return { 686: "karura", 787: "acala", 31337: "hardhat" }[chainId]!;
};

export const getNetworkConfig = async () => {
  return await networkConfigs(network.config.chainId!);
};
