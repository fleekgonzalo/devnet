"use client";

import Profile from "@/components/profile";
import Sidebar from "@/components/profile/sidebar";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex mt-[65px]">
      <Sidebar />
      <div className="flex-1">
        <Profile />
      </div>
    </div>
  );
};

export default Page;
