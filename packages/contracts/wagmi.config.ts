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
          31337: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          11155111: "0x1D4d57F29C8a0E73A4C836792abcAc0B2b0D5adD",
        },
      },
    }),
    react(),
  ],
});
