import React from "react";
import Banner from "@/components/Banner";
import Block from "@/components/Block";
import CreateBlockPanel from "@/components/CreateBlockPanel";

const MainPage = () => {
  return (
    <div>
      <div className={"pt-8"}>
        <Block onEdit={() => {}}>
          <Banner id={"1"} />
        </Block>
        <CreateBlockPanel />
      </div>
    </div>
  );
};

export default MainPage;
