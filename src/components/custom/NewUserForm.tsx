import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Gender, Subject } from "@prisma/client";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<
    {
      email: string;
      password: string;
      name: string;
      gender: "Male" | "Female";
      detail: string;
      bloodGroup: string;
      phone: string;
      address: string;
      subject?: Subject;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    undefined
  >;
}

const NewUserForm = ({ form }: Props) => {
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
            <FormLabel>Password</FormLabel>
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
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Gender</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(Gender).map((elem) => {
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
        name="detail"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel> Details</FormLabel>
            <FormControl>
              <Input
                type="text"
                id="detail"
                placeholder="Enter details"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="bloodGroup"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Blood group</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select blood group" />
                </SelectTrigger>
                <SelectContent>
                  {["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"].map(
                    (elem) => {
                      return (
                        <SelectItem value={elem} key={elem}>
                          {elem}
                        </SelectItem>
                      );
                    }
                  )}
                </SelectContent>
              </Select>
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
            <FormLabel>Phone number</FormLabel>
            <FormControl>
              <Input
                type="text"
                id="phone"
                placeholder="Enter phone number"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel> Address</FormLabel>
            <FormControl>
              <Input
                type="text"
                id="address"
                placeholder="Enter address"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default NewUserForm;
