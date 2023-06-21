import useSWR from "swr";

export type BlockType = "banner" | "slider" | "image";

interface IPageBlock {
  id: string;
  type: BlockType;
}

interface PageData {
  id: string;
  title: string;
  blocks: IPageBlock[];
}

const initialPageData: PageData = {
  id: "1",
  title: "Страница 1",
  blocks: [],
};

const getPageDataFromLocalStorage = () => {
  const pageData = localStorage.getItem("pageData");
  if (pageData) {
    return JSON.parse(pageData) as PageData;
  } else {
    return initialPageData;
  }
};

const savePageDataToLocalStorage = (pageData: PageData) => {
  localStorage.setItem("pageData", JSON.stringify(pageData));
};

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
