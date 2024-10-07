import db from "../lib/prisma";
import { parseSession } from "../lib/session";

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
