import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="overflow-hidden flex flex-col gap-0 items-start w-80 min-h-screen h-full bg-transparent border-r-2 border-zinc-100 shadow-lg">
      <div className="p-4 flex flex-col justify-between items-start self-stretch relative w-full h-[700px] bg-white">
        <div className="flex flex-col gap-4 items-start self-stretch relative w-full bg-transparent">
          <div className="flex flex-col gap-2 items-start flex-1 self-stretch relative w-full h-full bg-transparent">
            <Link
              href="/profile"
              className="rounded-xl px-3 py-2 flex gap-3 items-center self-stretch relative w-full bg-[#f0f2f5]"
            >
              <div className="flex flex-col gap-0 items-start relative bg-transparent">
                <p className="font-medium leading-[21px] text-sm text-[#121417]">
                  Overview
                </p>
              </div>
            </Link>
            <div className="px-3 py-2 flex gap-3 items-center self-stretch relative w-full bg-transparent">
              <div className="flex flex-col gap-0 items-start relative bg-transparent">
                <p className="font-medium leading-[21px] text-sm text-[#121417]">
                  Connections
                </p>
              </div>
            </div>
            <div className="px-3 py-2 flex gap-3 items-center self-stretch relative w-full bg-transparent">
              <div className="flex flex-col gap-0 items-start relative bg-transparent">
                <p className="font-medium leading-[21px] text-sm text-[#121417]">
                  Members
                </p>
              </div>
            </div>
            <Link
              href="/profile/setting"
              className="px-3 py-2 flex gap-3 items-center self-stretch relative w-full bg-transparent"
            >
              <div className="flex flex-col gap-0 items-start relative bg-transparent">
                <p className="font-medium leading-[21px] text-sm text-[#121417]">
                  Settings
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
