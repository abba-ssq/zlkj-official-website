import React from "react";
import { Image } from "@nextui-org/react";

const imageList = [
  { id: "1", src: "/1.png", alt: "" },
  { id: "2", src: "/2.png", alt: "" },
  { id: "3", src: "/3.png", alt: "" },
  { id: "4", src: "/4.png", alt: "" },
  { id: "5", src: "/5.png", alt: "" },
  { id: "6", src: "/6.png", alt: "" },
];
export default function Partners() {
  return (
    <div className="min-h-12 ">
      <div className="flex h-full justify-around">
        {imageList.map((item) => {
          return (
            <div key={item.id}>
              <Image
                radius="none"
                className="h-12"
                src={item.src}
                alt={item.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
