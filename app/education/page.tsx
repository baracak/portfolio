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
    <div className="grid grid-cols-1 gap-16 lg:gap-44">
      <PresentationBox
        titleRows={[
          [
            { text: "My path to  " },
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
            . It is a bilingual school so I speak English pretty good and I also
            have a good acent because we have native speakers from different
            countries were they speak English. I also have a cambridge
            certificate from 5th grade in level A2 and I will do another one in
            the level B2 in 9th grade but unfortunately I will not have the
            results by the time of the entrance exams.
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
