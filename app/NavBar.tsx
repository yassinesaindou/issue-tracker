import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

export default function NavBar() {
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex justify-between px-5 h-14 items-center space-x- border-b mb-5 ">
      <Link href="/">
        <AiFillBug size={40} />
      </Link>
      <ul className="flex   text-slate-700 space-x-6">
        {links.map((link) => (
          <li
            key={link.href}
            className=" text-slate-700 hover:text-slate-950 transition-colors font-medium">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
