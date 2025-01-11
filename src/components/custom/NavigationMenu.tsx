import { PropsWithChildren, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HouseIcon,
  GraduationCapIcon,
  Annoyed,
  School,
  ClipboardCheckIcon,
  BookOpenCheck,
  Ratio,
} from "lucide-react";
import { Separator } from "../ui/separator";

const NavigationMenu = ({ children }: PropsWithChildren) => {
  const menu: Array<{
    icon: ReactElement;
    text: string;
    routeTo: string;
  }> = [
    {
      icon: <HouseIcon />,
      text: "Home",
      routeTo: "/dashboard",
    },
    {
      icon: <GraduationCapIcon />,
      text: "Teachers",
      routeTo: "/teachers",
    },
    {
      icon: <Annoyed />,
      text: "Student",
      routeTo: "/student",
    },
    {
      icon: <School />,
      text: "Class",
      routeTo: "/class",
    },
    {
      icon: <ClipboardCheckIcon />,
      text: "Attendance",
      routeTo: "/attendance",
    },
    {
      icon: <BookOpenCheck />,
      text: "Exam",
      routeTo: "/exam",
    },
    {
      icon: <Ratio />,
      text: "Result",
      routeTo: "/result",
    },
  ];

  return (
    <div className="flex flex-row">
      <div className="h-[100vh] w-1/5 border flex flex-col">
        <div className="flex flex-row gap-2 mx-5 my-4 items-center">
          <Image src="/logo.png" width={20} height={20} alt="logo" />
          <p>CampusCloud</p>
        </div>
        <Separator />
        {menu.map((menuItem) => {
          return (
            <Link
              href={menuItem.routeTo}
              className="flex flex-row items-center mt-5 mx-5 gap-1"
              key={menuItem.text}
            >
              {menuItem.icon}
              <p>{menuItem.text}</p>
            </Link>
          );
        })}
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
};
export default NavigationMenu;
