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
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useClientTranslation } from "../i18n/client";
import { Language } from "../i18n/settings";
import { BaraLogo } from "./../BaraLogo";
import LanguageSwitcher from "./LanguageSwitcher";

interface Props {
  lng: Language;
}

export default function Menu({ lng }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useClientTranslation(lng);
  const menuItems: { name: string; pathname: string }[] = [
    { name: t("page.technology.title"), pathname: `/${lng}/technology` },
    { name: t("page.education.title"), pathname: `/${lng}/education` },
    { name: t("page.sport.title"), pathname: `/${lng}/sport` },
    { name: t("page.hobbies.title"), pathname: `/${lng}/hobbies` },
  ];
  const pathname = usePathname();

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
    >
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Link href={`/${lng}`} color="foreground">
            <BaraLogo />
            <p className=" text-inherit ml-2 text-2xl">Barča</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuItem
          key="lang"
          style={{ width: 40, cursor: "pointer", marginRight: 10 }}
        >
          <LanguageSwitcher lng={lng} flagWidth={40} fontSize={20} />
        </NavbarMenuItem>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href={`/${lng}`} color="foreground">
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
              color={pathname === item.pathname ? "primary" : "foreground"}
              className="text-lg lg:text-xl"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarMenuItem key="lang" style={{ width: 30, cursor: "pointer" }}>
          <LanguageSwitcher lng={lng} />
        </NavbarMenuItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-2xl"
              color={pathname === item.pathname ? "primary" : "foreground"}
              onClick={() => setIsMenuOpen(false)}
              href={item.pathname}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
