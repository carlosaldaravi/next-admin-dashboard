import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { logout } from "@/actions/auth";

function SidebarLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/auth/login");
  };
  return (
    <li key={"logout"}>
      <a
        onClick={() => handleLogout()}
        href="#"
        className="text-gray-400 hover:bg-gray-800 hover:text-white
                      group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
      >
        <ArrowLeftStartOnRectangleIcon
          aria-hidden="true"
          className="h-6 w-6 shrink-0"
        />
        Salir
      </a>
    </li>
  );
}

export default SidebarLogout;
