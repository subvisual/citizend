import { defineConfig } from "@wagmi/cli";
import { foundry, react, etherscan } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "../web-app/wagmi.generated.ts",
  plugins: [
    foundry({
      project: "./",
      exclude: ["MockERC20.sol", "Sale.d.sol"],
      namePrefix: "Ctznd",
      deployments: {
        Sale: {
          31337: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          11155111: "0x9a0ce9d655de21688764be0e61f2fb31213a0f2e",
        },
      },
    }),
    react(),
  ],
});
