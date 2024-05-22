import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "../web-app/wagmi.generated.ts",
  plugins: [
    foundry({
      project: "./",
      exclude: ["MockERC20.sol", "Sale.d.sol", "IERC20.sol", "Deploy.s.sol"],
      namePrefix: "Ctznd",
      deployments: {
        Sale: {
          1: "0x85b34Aa54fdf8242e4656eA50b711F45340925bC",
          31337: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          11155111: "0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d",
        },
      },
    }),
    react(),
  ],
});
