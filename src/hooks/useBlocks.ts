import useSWR from "swr";
import { usePage } from "@/hooks/usePage";

export interface IBanner {
  id: string;
  imageUrl: string;
  title: string;
  type: "banner" | "card" | "text";
  description: string;
}
export type BlockType = "banner" | "slider" | "image";

export type IBlock = IBanner;

const getBlocksFromLocalStorage = () => {
  const blocks = localStorage.getItem("blockData");
  if (blocks) {
    return JSON.parse(blocks) as IBlock[];
  } else {
    return [] as IBlock[];
  }
};

const saveBlocksToLocalStorage = (blocks: IBlock[]) => {
  localStorage.setItem("blockData", JSON.stringify(blocks));
};

export const useBlocks = () => {
  const { data: blocks, mutate: mutateBlocks } = useSWR(
    "blockData",
    getBlocksFromLocalStorage,
    {
      fallbackData: [],
    }
  );
  const { addBlockToPage, removeBlockFromPage } = usePage();
  const setBlocks = (newBlocks: IBlock[]) => {
    if (!newBlocks) {
      return;
    }

    saveBlocksToLocalStorage(newBlocks);
    void mutateBlocks();
  };

  const addBlock = (block: IBlock) => {
    if (!blocks) {
      return;
    }
    setBlocks([...blocks, block]);
    addBlockToPage(block.id);
  };

  const updateBlock = (newBlock: IBlock) => {
    if (!blocks) {
      return;
    }
    const newBlocks = [...blocks];
    newBlocks.splice(
      blocks.findIndex((b) => b.id === newBlock.id),
      1,
      newBlock
    );

    setBlocks(newBlocks);
  };

  const removeBlock = (blockId: string) => {
    if (!blocks) {
      return;
    }
    setBlocks(blocks.filter((block) => block.id !== blockId));
    removeBlockFromPage(blockId);
  };
  return { blocks, addBlock, removeBlock, updateBlock };
};
