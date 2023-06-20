import React from "react";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Sidebar from "@/components/Sidebar";

const CreateBannerEditor = () => {
  const [imageUrl, setImageUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [isOpenSecondDrawer, setIsOpenSecondDrawer] = React.useState(false);
  return (
    <Card
      color="transparent"
      shadow={false}
      className={"flex flex-col gap-6 p-4  w-96"}
    >
      <Typography variant="h4" color="blue-gray">
        Создать баннер
      </Typography>

      <form className="flex flex-col gap-2">
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

        <Button
          className="mt-2"
          fullWidth
          onClick={() => {
            setIsOpenSecondDrawer(true);
          }}
        >
          Создать
        </Button>
      </form>
      <Sidebar
        isOpen={isOpenSecondDrawer}
        onClose={() => {
          setIsOpenSecondDrawer(false);
        }}
      >
        sadcf
      </Sidebar>
    </Card>
  );
};

export default CreateBannerEditor;
