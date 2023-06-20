import useSWR from "swr";
import { usePage } from "@/hooks/usePage";

export interface IBlock {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

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

    saveBlocksToLocalStorage([...blocks, ...newBlocks]);
    void mutateBlocks();
  };

  const addBlock = (block: IBlock) => {
    if (!blocks) {
      return;
    }
    setBlocks([...blocks, block]);
    addBlockToPage(block.id);
  };

  const removeBlock = (blockId: string) => {
    if (!blocks) {
      return;
    }
    setBlocks(blocks.filter((block) => block.id !== blockId));
    removeBlockFromPage(blockId);
  };
  return { blocks, addBlock, removeBlock };
};
