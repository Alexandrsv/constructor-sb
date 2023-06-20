import { IBlock, useBlocks } from "@/hooks/useBlocks";

export const useBlock = (blockId?: IBlock["id"]) => {
  const { blocks, addBlock, removeBlock } = useBlocks();
  const block = blocks?.find((block) => block.id === blockId);

  return { block, addBlock, removeBlock };
};
