"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { usePathname } from "next/navigation.js";
const menuItems = [
  { path: "/", name: "Home", title: "网站首页" },
  { path: "/product", name: "Product", title: "产品与服务" },
  { path: "/solution", name: "Solution", title: "解决方案" },
  { path: "/about", name: "About", title: "关于我们" },
  { path: "#contact", name: "Contact", title: "联系我们" },
];
const NavBarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <Navbar isBlurred isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              isBlock
              aria-current="page"
              href={item.path}
              title={item.title}
              size="md"
              color={pathName === item.path ? "primary" : "foreground"}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              isBlock
              aria-current="page"
              href={item.path}
              title={item.title}
              size="lg"
              color={pathName === item.path ? "primary" : "foreground"}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarPage;
