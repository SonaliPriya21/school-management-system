import LoginForm from "../(components)/loginform";
import Image from "next/image";
import Link from "next/link";

const login = () => {
  return (
    <div className="flex h-full items-center flex-1">
      <div className="w-4/5 h-[500px] mx-auto flex">
        <div className="w-1/2 border-[1px] border-black border-solid flex justify-center items-center ">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        <div className="w-1/2 bg-blue-50 px-5 flex flex-1 justify-center flex-col">
          <h2 className="text-2xl text-center"> Welcome back</h2>
          <LoginForm />
          <p className="mt-5">
            New to CampusCloud?{" "}
            <Link className="text-blue-500 underline" href="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
