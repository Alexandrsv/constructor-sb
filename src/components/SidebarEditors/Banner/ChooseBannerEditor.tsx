import React from "react";
import Banner from "@/components/Banner";
import { useBanners } from "@/hooks/useBanners";

const ChooseBannerEditor = () => {
  const { addBanner } = useBanners();
  return <Banner id={"1"} />;
};

export default ChooseBannerEditor;
