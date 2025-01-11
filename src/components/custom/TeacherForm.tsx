"use client";

import { createUser } from "@/app/actions/user";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gender, Subject } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import NewUserForm from "./NewUserForm";
import { AddTeacherFormSchema } from "@/app/lib/teacher";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TeacherForm = () => {
  const form = useForm<z.infer<typeof AddTeacherFormSchema>>({
    resolver: zodResolver(AddTeacherFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      gender: Gender.Female,
      detail: "",
      bloodGroup: "",
      phone: "",
      address: "",
      subject: Subject.Math,
      class: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof AddTeacherFormSchema>) => {
    await createUser(values); // TODO update to create teacher
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-5 grid-cols-2"
      >
        <NewUserForm form={form} />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(Subject).map((elem) => {
                      return (
                        <SelectItem value={elem} key={elem}>
                          {elem}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="class"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Class</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(Subject).map((elem) => {
                      return (
                        <SelectItem value={elem} key={elem}>
                          {elem}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
export default TeacherForm;
