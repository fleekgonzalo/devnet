import useSWR from "swr";
import { getUsePlans } from "@/actions/contracts/router";
import type { Address } from "viem";
import { getPlanByContract } from "@/actions/db/plans";

const fetchPlans = async (user: Address) => {
  const planAddrs = await getUsePlans(user);

  if (!planAddrs) throw new Error(`Plan not found`);

  const plans = await Promise.all(
    planAddrs.map(async (planAddr) => {
      return await getPlanByContract(planAddr);
    })
  );

  return plans;
};

const usePlans = (user: Address) => {
  const { data } = useSWR(user ? user : null, () => fetchPlans(user));

  return data;
};

export default usePlans;
