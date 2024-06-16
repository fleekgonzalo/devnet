"use server";

import { Address, type Hex } from "viem";
import { createConfig, http, waitForTransactionReceipt } from "@wagmi/core";
import { base, zora, zoraSepolia } from "@wagmi/core/chains";
import { getUser, updateUser } from "../db/user";

const config = createConfig({
  chains: [base, zora, zoraSepolia],
  transports: {
    [base.id]: http(),
    [zora.id]: http(),
    [zoraSepolia.id]: http(),
  },
});

export const activePlan = async (
  hash: Hex,
  userId: string,
  contract: Address
) => {
  console.log(hash, userId, contract);
  console.log("Waiting Tx... ");

  const receipt = await waitForTransactionReceipt(config, {
    chainId: zoraSepolia.id,
    confirmations: 1,
    hash,
  });

  const user = await getUser(userId);

  if (!receipt.to) throw new Error("No contract address found");
  await updateUser(userId, { startedPlan: [...user.startedPlan, contract] });
};
