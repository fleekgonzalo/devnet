"use server";

import type { Address, Hex } from "viem";
import {
  createConfig,
  http,
  readContract,
  waitForTransactionReceipt,
} from "@wagmi/core";
import { base, zora, zoraSepolia } from "@wagmi/core/chains";
import { getUser, updateUser } from "../db/user";
import { PLAN_ABI } from "@/abis/plan";

const config = createConfig({
  chains: [base, zora, zoraSepolia],
  transports: {
    [base.id]: http(),
    [zora.id]: http(),
    [zoraSepolia.id]: http(),
  },
});

export const activePlan = async (hash: Hex, userId: string, planId: string) => {
  console.log("Waiting Tx... ");

  const receipt = await waitForTransactionReceipt(config, {
    chainId: zoraSepolia.id,
    confirmations: 1,
    hash,
  });

  const user = await getUser(userId);

  if (!receipt.to) throw new Error("No contract address found");
  await updateUser(userId, { startedPlan: [...user.startedPlan, planId] });
};

export const mintPlanNFT = async (
  hash: Hex,
  userId: string,
  planId: string
) => {
  console.log("Waiting Tx... ");

  const receipt = await waitForTransactionReceipt(config, {
    chainId: zoraSepolia.id,
    confirmations: 1,
    hash,
  });

  const user = await getUser(userId);

  if (!receipt.to) throw new Error("No contract address found");

  const updatedStartedPlan = user.startedPlan.filter((id) => id !== planId);
  await updateUser(userId, { startedPlan: updatedStartedPlan });
};

export const isMintable = async (wallet: Address, plan: Address) => {
  const startTime = await readContract(config, {
    chainId: zoraSepolia.id,
    address: plan,
    abi: PLAN_ABI,
    functionName: "getPlan",
    args: [wallet],
  });

  const period = await readContract(config, {
    chainId: zoraSepolia.id,
    address: plan,
    abi: PLAN_ABI,
    functionName: "period",
    args: [],
  });

  const expected = startTime + period;

  console.log("Expected: ", expected);
  return expected < BigInt(Math.floor(Date.now() / 1000));
};
