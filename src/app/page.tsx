import { Description, Features, Scroll } from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[960px] mt-[65px]">
      <div className="w-full flex flex-row items-center justify-center">
        <div className="p-4 flex flex-col gap-3 self-stretch relative w-full bg-transparent">
          <div>
            <Image src="/banner.jpg" alt="coding" height={480} width={960} />
          </div>
          <Features />
          <Scroll />
          <Description />
        </div>
      </div>
    </main>
  );
}
