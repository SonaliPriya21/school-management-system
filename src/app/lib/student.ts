import { Gender } from "@prisma/client";
import { z } from "zod";

export const AddStudentFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 character long" })
    .regex(/[a-zA-Z]/, { message: "contain at least one letter." })
    .regex(/[0-9]/, { message: "contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "contain at least one special character.",
    })
    .trim(),
  name: z.string().min(3, "Must be 3 characters").trim(),
  gender: z.nativeEnum(Gender),
  detail: z.string(),
  bloodGroup: z
    .string()
    .min(2, "Please enter valid blood group")
    .max(3, "Please enter valid blood group"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(10, "Please enter a valid phone number"),
  address: z.string().min(1, "Please enter valid address"),
});

export type AddStudentFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        gender?: string[];
        detail?: string[];
        bloodGroup?: string[];
        contact?: string[];
        address?: string[];
      };
      message?: string;
    }
  | {
      errors?: string;
    }
  | undefined;
