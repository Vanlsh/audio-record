"use client";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { title: "Audio", link: "/audio", color: "#ff6efd" },
  { title: "Form", link: "/", color: "#5ddfff" },
  { title: "Stock", link: "/stock", color: "#6ed6ff" },
];

export const AppNavbar = () => {
  const pathname = usePathname() || "/";

  return (
    <Navbar>
      <NavbarContent
        className="h-[34px] p-[1.5px] mx-auto gap-[1.5px] rounded-xl bg-custom-gradient border-custom-gradient overflow-hidden"
        justify="center"
      >
        {links.map((link, index) => {
          const isActive = pathname === link.link;

          return (
            <NavbarItem key={link.title} className="flex-1 h-full">
              <Link
                className={clsx(
                  "bg-[#1E1E1E] flex w-[100px] h-full items-center justify-center font-semibold text-xs",
                  {
                    "rounded-l-xl": index === 0,
                    "rounded-r-xl": index === links.length - 1,
                  }
                )}
                href={link.link}
                style={isActive ? { color: link.color } : {}}
              >
                {link.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </Navbar>
  );
};
