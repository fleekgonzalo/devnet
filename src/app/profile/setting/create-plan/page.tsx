"use client";

import { useUser } from "@/hooks/useUser";
import React from "react";
import { useFormState } from "react-dom";
import { useWriteContract } from "wagmi";
import { FACTORY_ABI } from "@/abis/factory";
import { factoryCreatePlan } from "@/actions/contracts/factory";

const CreatePlanForm = () => {
  return (
    <>
      <div className="px-4 py-3 flex gap-4 items-end flex-1 flex-wrap relative h-full bg-transparent">
        <div className="flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
          <div className="pt-0 pb-2 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
            <p className="font-medium leading-6 text-base text-[#0d141c]">
              Name
            </p>
          </div>
          <input
            className="overflow-hidden rounded-xl p-4 flex gap-0 items-center self-stretch relative w-full h-14 bg-[#e8edf5]"
            name="name"
            placeholder="Your Plan Name"
          />
        </div>
      </div>

      <div className="w-[80%] px-4 py-3 flex gap-4 items-end flex-1 flex-wrap relative h-full bg-transparent">
        <div className="flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
          <div className="pt-0 pb-2 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
            <p className="font-medium leading-6 text-base text-[#0d141c]">
              Description
            </p>
          </div>
          <textarea
            className="overflow-hidden rounded-xl p-4 flex gap-0 items-start flex-1 self-stretch relative w-full h-full bg-[#e8edf5]"
            name="description"
          />
        </div>
      </div>

      <div className="px-4 py-3 flex gap-4 items-end flex-1 flex-wrap relative h-full bg-transparent">
        <div className="flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
          <div className="pt-0 pb-2 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
            <p className="font-medium leading-6 text-base text-[#0d141c]">
              Price
            </p>
          </div>
          <input
            className="overflow-hidden rounded-xl p-4 flex gap-0 items-center self-stretch relative w-full h-14 bg-[#e8edf5]"
            placeholder="0"
            type="number"
            name="price"
          />
        </div>

        <div className="flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
          <div className="pt-0 pb-2 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
            <p className="font-medium leading-6 text-base text-[#0d141c]">
              Period ( Days )
            </p>
          </div>
          <input
            className="overflow-hidden rounded-xl p-4 flex gap-0 items-center self-stretch relative w-full h-14 bg-[#e8edf5]"
            placeholder="0"
            type="number"
            name="period"
          />
        </div>

        <div className="flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
          <div className="pt-0 pb-2 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
            <p className="font-medium leading-6 text-base text-[#0d141c]">
              Total Supply
            </p>
          </div>
          <input
            className="overflow-hidden rounded-xl p-4 flex gap-0 items-center self-stretch relative w-full h-14 bg-[#e8edf5]"
            placeholder="0"
            type="number"
            name="totalSupply"
          />
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-3 flex gap-0 items-start self-stretch relative w-full bg-transparent"
      >
        <div className="overflow-hidden rounded-xl px-4 flex gap-0 justify-center items-center flex-1 relative w-full h-10 bg-[#2194f2]">
          <div className="overflow-hidden flex flex-col gap-0 items-center relative bg-transparent">
            <small className="text-center font-bold leading-[21px] text-sm text-[#f7fafc]">
              Create Plan
            </small>
          </div>
        </div>
      </button>
    </>
  );
};

const Page = () => {
  const { user } = useUser();

  const { writeContractAsync } = useWriteContract();

  async function action(_: null, formData: FormData) {
    if (!user?.id) throw new Error("User not found");

    const userId = user.id;

    const period = formData.get("period");
    const price = formData.get("price");
    const totalSupply = formData.get("totalSupply");
    const name = formData.get("name");
    const description = formData.get("description");
    if (
      typeof name !== "string" ||
      typeof description !== "string" ||
      typeof period !== "string" ||
      typeof price !== "string" ||
      typeof totalSupply !== "string"
    )
      throw new Error("Period must be a number");

    const hash = await writeContractAsync({
      abi: FACTORY_ABI,
      address: "0xbcd773e55e8B737014D08D78d67d762F8bb83a21",
      functionName: "createPlan",
      args: [name, "PLAN", BigInt(totalSupply), BigInt(price), BigInt(period)],
    });

    await factoryCreatePlan(hash, userId, {
      name,
      period,
      description,
    });

    return null;
  }

  const [_, formAction] = useFormState(action, null);

  return (
    <form
      action={formAction}
      className="overflow-hidden flex flex-col gap-0 items-start relative w-[960px] bg-transparent"
    >
      <div className="p-4 flex justify-between items-start self-stretch flex-wrap relative w-full bg-transparent">
        <div className="flex flex-col gap-3 items-start relative bg-transparent">
          <div className="flex flex-col gap-0 items-start relative w-[358px] h-10 bg-transparent">
            <h2 className="font-bold leading-10 text-[32px] text-[#0d141c]">
              Create a Plan
            </h2>
          </div>
          <div className="flex flex-col gap-0 items-start relative bg-transparent">
            <small className="leading-[21px] text-sm text-[#4a789c]">
              Plans are a way to offer a paid subscription for your work
            </small>
          </div>
        </div>
      </div>

      <CreatePlanForm />
    </form>
  );
};

export default Page;
