"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import issueSchema from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type IssueForm = z.infer<typeof issueSchema>;

export default function NewIssuePage() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    reset,
    control,
    handleSubmit,
  } = useForm<IssueForm>({
    resolver: zodResolver(issueSchema),
  });

  const [error, setError] = useState("");

  async function onSubmit(data: IssueForm) {
    try {
      await axios.post("/api/issues", data);
      reset();

      router.push("/issues");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("An Unexpected error has jus occured");
    }
  }

  return (
    <div className="max-w-xl space-y-3 mx-auto">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit((data) => onSubmit(data))}>
        <TextField.Root
          placeholder="Title"
          {...register("title", { required: true })}
        />

        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Decription" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
}
