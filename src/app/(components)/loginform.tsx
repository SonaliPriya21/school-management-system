"use client";

import { login } from "@/app/actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginFormSchema, LoginFormState } from "../lib/definitions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

const LoginForm = () => {
  const [formResponse, setFormResponse] = useState<LoginFormState>();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
    const data = await login(values);
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
        {formResponse?.errors === "Wrong password" && (
          <p className="text-red-700 text-sm self-start">
            Wrong password! Please try again!
          </p>
        )}
        <Button
          className="w-full items-center gap-1.5 bg-blue-500"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
