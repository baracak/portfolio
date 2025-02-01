import { Image, Link } from "@nextui-org/react";
import PresentationBox from "../../components/PresentationBox/PresentationBox";
import { coverImageProps } from "../../components/common/cover-image.constants";
import { prepareGenerateMetadataFn } from "../../helpers/metadata.helper";
import { t } from "i18next";
import { Trans } from "react-i18next/TransWithoutContext";
import { LanguageParams } from "@/app/helpers/params.helper";
import { getTranslation } from "@/app/i18n";

export const generateMetadata = prepareGenerateMetadataFn({
  subTitleTKey: "page.education.title",
});

export default async function EducationPage({
  params: { lng },
}: {
  params: LanguageParams;
}) {
  const { t } = await getTranslation(lng);
  return (
    <>
      <div className="my-24">
        <PresentationBox
          titleRows={[[{ text: t("page.education.heading.title") }]]}
          description={t("page.education.heading.desc")}
          isPageTitle
        ></PresentationBox>
      </div>
      <div className="grid grid-cols-1 gap-20">
        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.education.B2.title1"),
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#301050]",
                },
              },
              { text: t("page.education.B2.title2") },
              {
                text: t("page.education.B2.title3"),
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#301050]",
                },
              },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.education.B2.desc"}
              components={{
                resultsLink: (
                  <Link
                    isExternal
                    href={
                      "/docs/2024-12-12-cambridge-first-certificate-in-english- statement-of-results-barbora-kalinová.pdf"
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
              src="/images/cambridge-vysledky.png"
            />,
            <Image key={1} alt="" {...coverImageProps} src="/images/fce.jpg" />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.education.A2.title1"),
                gradient: {
                  fromClassName: "from-[#66AAF9]",
                  toClassName: "to-[#004493]",
                },
              },
              { text: t("page.education.A2.title2") },
              {
                text: t("page.education.A2.title3"),
                gradient: {
                  fromClassName: "from-[#66AAF9]",
                  toClassName: "to-[#004493]",
                },
              },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.education.A2.desc"}
              components={{
                certificateLink1: (
                  <Link
                    isExternal
                    href={"/docs/cambridge-english-certificate-2021-a2.pdf"}
                  />
                ),
              }}
            />
          }
          gridItems={[
            <Link
              key={0}
              isExternal
              href="/docs/cambridge-english-certificate-2021-a2.pdf"
            >
              <Image
                alt=""
                {...coverImageProps}
                src="/images/cambridge-certificate-b2.jpeg"
              />
            </Link>,

            <Image key={1} alt="" {...coverImageProps} src="/images/ket.jpg" />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.education.school.title1"),
                gradient: {
                  fromClassName: "from-[#FF72E1]",
                  toClassName: "to-[#F54C7A]",
                },
              },
              { text: t("page.education.school.title2") },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.education.school.desc"}
              components={{
                zsangelLink: <Link isExternal href={"//www.zsangel.cz/"} />,
                cheerTeamLink: (
                  <Link
                    isExternal
                    href={"https://www.instagram.com/angel.cheer.team"}
                  />
                ),
                praiseLink: (
                  <Link
                    isExternal
                    href={"/docs/pochvala-za-tanec-zsangel.pdf"}
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
              src="/images/zsangel-logo.png"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/samba1.png"
            />,
            <Image
              key={2}
              alt=""
              {...coverImageProps}
              src="/images/zsangel-8a.jpeg"
            />,
          ]}
        ></PresentationBox>
      </div>
    </>
  );
}
