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
          1: "0x733e41e5a08c6d922eddaef715186d7e97d55c50",
          31337: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          11155111: "0xdffdb96ae344438cd8bbd0591b2f09db49ff4d5c",
          421614: "0x5e4bf20bbb995bd6a30d1e384c85a56b5ad703e4"
        },
      },
    }),
    react(),
  ],
});
