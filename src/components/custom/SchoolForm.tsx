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

const SchoolForm = ({ onSubmit, form }: Props) => {
  return (
    <>
      <FormField
        control={form.control}
        name="school.name"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>School name</FormLabel>
            <FormControl>
              <Input
                type="text"
                id="name"
                placeholder="name"
                {...field}
                onChange={(event) =>
                  form.setValue("school.name", event.target.value)
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="school.email"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>School email</FormLabel>
            <FormControl>
              <Input
                type="email"
                id="email"
                placeholder="name@abcd.com"
                {...field}
                onChange={(event) =>
                  form.setValue("school.email", event.target.value)
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="school.phone"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>School phone</FormLabel>
            <FormControl>
              <Input
                type="tel"
                id="phone"
                placeholder="1234567890"
                {...field}
                onChange={(event) =>
                  form.setValue("school.phone", event.target.value)
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="school.address"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>School address</FormLabel>
            <FormControl>
              <Input
                type="address"
                id="address"
                placeholder="Enter address"
                {...field}
                onChange={(event) =>
                  form.setValue("school.address", event.target.value)
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className="w-full items-center gap-1.5" onClick={onSubmit}>
        Signup
      </Button>
    </>
  );
};
export default SchoolForm;
