import { Image, ImageProps, Link } from "@nextui-org/react";
import PresentationBox from "../components/PresentationBox/PresentationBox";
import styles from "../styles.module.css";

const coverImageProps: ImageProps = {
  width: "100%",
  className: styles["cover-image"],
  classNames: {
    wrapper: "h-64",
  },
};

export default function SportsPage() {
  return (
    <PresentationBox
      titleRows={[
        [
          {
            text: "Climbing",
            gradient: {
              fromClassName: "from-[#610726]",
              toClassName: "to-[#0E8AAA]",
            },
          },
          { text: "made my" },
        ],
        [
          {
            text: "Muscles",
            gradient: {
              fromClassName: "from-[#610726]",
              toClassName: "to-[#0E8AAA]",
            },
          },
        ],
      ]}
      description={
        <>
          I climb in{" "}
          <Link target="_blank" href={"https://www.ddmm.cz/"} size="lg">
            DDM in Modřany
          </Link>
          . I have been climbing for 4 years now and I even persuaded my dad to
          climb with me. I enjoy climbing very much and I am even a little bit
          stronger which is a positive thing about it.
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
          src="/images/lezeni.jpg"
        />,
        <Image
          key={0}
          alt=""
          {...coverImageProps}
          classNames={{
            wrapper: "h-96",
          }}
          src="/images/lezeni2.jpg"
        />,
      ]}
    ></PresentationBox>
  );
}
