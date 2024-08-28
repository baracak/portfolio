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
    <div className="grid grid-cols-1 gap-16 lg:gap-44">
      <PresentationBox
        titleRows={[
          [
            {
              text: "Climbing",
              gradient: {
                fromClassName: "from-[#99C7FB]",
                toClassName: "to-[#006FEE]",
              },
            },
            { text: "made my" },
          ],
          [
            {
              text: "Muscles",
              gradient: {
                fromClassName: "from-[#99C7FB]",
                toClassName: "to-[#006FEE]",
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
            . I have been climbing for 4 years now and I even persuaded my dad
            to climb with me. I enjoy climbing very much and I am even a little
            bit stronger which is a positive thing about it.
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

      <PresentationBox
        titleRows={[
          [
            {
              text: "Arial Hoop",
              gradient: {
                fromClassName: "from-[#AE7EDE]",
                toClassName: "to-[#610726]",
              },
            },
            { text: "is just " },
          ],
          [
            {
              text: "fun",
            },
          ],
        ]}
        description={
          <>
            I do Arial Hoop in{" "}
            <Link target="_blank" href={"https://www.cvic.it/"} size="lg">
              Cvič.it
            </Link>
            . I have been doing Arial Hoop since I was 13 years old. I do it
            with my friend from school. I do this sport just for fun and
            it&apos;s mostly just doing some new skills on the hoop.
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
            src="/images/arialhoop-skill.jpg"
          />,
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            classNames={{
              wrapper: "h-96",
            }}
            src="/images/arialhoop4.jpeg"
          />,
        ]}
      ></PresentationBox>
    </div>
  );
}
