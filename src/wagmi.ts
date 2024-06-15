import { http, createConfig } from "wagmi";
import { base, zora, zoraSepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [base, zora, zoraSepolia],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [base.id]: http(),
    [zora.id]: http(),
    [zoraSepolia.id]: http(),
  },
});
