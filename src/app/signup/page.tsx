import React from "react";
import SignupForm from "../../components/custom/signup-form";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex h-full items-center flex-1">
      <div className="w-4/5 h-[500px] mx-auto flex">
        <div className="w-1/2 border-[1px] border-black border-solid flex justify-center items-center ">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        <div className="w-1/2 px-5 flex flex-1 justify-center flex-col">
          <h2 className="text-2xl text-center"> Sign up</h2>
          <SignupForm />

          <p className="mt-5">
            Already on CampusCloud?{" "}
            <Link className="text-blue-500 underline" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
