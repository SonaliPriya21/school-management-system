"use client";

import { Button } from "@/components/ui/button";

type Props = {
  logout: () => void;
};

const LogoutButton = ({ logout }: Props) => {
  return (
    <Button variant={"ghost"} onClick={() => logout()}>
      Log out
    </Button>
  );
};

export default LogoutButton;
