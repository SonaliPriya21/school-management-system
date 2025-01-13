"use client";

import { SignUpFormSchema } from "@/app/lib/definitions";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type Props = {
  onSubmit: () => void;
  form: UseFormReturn<z.infer<typeof SignUpFormSchema>>;
};

const SignupUserForm = ({ onSubmit, form }: Props) => {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel> Name</FormLabel>
            <FormControl>
              <Input type="text" id="name" placeholder="name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel> Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                id="email"
                placeholder="name@abcd.com"
                {...field}
                onChange={(event) => {
                  form.setValue("email", event.target.value);
                  form.setValue("school.email", event.target.value);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input
                type="tel"
                id="phone"
                placeholder="1234567890"
                {...field}
                onChange={(event) => {
                  form.setValue("phone", event.target.value);
                  form.setValue("school.phone", event.target.value);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel> Password</FormLabel>
            <FormControl>
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button
        className="w-full items-center gap-1.5 bg-blue-500"
        onClick={onSubmit}
      >
        Next
      </Button>
    </>
  );
};
export default SignupUserForm;
