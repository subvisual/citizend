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
          11155111: "0x6D83cFac1aaB268177E2C4Bb07a601b66F66AC11",
        },
      },
    }),
    react(),
  ],
});
