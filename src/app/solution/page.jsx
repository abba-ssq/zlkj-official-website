import React from "react";
import MyCard from "../components/MyCard";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const List = [
  {
    id: 1,
    title: "金融数字化-智慧业务系统",
    img: "/7.svg",
  },
  {
    id: 2,
    title: "金融数字化-营销管理系统",
    img: "/8.svg",
  },
  {
    id: 3,
    title: "政务数字化-签证认证系统",
    img: "/9.svg",
  },
  {
    id: 4,
    title: "政务数字化-公安调查犯罪的区块链信息系统",
    img: "/10.svg",
  },
  {
    id: 5,
    title: "行业数字化-铁路道闸系统",
    img: "/11.svg",
  },
  {
    id: 6,
    title: "行业数字化-智能加油站管理系统",
    img: "/12.png",
  },
];

export default function Solution() {
  return (
    <MyCard className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {List.map((item) => (
        <Card
          isBlurred
          key={item.id}
          isFooterBlurred
          className="IntersectionObserver bg-black text-white"
        >
          <CardBody>
            <Image
              removeWrapper
              src={item.img}
              alt={item.title}
              className="z-0 w-full object-cover"
            />
          </CardBody>

          <CardFooter className="absolute bottom-0 z-10 flex justify-around  border-t-1 border-default-600 bg-black/60 text-white dark:border-default-100">
            <h1 className="text-sm font-bold">{item.title}</h1>
            <Button size="sm">了解详情</Button>
          </CardFooter>
        </Card>
      ))}
    </MyCard>
  );
}
