import { Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function LoadingIssueDetailPage() {
  return (
    <div>
      <div>
        <Skeleton width={"25%"} />
        <Flex gap={"4"} my={"2"}>
          <Skeleton width={"50px"} />
          <Skeleton width={"50px"} />
        </Flex>
        <Card className="prose " mt={"4"}>
          <Skeleton count={3} />
        </Card>
      </div>
    </div>
  );
}
