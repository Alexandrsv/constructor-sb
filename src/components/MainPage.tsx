import React from "react";
import Banner from "@/components/Blocks/Banner/Banner";
import BlockWrapper from "@/components/Blocks/BlockWrapper";
import CreateBlockPanel from "@/components/CreateBlockPanel";
import { Button } from "@material-tailwind/react";
import { usePage } from "@/hooks/usePage";

const MainPage = () => {
  const { pageData } = usePage();
  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <div className={"pt-8"}>
        <div className={"flex justify-center py-4"}>
          <Button onClick={clearStorage}>Clear Storage</Button>
        </div>
        <div className={"grid gap-8"}>
          {pageData.blocks?.map((block) => (
            <BlockWrapper key={block.id} onEdit={() => {}} blockId={block.id}>
              {block.type === "banner" && <Banner id={block.id} />}
            </BlockWrapper>
          ))}
        </div>
        <CreateBlockPanel />
      </div>
    </div>
  );
};

export default MainPage;
