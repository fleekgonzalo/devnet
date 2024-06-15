import { useUser } from "@/hooks/useUser";
import Link from "next/link";
import React from "react";

const Plans = () => {
  const { plans } = useUser();

  return (
    <section className="relative w-[960px] h-[484px] bg-transparent">
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-[960px] bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#141414]">
          Learning Plans
        </h4>
      </div>
      {plans?.map((plan, index) => {
        return <Plan key={index} name={plan.name} />;
      })}
      <div className="flex justify-between items-start self-stretch relative w-[960px] bg-transparent">
        <div className="px-4 py-3 flex gap-3 justify-end items-start flex-1 flex-wrap relative w-full bg-transparent">
          <Link
            href="/profile/setting/create-plan"
            className="overflow-hidden rounded-xl px-4 flex gap-0 justify-center items-center relative h-10 bg-[#f0f2f5]"
          >
            <div className="overflow-hidden flex flex-col gap-0 items-center relative bg-transparent">
              <p className="text-center font-bold leading-[21px] text-sm text-[#141414]">
                Create Plan
              </p>
            </div>
          </Link>
          <div className="overflow-hidden rounded-xl px-4 flex gap-0 justify-center items-center relative h-10 bg-[#f0f2f5]">
            <div className="overflow-hidden flex flex-col gap-0 items-center relative bg-transparent">
              <p className="text-center font-bold leading-[21px] text-sm text-[#141414]">
                Show All
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Plan = ({ name }: { name: string }) => {
  return (
    <div className="px-4 py-3 flex justify-between items-center self-stretch relative w-[960px] bg-white">
      <div className="flex gap-4 items-center relative bg-transparent">
        <div className="overflow-hidden rounded-lg relative w-[85px] h-12 bg-[url('https://picsum.photos/id/56/48/85')] bg-cover bg-center"></div>
        <div className="overflow-hidden flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
          <p className="leading-6 text-base text-[#141414]">{name}</p>
        </div>
      </div>
      <div className="flex flex-col gap-0 items-start relative bg-transparent">
        <div className="flex gap-0 justify-center items-center flex-1 relative w-7 h-full bg-transparent">
          <div className="overflow-hidden relative w-6 h-6 bg-transparent">
            <svg
              width="16"
              height="4"
              viewBox="0 0 16 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.125 2C9.125 2.62132 8.62132 3.125 8 3.125C7.37868 3.125 6.875 2.62132 6.875 2C6.875 1.37868 7.37868 0.875 8 0.875C8.62132 0.875 9.125 1.37868 9.125 2V2ZM14.375 0.875C13.7537 0.875 13.25 1.37868 13.25 2C13.25 2.62132 13.7537 3.125 14.375 3.125C14.9963 3.125 15.5 2.62132 15.5 2C15.5 1.37868 14.9963 0.875 14.375 0.875V0.875ZM1.625 0.875C1.00368 0.875 0.5 1.37868 0.5 2C0.5 2.62132 1.00368 3.125 1.625 3.125C2.24632 3.125 2.75 2.62132 2.75 2C2.75 1.37868 2.24632 0.875 1.625 0.875V0.875Z"
                fill="#141414"
              />
            </svg>
            <div className="flex flex-col gap-0 items-start relative w-[15px] h-0.5 bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
