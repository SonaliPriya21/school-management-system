import SignUpForm from "@/components/custom/SignUpForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex h-full items-center flex-1">
      <div className="w-4/5 h-[500px] mx-auto flex">
        <div className="w-1/2 border-[1px] border-black border-solid flex justify-center items-center ">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;
