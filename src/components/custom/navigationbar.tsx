import { Input } from "@/components/ui/input";
import { PropsWithChildren } from "react";
import { getUser } from "@/app/actions/user";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { logout } from "@/app/actions/auth";
import LogoutButton from "./LogoutButton";

const Navbar = async ({ children }: PropsWithChildren) => {
  const user = await getUser();
  if ("errors" in user && user.errors) {
    redirect("/signup");
  }

  const getAvatar = () => {
    if (!("name" in user)) return;

    const brokenWords = user.name.split(" ");
    let avatar = "";
    avatar = avatar + brokenWords[0][0].toUpperCase();
    avatar = avatar + brokenWords[brokenWords.length - 1][0].toUpperCase();

    return avatar;
  };

  return (
    <div>
      <div className="w-full h-16 border-b flex items-center justify-between">
        <Input className="mx-5 w-72" type="text" placeholder="Search" />
        <div className=" flex flex-row mx-5">
          <LogoutButton logout={logout} />
          <Avatar>
            <AvatarFallback>{getAvatar()}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Navbar;
