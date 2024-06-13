import { http, createConfig } from "wagmi";
import { base, zora } from "wagmi/chains";

export const config = createConfig({
  chains: [base, zora],
  multiInjectedProviderDiscovery: false,
  transports: {
    [base.id]: http(),
    [zora.id]: http(),
  },
});
