import { task } from "hardhat/config";

import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import "hardhat-gas-reporter";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

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
