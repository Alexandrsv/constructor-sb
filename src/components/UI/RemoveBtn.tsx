import React, { FC } from "react";
import { IconButton } from "@material-tailwind/react";
import RemoveIcon from "@/components/UI/Icons/RemoveIcon";

const RemoveBtn: FC<{ onClick: VoidFunction; className?: string }> = ({
  onClick,
  className,
}) => {
  return (
    <IconButton onClick={onClick} className={className} color={"red"}>
      <RemoveIcon />
    </IconButton>
  );
};

export default RemoveBtn;
