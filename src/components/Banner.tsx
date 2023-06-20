import React, { FC } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useBlock } from "@/hooks/useBlock";

const Banner: FC<{
  className?: string;
  id: string;
}> = ({ className, id }) => {
  const { block } = useBlock(id);
  return (
    <Card className={"mt-6 w-96 " + className}>
      <CardHeader color="blue-gray" className="relative h-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={block?.imageUrl} alt="img-blur-shadow" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {block?.title}
        </Typography>
        <Typography>{block?.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default Banner;
