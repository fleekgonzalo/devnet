"use server";

import { Address, decodeEventLog, type Hex, type Log } from "viem";
import {
  createConfig,
  http,
  waitForTransactionReceipt,
  readContract,
} from "@wagmi/core";
import { base, zora, zoraSepolia } from "@wagmi/core/chains";
import { createPlan } from "../db/plans";
import { FACTORY_ABI } from "@/abis/factory";
import { FACTORY_ADDRESS } from "@/utils/constants";

const config = createConfig({
  chains: [base, zora, zoraSepolia],
  transports: {
    [base.id]: http(),
    [zora.id]: http(),
    [zoraSepolia.id]: http(),
  },
});

const parseCreatePlansLogs = (log: Log) => {
  const event = decodeEventLog({
    abi: FACTORY_ABI,
    ...log,
  });

  if (event.eventName === "PlanCreated") return event.args.plan;
  throw new Error("No PlanCreated event found");
};

export const getPlans = async (creator: Address) => {
  const plans = await readContract(config, {
    chainId: zoraSepolia.id,
    address: FACTORY_ADDRESS,
    abi: FACTORY_ABI,
    functionName: "getPlans",
    args: [creator],
  });

  return plans;
};

export const factoryCreatePlan = async (
  hash: Hex,
  userId: string,
  planData: {
    price: bigint;
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
