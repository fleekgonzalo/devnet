"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import Link from "next/link";
import usePlans from "@/hooks/usePlans";

const LearningPlan = () => {
  const { user } = useCurrentUser();
  const { plans } = usePlans(user?.startedPlan);

  return (
    <section className="relative w-[960px] bg-transparent">
      <div className="px-4 pt-5 pb-3 flex flex-col gap-0 items-start self-stretch relative w-[960px] bg-transparent">
        <h4 className="font-bold leading-7 text-[22px] text-[#141414]">
          Learning
        </h4>
        <div>
          {plans &&
            plans.map((plan, index) => (
              <div key={index}>
                <Link href={`/profile/plan/${plan.id}`}>{plan.name}</Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPlan;
