export interface IBanner {
  id: string;
  imageUrl: string;
  title: string;
  type: "banner" | "card";
  description: string;
}
export const getBannersFromLocalStorage = () => {
  const banners = localStorage.getItem("bannerData");
  if (banners) {
    return JSON.parse(banners) as IBanner[];
  } else {
    return [] as IBanner[];
  }
};

export const saveBannersToLocalStorage = (banners: IBanner[]) => {
  localStorage.setItem("bannerData", JSON.stringify(banners));
};
