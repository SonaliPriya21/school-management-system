import { z } from "zod";

export const SchoolFormSchema = z.object({
  name: z.string().min(3, "Must be 3 characters").trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  phone: z.string().length(10),
  address: z.string().min(1, "School address is required"),
});

export type SchoolFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        address?: string[];
      };
      message?: string;
    }
  | {
      errors?: string;
    }
  | undefined;
