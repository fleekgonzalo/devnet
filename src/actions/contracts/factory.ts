"use server";

import { decodeEventLog, type Hex, type Log } from "viem";
import { createConfig, http, waitForTransactionReceipt } from "@wagmi/core";
import { base, zora, zoraSepolia } from "@wagmi/core/chains";
import { createPlan } from "../db/plans";
import { FACTORY_ABI } from "@/abis/factory";

const parseCreatePlansLogs = (log: Log) => {
  const event = decodeEventLog({
    abi: FACTORY_ABI,
    ...log,
  });

  if (event.eventName === "PlanCreated") return event.args.plan;
  throw new Error("No PlanCreated event found");
};

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

  const receipt = await waitForTransactionReceipt(config, {
    chainId: zoraSepolia.id,
    confirmations: 1,
    hash,
  });

  const createdPlan = parseCreatePlansLogs(receipt.logs[1]);

  if (!receipt.to) throw new Error("No contract address found");
  await createPlan(userId, { ...planData, contract: createdPlan });
};
