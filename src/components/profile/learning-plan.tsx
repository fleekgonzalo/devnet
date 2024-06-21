"use client";

import Link from "next/link";
import usePlans from "@/hooks/usePlans";
import { useAccount } from "wagmi";

const LearningPlan = () => {
  const account = useAccount();
  const plans = usePlans(account.address!);

  return (
    <section className="relative w-[960px] bg-transparent">
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-[960px] bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#141414]">
          Learning
        </h4>
        <div className="w-full mt-[30px]">
          {plans &&
            plans.map((plan, index) => (
              <div
                key={index}
                className="px-10 py-4 w-full bg-slate-300 rounded-lg"
              >
                <Link href={`/profile/plan/${plan.id}`}>{plan.title}</Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPlan;
