import React, { FC, useState } from "react";
import Banner from "@/components/Banner";
import { useBanners } from "@/hooks/useBanners";
import { Button, Typography } from "@material-tailwind/react";
import SidebarEditor from "@/components/SidebarEditors/SidebarEditor";
import Sidebar from "@/components/Sidebar";
import { usePage } from "@/hooks/usePage";

const ChooseBannerEditor: FC<{ onCloseSidebar: VoidFunction }> = ({
  onCloseSidebar,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { banners } = useBanners();
  const { addBlockToPage } = usePage();

  const onCloseNewBannerSidebar = () => {
    setIsSidebarOpen(false);
  };
  const onOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const onChooseBanner = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    bannerId: string
  ) => {
    e.stopPropagation();
    addBlockToPage({
      id: bannerId,
      type: "banner",
    });
    onCloseSidebar();
  };

  return (
    <div>
      <div className={"px-4 grid justify-start gap-2 pb-5"}>
        <Typography color="blueGray" size="lg">
          Choose banner
        </Typography>
        <Button color="blue" size="sm" onClick={onOpenSidebar}>
          Create new banner
        </Button>
      </div>
      {banners?.map((banner) => (
        <div
          key={banner.id}
          className={"scale-75"}
          onClick={(e) => onChooseBanner(e, banner.id)}
        >
          <Banner id={banner.id} />
        </div>
      ))}
      <Sidebar
        onClose={() => {
          setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
      >
        <SidebarEditor
          onCloseSidebar={onCloseNewBannerSidebar}
          newBlockType={"banner"}
        />
      </Sidebar>
    </div>
  );
};

export default ChooseBannerEditor;
