import db from "../lib/prisma";

export const getAttendances = async () => {
  return await db.attendance.findMany();
};
