"use client";

import About from "@/components/profile/about";
import Header from "@/components/profile/header";
import Nfts from "@/components/profile/nfts";
import Plans from "@/components/profile/plans";

const Profile = () => {
  return (
    <div className="flex gap-y-5 flex-col w-full">
      <Header />
      <About />
      <Nfts />
      <Plans />
    </div>
  );
};

export default Profile;
