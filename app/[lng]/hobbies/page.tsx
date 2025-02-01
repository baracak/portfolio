import CommonLink from "@/app/components/common/CommonLink";
import { LanguageParams } from "@/app/helpers/params.helper";
import { getTranslation } from "@/app/i18n";
import { Image } from "@nextui-org/react";
import { Trans } from "react-i18next/TransWithoutContext";
import PresentationBox from "../../components/PresentationBox/PresentationBox";
import { coverImageProps } from "../../components/common/cover-image.constants";
import { prepareGenerateMetadataFn } from "../../helpers/metadata.helper";

export const generateMetadata = prepareGenerateMetadataFn({
  subTitleTKey: "page.hobbies.title",
});

export default async function HobbiesPage({
  params: { lng },
}: {
  params: LanguageParams;
}) {
  const { t } = await getTranslation(lng);
  return (
    <>
      <div className="my-24">
        <PresentationBox
          titleRows={[[{ text: t("page.hobbies.heading.title") }]]}
          description={t("page.hobbies.heading.desc")}
          isPageTitle
        ></PresentationBox>
      </div>

      <div className="grid grid-cols-1 gap-20">
        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.hobbies.crocheting.title"),
                gradient: {
                  fromClassName: "from-[#F871A0]",
                  toClassName: "to-[#C20E4D]",
                },
              },
            ],
          ]}
          description={t("page.hobbies.crocheting.desc")}
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/crochet bunny.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/crochet octopus.jpg"
            />,
          ]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.hobbies.painting.title"),
                gradient: {
                  fromClassName: "from-[#12A150]",
                  toClassName: "to-[#002E62]",
                },
              },
            ],
          ]}
          description={t("page.hobbies.painting.desc")}
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/nebe.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/butterfly.jpg"
            />,
          ]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.hobbies.band.title"),
                gradient: {
                  fromClassName: "from-[#301050]",
                  toClassName: "to-[#9353D3]",
                },
              },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.hobbies.band.desc"}
              components={{
                ddmLink: (
                  <CommonLink isExternal href={"https://www.ddmm.cz/"} />
                ),
                songLink: (
                  <CommonLink
                    isExternal
                    href={
                      "https://docs.google.com/document/d/10hpqWInVeC-pcQN-p_qf-11UdD5KBPRNJBopiXYEzpk/edit?usp=sharing"
                    }
                  />
                ),
              }}
            />
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/kapela.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/vecny-pribeh-nas.png"
            />,
          ]}
        ></PresentationBox>
      </div>
    </>
  );
}
