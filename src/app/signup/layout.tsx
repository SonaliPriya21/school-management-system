import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return <div className="h-[100vh]">{children}</div>;
};

export default layout;
