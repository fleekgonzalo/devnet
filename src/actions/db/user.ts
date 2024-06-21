"use server";

import { UserProfile } from "@dynamic-labs/types";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function authUser(user: UserProfile) {
  if (user.userId) {
    const _user = await prisma.user.findUnique({
      where: {
        id: user.userId,
      },
    });

    if (!_user) {
      const _user = await prisma.user.create({
        data: {
          id: user.userId,
        },
      });
      console.log("User created", _user);
    }

    console.log("User login", _user);
  }
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
export async function updateUser(id: string, data: Prisma.UserUpdateInput) {
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
