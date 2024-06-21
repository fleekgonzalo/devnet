import { http, createConfig } from "wagmi";
import { base, sepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [base, sepolia],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [base.id]: http(),
    [sepolia.id]: http(),
  },
});
