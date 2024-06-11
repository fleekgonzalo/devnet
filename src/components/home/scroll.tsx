import React from "react";

//TODO: Image load optimized

export const Scroll = () => {
  return (
    <div className="flex gap-3 items-start flex-1 self-stretch relative w-full h-full bg-transparent">
      <div className="flex flex-col gap-3 items-start self-stretch relative w-[301px] h-full bg-transparent">
        <div className="overflow-hidden rounded-xl relative w-full h-[169px] bg-[url('https://picsum.photos/id/64/169/301')] bg-cover bg-center"></div>
      </div>
      <div className="flex flex-col gap-3 items-start self-stretch relative w-[301px] h-full bg-transparent">
        <div className="overflow-hidden rounded-xl relative w-full h-[169px] bg-[url('https://picsum.photos/id/90/169/301')] bg-cover bg-center"></div>
      </div>
      <div className="flex flex-col gap-3 items-start self-stretch relative w-[301px] h-full bg-transparent">
        <div className="overflow-hidden rounded-xl relative w-full h-full bg-[url('https://picsum.photos/id/20/170/301')] bg-cover bg-center"></div>
      </div>
    </div>
  );
};
