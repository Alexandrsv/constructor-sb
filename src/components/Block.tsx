import React, { FC, ReactNode } from "react";
import EditBtn from "@/components/EditBtn";
import EditOrCreateBanner from "@/components/EditOrCreateBanner";
import Sidebar from "@/components/Sidebar";

const Block: FC<{ children: ReactNode; onEdit: VoidFunction }> = ({
  children,
  onEdit,
}) => {
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
        <EditOrCreateBanner />
      </Sidebar>
    </>
  );
};

export default Block;
