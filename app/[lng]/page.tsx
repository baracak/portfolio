import { Image } from "@nextui-org/react";
import PresentationBox from "../components/PresentationBox/PresentationBox";
import { coverImageProps } from "../components/common/cover-image.constants";
import { prepareGenerateMetadataFn } from "../helpers/metadata.helper";
import { LanguageParams } from "../helpers/params.helper";
import { getTranslation } from "../i18n";

export const generateMetadata = prepareGenerateMetadataFn();

export default async function HomePage({
  params: { lng },
}: {
  params: LanguageParams;
}) {
  const { t } = await getTranslation(lng);
  return (
    <>
      <div className="my-24">
        <div>
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <div>
              <h1 className="tracking-tight inline font-semibold text-6xl lg:text-7xl ">
                {t("page.home.heading.title1")}
              </h1>
            </div>
            <div>
              <h1 className="tracking-tight inline font-semibold text-5xl lg:text-6xl ">
                {t("page.home.heading.title2")}
              </h1>
              <h1 className="tracking-tight inline font-semibold  text-5xl lg:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-[#F7B750] to-[#62420E]">
                {t("page.home.heading.title3")}
              </h1>
            </div>
          </div>
          <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
            {t("page.home.heading.desc")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-20">
        <PresentationBox
          detailLink="/technology"
          titleRows={[
            [
              {
                text: t("page.home.technology.title"),
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#610726]",
                },
              },
            ],
          ]}
          description={
            <>
              I programm to solve problems, express creativity, and build useful
              tools. It offers great career opportunities and continuous
              learning as technology evolves. It empowers me to turn my ideas
              into reality.
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/programm.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/code.jpg"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          detailLink="/education"
          titleRows={[
            [
              {
                text: t("page.home.education.title"),
                gradient: {
                  fromClassName: "from-[#9353D3]",
                  toClassName: "to-[#7828C8]",
                },
              },
            ],
          ]}
          description={t("page.home.education.desc")}
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/education.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/education1.jpg"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          detailLink="/sport"
          titleRows={[
            [
              {
                text: t("page.home.sport.title"),
                gradient: {
                  fromClassName: "from-[#99C7FB]",
                  toClassName: "to-[#006FEE]",
                },
              },
            ],
          ]}
          description={t("page.home.sport.desc")}
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/bara.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/arial-hoop.jpg"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          detailLink="/hobbies"
          titleRows={[
            [
              {
                text: t("page.home.hobbies.title"),
                gradient: {
                  fromClassName: "from-[#12A150]",
                  toClassName: "to-[#002E62]",
                },
              },
            ],
          ]}
          description={t("page.home.hobbies.desc")}
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/piano.jpeg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/kytka1.jpeg"
            />,
          ]}
        ></PresentationBox>
      </div>
    </>
  );
}
