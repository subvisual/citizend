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
          11155111: "0xf2eacaa2b8374d648b2f1bab51c0e0add18ec0d1",
        },
      },
    }),
    react(),
  ],
});
