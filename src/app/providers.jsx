"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavBarPage from "./components/NavBarPage/page.jsx";
import Footer from "./components/Footer/page.jsx";
import React, { useLayoutEffect } from "react";
import { IntersectionObserverHandle } from "./hooks/index.js";
import SwiperPage from "./components/SwiperPage/page.jsx";
import { usePathname } from "next/navigation.js";
export function Providers({ children }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    IntersectionObserverHandle();
  });
  return (
    <NextUIProvider>
      <NavBarPage />
      {pathname === "/" && <SwiperPage />}
      <div className="pb-8 lg:p-8">{children}</div>
      <Footer />
    </NextUIProvider>
  );
}
