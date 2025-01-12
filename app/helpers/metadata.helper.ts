import { TFunction } from "i18next";
import { Metadata } from "next";

export function getMetadata({
  t,
  subTitle,
}: {
  t?: TFunction;
  subTitle?: string;
} = {}): Metadata {
  const title = t ? t("title") : "Bara's Portfolio";
  return {
    title: subTitle ? `${subTitle} | ${title}` : title,
  };
}
