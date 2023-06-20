import React, { FC } from "react";
import { Typography } from "@material-tailwind/react";
import { usePage } from "@/hooks/usePage";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pageData } = usePage();
  return (
    <div
      className={
        "flex flex-col items-center bg-background w-[800px] mx-auto pt-10"
      }
    >
      <Typography variant="h1">{pageData?.title || "Untitled"}</Typography>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
