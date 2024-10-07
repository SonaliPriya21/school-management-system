import Navbar from "@/app/(components)/navigationbar";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return <Navbar>{children}</Navbar>;
};

export default layout;
