import { Metadata } from "next";

export function getMetadata({
  subTitle,
}: { subTitle?: string } = {}): Metadata {
  const title = "Bara's Portfolio";
  return {
    title: subTitle ? `${subTitle} | ${title}` : title,
  };
}
