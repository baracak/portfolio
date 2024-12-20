"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/next";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { BaraLogo } from "./BaraLogo";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems: { name: string; pathname: string }[] = [
    { name: "Sport", pathname: "/sport" },
    { name: "Hobbies", pathname: "/hobbies" },
    { name: "Technology", pathname: "/technology" },
    { name: "Education", pathname: "/education" },
  ];
  const pathname = usePathname();

  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <div className="flex flex-col items-center">
            <Navbar
              isBordered
              isMenuOpen={isMenuOpen}
              onMenuOpenChange={setIsMenuOpen}
              maxWidth="xl"
            >
              <NavbarContent className="sm:hidden pr-3" justify="start">
                <NavbarBrand>
                  <Link href="/" color="foreground">
                    <BaraLogo />
                    <p className=" text-inherit ml-2 text-2xl">Barča</p>
                  </Link>
                </NavbarBrand>
              </NavbarContent>

              <NavbarContent className="sm:hidden" justify="center">
                <NavbarMenuToggle
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
              </NavbarContent>

              <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarBrand>
                  <Link href="/" color="foreground">
                    <BaraLogo />
                    <p className=" text-inherit ml-2 text-2xl">Barča</p>
                  </Link>
                </NavbarBrand>
              </NavbarContent>

              <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                  <NavbarItem key={`${item}-${index}`}>
                    <Link
                      href={item.pathname}
                      color={
                        pathname === item.pathname ? "primary" : "foreground"
                      }
                      className="text-lg lg:text-xl"
                    >
                      {item.name}
                    </Link>
                  </NavbarItem>
                ))}
              </NavbarContent>

              <NavbarMenu>
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                      className="w-full text-2xl"
                      color={
                        pathname === item.pathname ? "primary" : "foreground"
                      }
                      onClick={() => setIsMenuOpen(false)}
                      href={item.pathname}
                    >
                      {item.name}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            </Navbar>
            <div className="mx-auto max-w-[1280px] w-full p-6">{children}</div>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
