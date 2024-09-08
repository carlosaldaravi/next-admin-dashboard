"use client";
import SidebarFooter from "./footer";
import SidebarHeader from "./header";
import SidebarNavbar from "./navbar";

export default function Sidebar() {
  return (
    <div className="hidden lg:flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 p-6 min-w-[200px]">
      <SidebarHeader />
      <SidebarNavbar />
      <SidebarFooter />
    </div>
  );
}
