"use client";

import React, { useState } from "react";
import MyCard from "../components/MyCard";
import {
  Button,
  Card,
  Image,
  CardFooter,
  CardHeader,
  CardBody,
} from "@nextui-org/react";

// 1.多条线数字化业务设计，促进产业数智升级一揽子数字化业务设计服务
const BusinessDesignList = [
  {
    id: 1,
    title: "产业数字化整体方案设计",
    image: "/programme.jpeg",
  },
  {
    id: 2,
    title: "业务流智慧大脑设计",
    image: "/brain.jpeg",
  },
  {
    id: 3,
    title: "数字运营和自动化营销",
    image: "/marketing.jpeg",
  },
  {
    id: 4,
    title: "区块链转型/去中心化应用",
    image: "/Blockchain.jpeg",
  },
  {
    id: 5,
    title: "算法赋能硬件实现装备智联",
    image: "/algorithm.jpeg",
  },
];
// 2.全栈自研技术，助力业务敏捷化交付实施
const ZLabList = [
  {
    id: 1,
    title: "Z-Lab体系",
    image: "/Z-Lab.png",
    description:
      "全方位的数字化工具、运营服务和技术能力支持，企业数字需求能力对外赋能，提供开发者门户、交易能力权限及API/SDK服务管控。",
  },
  {
    id: 2,
    title: "M-ZLab微服务平台",
    image: "/M-ZLab.png",
    description:
      "分布式平台的服务治理、事务管理、链路追踪、统一配置、日志、监控、部署等能力，助力企业完成数字化升级与转型。",
  },
  {
    id: 3,
    title: "B-ZLab平台",
    image: "/B-ZLab.png",
    description:
      "自主技术，提供生态化、门户化、协同协作、引入与引出等能力，对远程边缘节点进行应用发布和管控。",
  },
  {
    id: 4,
    title: "R-ZLab平台",
    image: "/R-ZLab.png",
    description:
      "前端PC/移动端全渠道高效设计、研发、测试、发布、分析、运营等能力，构建完善的人、物智能化关系，有效赋能运营。",
  },
];

export default function Product() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* 指量｜产品与服务中心 */}
      <MyCard className="IntersectionObserver flex items-center justify-center bg-black text-white">
        <div>
          <h1 className="text-2xl font-bold leading-10 ">
            指量｜产品与服务中心
          </h1>
          <h2 className="text-sm font-bold leading-10 md:text-xl">
            技术组件聚合 敏捷开发 业务流模块化 云原生服务架构 一揽子解决方案
          </h2>
          <div className="hidden leading-8 md:block">
            <p>
              指量，是专注于为个人和团队提供高效、便捷、安全的云服务的一站式服务平台。
            </p>
            <p>
              指量提供包括云服务器、云数据库、云存储在内的多种云服务，并且提供一站式解决方案，帮助用户轻松搭建和管理自己的云服务。
            </p>
            <p>
              指量致力于为用户提供最优质的服务，让用户能够专注于自己的业务，而无需担心云服务的管理和维护。
            </p>
            <p>指量团队期待与您共同成长，共同进步，共同创造价值！</p>
          </div>
          <Button className="my-5">咨询更多</Button>
        </div>
        <Image
          isZoomed
          width={300}
          height={300}
          src={"/ServiceCenter.jpeg"}
          alt="ServiceCenter"
        />
      </MyCard>

      {/* 多条线数字化业务设计，促进产业数智升级一揽子数字化业务设计服务 */}
      <div className="IntersectionObserver">
        <h1 className="text-center text-3xl font-bold leading-10">
          多条线数字化业务设计，促进产业数智升级
        </h1>
        <p className="text-center text-sm font-bold leading-10 md:text-xl">
          一揽子数字化业务设计服务
        </p>
      </div>
      <MyCard className="mt-5 grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-5">
        {BusinessDesignList.map((item) => (
          <Card key={item.id} isFooterBlurred className="IntersectionObserver">
            <Image
              isZoomed
              removeWrapper
              alt="programme"
              className="z-0 h-full w-full object-cover"
              src={item.image}
            />
            <CardFooter className="absolute bottom-0 z-10  border-t-1 border-default-600 bg-black/40 text-white dark:border-default-100">
              <h1 className="w-full text-center text-sm font-bold leading-10">
                {item.title}
              </h1>
            </CardFooter>
          </Card>
        ))}
      </MyCard>

      {/* 指量云原生技术平台 */}
      <MyCard className="flex justify-around">
        <Card
          isFooterBlurred
          className="IntersectionObserver w-2/5 bg-black text-white"
        >
          <CardBody>
            <Image
              removeWrapper
              alt="CloudNative"
              className="z-0 w-full object-cover"
              src={"/CloudNative.png"}
            />
          </CardBody>

          <CardFooter className="absolute bottom-0 z-10  border-t-1 border-default-600 bg-black/40 text-white dark:border-default-100">
            <h1 className="w-full text-center text-sm font-bold md:text-xl">
              指量云原生技术平台
            </h1>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          className="IntersectionObserver w-2/5 bg-black text-white"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <CardHeader
            className={`absolute z-10 translate-y-0 flex-col items-start bg-black/60 ${show && " translate-y-[-100%]"} delay-2000 transition ease-in-out`}
          >
            <p className="p-5 text-sm text-white">
              依托算法能力和云原生技术开发平台，指量科技打造R-ZLab应用体系，进一步赋能传统场景，布局软硬一体，实现装备智联。借助前沿的边缘计算、AI、5G、RFID技术等，指量科技将软件算法和物联技术深度融合，在机器人、智能装备、人脸核验设备、智能通行设备、业务办理智能终端等方向布局多性能AIoT产品体系。
            </p>
          </CardHeader>
          <CardBody>
            <Image
              removeWrapper
              alt="Algorithm"
              className="z-0 h-full w-full object-cover"
              src={"/Algorithm.png"}
            />
          </CardBody>

          <CardFooter className=" bottom-0 z-10  border-t-1 border-default-600 bg-black/30 text-white dark:border-default-100">
            <h1 className="w-full text-center text-sm font-bold md:text-xl">
              算法赋能硬件-布局软硬件一体的AIoT产品体系
            </h1>
          </CardFooter>
        </Card>
      </MyCard>

      {/* 全栈自研技术，助力业务敏捷化交付实施 */}
      <div className="IntersectionObserver">
        <h1 className="text-center text-3xl font-bold leading-10">
          全栈自研技术，助力业务敏捷化交付实施
        </h1>
        <p className="p-5 text-center text-sm font-bold leading-10 md:text-xl">
          基于CMMI体系、PMBOK质量与管理体系，为客户提供专业、标准的项目实施服务
        </p>
      </div>
      <MyCard className="grid grid-cols-1 gap-4 bg-gradient-to-r from-pink-500  to-indigo-500  md:grid-cols-2 lg:grid-cols-4">
        {ZLabList.map((item) => (
          <Card
            key={item.id}
            className="IntersectionObserver flex items-center justify-center p-10"
          >
            <Image
              className="m-auto rounded-full"
              width={100}
              height={100}
              src={item.image}
              alt={item.title}
            />
            <h1 className="text-center text-2xl font-bold leading-10 text-blue-500">
              {item.title}
            </h1>
            <p className="text-sm text-gray-500">{item.description}</p>
          </Card>
        ))}
      </MyCard>
    </>
  );
}
