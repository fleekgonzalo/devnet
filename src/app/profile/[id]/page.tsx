"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import type { ParamsID } from "@/types";

const Page = () => {
  const { id } = useParams<ParamsID>();
  const { user } = useUser(id);

  console.log(user);

  return <div>Page</div>;
};

export default Page;
