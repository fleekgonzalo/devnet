"use server";

import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function authUser(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    const user = await prisma.user.create({
      data: {
        id,
        startedPlan: [],
      },
    });

    console.log("User created", user);
  }

  console.log("User login", user);
}

export const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) throw new Error("User not found");

  return user;
};

// Update a user by ID
export async function updateUser(id: string, data: Partial<User>) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });

  console.log("User updated", user);
  return user;
}

// Delete a user by ID
export async function deleteUser(id: string) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  console.log("User deleted", user);
  return user;
}
