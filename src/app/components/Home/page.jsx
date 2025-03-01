import React from "react";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import MyCard from "../MyCard";
import Product from "../../product/page";
import Solution from "../../solution/page";
import About from "../../about/page";
// 1.产品与服务 Products & services
const ProductsServicesList = [
  {
    id: 1,
    name: "数字化业务设计",
    description:
      "产业数字化整体方案设计，业务流智慧大脑设计，数字运营和自动化营销，区块链转型/去中心化应用用，算法赋能硬件实现装备智联联",
    imageOption: {
      src: "/Design.jpeg",
      width: 112,
      height: 112,
    },
    className: "bg-cyan-300 shadow-cyan-500/50",
  },
  {
    id: 2,
    name: "数字化平台建设",
    description:
      "搭建依据数据驱动、系统支撑的Z-Lab系列技术平台，为全渠道、全领域、全场景提供数字化供应链协同产品，赋能企业数字化转型变革。",
    imageOption: {
      src: "/Construct.jpeg",
      width: 112,
      height: 112,
    },
    className: "bg-blue-300 shadow-blue-500/50",
  },
  {
    id: 3,
    name: "数据智能联合运营",
    description:
      "资源专属可管可控，便捷运维贴身服务，安全合规简单有效，广泛兼容平滑迁移",
    imageOption: {
      src: "/Operations.jpeg",
      width: 112,
      height: 112,
    },
    className: "bg-indigo-300 shadow-indigo-500/50",
  },
];
// 2.ZLCLOUD指量云数字化解决方案
const ZLCLOUDList = [
  {
    id: 1,
    name: "政务数字化",
    imageOption: {
      src: "/governmentAffairs.jpeg",
      width: 112,
      height: 112,
    },
    unitList: ["部委", "地方政府", "国际交流"],
    className: "bg-pink-500 shadow-pink-800/50",
  },
  {
    id: 2,
    name: "金融数字化",
    imageOption: {
      src: "/finance.jpeg",
      width: 112,
      height: 112,
    },
    unitList: ["创新金融", "银行", "非银持牌金融机构"],
    className: "bg-rose-500 shadow-rose-800/50",
  },
  {
    id: 3,
    name: "工业数字化",
    imageOption: {
      src: "/industry.jpeg",
      width: 112,
      height: 112,
    },
    unitList: ["工业", "交通", "文化"],
    className: "bg-orange-500 shadow-orange-800/50",
  },
];

export default function Home() {
  return (
    <>
      <MyCard className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {/*  产品与服务 Products & services */}
        <h4 className="IntersectionObserver mb-5 text-center text-lg font-bold text-white lg:mb-10 lg:text-4xl">
          产品与服务 Products & services
        </h4>
        <div className="m-auto grid max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ProductsServicesList.map((item) => (
            <Card
              key={item.id}
              className={`IntersectionObserver rounded-2xl p-4 shadow-lg  md:p-10 ${item.className}`}
            >
              <CardHeader>
                <h1 className="text-xl font-bold lg:text-2xl">{item.name}</h1>
              </CardHeader>
              <div className="flex h-full items-center justify-between">
                <p className="pr-5 text-sm">{item.description}</p>
                <Image
                  isZoomed
                  alt={item.name}
                  className="min-w-28 object-cover"
                  src={item.imageOption.src || "/Logo.png"}
                  width={item.imageOption.width || 112}
                  height={item.imageOption.height || 112}
                />
              </div>
            </Card>
          ))}
        </div>
        <br />
        <br />
        {/* ZLCLOUD指量云数字化解决方案 */}
        <h4 className="IntersectionObserver my-5 text-center text-lg font-bold  text-white lg:my-10 lg:text-4xl ">
          ZLCLOUD指量云数字化解决方案
        </h4>
        <div className="m-auto grid max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ZLCLOUDList.map((item) => (
            <Card
              key={item.id}
              className={`IntersectionObserver rounded-2xl p-4 shadow-lg ${item.className}`}
            >
              <CardHeader className="flex items-center justify-center">
                <Image
                  isZoomed
                  radius="full"
                  alt={item.name}
                  className="m-auto object-cover "
                  src={item.imageOption.src || "/Logo.png"}
                  width={item.imageOption.width || 112}
                  height={item.imageOption.height || 112}
                />
              </CardHeader>
              <CardBody>
                <h1 className="text-center text-xl font-bold text-white lg:text-2xl">
                  {item.name}
                </h1>
              </CardBody>
              <CardFooter>
                <div className="flex w-full items-center justify-between">
                  {item.unitList.map((unit) => (
                    <Button key={unit} radius="full" disabled size="sm">
                      {unit}
                    </Button>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </MyCard>

      {/* 指量｜产品与服务中心 */}
      <Product />
      <Solution />
      <About />
    </>
  );
}
