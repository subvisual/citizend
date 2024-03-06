import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "../web/wagmi.generated.ts",
  plugins: [
    foundry({
      project: "./",
      exclude: ["MockERC20.sol"],
    }),
    react(),
  ],
});
