// src/actions/plans.ts
"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createPlan(
  userId: string,
  planData: {
    price: bigint;
    period: string;
    contract: `0x${string}`;
    name: string;
    description: string;
  }
) {
  console.log("Creating plan for user", userId);
  const plan = await prisma.plan.create({
    data: {
      creator: {
        connect: { id: userId },
      },
      ...planData,
    },
  });

  console.log("Plan created", plan);
  return plan;
}
// Read a plan by its ID

export async function getPlanById(planId: string) {
  console.log("Fetching plan with ID", planId);
  const plan = await prisma.plan.findUnique({
    where: { id: planId },
  });

  if (!plan) {
    console.log("Plan not found");
    return null;
  }

  console.log("Plan fetched", plan);
  return plan;
}

export async function getPlanByContract(contract: `0x${string}`) {
  console.log("Fetching plan with contract", contract);
  const plan = await prisma.plan.findFirst({
    where: { contract },
  });

  if (!plan) throw new Error("Plan not found");

  console.log("Plan fetched", plan);
  return plan;
}

// Read all plans for a specific user
export async function getPlansByUserId(userId: string) {
  console.log("Fetching plans for user", userId);
  const plans = await prisma.plan.findMany({
    where: { userId },
  });

  return plans;
}

// Update a plan by its ID
export async function updatePlan(
  planId: string,
  data: Partial<{
    period: string;
    contract: string;
    name: string;
    description: string;
  }>
) {
  console.log("Updating plan with ID", planId);
  const plan = await prisma.plan.update({
    where: { id: planId },
    data,
  });

  console.log("Plan updated", plan);
  return plan;
}

// Delete a plan by its ID
export async function deletePlan(planId: string) {
  console.log("Deleting plan with ID", planId);
  const plan = await prisma.plan.delete({
    where: { id: planId },
  });

  console.log("Plan deleted", plan);
  return plan;
}
