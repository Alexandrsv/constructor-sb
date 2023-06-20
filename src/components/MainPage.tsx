import React from "react";
import Banner from "@/components/Banner";
import BlockWrapper from "@/components/BlockWrapper";
import CreateBlockPanel from "@/components/CreateBlockPanel";
import { useBlocks } from "@/hooks/useBlocks";
import { Button } from "@material-tailwind/react";

const MainPage = () => {
  const { blocks } = useBlocks();
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
        {blocks.map((block) => (
          <BlockWrapper key={block.id} onEdit={() => {}} blockId={block.id}>
            <Banner id={block.id} />
          </BlockWrapper>
        ))}
        <CreateBlockPanel />
      </div>
    </div>
  );
};

export default MainPage;
