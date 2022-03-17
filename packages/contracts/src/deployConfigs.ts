import { network } from "hardhat";

interface CTNDSale {
  start: number;
  end: number;
}

interface CTNDVesting {
  start: number;
}

interface Config {
  ctndSale: CTNDSale;
  ctndVesting: CTNDVesting;
}

async function networkConfigs(chainId: number): Promise<Config> {
  const network = await chainIdToNetwork(chainId);

  switch (network) {
    case "hardhat": {
      const now = Math.floor(new Date().getTime() / 1000);
      return {
        ctndSale: {
          start: now,
          end: now + 60 * 60 * 24,
        },
        ctndVesting: {
          start: now,
        }
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
