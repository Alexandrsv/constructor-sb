import React, { FC, ReactNode, useState } from "react";
import EditBtn from "@/components/UI/EditBtn";
import Sidebar from "@/components/Sidebar";
import SidebarEditor from "@/components/SidebarEditors/SidebarEditor";
import { usePage } from "@/hooks/usePage";
import RemoveIcon from "@/components/UI/Icons/RemoveIcon";
import RemoveBtn from "@/components/UI/RemoveBtn";

const BlockWrapper: FC<{
  children: ReactNode;
  onEdit: VoidFunction;
  blockId: string;
}> = ({ children, onEdit, blockId }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { removeBlockFromPage } = usePage();

  const onOpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const onCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const onRemove = () => {
    removeBlockFromPage(blockId);
  };

  return (
    <>
      <div className={"relative"}>
        {children}
        <div
          className={`
          grid grid-flow-col gap-2
          absolute top-0 right-0
          transform -translate-x-1 -translate-y-2
       `}
        >
          <EditBtn onClick={onOpenSidebar} />
          <RemoveBtn onClick={onRemove} />
        </div>
      </div>
      <Sidebar onClose={onCloseSidebar} isOpen={isSidebarOpen}>
        <SidebarEditor blockId={blockId} onCloseSidebar={onCloseSidebar} />
      </Sidebar>
    </>
  );
};

export default BlockWrapper;
