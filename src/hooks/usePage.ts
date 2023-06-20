import useSWR from "swr";

interface PageData {
  id: string;
  title: string;
  blocksIds: string[];
}

const initialPageData: PageData = {
  id: "1",
  title: "Страница 1",
  blocksIds: [],
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

  const addBlock = (blockId: string) => {
    if (!pageData) {
      return;
    }
    setPageData({
      blocksIds: [...pageData.blocksIds, blockId],
    });
  };
  const removeBlock = (blockId: string) => {
    if (!pageData) {
      return;
    }
    setPageData({
      blocksIds: pageData.blocksIds.filter((id) => id !== blockId),
    });
  };

  return { pageData, setPageData, addBlock, removeBlock };
};
