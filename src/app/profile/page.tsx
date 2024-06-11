"use client";

import Info from "@/components/profile/info";
import Sidebar from "@/components/profile/sidebar";
import React from "react";

const Profile = () => {
  return (
    <div className="w-full flex mt-[65px]">
      <Sidebar />
      <div className="flex-1">
        <Info />
      </div>
    </div>
  );
};

export default Profile;
