import { Image, ImageProps, Link } from "@nextui-org/react";
import PresentationBox from "./components/PresentationBox/PresentationBox";
import styles from "./styles.module.css";

const coverImageProps: ImageProps = {
  width: "100%",
  className: styles["cover-image"],
  classNames: {
    wrapper: "h-64",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="my-24">
        <div>
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <div>
              <h1 className="tracking-tight inline font-semibold text-7xl ">
                Hi I&apos;m Barča.
              </h1>
            </div>
            <div>
              <h1 className="tracking-tight inline font-semibold text-6xl ">
                This is my{" "}
              </h1>
              <h1 className="tracking-tight inline font-semibold text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-[#F7B750] to-[#62420E]">
                Portfolio
              </h1>
            </div>
          </div>
          <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
            I find passion in crocheting, programming, climbing and playing in a
            band.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-16 lg:gap-44">
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
              . I have been climbing for 4 years now and I even persuaded my dad
              to climb with me. I enjoy climbing very much and I am even a
              little bit stronger which is a positive thing about it.
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
              I have been crocheting a long time now, something about 5 years
              and I think I am pretty good at it. I enjoy it because it brings
              me peace and I can just sit down and do one thing and not worry
              about other stuff. That is what I love about crocheting.
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
              I have been painting my whole life and but probably like 2 years
              ago it started looking good. I like it because you can paint
              anything you want and even when you do not paint you can paint
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
                  toClassName: "to-[#920B3A]",
                },
              },
              { text: "the world of" },
              {
                text: "My band",
                gradient: {
                  fromClassName: "from-[#301050]",
                  toClassName: "to-[#920B3A]",
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
              played some songs. Now we even write our own songs and I am
              usually the one that is writing the lyrics and than someone else
              from the band writes the music for it. We have some concerts for
              our parents but we also play at some actions that are in DDM in
              modřany.
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
              . It is a bilingual school so I speak English pretty good and I
              also have a good acent because we have native speakers from
              different countries were they speak English. I also have a
              cambridge certificate from 5th grade in level A2 and I will do
              another one in 9th grade but unfortunately I will not have the
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
    </>
  );
}
