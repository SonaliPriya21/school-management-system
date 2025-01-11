"use client";

import { signup } from "@/app/actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignupFormSchema, SignupFormState } from "@/app/lib/definitions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

const SignupForm = () => {
  const [formResponse, setFormResponse] = useState<SignupFormState>();

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignupFormSchema>) => {
    const data = await signup(values);
    setFormResponse(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-5 items-center flex-col"
      >
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
        {formResponse?.errors === "Already exists" && (
          <p className="text-red-700 text-sm self-start">
            Already exists! Please login!
          </p>
        )}
        <Button
          className="w-full items-center gap-1.5 bg-blue-500"
          type="submit"
        >
          Signup
        </Button>
      </form>
    </Form>
  );
};
export default SignupForm;
