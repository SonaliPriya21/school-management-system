import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z.string().min(3, "Must be 3 characters").trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 character long" })
    .regex(/[a-zA-Z]/, { message: "contain at least one letter." })
    .regex(/[0-9]/, { message: "contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "contain at least one special character.",
    })
    .trim(),
  phone: z.string().min(10).max(10),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z.string().trim(),
});

export type SignupFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | {
      errors?: string;
    }
  | undefined;
export type SessionPayload = { email: string; expiresAt: Date };

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | {
      errors?: string;
    }
  | undefined;
