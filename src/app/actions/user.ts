"use server";

import { z } from "zod";
import db from "../lib/prisma";
import { parseSession } from "../lib/session";
import { Role } from "@prisma/client";
import { AddStudentFormSchema } from "@/app/lib/student";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const session = await parseSession();

  const user = await db.user.findFirst({
    where: {
      email: String(session?.email),
    },
  });

  if (!user) {
    return {
      errors: "not found",
    };
  }

  return user;
};

export const createUser = async (
  user: z.infer<typeof AddStudentFormSchema>
) => {
  const validatedFields = AddStudentFormSchema.safeParse(user);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  await db.user.create({
    data: {
      ...user,
      role: Role.Student,
    },
  });
  redirect("/student");
};

export const deleteUser = async () => {};

export const updateUser = async () => {};

export const getStudents = async () => {
  const students = await db.user.findMany({
    where: { role: Role.Student },
  });
  return students;
};
