"use client";

import { createStudent } from "@/app/actions/user";
import { AddUserFormSchema } from "@/app/lib/student";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gender, Role } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import NewUserForm from "./NewUserForm";

const StudentForm = () => {
  const form = useForm<z.infer<typeof AddUserFormSchema>>({
    resolver: zodResolver(AddUserFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      gender: Gender.Female,
      detail: "",
      bloodGroup: "",
      phone: "",
      address: "",
      role: Role.Student,
    },
  });

  const onSubmit = async (values: z.infer<typeof AddUserFormSchema>) => {
    await createStudent(values, "", "");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-5 grid-cols-2"
      >
        <NewUserForm form={form} />
        <Button className="w-full" type="submit" variant="secondary">
          Cancel
        </Button>

        <Button className="w-full" type="submit">
          Add
        </Button>
      </form>
    </Form>
  );
};
export default StudentForm;
