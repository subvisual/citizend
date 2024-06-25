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
          42161: "0x85b34Aa54fdf8242e4656eA50b711F45340925bC",
          421614: "0x067126ce81fa5a2ae8d7a3dafd01c6e8c0764560",
          31337: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          1: "0x733e41e5a08c6d922eddaef715186d7e97d55c50",
          11155111: "0x3b11b3bc2ef9a24a1a1fae9d80127f44386e3f7d",
        },
      },
    }),
    react(),
  ],
});
