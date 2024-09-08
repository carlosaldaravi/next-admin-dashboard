import Image from "next/image";
import React from "react";

function SidebarFooter() {
  return (
    <a
      href="/perfil"
      className="fixed bottom-5 flex items-center gap-x-4 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
    >
      <Image
        alt=""
        width={32}
        height={32}
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="rounded-full bg-gray-800"
      />
      <span className="sr-only">Tu perfil</span>
      <span aria-hidden="true">Carlos Aldaravi</span>
    </a>
  );
}

export default SidebarFooter;
