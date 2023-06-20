import React, { FC } from "react";
import { useBlock } from "@/hooks/useBlock";
import BannerEditor from "@/components/SidebarEditors/Banner/BannerEditor";
import { BlockType } from "@/hooks/useBlocks";

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
  const { block } = useBlock(blockId);

  console.log({ block });
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
          {block?.type === "banner" && (
            <BannerEditor banner={block} onCloseSidebar={onCloseSidebar} />
          )}
        </>
      )}
    </div>
  );
};

export default SidebarEditor;
