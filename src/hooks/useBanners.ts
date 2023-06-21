import useSWR from "swr";
import { usePage } from "@/hooks/usePage";
import {
  getBannersFromLocalStorage,
  IBanner,
  saveBannersToLocalStorage,
} from "@/api/banner";

export const useBanners = () => {
  const { data: banners, mutate: mutateBanners } = useSWR(
    "bannerData",
    getBannersFromLocalStorage,
    {
      fallbackData: [],
    }
  );
  const { addBlockToPage, removeBlockFromPage } = usePage();
  const setBanners = (newBanners: IBanner[]) => {
    if (!newBanners) {
      return;
    }

    saveBannersToLocalStorage(newBanners);
    void mutateBanners();
  };

  const addBanner = (banner: IBanner) => {
    if (!banners) {
      return;
    }
    setBanners([...banners, banner]);
    addBlockToPage({
      id: banner.id,
      type: "banner",
    });
  };

  const updateBanner = (newBanner: IBanner) => {
    if (!banners) {
      return;
    }
    const newBanners = [...banners];
    newBanners.splice(
      banners.findIndex((b) => b.id === newBanner.id),
      1,
      newBanner
    );

    setBanners(newBanners);
  };

  const removeBanner = (bannerId: string) => {
    if (!banners) {
      return;
    }
    setBanners(banners.filter((banner) => banner.id !== bannerId));
    removeBlockFromPage(bannerId);
  };
  return { banners, addBanner, removeBanner, updateBanner };
};
