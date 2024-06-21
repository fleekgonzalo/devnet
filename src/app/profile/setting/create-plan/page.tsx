"use client";

import React from "react";
import { useFormState } from "react-dom";
import { useAccount, useWriteContract } from "wagmi";
import { routerCreatePlan } from "@/actions/contracts/router";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { ROUTER_ABI } from "@/abis/router";
import { ROUTER_ADDR } from "@/utils/constants";

const CreatePlanForm = () => {
  return (
    <>
      <div className="px-4 py-3 flex gap-4 items-end flex-1 flex-wrap relative h-full bg-transparent">
        <div className="flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
          <div className="pt-0 pb-2 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
            <p className="font-medium leading-6 text-base text-[#0d141c]">
              Title
            </p>
          </div>
          <input
            className="overflow-hidden rounded-xl p-4 flex gap-0 items-center self-stretch relative w-full h-14 bg-[#e8edf5]"
            name="title"
            placeholder="Your Plan Name"
          />
        </div>
      </div>

      <div className="w-[80%] px-4 py-3 flex gap-4 items-end flex-1 flex-wrap relative h-full bg-transparent">
        <div className="flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
          <div className="pt-0 pb-2 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
            <p className="font-medium leading-6 text-base text-[#0d141c]">
              Introduction
            </p>
          </div>
          <textarea
            className="overflow-hidden rounded-xl p-4 flex gap-0 items-start flex-1 self-stretch relative w-full h-full bg-[#e8edf5]"
            name="introduction"
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

      <div className="flex flex-col gap-0 items-start flex-1 relative w-1/2 bg-transparent">
        <div className="pt-0 pb-2 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
          <p className="font-medium leading-6 text-base text-[#0d141c]">
            Token Name
          </p>
        </div>
        <input
          className="overflow-hidden rounded-xl p-4 flex gap-0 items-center self-stretch relative w-full h-14 bg-[#e8edf5]"
          placeholder="0"
          type="text"
          name="tokenName"
        />
      </div>

      <div className="flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
        <div className="pt-0 pb-2 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
          <p className="font-medium leading-6 text-base text-[#0d141c]">
            Token Symbol
          </p>
        </div>
        <input
          className="overflow-hidden rounded-xl p-4 flex gap-0 items-center self-stretch relative w-full h-14 bg-[#e8edf5]"
          placeholder="0"
          type="text"
          name="tokenSymbol"
        />
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

const parseFormData = (data: FormData) => {
  const period = data.get("period");
  const price = data.get("price");
  const totalSupply = data.get("totalSupply");

  const tokenName = data.get("tokenName");
  const tokenSymbol = data.get("tokenSymbol");

  const title = data.get("title");
  const introduction = data.get("introduction");
  const description = data.get("description");

  if (
    typeof tokenName !== "string" ||
    typeof tokenSymbol !== "string" ||
    typeof introduction !== "string" ||
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof period !== "string" ||
    typeof price !== "string" ||
    typeof totalSupply !== "string"
  )
    throw new Error("Period must be a number");

  return {
    period,
    price,
    totalSupply,
    tokenName,
    tokenSymbol,
    title,
    introduction,
    description,
  };
};

const Page = () => {
  const { user } = useCurrentUser();
  const account = useAccount();
  const { writeContractAsync } = useWriteContract();

  async function action(_: null, formData: FormData) {
    try {
      if (!user?.id) throw new Error("User not found");

      const userId = user.id;
      const {
        period,
        price,
        totalSupply,
        tokenName,
        tokenSymbol,
        title,
        introduction,
        description,
      } = parseFormData(formData);

      const hash = await writeContractAsync({
        abi: ROUTER_ABI,
        address: ROUTER_ADDR,
        functionName: "createPlan",
        args: [
          account.address!,
          tokenName,
          tokenSymbol,
          BigInt(totalSupply),
          BigInt(price),
          BigInt(period),
        ],
      });

      await routerCreatePlan(hash, {
        introduction,
        creator: {
          connect: {
            id: userId,
          },
        },
        title,
        description,
      });

      alert("Plan created successfully");
    } catch (e) {
      console.error(e);
      alert("Something error");
    }

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
