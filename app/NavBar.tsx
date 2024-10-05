"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

export default function NavBar() {
  const currentPath = usePathname();

  console.log(currentPath);
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex justify-between px-5 h-14 items-center space-x- border-b mb-5 ">
      <Link href="/">
        <AiFillBug size={40} />
      </Link>
      <ul className="flex   text-zinc-700 space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
              "text-zinc-950": currentPath === link.href,
              "text-zinc-700": currentPath !== link.href,
              " hover:text-zinc-950 transition-colors font-medium ": true,
            })}
            href={link.href}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
