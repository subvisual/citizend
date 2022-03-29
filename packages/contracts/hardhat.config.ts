import type { NetworksUserConfig } from "hardhat/types";

import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import "hardhat-gas-reporter";

import "./src/tasks";

const devMnemonic =
  process.env.DEV_MNEMONIC ||
  "test test test test test test test test test test test junk";

let networks: NetworksUserConfig = {};

networks["hardhat"] = {
  blockGasLimit: 3000000000,
  accounts: { mnemonic: devMnemonic },
};

const config = {
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 300,
      },
    },
  },
  networks,
  namedAccounts: {
    deployer: 0,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    gasPrice: 100,
    currency: "USD",
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
};

export default config;
