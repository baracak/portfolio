import styles from "../styles.module.css";
import { Image, ImageProps, Link } from "@nextui-org/react";
import PresentationBox from "../components/PresentationBox/PresentationBox";

const coverImageProps: ImageProps = {
  width: "100%",
  className: styles["cover-image"],
  classNames: {
    wrapper: "h-64",
  },
};

export default function EducationPage() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-4">
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <div>
          <h1 className="tracking-tight inline font-semibold text-7xl ">
            Education
          </h1>
        </div>
      </div>
      <div>
        <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
          I study at ZŠ Angel and I have done 2 Cambridge exams
        </p>
      </div>
      <PresentationBox
        titleRows={[
          [
            {
              text: "Knowledge",
              gradient: {
                fromClassName: "from-[#FF72E1]",
                toClassName: "to-[#F54C7A]",
              },
            },
          ],
        ]}
        description={
          <>
            I study at{" "}
            <Link target="_blank" href={"https://www.ddmm.cz/"} size="lg">
              ZŠ Angel
            </Link>
            , a bilingual school where I’ve developed strong English skills and
            a good accent thanks to native speakers from various
            English-speaking countries. I also hold Cambridge certificates: A2
            from 5th grade and B2 from 9th grade.
          </>
        }
        gridItems={[
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            classNames={{
              wrapper: "h-96",
            }}
            src="/images/cambridge.jpg"
          />,
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            classNames={{
              wrapper: "h-96",
            }}
            src="/images/school.jpg"
          />,
        ]}
      ></PresentationBox>
    </div>
  );
}
