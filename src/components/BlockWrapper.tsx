import React, { FC, ReactNode } from "react";
import EditBtn from "@/components/EditBtn";
import Sidebar from "@/components/Sidebar";
import SidebarEditor from "@/components/SidebarEditors/SidebarEditor";

const BlockWrapper: FC<{
  children: ReactNode;
  onEdit: VoidFunction;
  blockId: string;
}> = ({ children, onEdit, blockId }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const onOpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const onCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className={"relative"}>
        {children}
        <div
          className={`absolute top-0 right-0
       transform translate-x-1/2 -translate-y-8
       `}
        >
          <EditBtn onClick={onOpenSidebar} />
        </div>
      </div>
      <Sidebar onClose={onCloseSidebar} isOpen={isSidebarOpen}>
        <SidebarEditor blockId={blockId} onCloseSidebar={onCloseSidebar} />
      </Sidebar>
    </>
  );
};

export default BlockWrapper;