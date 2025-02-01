import CommonLink from "@/app/components/common/CommonLink";
import { LanguageParams } from "@/app/helpers/params.helper";
import { getTranslation } from "@/app/i18n";
import { Image } from "@nextui-org/react";
import { Trans } from "react-i18next/TransWithoutContext";
import { coverImageProps } from "../../components/common/cover-image.constants";
import PresentationBox from "../../components/PresentationBox/PresentationBox";
import { prepareGenerateMetadataFn } from "../../helpers/metadata.helper";

export const generateMetadata = prepareGenerateMetadataFn({
  subTitleTKey: "page.sport.title",
});

export default async function SportPage({
  params: { lng },
}: {
  params: LanguageParams;
}) {
  const { t } = await getTranslation(lng);
  return (
    <>
      <div className="my-24">
        <PresentationBox
          titleRows={[[{ text: t("page.sport.heading.title") }]]}
          description={t("page.sport.heading.desc")}
          isPageTitle
        ></PresentationBox>
      </div>
      <div className="grid grid-cols-1 gap-20">
        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.sport.climbing.title"),
                gradient: {
                  fromClassName: "from-[#99C7FB]",
                  toClassName: "to-[#006FEE]",
                },
              },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.sport.climbing.desc"}
              components={{
                ddmLink: (
                  <CommonLink isExternal href={"https://www.ddmm.cz/"} />
                ),
              }}
            />
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/climbing.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/climbing1.jpg"
            />,
          ]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.sport.aerial.title"),
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#610726]",
                },
              },
            ],
          ]}
          description={t("page.sport.aerial.desc")}
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/arialhoop-skill.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/arialhoop4.jpeg"
            />,
          ]}
        ></PresentationBox>
      </div>
    </>
  );
}
