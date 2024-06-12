"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Navbar from "@/components/navbar";
import { config } from "@/wagmi";
import { WagmiProvider } from "wagmi";
import { authUser } from "@/actions/user";

export const queryClient = new QueryClient();

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_ENV_ID || "",
        walletConnectors: [EthereumWalletConnectors],
        coinbaseWalletPreference: "smartWalletOnly",
        events: {
          onAuthSuccess: (args) => {
            console.log("Auth success");
            if (args.user.userId) authUser(args.user.userId);
          },
        },
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <Navbar />
            <div className="w-full flex flex-row items-center justify-center">
              {children}
            </div>
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
};

export default Provider;
