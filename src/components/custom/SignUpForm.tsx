"use client";

import { signup } from "@/app/actions/auth";
import { SignUpFormSchema, SignupFormState } from "@/app/lib/definitions";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SchoolForm from "./SchoolForm";
import SignupUserForm from "./SignupUserForm";
import Link from "next/link";

const SignUpForm = () => {
  const [formResponse, setFormResponse] = useState<SignupFormState>();
  const [step, setStep] = useState(0);

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      school: {
        address: "",
        email: "",
        name: "",
        phone: "",
      },
    },
  });

  const onSubmit = async () => {
    const data = await signup(form.getValues());
    setFormResponse(data);
  };

  type FieldNames = keyof z.infer<typeof SignUpFormSchema>;

  const onNext = async () => {
    const fields = ["name", "email", "password", "phone"];
    const output = await form.trigger(fields as FieldNames[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (step === 0) {
      setStep(1);
    }
  };

  return (
    <div className="px-5 flex flex-1 justify-center flex-col">
      {step === 0 && <h3 className="text-xl ">Enter admin details</h3>}
      {step === 1 && <h3 className="text-xl">Enter school details</h3>}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-5 items-center flex-col"
        >
          {step === 0 && <SignupUserForm form={form} onSubmit={onNext} />}
          {step === 1 && <SchoolForm form={form} onSubmit={onSubmit} />}
        </form>
      </Form>
      <p className="mt-5">
        Already on CampusCloud?{" "}
        <Link className="text-blue-500 underline" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
