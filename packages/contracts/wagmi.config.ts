import { defineConfig } from "@wagmi/cli";
import { foundry, react, etherscan } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "../web-app/wagmi.generated.ts",
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: 11155111,
      contracts: [
        {
          name: "CtzndSale",
          address: "0xb27D23387324401F829C8C0B73a3Df10a72c4080",
        },
      ],
    }),
    foundry({
      project: "./",
      exclude: ["MockERC20.sol"],
      deployments: {
        Project: {
          31337: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
        },
      },
    }),
    react(),
  ],
});
