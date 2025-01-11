"use client";

import { AddClassFormSchema } from "@/app/lib/class";
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
import { Section } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ClassForm = () => {
  const form = useForm<z.infer<typeof AddClassFormSchema>>({
    resolver: zodResolver(AddClassFormSchema),
    defaultValues: {
      class: "",
      section: Section.A,
    },
  });

  const onSubmit = async (values: z.infer<typeof AddClassFormSchema>) => {
    // await createUser(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-5 grid-cols-2">
          <FormField
            control={form.control}
            name="class"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel> Class</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="class"
                    placeholder="Class"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Section</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(Section).map((elem) => {
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
            name="classStrength"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel> Class strength</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    id="classStrength"
                    placeholder="Total students"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-5 grid-cols-2 mt-5">
          <Button className="w-full" type="submit" variant="secondary">
            Cancel
          </Button>

          <Button className="w-full" type="submit">
            Add
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default ClassForm;
