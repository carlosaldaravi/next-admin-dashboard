"use client";
import { HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import SidebarLogout from "./logout";

type NavigationType = {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  count?: number;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation: NavigationType[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
    // count: 5,
  },
  { name: "Usuarios", href: "/usuarios", icon: UsersIcon },
];
function SidebarNavbar() {
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  onClick={() => setSelected(item.href)}
                  href={item.href}
                  className={classNames(
                    item.href === selected
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                  )}
                >
                  <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                  {item.name}
                  {item.count ? (
                    <span
                      aria-hidden="true"
                      className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                    >
                      {item.count}
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
            <SidebarLogout />
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarNavbar;
