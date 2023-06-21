import { useBanners } from "@/hooks/useBanners";

export const useBanner = (bannerId?: string) => {
  const { banners, updateBanner, removeBanner, addBanner } = useBanners();
  const banner = banners?.find((banner) => banner.id === bannerId);

  return { banner, updateBanner, removeBanner, addBanner };
};
