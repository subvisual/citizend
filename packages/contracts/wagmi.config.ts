import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "../web-app/wagmi.generated.ts",
  plugins: [
    foundry({
      project: "./",
      exclude: ["MockERC20.sol", "Sale.d.sol", "IERC20.sol"],
      namePrefix: "Ctznd",
      deployments: {
        Sale: {
          1: "0x85b34Aa54fdf8242e4656eA50b711F45340925bC",
          31337: "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0",
          11155111: "0xb8C0cD4370c8279f642BFB6433b7D35027DE3b60",
        },
      },
    }),
    react(),
  ],
});
