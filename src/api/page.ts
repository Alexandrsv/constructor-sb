export type BlockType = "banner" | "slider" | "image";

export interface IPageBlock {
  id: string;
  type: BlockType;
}

export interface PageData {
  id: string;
  title: string;
  blocks: IPageBlock[];
}

export const initialPageData: PageData = {
  id: "1",
  title: "Страница 1",
  blocks: [],
};

export const getPageDataFromLocalStorage = () => {
  const pageData = localStorage.getItem("pageData");
  if (pageData) {
    return JSON.parse(pageData) as PageData;
  } else {
    return initialPageData;
  }
};

export const savePageDataToLocalStorage = (pageData: PageData) => {
  localStorage.setItem("pageData", JSON.stringify(pageData));
};
