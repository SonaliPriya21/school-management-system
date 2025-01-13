"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import db from "../lib/prisma";
import { SchoolFormSchema } from "../lib/school";
import { decrypt } from "../lib/session";

export const createSchool = async (
  formData: z.infer<typeof SchoolFormSchema>
) => {
  const validatedFields = SchoolFormSchema.safeParse({
    ...formData,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);
  if (!session?.email) {
    redirect("/login");
  }

  // Create school
  const school = await db.school.create({ data: validatedFields.data });

  // Assign the school to user creating it
  await db.user.update({
    data: {
      schoolId: school.id,
    },
    where: {
      email: session?.email as string,
    },
  });

  redirect("/dashboard");
};
