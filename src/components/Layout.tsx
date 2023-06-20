import React, { FC } from "react";
import { Typography } from "@material-tailwind/react";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={
        "flex flex-col items-center bg-background w-[800px] mx-auto pt-10"
      }
    >
      <Typography variant="h1">Конструктор страниц</Typography>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
