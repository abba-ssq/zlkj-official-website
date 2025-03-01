import React from "react";
import MyCard from "../components/MyCard";
import { Image } from "@nextui-org/react";
const ImageList = [
  {
    id: 1,
    src: "/about1.jpeg",
  },
  {
    id: 2,
    src: "/about2.jpeg",
  },
  {
    id: 3,
    src: "/about3.jpeg",
  },
  {
    id: 4,
    src: "/about4.jpeg",
  },
];

export default function About() {
  return (
    <MyCard className="IntersectionObserver">
      <h1 className="text-center text-3xl font-bold leading-10">
        驱动智能未来，构筑边缘计算新纪元。
      </h1>
      <MyCard className="text-slate-500">
        <p className="leading-8">
          在万物互联的时代，数据犹如星河般璀璨却又瞬息万变。我们深信，每一比特的数据背后都蕴藏着驱动未来的力量。于是，我们的品牌诞生于对智能世界无限潜能的追求与洞察之中。
        </p>
        <p className="leading-8">
          自创立之初，我们就致力于通过边缘计算重新定义数据的价值和力量。我们的故事始于对传统云计算模式的深度反思和创新超越，深知企业对于实时响应、高效处理以及数据安全的需求日益增长，而传统的云中心架构已无法满足这些挑战。
          我们深入研究、倾力打造了一款革命性的边缘计算平台，将强大的计算能力带到数据产生的源头——网络边缘。这意味着企业能够以更低延迟、更高效率的方式实现本地决策和智能服务，无论是在工业4.0的智能制造现场，还是在智慧城市的交通管理中，抑或是在远程医疗和无人零售等前沿领域，我们都提供了不可或缺的技术支撑。
          我们的品牌不仅仅是一个技术供应商，更是企业数字化转型过程中的战略伙伴。我们以赋能企业变革营销、销售及运营方式为目标，帮助企业构建全新的商业模式，让业务因边缘计算焕发新生。每一次成功部署的背后，都是我们对技术创新矢志不渝的坚持，以及对用户需求深入细致的理解。
        </p>
        <p className="leading-8">
          作为行业的先驱者和引领者，我们在全球范围内不断拓展边界，携手各行各业的企业共同书写一个由边缘计算驱动的全新篇章。在这个故事里，每个节点都充满活力，每一步创新都在推动世界的进步。让我们一起，在边缘计算的世界里，塑造更加智能、更加美好的未来。
        </p>
      </MyCard>

      <div className="IntersectionObserver flex justify-between gap-5 ">
        {ImageList.map((item) => (
          <Image
            radius="full"
            isBlurred
            key={item.id}
            width={250}
            height={250}
            alt=" "
            src={item.src}
          ></Image>
        ))}
      </div>

      <h1 className="IntersectionObserver my-10 text-center text-3xl font-bold leading-10 text-slate-500">
        我们的发展历程
      </h1>

      <div className="IntersectionObserver flex text-center">
        <div className="w-1/5 border-r border-slate-300 text-slate-300">
          <span className="font-bold lg:text-5xl ">2018</span>
          <span>年</span>
          <p className="text-sm">公司成立时间</p>
        </div>
        <div className="w-1/5 border-r border-slate-300 text-slate-300">
          <span className="font-bold lg:text-5xl ">2000</span>
          <span>万+</span>
          <p className="text-sm">年营业额</p>
        </div>
        <div className="w-1/5 border-r border-slate-300 text-slate-300">
          <span className="font-bold lg:text-5xl ">324</span>
          <span>+</span>
          <p className="text-sm">覆盖城市</p>
        </div>
        <div className="w-1/5 border-r border-slate-300 text-slate-300">
          <span className="font-bold lg:text-5xl ">680</span>
          <span>+</span>
          <p className="text-sm">投资项目</p>
        </div>
        <div className="w-1/5  text-slate-300">
          <span className="font-bold lg:text-5xl ">470</span>
          <span>+</span>
          <p className="text-sm">项目研究成果</p>
        </div>
      </div>

      <div className="IntersectionObserver pt-10">
        {}
        <div className="flex justify-center gap-5">
          <div className="about-left flex w-1/2 flex-col items-end justify-center py-10 md:p-10">
            <Image width={100} height={100} alt=" " src="/about1.jpeg" />
            <span className=" font-bold leading-10 text-slate-500">
              指量科技成立
            </span>
          </div>
          <div className="relative border-1 border-slate-300  before:absolute before:left-0 before:top-0 before:h-5 before:w-5 before:translate-x-[-50%] before:translate-y-[-50%]  before:rounded-full before:bg-blue-300"></div>
          <div className="about-right w-1/2 py-10 md:p-10">
            <h1 className="text-xl font-bold leading-10 md:text-3xl">
              2018年12月
            </h1>
            <span className="font-bold text-slate-500 md:leading-10">
              宁波指量科技有限公司设立
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-5">
          <div className="about-right w-1/2 py-10 md:p-10 md:text-end">
            <h1 className="text-xl font-bold leading-10 md:text-3xl">
              2019-2020
            </h1>
            <span className="font-bold text-slate-500 md:leading-10">
              团队再次创业，专注于技术研发，为金融机构提供数字化解决方案；
              团队获评宁波市镇海区“雄镇英才”创业人才引进B类项目；
              并获得泰有基金、宁波市天使投资引导基金、镇海人才基金等机构投资入股。
            </span>
          </div>

          <div className="relative border-1 border-slate-300  before:absolute before:left-0 before:top-0 before:h-5 before:w-5 before:translate-x-[-50%] before:translate-y-[-50%]  before:rounded-full before:bg-blue-300"></div>
          <div className="about-left flex w-1/2 flex-col items-start justify-center py-10 md:p-10">
            <Image width={100} height={100} alt=" " src="/about3.jpeg" />
            <span className=" font-bold leading-10 text-slate-500">
              蓬勃发展
            </span>
          </div>
        </div>

        <div className=" flex justify-center gap-5">
          <div className="about-left flex w-1/2 flex-col items-end justify-center py-10 md:p-10">
            <Image width={100} height={100} alt=" " src="/about4.jpeg" />
            <span className=" font-bold leading-10 text-slate-500">
              势如破竹
            </span>
          </div>

          <div className="relative border-1 border-slate-300  before:absolute before:left-0 before:top-0 before:h-5 before:w-5 before:translate-x-[-50%] before:translate-y-[-50%]  before:rounded-full before:bg-blue-300"></div>
          <div className="about-right w-1/2 py-10 md:p-10">
            <h1 className="text-xl font-bold leading-10 md:text-3xl">
              2021-2023
            </h1>
            <span className=" font-bold text-slate-500 md:leading-10">
              公司获评国家高新技术企业，系统化搭建自有企业级云原生架构，和可高度扩展的数智技术开发平台；
              响应数字中国建设，致力于多场景数智解决，在金融数字化、政务数字化、行业数字化等多领域触达客户。
            </span>
          </div>
        </div>

        <div className=" flex justify-center gap-5">
          <div className="about-right w-1/2 py-10 md:p-10 md:text-end">
            <h1 className="text-xl font-bold leading-10 md:text-3xl">
              2024-至今
            </h1>
            <span className=" font-bold text-slate-500 md:leading-10">
              宁波质量科技将于更多合作伙伴一起，塑造更加智能、更加美好的未来。
            </span>
          </div>

          <div className="relative border-1 border-slate-300  before:absolute before:left-0 before:top-0 before:h-5 before:w-5 before:translate-x-[-50%] before:translate-y-[-50%]  before:rounded-full before:bg-blue-300"></div>
          <div className="about-left flex w-1/2 flex-col items-start justify-center py-10 md:p-10">
            <Image width={100} height={100} alt=" " src="/about2.jpeg" />
            <span className=" font-bold leading-10 text-slate-500">
              筑梦未来
            </span>
          </div>
        </div>
      </div>
    </MyCard>
  );
}
