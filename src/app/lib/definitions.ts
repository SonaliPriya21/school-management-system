import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z.string().min(3, "Must be 3 characters").trim(),
  email: z.string().email({ message: "please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 character long" })
    .regex(/[a-zA-Z]/, { message: "contain at least one letter." })
    .regex(/[0-9]/, { message: "contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "contain at least one special character.",
    })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
export type SessionPayload = { email: string; expiresAt: Date };
