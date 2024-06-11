import { http, createConfig } from "wagmi";
import { base } from "wagmi/chains";

export const config = createConfig({
  chains: [base],
  multiInjectedProviderDiscovery: false,
  transports: {
    [base.id]: http(),
  },
});
