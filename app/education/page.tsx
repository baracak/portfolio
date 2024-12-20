import { Image, Link } from "@nextui-org/react";
import PresentationBox from "../components/PresentationBox/PresentationBox";
import { coverImageProps } from "../components/common/cover-image.constants";
import { getMetadata } from "../helpers/metadata.helper";

export const metadata = getMetadata({
  subTitle: "Education",
});

export default function EducationPage() {
  return (
    <>
      <div className="my-24">
        <PresentationBox
          titleRows={[[{ text: "Education" }]]}
          description={
            <>
              I study at ZŠ Angel and I have done 2 Cambridge exams. I have
              competed in several sport competitions organised by my primary
              school. I have been learning English from a very early age.
            </>
          }
          isPageTitle
        ></PresentationBox>
      </div>
      <div className="grid grid-cols-1 gap-20">
        <PresentationBox
          titleRows={[
            [
              { text: "Second" },
              {
                text: "Cambridge",
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#301050]",
                },
              },
              { text: "exam" },
            ],
          ]}
          description={
            <>
              I have done my second Cambridge exam in 9th grade and it was level
              B2.
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/cambridge-certificate-b2.jpeg"
            />,
            <Image key={1} alt="" {...coverImageProps} src="/images/fce.jpg" />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              { text: "First " },
              {
                text: "Cambridge",
                gradient: {
                  fromClassName: "from-[#66AAF9]",
                  toClassName: "to-[#004493]",
                },
              },
              { text: "exam" },
            ],
          ]}
          description={
            <>
              I have done my first Cambridge exam in 5th grade and it was level
              A2.
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/cambridge-certificate-b2.jpeg"
            />,
            <Image key={1} alt="" {...coverImageProps} src="/images/ket.jpg" />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              {
                text: "Primary",
                gradient: {
                  fromClassName: "from-[#FF72E1]",
                  toClassName: "to-[#F54C7A]",
                },
              },
              { text: "school " },
            ],
          ]}
          description={
            <>
              I study at{" "}
              <Link target="_blank" href={"https://www.ddmm.cz/"}>
                ZŠ Angel
              </Link>
              , a bilingual school where I’ve developed strong English skills
              and a good accent thanks to native speakers from various
              English-speaking countries.
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/zsangel-logo3.png"
            />,
            <Image
              key={1}
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
