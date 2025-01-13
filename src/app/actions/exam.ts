"use server";

import db from "../lib/prisma";

export const getExam = async () => {
  const examTable = await db.exam.findMany();
  return examTable;
};
