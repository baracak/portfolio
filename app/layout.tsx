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
import { ReactNode, useState } from "react";
import { AcmeLogo } from "./AcmeLogo";
import "./globals.css";
import { Providers } from "./providers";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems: { name: string; pathname: string }[] = [
    { name: "Hobbies", pathname: "/hobbies" },
    { name: "Sports", pathname: "/sports" },
    { name: "IT", pathname: "/it" },
    { name: "Education", pathname: "/education" },
  ];
  const pathname = usePathname();

  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
          >
            <NavbarContent className="sm:hidden" justify="start">
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
              <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="start">
              <NavbarBrand>
                <Link href="/" color="foreground">
                  <AcmeLogo />
                  <p className="font-bold text-inherit">ACME</p>
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
                    className="w-full"
                    color={
                      pathname === item.pathname ? "primary" : "foreground"
                    }
                    href={item.pathname}
                    size="lg"
                  >
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
