import Sidebar from "@/components/profile/sidebar";
import React from "react";

const Page = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full min-h-screen flex pt-[65px] overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-16 pt-10 pl-20">{children}</div>
    </div>
  );
};

export default Page;
