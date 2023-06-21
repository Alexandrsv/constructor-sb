import React, { FC } from "react";
import PlusIcon from "@/components/icons/PlusIcon";
import { Card, IconButton } from "@material-tailwind/react";
import Sidebar from "@/components/Sidebar";
import SidebarEditor from "@/components/SidebarEditors/SidebarEditor";
import ChooseBannerEditor from "@/components/SidebarEditors/Banner/ChooseBannerEditor";
import { BlockType } from "@/api/page";

const CreateBlockPanel: FC<{ onClick?: VoidFunction }> = ({ onClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [newBlockType, setNewBlockType] = React.useState<BlockType>("banner");

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
        <ChooseBannerEditor />
        {/*<SidebarEditor*/}
        {/*  onCloseSidebar={onCloseSidebar}*/}
        {/*  newBlockType={newBlockType}*/}
        {/*/>*/}
      </Sidebar>
    </>
  );
};

export default CreateBlockPanel;
