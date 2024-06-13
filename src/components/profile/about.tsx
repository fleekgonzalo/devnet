import React from "react";

const About = ({ description }: { description: string }) => {
  return (
    <section>
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#121417]">
          About
        </h4>
      </div>
      <div className="px-4 pt-1 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <p className="leading-6 text-base text-[#121417]">{description}</p>
      </div>
    </section>
  );
};

export default About;
