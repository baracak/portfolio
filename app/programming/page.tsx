import { Image, Link, ImageProps } from "@nextui-org/react";
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
    <div className="grid grid-cols-1 gap-16 lg:gap-44">
      <PresentationBox
        titleRows={[
          [
            {
              text: "Courses",
              gradient: {
                fromClassName: "from-[#AE7EDE]",
                toClassName: "to-[#6020A0]",
              },
            },
          ],
        ]}
        description={
          <>
            I have attended a few programming courses. Here are the certificates
            from them
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
    </div>
  );
}
