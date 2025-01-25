"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { CZ, FlagComponent, GB } from "country-flag-icons/react/3x2";
import { ReactComponentElement, ReactNode, useMemo } from "react";
import { languages as i18nLanguages, Language } from "../i18n/settings";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  lng: Language;
  flagWidth?: number;
  fontSize?: number;
}

interface LanguageInfo {
  lang: Language;
  label: string;
  flagComponent: FlagComponent;
  targetPathname: string;
}

export default function LanguageSwitcher({
  lng,
  flagWidth = 30,
  fontSize = 18,
}: Props) {
  const pathname = usePathname();
  const {
    activeLanguage,
    languages,
  }: { activeLanguage: LanguageInfo; languages: LanguageInfo[] } =
    useMemo(() => {
      const pathnameRegex = new RegExp(`^\/${lng}`);
      const languages = i18nLanguages.map((i18nLang) => {
        let label: string;
        let flagComponent: LanguageInfo["flagComponent"];
        if (i18nLang === "cs") {
          label = "Čeština";
          flagComponent = CZ;
        } else {
          label = "English";
          flagComponent = GB;
        }
        return {
          lang: i18nLang,
          label,
          flagComponent,
          targetPathname: pathname.replace(pathnameRegex, `/${i18nLang}`),
        } satisfies LanguageInfo;
      });
      return {
        languages,
        activeLanguage: languages.find((info) => {
          return info.lang === lng;
        })!,
      };
    }, [lng, pathname]);
  return (
    <Dropdown>
      <DropdownTrigger>
        <div>
          <activeLanguage.flagComponent style={{ borderRadius: 2 }} />
        </div>
      </DropdownTrigger>
      <DropdownMenu>
        {languages
          .filter(({ lang }) => lang !== lng)
          .map((info) => {
            const { lang, label, targetPathname } = info;
            return (
              <DropdownItem key={lang}>
                <Link href={targetPathname}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize,
                    }}
                  >
                    <info.flagComponent
                      style={{
                        width: flagWidth,
                        display: "inline-block",
                        borderRadius: 2,
                      }}
                    />{" "}
                    {label}
                  </div>
                </Link>
              </DropdownItem>
            );
          })}
      </DropdownMenu>
    </Dropdown>
  );
}
