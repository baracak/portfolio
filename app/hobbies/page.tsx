import { Image, ImageProps, Link } from "@nextui-org/react";
import styles from "../styles.module.css";
import PresentationBox from "../components/PresentationBox/PresentationBox";

const coverImageProps: ImageProps = {
  width: "100%",
  className: styles["cover-image"],
  classNames: {
    wrapper: "h-64",
  },
};

export default function HobbiesPage() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-44">
      <PresentationBox
        titleRows={[
          [{ text: "From  " }],
          [
            {
              text: "Yarn to Yarn",
              gradient: {
                fromClassName: "from-[#F871A0]",
                toClassName: "to-[#C20E4D]",
              },
            },
          ],
        ]}
        description={
          <>
            I have been crocheting a long time now, something about 5 years and
            I think I am pretty good at it. I enjoy it because it brings me
            peace and I can just sit down and do one thing and not worry about
            other stuff. That is what I love about crocheting.
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
            src="/images/crochet bunny.jpg"
          />,
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            classNames={{
              wrapper: "h-96",
            }}
            src="/images/crochet octopus.jpg"
          />,
        ]}
      ></PresentationBox>

      <PresentationBox
        titleRows={[
          [
            { text: "Exploring the  " },
            {
              text: "Art",
              gradient: {
                fromClassName: "from-[#12A150]",
                toClassName: "to-[#002E62]",
              },
            },
            { text: "of  " },
          ],
          [
            {
              text: "Painting",
              gradient: {
                fromClassName: "from-[#12A150]",
                toClassName: "to-[#002E62]",
              },
            },
          ],
        ]}
        description={
          <>
            I have been painting my whole life, but probably like 3 years ago it
            started looking good. I like it because you can paint anything you
            want and even when you don&apos;t known how to paint you can paint
            something because you can just paint some lines on the paper and
            make it look good.
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
            src="/images/nebe.jpg"
          />,
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            classNames={{
              wrapper: "h-96",
            }}
            src="/images/butterfly.jpg"
          />,
        ]}
      ></PresentationBox>

      <PresentationBox
        titleRows={[
          [
            {
              text: "Inside ",
              gradient: {
                fromClassName: "from-[#301050]",
                toClassName: "to-[#9353D3]",
              },
            },
            { text: "the world of" },
            {
              text: "My band",
              gradient: {
                fromClassName: "from-[#301050]",
                toClassName: "to-[#9353D3]",
              },
            },
          ],
        ]}
        description={
          <>
            My band is a afternoon course in{" "}
            <Link target="_blank" href={"https://www.ddmm.cz/"} size="lg">
              DDM in Modřany
            </Link>
            . It all started when I once went to a band course and we just
            played some songs. Now we even write our own songs and I am usually
            the one that is writing the lyrics and than someone else from the
            band writes the music for it. We have some concerts for our parents
            but we also play at some actions that are in DDM in modřany.
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
            src="/images/kapela.jpg"
          />,
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            classNames={{
              wrapper: "h-96",
            }}
            src="/images/Věčný-příběh-nás.png"
          />,
        ]}
      ></PresentationBox>
    </div>
  );
}
