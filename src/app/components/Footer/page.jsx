import React from "react";
import Image from "next/image";
export default function FooterPage() {
  return (
    <footer id="contact" className="footer bg-black text-white">
      <div className="footer-content p-5 md:p-10">
        <h1 className=" text-xl font-bold leading-9">
          联系我们
          <span className="text-sm font-normal leading-9"> Contact</span>
        </h1>
        <div className="contact sm:p-10 sm:pt-3">
          <h1 className="py-5 text-center text-lg font-bold  sm:text-start">
            宁波指量科技有限公司
          </h1>
          <div className="sm:flex">
            <ul className="hidden max-w-[300px] sm:block">
              <li className="text-sm leading-9">
                地址:浙江省宁波市镇海区庄市街道中官西路1277号启迪科技园A栋3层304号
              </li>
              <li className="text-sm leading-9">邮箱:zhiliangkeji@qq.com</li>
              <li className="text-sm leading-9">手机:0537-1233211234567</li>
            </ul>
            <Image
              className="m-auto h-[100px] sm:m-0"
              src="/vchart.png"
              width={100}
              height={100}
              alt=" "
            />
            <ul className="text-center sm:hidden">
              <li className="text-sm leading-9">邮箱:zhiliangkeji@qq.com</li>
              <li className="text-sm leading-9">手机:0537-1233211234567</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom  bg-zinc-500 py-3 text-white">
        <p className="text-center text-xs leading-10">
          Copyright © www.zlkj.com, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
