import React, { FC } from "react";
import { IconButton } from "@material-tailwind/react";
import EditIcon from "@/components/UI/Icons/EditIcon";

const EditBtn: FC<{ onClick: VoidFunction; className?: string }> = ({
  onClick,
  className,
}) => {
  return (
    <IconButton onClick={onClick} className={className}>
      <EditIcon />
    </IconButton>
  );
};

export default EditBtn;
