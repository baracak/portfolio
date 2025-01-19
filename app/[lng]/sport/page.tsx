import { Image, Link } from "@nextui-org/react";
import { coverImageProps } from "../../components/common/cover-image.constants";
import PresentationBox from "../../components/PresentationBox/PresentationBox";
import { prepareGenerateMetadataFn } from "../../helpers/metadata.helper";
import { getTranslation } from "@/app/i18n";
import { LanguageParams } from "@/app/helpers/params.helper";
import { Trans } from "react-i18next";

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
            /*<Trans
              i18nKey={"page.sport.climbing.desc"}
              t={t}
              components={{
                ddmLink: <Link isExternal href={"https://www.ddmm.cz/"} />,
              }}
            />*/ undefined
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
                text: "Aerial Hoop",
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#610726]",
                },
              },
            ],
          ]}
          description={
            <>
              I do Arial Hoop at home. I have been doing Arial Hoop since I was
              13 years old. At first I did it with my friend from school at an
              afternoon club but now I have an aerial hoop at home and I train
              at home. I do this sport just for fun and it&apos;s mostly just
              about doing some new skills on the hoop.
            </>
          }
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
