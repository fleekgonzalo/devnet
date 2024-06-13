import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <section>
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-full bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#121417]">
          Products
        </h4>
      </div>
      <div className="px-4 pt-1 pb-3 flex flex-row gap-x-10 items-start self-stretch relative w-full bg-transparent">
        <Link href="/products">
          <div
            className={`overflow-hidden rounded-[64px] relative w-32 h-32 bg-[url('https://picsum.photos/id/12/128/128')] bg-cover bg-center`}
          ></div>
        </Link>
        <Link href="/products">
          <div
            className={`overflow-hidden rounded-[64px] relative w-32 h-32 bg-[url('https://picsum.photos/id/12/128/128')] bg-cover bg-center`}
          ></div>
        </Link>
      </div>
    </section>
  );
};

export default Products;
