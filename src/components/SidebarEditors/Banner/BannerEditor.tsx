import React, { FC, FormEventHandler, useState } from "react";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { IBanner } from "@/api/banner";
import { useBanner } from "@/hooks/useBanner";

const BannerEditor: FC<{
  banner?: IBanner;
  onCloseSidebar: VoidFunction;
}> = ({ banner, onCloseSidebar }) => {
  const [imageUrl, setImageUrl] = useState(banner?.imageUrl ?? "");
  const [title, setTitle] = useState(banner?.title ?? "");
  const [description, setDescription] = useState(banner?.description ?? "");

  const [isOpenSecondDrawer, setIsOpenSecondDrawer] = useState(false);
  const { addBanner, updateBanner } = useBanner(banner?.id);
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("submit", banner);
    if (!banner?.id) {
      const randomString = Math.random().toString(36).substring(10);
      addBanner({
        id: randomString,
        title,
        description,
        type: "banner",
        imageUrl:
          "https://storage.googleapis.com/pai-images/2d5349f18f124114aba5d8cc2efd8dda.jpeg",
      });
    } else {
      updateBanner({
        id: banner.id,
        title,
        description,
        type: "banner",
        imageUrl:
          "https://storage.googleapis.com/pai-images/2d5349f18f124114aba5d8cc2efd8dda.jpeg",
      });
    }
    onCloseSidebar();
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className={"flex flex-col gap-6 p-4  w-96"}
    >
      <Typography variant="h4" color="blue-gray">
        Создать баннер
      </Typography>

      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <div className="mb-2 flex flex-col gap-6">
          <Input
            size="lg"
            label="Ссылка на картинку"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
          <Input
            size="lg"
            label="Заголовок"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Textarea
            label="Описание"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <Button className="mt-2" fullWidth type="submit">
          Создать
        </Button>
      </form>
    </Card>
  );
};

export default BannerEditor;
