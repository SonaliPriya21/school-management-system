"use server";

import { SignupFormSchema, LoginFormSchema } from "@/app/lib/definitions";
import { compare, hash } from "bcryptjs";
import db from "../lib/prisma";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function signup(formData: z.infer<typeof SignupFormSchema>) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.name,
    email: formData.email,
    password: formData.password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  const dbUser = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (dbUser) {
    return {
      errors: "Already exists",
    };
  }

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
  redirect("/dashboard");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}

export async function login(formData: z.infer<typeof LoginFormSchema>) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.email,
    password: formData.password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await db.user.findFirst({
    where: {
      email: validatedFields.data.email,
    },
  });

  if (!data) {
    return {
      errors: "User is not registered",
    };
  }

  if (await compare(validatedFields.data.password, data.password)) {
    await createSession(data.email);
    redirect("/dashboard");
  } else {
    return {
      errors: "Wrong password",
    };
  }
}
