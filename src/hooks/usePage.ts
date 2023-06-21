import useSWR from "swr";
import {
  getPageDataFromLocalStorage,
  initialPageData,
  IPageBlock,
  PageData,
  savePageDataToLocalStorage,
} from "@/api/page";

export const usePage = () => {
  const { data: pageData, mutate: mutatePageData } = useSWR(
    "pageData",
    getPageDataFromLocalStorage,
    {
      fallbackData: initialPageData,
    }
  );

  const setPageData = (newPageData: Partial<PageData>) => {
    if (!pageData) {
      return;
    }
    savePageDataToLocalStorage({ ...pageData, ...newPageData });
    void mutatePageData();
  };

  const addBlockToPage = (block: IPageBlock) => {
    if (!pageData) {
      return;
    }
    setPageData({
      blocks: [...pageData.blocks, block],
    });
  };
  const removeBlockFromPage = (blockId: string) => {
    if (!pageData) {
      return;
    }
    setPageData({
      blocks: pageData.blocks.filter((block) => block.id !== blockId),
    });
  };

  return { pageData, setPageData, addBlockToPage, removeBlockFromPage };
};
