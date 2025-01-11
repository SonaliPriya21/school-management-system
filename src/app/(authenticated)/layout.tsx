import Navbar from "@/components/custom/navigationbar";
import NavigationMenu from "@/components/custom/NavigationMenu";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <NavigationMenu>
        <Navbar>{children}</Navbar>
      </NavigationMenu>
    </div>
  );
};

export default layout;
