import React from "react";

const Nfts = () => {
  return (
    <section>
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#121417]">
          Owned DevNFTs
        </h4>
      </div>
      <div className="p-4 flex flex-col gap-3 items-start self-stretch relative w-full h-[200px] bg-transparent">
        <div className="flex gap-3 items-start flex-1 self-stretch relative w-full h-full bg-transparent">
          <div className="flex flex-col gap-3 items-start self-stretch relative w-[284px] h-full bg-transparent">
            <div className="overflow-hidden rounded-xl relative w-full h-full bg-[url('https://picsum.photos/id/53/128/128')] bg-cover bg-center"></div>
          </div>
          <div className="flex flex-col gap-3 items-start self-stretch relative w-[284px] h-full bg-transparent">
            <div className="overflow-hidden rounded-xl relative w-full h-full bg-[url('https://picsum.photos/id/12/128/128')] bg-cover bg-center"></div>
          </div>
          <div className="flex flex-col gap-3 items-start self-stretch relative w-[284px] h-full bg-transparent">
            <div className="overflow-hidden rounded-xl relative w-full h-full bg-[url('https://picsum.photos/id/11/128/128')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nfts;
