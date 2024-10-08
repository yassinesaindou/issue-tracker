import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

export default function IssueStatusBadge({ status }: { status: Status }) {
  const color =
    status === "OPEN" ? "red" : status === "IN_PROGRESS" ? "violet" : "green";
  return <Badge size={'2'} radius="full"   color={color}>{status}</Badge>;
}
