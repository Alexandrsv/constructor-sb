import React, { FC } from "react";
import BannerEditor from "@/components/SidebarEditors/Banner/BannerEditor";
import { BlockType } from "@/hooks/usePage";
import { useBanner } from "@/hooks/useBanner";

// Занимается маршрутизацией содержимого сайдбара

interface SidebarEditorCreateProps {
  blockId?: never;
  onCloseSidebar: VoidFunction;
  newBlockType: BlockType;
}

interface SidebarEditorEditProps {
  blockId: string;
  newBlockType?: never;
  onCloseSidebar: VoidFunction;
}

const SidebarEditor: FC<SidebarEditorCreateProps | SidebarEditorEditProps> = ({
  onCloseSidebar,
  blockId,
  newBlockType,
}) => {
  const { banner } = useBanner(blockId);

  console.log({ block: banner });
  return (
    <div>
      {newBlockType && (
        <>
          {newBlockType === "banner" && (
            <BannerEditor onCloseSidebar={onCloseSidebar} />
          )}
        </>
      )}

      {!newBlockType && (
        <>
          {banner?.type === "banner" && (
            <BannerEditor banner={banner} onCloseSidebar={onCloseSidebar} />
          )}
        </>
      )}
    </div>
  );
};

export default SidebarEditor;
