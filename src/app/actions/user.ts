"use server";

import { AddUserFormSchema } from "@/app/lib/student";
import { Role } from "@prisma/client";
import { redirect } from "next/navigation";
import { z } from "zod";
import db from "../lib/prisma";
import { parseSession } from "../lib/session";

const utils = {
  addUser: async (
    user: z.infer<typeof AddUserFormSchema>,
    role: Role,
    schoolId: string
  ) => {
    if (!schoolId) {
      return {
        errors: "User must be linked to a school",
      };
    }

    const validatedFields = AddUserFormSchema.safeParse(user);
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    return await db.user.create({
      data: {
        ...user,
        role,
        schoolId,
      },
    });
  },
};

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

export const createPrincipal = async (
  user: z.infer<typeof AddUserFormSchema>,
  schoolId: string
) => {
  await utils.addUser(user, Role.Principal, schoolId);
  redirect("/users");
};

export const createTeacher = async (
  user: z.infer<typeof AddUserFormSchema>,
  schoolId: string,
  classId?: string
) => {
  const savedUser = await utils.addUser(user, Role.Teacher, schoolId);
  if (classId && "id" in savedUser) {
    await db.teacherAssignment.create({
      data: {
        teacherId: savedUser.id,
        classId,
      },
    });
  }
  redirect("/teachers");
};

export const createStudent = async (
  user: z.infer<typeof AddUserFormSchema>,
  schoolId: string,
  classId: string
) => {
  const savedUser = await utils.addUser(user, Role.Student, schoolId);
  if ("id" in savedUser) {
    await db.studentClass.create({
      data: {
        classId,
        studentId: savedUser.id,
      },
    });
  }
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
