import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import IssueStatusBadge from "../components/IssueStatusBadge";
import CustomLink from "../components/Link";
import IssueActions from "./IssueActions";
// import Link from "next/link";

export default async function IssuesPage() {
  const issues = await prisma.issue.findMany();

  
  return (
    <div>
      <IssueActions />
      <Table.Root className="w-[90%] mx-auto border rounded-md">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell>
                <CustomLink
                  href={`/issues/${issue.id}`}
                  label={issue.title}></CustomLink>

                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.RowHeaderCell>
              <Table.RowHeaderCell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.RowHeaderCell>
              <Table.RowHeaderCell className="hidden md:table-cell">
                {issue.createtAt.toLocaleDateString()}
              </Table.RowHeaderCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
