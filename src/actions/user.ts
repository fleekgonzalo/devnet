"use server";

import { PrismaClient } from "@prisma/client";
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
      },
    });

    console.log("User created", user);
  }

  console.log("User login", user);
}

export async function getUser(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) throw new Error("User not found");

  return user;
}
