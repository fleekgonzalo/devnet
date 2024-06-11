import React from "react";

export const Description = () => {
  return (
    <div className="flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
      <div className="px-10 py-20 flex flex-col gap-8 justify-end items-center flex-1 self-stretch relative w-full h-full bg-transparent">
        <div className="flex flex-col gap-0 items-center flex-1 relative w-[720px] h-full bg-transparent">
          <h1 className="tracking-[-1px] text-center font-black leading-[45px] text-4xl text-[#121417]">
            Ready to join DevNet?
          </h1>
        </div>
        <div className="flex gap-0 justify-center items-start flex-1 self-stretch relative w-full h-full bg-transparent">
          <div className="flex gap-0 justify-center items-start self-stretch relative h-full bg-transparent">
            <div className="overflow-hidden rounded-xl px-5 flex gap-0 justify-center items-center flex-1 relative w-full h-12 bg-[#1c8cd6]">
              <div className="overflow-hidden flex flex-col gap-0 items-center relative bg-transparent">
                <p className="text-center font-bold leading-6 text-base text-white">
                  Launch App
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
