import React, { FC } from "react";
import PlusIcon from "@/components/icons/PlusIcon";
import { Card, IconButton } from "@material-tailwind/react";
import EditOrCreateBanner from "@/components/EditOrCreateBanner";
import Sidebar from "@/components/Sidebar";

const CreateBlockPanel: FC<{ onClick?: VoidFunction }> = ({ onClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const onOpenSidebar = () => {
    setIsSidebarOpen(true);
    onClick?.();
  };
  return (
    <>
      <Card className={"my-4 h-24 flex items-center justify-center"}>
        <IconButton color={"gray"} onClick={onOpenSidebar}>
          <PlusIcon />
        </IconButton>
      </Card>
      <Sidebar
        onClose={() => {
          setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
      >
        <EditOrCreateBanner />
      </Sidebar>
    </>
  );
};

export default CreateBlockPanel;
