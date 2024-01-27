"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function HobbiesPage() {
  const list = [
    {
      title: "Crocheting",
      img: "/images/crochetheart.png",
    },
    {
      title: "Painting",
      img: "/images/painting.png",
    },
    {
      title: "Piano",
      img: "/images/piano.png",
    },
    {
      title: "Band",
      img: "/images/band.png",
    },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="none"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[300px] rounded-t-large"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
