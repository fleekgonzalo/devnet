import React from "react";

export const Features = () => {
  return (
    <div className="px-4 py-10 flex flex-col gap-10 items-start self-stretch relative w-full bg-transparent">
      <div className="flex flex-col gap-4 items-start self-stretch relative w-full bg-transparent">
        <div className="flex flex-col gap-0 items-start relative w-[720px] bg-transparent">
          <h1 className="tracking-[-1px] font-black leading-[45px] text-4xl text-[#121417]">
            Features
          </h1>
        </div>
        <div className="flex flex-col gap-0 items-start relative w-[720px] bg-transparent">
          <p className="leading-6 text-base text-[#121417]">
            DevNet is a place to share, learn, and grow with other developers.
          </p>
        </div>
      </div>
    </div>
  );
};
