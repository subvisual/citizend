import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "../web/wagmi.generated.ts",
  contracts: [],
  plugins: [
    foundry({
      exclude: [
        // We have a MockERC20.sol contract that is conflicting with the MockERC20 contract from forge
        // Until we refactor, we need to ignore it for the wagmi compilation to succeed
        "MockERC20.sol",
      ],
      project: "./",
      deployments: {
        Citizend: {
          31337: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        },
        Staking: {
          31337: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512",
        },
      },
    }),
  ],
});
