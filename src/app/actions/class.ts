"use server";

import db from "../lib/prisma";

export const getClass = async () => {
  const classData = await db.class.findMany();
  return classData;
};
