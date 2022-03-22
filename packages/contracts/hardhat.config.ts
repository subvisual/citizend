import { task } from "hardhat/config";
import { NetworksUserConfig } from "hardhat/types";

import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import "hardhat-gas-reporter";

const { MANDALA_MNEMONIC } = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

let networks: NetworksUserConfig = {};

networks["hardhat"] = {
  blockGasLimit: 3000000000,
};

networks["mandalaLocal"] = {
  url: "http://127.0.0.1:8545",
  accounts: {
    mnemonic:
      "fox sight canyon orphan hotel grow hedgehog build bless august weather swarm",
    path: "m/44'/60'/0'/0",
  },
  chainId: 595,
};

if (!!MANDALA_MNEMONIC) {
  networks["mandala"] = {
    url: "https://tc7-eth.aca-dev.network",
    accounts: {
      mnemonic: MANDALA_MNEMONIC,
    },
    chainId: 595,
  };
}

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
