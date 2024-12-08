import { Image, Link } from "@nextui-org/react";
import PresentationBox from "../components/PresentationBox/PresentationBox";
import { coverImageProps } from "../components/common/cover-image.constants";

export default function HobbiesPage() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-4">
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <div>
          <h1 className="tracking-tight inline font-semibold text-7xl ">
            Hobbies
          </h1>
        </div>
      </div>
      <div>
        <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
          I enjoy crocheting, painting, and being part of my band. Crocheting
          brings me peace and helps me focus, while painting lets me express
          creativity, even with simple lines. In my band at DDM in Modřany, I
          write lyrics for our songs, and we perform at events and for our
          families
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16 lg:gap-44">
        <PresentationBox
          titleRows={[
            [
              {
                text: "Crocheting",
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
              src="/images/crochet bunny.jpg"
            />,
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/crochet octopus.jpg"
            />,
          ]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
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
              I have been painting my whole life, but probably like 3 years ago
              it started looking good. I like it because you can paint anything
              you want and even when you don&apos;t known how to paint you can
              paint something because you can just paint some lines on the paper
              and make it look good.
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/nebe.jpg"
            />,
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/butterfly.jpg"
            />,
          ]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
            [
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
              played some songs. Now we even write our own{" "}
              <Link
                isExternal
                href={
                  "https://docs.google.com/document/d/10hpqWInVeC-pcQN-p_qf-11UdD5KBPRNJBopiXYEzpk/edit?usp=sharing"
                }
                size="lg"
              >
                songs
              </Link>{" "}
              and I am usually the one that is writing the lyrics and than
              someone else from the band writes the music for it. We have some
              concerts for our parents but we also play at some actions that are
              in DDM in modřany.
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/kapela.jpg"
            />,
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/vecny-pribeh-nas.png"
            />,
          ]}
        ></PresentationBox>
      </div>
    </div>
  );
}
