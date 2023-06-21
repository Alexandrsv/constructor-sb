import React, { FC, useState } from "react";
import PlusIcon from "@/components/UI/Icons/PlusIcon";
import { Card, IconButton } from "@material-tailwind/react";
import Sidebar from "@/components/Sidebar";
import ChooseBannerEditor from "@/components/SidebarEditors/Banner/ChooseBannerEditor";
import { BlockType } from "@/api/page";

const CreateBlockPanel: FC<{ onClick?: VoidFunction }> = ({ onClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [newBlockType, setNewBlockType] = useState<BlockType>("banner");

  const onOpenSidebar = (blockType: BlockType) => {
    setIsSidebarOpen(true);
    setNewBlockType(blockType);
    onClick?.();
  };

  const onCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <Card className={"my-4 h-24 flex items-center justify-center"}>
        <IconButton color={"gray"} onClick={() => onOpenSidebar("banner")}>
          <PlusIcon />
        </IconButton>
      </Card>
      <Sidebar
        onClose={() => {
          setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
      >
        <ChooseBannerEditor onCloseSidebar={onCloseSidebar} />
      </Sidebar>
    </>
  );
};

export default CreateBlockPanel;
