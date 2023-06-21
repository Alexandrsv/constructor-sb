import React, { FC } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useBanner } from "@/hooks/useBanner";

const Banner: FC<{
  className?: string;
  id: string;
}> = ({ className, id }) => {
  const { banner } = useBanner(id);
  return (
    <Card className={"mt-6 w-96 " + className}>
      <CardHeader color="blue-gray" className="relative h-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={banner?.imageUrl} alt="img-blur-shadow" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {banner?.title}
        </Typography>
        <Typography>{banner?.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default Banner;
