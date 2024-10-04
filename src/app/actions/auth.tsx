"use server";

import { SignupFormSchema, FormState } from "@/app/lib/definitions";
import { hash } from "bcryptjs";
import db from "../lib/prisma";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await hash(password, 10);
  const data = await db.user.create({
    data: {
      name,
      password: hashedPassword,
      email,
    },
  });

  if (!data) {
    return {
      message: "An error occured while creating your account.",
    };
  }
  await createSession(data.email);
  // 5. Redirect user
  redirect("/profile");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
