"use client";
import issueSchema from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type IssueForm = z.infer<typeof issueSchema>

export default  function NewIssuePage() {
  const router = useRouter();
  const { register, formState, reset, control, handleSubmit } =
    useForm<IssueForm>({
      resolver:zodResolver(issueSchema)
    });
  const [error, setError] = useState("");

  async function onSubmit(data: IssueForm) {
    try {
      await axios.post("/api/issues", data);
      reset();

      router.push("/issues");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }catch (err) {
      setError("An Unexpected error has jus occured");
    }
  }
 
  return (
    <div className="max-w-xl space-y-3 mx-auto">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(data => onSubmit(data))}>
        <TextField.Root
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {formState.errors.title && <Text color="red">Title is required</Text>}

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Decription" {...field} />
          )}
        />

        {formState.errors.description && <Text color="red" as='p'>Description is required</Text> }
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
}
