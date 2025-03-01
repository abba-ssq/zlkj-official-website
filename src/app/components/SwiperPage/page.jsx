"use client";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import "swiper/css";
import "swiper/css/effect-fade";
const imageList = [
  {
    id: 1,
    title: "驱动智能未来,构造边缘计算新纪元",
    url: "https://img1.baidu.com/it/u=684770079,849342797&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1713546000&t=9d8750a3a84cdf6128d07ea42f12b97d",
  },
  {
    id: 2,
    title: "从边缘到云端,无缝链接,赋能行业革命",
    url: "https://img2.baidu.com/it/u=2370659921,4443523&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  },
  {
    id: 3,
    title: "引领产业数字化,创造全新价值",
    url: "https://img2.baidu.com/it/u=47971542,2978710967&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
  },
];

const SwiperPage = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={30}
      effect={"fade"}
      loop="true"
      speed={500}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {imageList.map((item, i) => {
        return (
          <SwiperSlide key={item.id}>
            <div className="h-60 w-full bg-white md:h-[90vh]">
              <div className="flex h-full w-full items-center justify-center font-bold text-black md:text-6xl">
                <span
                  className={`${item.id === i + 1 ? "tracking-in-expand-fwd" : ""}`}
                >
                  {item.title}
                </span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default SwiperPage;
