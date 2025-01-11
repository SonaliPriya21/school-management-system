import { z } from "zod";
import { Section } from "@prisma/client";

export const AddClassFormSchema = z.object({
  class: z.string().trim(),
  section: z.nativeEnum(Section),
  classStrength: z.number(),
});

export type AddClassFormState =
  | {
      errors?: {
        class?: string[];
        section?: string[];
        classStrength?: string[];
      };
      message?: string;
    }
  | {
      errors?: string;
    }
  | undefined;
