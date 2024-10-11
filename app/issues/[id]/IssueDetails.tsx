import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  issue: Issue;
}
export default function IssueDetails({ issue }: Props) {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap={"4"} my={"2"}>
        <IssueStatusBadge status={issue.status} />

        <Text>{issue.createtAt.toDateString()}</Text>
      </Flex>
      <Card className="prose " mt={"4"}>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
}
