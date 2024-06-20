import { Address } from "viem";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { isMintable } from "@/actions/contracts/plan";
import { getPlanById } from "@/actions/db/plans";

type BtnStatus = "Inactive" | "Active" | "Mintable";

const fetchMintableStatus = async ([wallet, planId]: [Address, string]) => {
  const plan = await getPlanById(planId);
  const is = await isMintable(wallet, plan?.contract as Address);
  console.log("is", is);
  return is;
};

export const usePlanBtnStatus = (
  wallet: Address,
  user: User,
  planId: string
) => {
  const [buttonStatus, setButtonStatus] = useState<BtnStatus>("Inactive");

  const { data: isPlanMintable, error } = useSWR(
    user?.startedPlan && wallet && planId && user.startedPlan.includes(planId)
      ? [wallet, planId]
      : null,
    fetchMintableStatus
  );

  useEffect(() => {
    if (user?.startedPlan && user.startedPlan.includes(planId)) {
      console.log(isPlanMintable);
      if (isPlanMintable) {
        console.log("Mintable");
        setButtonStatus("Mintable");
      } else {
        console.log("Acitve");
        setButtonStatus("Active");
      }
    } else {
      setButtonStatus("Inactive");
    }
  }, [user, planId, isPlanMintable]);

  return { buttonStatus, isPlanMintable, error };
};
