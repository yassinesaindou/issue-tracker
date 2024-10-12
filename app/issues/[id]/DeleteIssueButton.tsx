"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteIssueButton({ issueId }: { issueId: number }) {
  const [error, setError] = useState(false);
  const router = useRouter();

  async function DeleteIssue() {
    try {
      await axios.delete(`/api/issues/${issueId}`);
      router.push("/issues");
      router.refresh();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError(true);
    }
  }
  return (
    <>
      
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red">Delete Issue</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Delete Issue</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Do You really want to delete this issue?
            </AlertDialog.Description>
            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button variant="solid" color="red" onClick={DeleteIssue}>
                  Delete Issue
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
     
        <AlertDialog.Root open={error}>
          <AlertDialog.Content>
            <AlertDialog.Title>Error</AlertDialog.Title>
            <AlertDialog.Description>
              This issue could not be found
                          </AlertDialog.Description>
                          <Button color="red" onClick={() => setError(false)}>OK</Button >
          </AlertDialog.Content>
        </AlertDialog.Root>
      
    </>
  );
}
