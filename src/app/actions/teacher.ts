import { Role } from "@prisma/client";
import db from "../lib/prisma";

export const getTeachers = async () => {
  const teacherData = await db.user.findMany({
    where: {
      role: Role.Teacher,
    },
  });
  return teacherData;
};

export const addTeacher = async () => {};
