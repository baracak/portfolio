import { TFunction } from "i18next";
import { Metadata } from "next";
import { getTranslation } from "../i18n";
import { LanguageParams } from "./params.helper";

export async function getMetadata({
  lng,
  subTitle,
  subTitleTKey,
}: {
  lng: string;
  subTitle?: string;
  subTitleTKey?: string;
}): Promise<Metadata> {
  const { t } = await getTranslation(lng);
  const title = t("title");
  subTitle = subTitleTKey ? t(subTitleTKey) : subTitle;
  return {
    title: subTitle ? `${subTitle} | ${title}` : title,
  };
}

export function prepareGenerateMetadataFn({
  subTitle,
  subTitleTKey,
}: {
  subTitle?: string;
  subTitleTKey?: string;
} = {}): (props: { params: LanguageParams }) => Promise<Metadata> {
  return async ({ params: { lng } }) => {
    return getMetadata({ lng, subTitle, subTitleTKey });
  };
}
