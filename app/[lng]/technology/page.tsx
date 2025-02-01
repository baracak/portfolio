import { Image, Link } from "@nextui-org/react";
import { coverImageProps } from "../../components/common/cover-image.constants";
import PresentationBox from "../../components/PresentationBox/PresentationBox";
import { prepareGenerateMetadataFn } from "../../helpers/metadata.helper";
import { LanguageParams } from "@/app/helpers/params.helper";
import { getTranslation } from "@/app/i18n";
import { Trans } from "react-i18next/TransWithoutContext";

export const generateMetadata = prepareGenerateMetadataFn({
  subTitleTKey: "page.technology.title",
});

export default async function TechnologyPage({
  params: { lng },
}: {
  params: LanguageParams;
}) {
  const { t } = await getTranslation(lng);
  return (
    <>
      <div className="my-24">
        <PresentationBox
          titleRows={[[{ text: t("page.technology.heading.title") }]]}
          description={t("page.technology.heading.desc")}
          isPageTitle
        ></PresentationBox>
      </div>
      <div className="grid grid-cols-1 gap-20">
        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.technology.portfolio.title"),
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#6020A0]",
                },
              },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.technology.portfolio.desc"}
              components={{
                nextJsLink: <Link isExternal href={"https://nextjs.org/"} />,
                typeScriptLink: (
                  <Link isExternal href={"https://www.typescriptlang.org/"} />
                ),
                reactLink: <Link isExternal href={"https://react.dev/"} />,
                nextUiLink: <Link isExternal href={"https://nextui.org/"} />,
                tailwindLink: (
                  <Link isExternal href={"https://tailwindcss.com/"} />
                ),
                githubLink: (
                  <Link
                    isExternal
                    href={"https://github.com/baracak/portfolio"}
                  />
                ),
              }}
            />
          }
          gridItems={[
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/code2.jpeg"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              { text: t("page.technology.introIt.title1") },
              {
                text: t("page.technology.introIt.title2"),
                gradient: {
                  fromClassName: "from-[#006FEE]",
                  toClassName: "to-[#002E62]",
                },
              },
              { text: t("page.technology.introIt.title3") },
              {
                text: t("page.technology.introIt.title4"),
                gradient: {
                  fromClassName: "from-[#006FEE]",
                  toClassName: "to-[#002E62]",
                },
              },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.technology.introIt.desc"}
              components={{
                courseLink: (
                  <Link
                    isExternal
                    href={
                      "https://www.ssps.cz/kurz-od-skillify-uvod-do-programovani-a-it-sveta/"
                    }
                  />
                ),
                sspsLink: <Link isExternal href={"https://www.ssps.cz/"} />,
              }}
            />
          }
          gridItems={[
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/ssps-kurz-it-code.png"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.technology.cs50.title"),
                gradient: {
                  fromClassName: "from-[#F54180]",
                  toClassName: "to-[#920B3A]",
                },
              },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.technology.cs50.desc"}
              components={{
                courseLink1: (
                  <Link isExternal href={"https://cs50.harvard.edu/x/2024/"} />
                ),
              }}
            />
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/cs50-week0.jpeg"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [{ text: t("page.technology.girlsGroup.title1") }],
            [
              {
                text: t("page.technology.girlsGroup.title2"),
                gradient: {
                  fromClassName: "from-[#45D483]",
                  toClassName: "to-[#0E793C]",
                },
              },
              { text: t("page.technology.girlsGroup.title3") },
            ],
            [
              {
                text: t("page.technology.girlsGroup.title4"),
                gradient: {
                  fromClassName: "from-[#45D483]",
                  toClassName: "to-[#0E793C]",
                },
              },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.technology.girlsGroup.desc"}
              components={{
                certificateLink: (
                  <Link
                    isExternal
                    href={
                      "/docs/2024-07-26-ssps-osvedceni-o-absolvování-uvod-do-it-od-divciho-spolku-barbora-kalinova.pdf"
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
              src="/images/uvod-do-it-od-divciho-spolku.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/ssps-logo.png"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.technology.media.title1"),
                gradient: {
                  fromClassName: "from-[#7EE7FC]",
                  toClassName: "to-[#06B7DB]",
                },
              },
              { text: t("page.technology.media.title2") },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.technology.media.desc"}
              components={{
                podcastLink: (
                  <Link
                    isExternal
                    href={"https://www.youtube.com/watch?v=GvglIRTgXnY"}
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
              src="/images/fotka-medialni-tvorba.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/medialni-tvorba-podcast.JPG"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [{ text: t("page.technology.web.title1") }],
            [
              {
                text: t("page.technology.web.title2"),
                gradient: {
                  fromClassName: "from-[#F9C97C]",
                  toClassName: "to-[#C4841D]",
                },
              },
              { text: t("page.technology.web.title3") },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.technology.web.desc"}
              components={{
                makeItLink: (
                  <Link
                    isExternal
                    href={"https://makeittoday.cz/tabory/camp.html?id=15"}
                  />
                ),
                webLink: (
                  <Link
                    isExternal
                    href={"/programming/make-it-today-2023/index.htm"}
                  />
                ),
                certificateLink1: (
                  <Link
                    isExternal
                    href={
                      "/docs/2023-07-21-makeittoday-diplom-za-absolvovani-uvod-do-programovani-webu-Barbora-kalinova.pdf"
                    }
                  />
                ),
              }}
            />
          }
          gridItems={[
            <Link
              key={0}
              isExternal
              href="/programming/make-it-today-2023/index.htm"
            >
              <Image
                alt=""
                {...coverImageProps}
                src="/images/lets-crochet.jpeg"
              />
            </Link>,
          ]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.technology.javascript.title1"),
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#6020A0]",
                },
              },
              { text: t("page.technology.javascript.title2") },
            ],
            [
              {
                text: t("page.technology.javascript.title3"),
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#6020A0]",
                },
              },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.technology.javascript.desc"}
              components={{
                courseLink2: (
                  <Link
                    isExternal
                    href={"https://www.udemy.com/course/javascript-for-kids/"}
                  />
                ),
                udemyLink: <Link isExternal href={"https://www.udemy.com/"} />,
                calculatorLink: (
                  <Link
                    isExternal
                    href={
                      "/programming/javascript-for-kids/investmentCalculator.html"
                    }
                  />
                ),
                dragDrawLink: (
                  <Link
                    isExternal
                    href={"/programming/javascript-for-kids/dragDraw.html"}
                  />
                ),
              }}
            />
          }
          gridItems={[
            <Link
              key={0}
              isExternal
              href="/programming/javascript-for-kids/investmentCalculator.html"
            >
              <Image
                key={1}
                alt=""
                {...coverImageProps}
                src="/images/investmentCalculator.png"
              />
            </Link>,

            <Link
              key={2}
              isExternal
              href="/programming/javascript-for-kids/dragDraw.html"
            >
              <Image alt="" {...coverImageProps} src="/images/dragdraw1.jpeg" />
            </Link>,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              {
                text: t("page.technology.scratch.title"),
                gradient: {
                  fromClassName: "from-[#338EF7]",
                  toClassName: "to-[#004493]",
                },
              },
            ],
          ]}
          description={
            <Trans
              t={t}
              i18nKey={"page.technology.scratch.desc"}
              components={{
                scratchLink: (
                  <Link isExternal href={"https://scratch.mit.edu/"} />
                ),
                dragonChaseLink: (
                  <Link
                    isExternal
                    href={"/programming/scratch/dragon-chase.html"}
                  />
                ),
                sayHelloLink: (
                  <Link
                    isExternal
                    href={"/programming/scratch/say-hello.html"}
                  />
                ),
              }}
            />
          }
          gridItems={[
            <Link
              key={0}
              isExternal
              href="/programming/scratch/dragon-chase.html"
            >
              <Image
                alt=""
                {...coverImageProps}
                src="/images/dragon-chase-scratch-2018.png"
              />
            </Link>,
            <Link key={1} isExternal href="/programming/scratch/say-hello.html">
              <Image
                alt=""
                {...coverImageProps}
                src="/images/say-hello-on-scratch.png"
              />
            </Link>,
          ]}
        ></PresentationBox>
      </div>
    </>
  );
}
