import { createConfig, http } from "@wagmi/core";
import { base, sepolia } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [base, sepolia],
  transports: {
    [base.id]: http(),
    [sepolia.id]: http(),
  },
});
