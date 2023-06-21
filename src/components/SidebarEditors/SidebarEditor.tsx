import React, { FC } from "react";
import BannerEditor from "@/components/SidebarEditors/Banner/BannerEditor";
import { useBanner } from "@/components/Blocks/Banner/useBanner";
import { BlockType } from "@/api/page";

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
            <BannerEditor
              onCloseSidebar={onCloseSidebar}
              onCreated={onCloseSidebar}
            />
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
