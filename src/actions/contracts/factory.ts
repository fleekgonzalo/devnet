"use server";

import type { Hex } from "viem";
import { createConfig, http, waitForTransactionReceipt } from "@wagmi/core";
import { base, zora, zoraSepolia } from "@wagmi/core/chains";
import { createPlan } from "../plans";

const config = createConfig({
  chains: [base, zora, zoraSepolia],
  transports: {
    [base.id]: http(),
    [zora.id]: http(),
    [zoraSepolia.id]: http(),
  },
});

export const factoryCreatePlan = async (
  hash: Hex,
  userId: string,
  planData: {
    period: string;
    name: string;
    description: string;
  }
) => {
  console.log("Waiting Tx... ");

  const { contractAddress } = await waitForTransactionReceipt(config, {
    confirmations: 2,
    hash,
  });

  console.log("contractAddress", contractAddress);

  if (!contractAddress) throw new Error("No contract address found");
  await createPlan(userId, { ...planData, contract: contractAddress });
};
