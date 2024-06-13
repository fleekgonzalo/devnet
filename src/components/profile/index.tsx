"use client";

import { useUser } from "@/hooks/useUser";
import About from "./about";
import Header from "./header";
import Products from "./products";
import Nfts from "./nfts";
import Plans from "./plans";

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="p-12 flex gap-y-5 flex-col w-full">
      <Header />

      <About description={user?.description || "No about description"} />

      <Products />

      <Nfts />

      <Plans />
    </div>
  );
};

export default Profile;
