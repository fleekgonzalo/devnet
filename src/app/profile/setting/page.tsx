"use client";

import { updateUser } from "@/actions/db/user";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Plan } from "@prisma/client";
import assert from "assert";
import Link from "next/link";
import React from "react";

const SettingPlanItem = ({ plan }: { plan: Plan }) => {
  return (
    <Link
      href={`/profile/plan/${plan.id}`}
      className="px-4 py-2 flex justify-between items-center self-stretch relative w-full h-[72px] bg-[#f7fafc]"
    >
      <div className="flex gap-4 items-center relative bg-transparent">
        <div className="rounded-lg flex gap-0 justify-center items-center relative w-12 h-12 bg-[#e8edf5]">
          <div className="overflow-hidden relative w-6 h-6 bg-transparent">
            <svg
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 0.5H14C12.8197 0.5 11.7082 1.05573 11 2C10.2918 1.05573 9.18034 0.5 8 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V14C0.5 14.8284 1.17157 15.5 2 15.5H8C9.24264 15.5 10.25 16.5074 10.25 17.75C10.25 18.1642 10.5858 18.5 11 18.5C11.4142 18.5 11.75 18.1642 11.75 17.75C11.75 16.5074 12.7574 15.5 14 15.5H20C20.8284 15.5 21.5 14.8284 21.5 14V2C21.5 1.17157 20.8284 0.5 20 0.5V0.5ZM8 14H2V2H8C9.24264 2 10.25 3.00736 10.25 4.25V14.75C9.6015 14.262 8.8116 13.9987 8 14V14ZM20 14H14C13.1884 13.9987 12.3985 14.262 11.75 14.75V4.25C11.75 3.00736 12.7574 2 14 2H20V14Z"
                fill="#0D141C"
              />
            </svg>
            <div className="flex flex-col gap-0 items-start relative w-[21px] h-[18px] bg-transparent"></div>
          </div>
        </div>

        <div className="flex flex-col gap-0 justify-center items-start relative bg-transparent">
          <div className="overflow-hidden flex flex-col gap-0 items-start relative w-[124px] bg-transparent">
            <p className="font-medium leading-6 text-base text-[#0d141c]">
              {plan.name}
            </p>
          </div>
          <div className="overflow-hidden flex flex-col gap-0 items-start relative bg-transparent">
            <small className="leading-[21px] text-sm text-[#4a789c]">
              Created 4 days ago
            </small>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0 items-start relative bg-transparent">
        <div className="flex gap-0 justify-center items-center flex-1 relative w-7 h-full bg-transparent">
          <div className="overflow-hidden relative w-6 h-6 bg-transparent">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.03062 9.53063L1.53063 17.0306C1.23757 17.3237 0.762431 17.3237 0.469375 17.0306C0.176319 16.7376 0.176319 16.2624 0.469375 15.9694L7.43969 9L0.469375 2.03062C0.176319 1.73757 0.176319 1.26243 0.469375 0.969375C0.762431 0.676319 1.23757 0.676319 1.53063 0.969375L9.03062 8.46937C9.17146 8.61005 9.25059 8.80094 9.25059 9C9.25059 9.19906 9.17146 9.38995 9.03062 9.53063V9.53063Z"
                fill="#0D141C"
              />
            </svg>
            <div className="flex flex-col gap-0 items-start relative w-[9px] h-[17px] bg-transparent"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Page = () => {
  const { user, plans } = useCurrentUser();
  const [isDisable, setIsDisable] = React.useState(true);
  const [bio, setBio] = React.useState("");

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
    setIsDisable(false);
    if (event.target.value === user?.description) setIsDisable(true);
  };

  const handleSave = async () => {
    assert(user, "Setting: User is undefined");
    await updateUser(user?.id, { description: bio });

    alert("Update information success");
  };

  return (
    <div className="overflow-hidden flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
      <div className="p-4 flex justify-between items-start self-stretch flex-wrap relative w-full bg-transparent">
        <div className="flex flex-col gap-0 items-start relative w-72 bg-transparent">
          <h2 className="font-bold leading-10 text-[32px] text-[#0d141c]">
            Settings
          </h2>
        </div>
      </div>

      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#0d141c]">
          About
        </h4>
      </div>

      <div className="px-4 py-3 flex gap-4 items-end flex-1 flex-wrap relative h-full bg-transparent">
        <div className="flex flex-col gap-0 items-start flex-1 relative w-full bg-transparent">
          <div className="pt-0 pb-2 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
            <p className="font-medium leading-6 text-base text-[#0d141c]">
              Bio
            </p>
          </div>
          <textarea
            className="overflow-hidden rounded-xl border border-[#cfdee8] p-[15px] flex gap-0 items-start flex-1 self-stretch relative w-full h-full bg-[#f7fafc]"
            defaultValue={user?.description!}
            onChange={handleBioChange}
          />
        </div>
      </div>
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full h-15 bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#0d141c]">
          Learning plans
        </h4>
      </div>
      <div className="p-4 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <div className="rounded-xl border border-[#cfdee8] p-5 flex justify-between items-center flex-1 self-stretch relative w-full h-full bg-[#f7fafc]">
          <div className="flex flex-col gap-1 items-start relative bg-transparent">
            <div className="flex flex-col gap-0 items-start relative w-[526px] h-5 bg-transparent">
              <p className="font-bold leading-5 text-base text-[#0d141c]">
                New learning plan
              </p>
            </div>
            <div className="flex flex-col gap-0 items-start relative bg-transparent">
              <p className="leading-6 text-base text-[#4a789c]">
                Create a new learning plan to track your progress and share with
                others.
              </p>
            </div>
          </div>
          <Link
            href={"/profile/setting/create-plan"}
            className="overflow-hidden rounded-xl px-4 flex gap-0 justify-center items-center relative w-[84px] h-8 bg-[#2194f2]"
          >
            <div className="overflow-hidden flex flex-col gap-0 items-center relative bg-transparent">
              <small className="text-center font-medium leading-[21px] text-sm text-[#f7fafc]">
                Create
              </small>
            </div>
          </Link>
        </div>
      </div>

      {plans?.map((plan, index) => <SettingPlanItem key={index} plan={plan} />)}

      <div className="px-4 py-6 flex gap-x-2 justify-end relative w-full">
        <button className="overflow-hidden rounded-xl px-4 flex gap-0 justify-center items-center relative w-[84px] h-8 bg-[#f7fafc]">
          <div className="overflow-hidden flex flex-col gap-0 items-center relative bg-transparent">
            <small className="text-center font-medium leading-[21px] text-sm text-black">
              Cancel
            </small>
          </div>
        </button>

        <button
          onClick={handleSave}
          disabled={isDisable}
          className={`overflow-hidden rounded-xl px-4 flex gap-0 justify-center items-center relative w-[84px] h-8 ${isDisable ? "bg-white text-slate-600" : "bg-[#2194f2]"}`}
        >
          <div className="overflow-hidden flex flex-col gap-0 items-center relative bg-transparent">
            <small className="text-center font-medium leading-[21px] text-sm text-[#f7fafc]">
              Save
            </small>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Page;
