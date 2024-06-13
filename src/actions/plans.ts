// src/actions/plans.ts
"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createPlan(
  userId: string,
  planData: {
    period: string;
    contract: string;
    name: string;
    description: string;
  }
) {
  console.log("Creating plan for user", userId);
  const plan = await prisma.plan.create({
    data: {
      userId,
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

// Read all plans for a specific user
export async function getPlansByUserId(userId: string) {
  console.log("Fetching plans for user", userId);
  const plans = await prisma.plan.findMany({
    where: { userId },
  });

  console.log("Plans fetched", plans);
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
