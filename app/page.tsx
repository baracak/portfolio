import { Image, ImageProps, Link } from "@nextui-org/react";
import PresentationBox from "./components/PresentationBox/PresentationBox";
import styles from "./styles.module.css";

const coverImageProps: ImageProps = {
  width: "100%",
  className: styles["cover-image"],
  classNames: {
    wrapper: "h-96",
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
            I engage in sports to improve both my physical and mental health,
            while programming allows me to solve problems and bring my creative
            ideas to life. Hobbies help me relax, and connect with others. I
            believe education is key to personal growth and I am passionate
            about expanding my knowledge, especially in IT, to tackle real-world
            challenges.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-16 lg:gap-44"></div>

      <div>
        <div className="grid grid-cols-1 gap-16 lg:gap-44">
          <PresentationBox
            titleRows={[
              [
                {
                  text: "Sport",
                  gradient: {
                    fromClassName: "from-[#99C7FB]",
                    toClassName: "to-[#006FEE]",
                  },
                },
              ],
            ]}
            description={
              <>
                I do sport because it helps me build my physic and it helps me
                mentally. It boost my mood and it chalenges me to try new things
                and get sensational in them.
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
                src="/images/bara.jpg"
              />,
              <Image
                key={0}
                alt=""
                {...coverImageProps}
                classNames={{
                  wrapper: "h-96",
                }}
                src="/images/arial-hoop.jpg"
              />,
            ]}
          ></PresentationBox>

          <PresentationBox
            titleRows={[
              [
                {
                  text: "Programming",
                  gradient: {
                    fromClassName: "from-[#AE7EDE]",
                    toClassName: "to-[#610726]",
                  },
                },
              ],
            ]}
            description={
              <>
                I programm to solve problems, express creativity, and build
                useful tools. It offers great career opportunities and
                continuous learning as technology evolves. It empowers me to
                turn my ideas into reality.
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
                src="/images/programm.jpg"
              />,
              <Image
                key={0}
                alt=""
                {...coverImageProps}
                classNames={{
                  wrapper: "h-96",
                }}
                src="/images/code.jpg"
              />,
            ]}
          ></PresentationBox>
          <PresentationBox
            titleRows={[
              [
                {
                  text: "Hobbies",
                  gradient: {
                    fromClassName: "from-[#12A150]",
                    toClassName: "to-[#002E62]",
                  },
                },
              ],
            ]}
            description={
              <>
                Hobbies are a way of relaxation and enjoyment for me. It helps
                me with my creativity and it puts away the stress I have,
                atleast for a while. It also makes new friends that have the
                same interest as you.
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
                src="/images/piano.jpg"
              />,
              <Image
                key={0}
                alt=""
                {...coverImageProps}
                classNames={{
                  wrapper: "h-96",
                }}
                src="/images/kytka1.jpg"
              />,
            ]}
          ></PresentationBox>
          <PresentationBox
            titleRows={[
              [
                {
                  text: "Education",
                  gradient: {
                    fromClassName: "from-[#9353D3]",
                    toClassName: "to-[#7828C8]",
                  },
                },
              ],
            ]}
            description={
              <>
                I believe education is a cornerstone of personal growth and
                social progress. I would like to expand my knowledge and skills
                in informational technology. I am passionate about exploring new
                ideas, trying out different challenges and applying what I learn
                to real life.
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
                src="/images/educ.jpg"
              />,
              <Image
                key={0}
                alt=""
                {...coverImageProps}
                classNames={{
                  wrapper: "h-96",
                }}
                src="/images/grad.jpg"
              />,
            ]}
          ></PresentationBox>
        </div>
      </div>
    </>
  );
}
