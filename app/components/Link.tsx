import Link from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  label: string;
}
export default function CustomLink({ href, label }: Props) {
  return (
    <Link href={href} legacyBehavior>
      <RadixLink href={href}>{label}</RadixLink>
    </Link>
  );
}
