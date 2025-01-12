import { Image, Link } from "@nextui-org/react";
import { coverImageProps } from "../../components/common/cover-image.constants";
import PresentationBox from "../../components/PresentationBox/PresentationBox";
import { getMetadata } from "../../helpers/metadata.helper";

export const metadata = getMetadata({
  subTitle: "Technology",
});

export default function TechnologyPage() {
  return (
    <>
      <div className="my-24">
        <PresentationBox
          titleRows={[[{ text: "Technology" }]]}
          description={
            <>
              I have explored technology through courses like Make IT Today and
              Úvod do IT, learning coding, web development, 3D printing, and
              robotics. I attended Mediální tvorba for photography, video
              production, and podcasts. My programming journey began with
              Scratch at age 8, followed by JavaScript for Kids and
              Harvard&apos;s CS50 course, where I created games, animations, and
              web pages. I also built my portfolio using Next.js, TypeScript,
              and Tailwind, gaining experience in React and GitHub.
            </>
          }
          isPageTitle
        ></PresentationBox>
      </div>
      <div className="grid grid-cols-1 gap-20">
        <PresentationBox
          titleRows={[
            [
              {
                text: "Portfolio",
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#6020A0]",
                },
              },
            ],
          ]}
          description={
            <>
              I made this portfolio with my dad&apos;s help. The code is written
              in{" "}
              <Link isExternal href={"https://nextjs.org/"}>
                Next.js
              </Link>{" "}
              and the programming language is{" "}
              <Link isExternal href={"https://www.typescriptlang.org/"}>
                TypeScript
              </Link>
              . Because of Next.js I learned basics of{" "}
              <Link isExternal href={"https://react.dev/"}>
                React
              </Link>
              . It is styled with{" "}
              <Link isExternal href={"https://nextui.org/"}>
                NextUI
              </Link>{" "}
              and{" "}
              <Link isExternal href={"https://tailwindcss.com/"}>
                Tailwind
              </Link>
              . And it is versioned in{" "}
              <Link isExternal href={"https://github.com/baracak/portfolio"}>
                GitHub
              </Link>
              .
            </>
          }
          gridItems={[
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/code2.jpeg"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              { text: "Uvod do " },
              {
                text: "programování",
                gradient: {
                  fromClassName: "from-[#006FEE]",
                  toClassName: "to-[#002E62]",
                },
              },
              { text: "a" },
              {
                text: "IT světa",
                gradient: {
                  fromClassName: "from-[#006FEE]",
                  toClassName: "to-[#002E62]",
                },
              },
            ],
          ]}
          description={
            <>
              I have attended this programming{" "}
              <Link
                isExternal
                href={
                  "https://www.ssps.cz/kurz-od-skillify-uvod-do-programovani-a-it-sveta/"
                }
              >
                course
              </Link>{" "}
              from{" "}
              <Link isExternal href={"https://www.ssps.cz/"}>
                SSPŠ
              </Link>
              . We learned there basics of phyton. The teachers were very nice
              and they made it fun.
            </>
          }
          gridItems={[
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/ssps-kurz-it-code.png"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              { text: "CS" },
              {
                text: "50",
                gradient: {
                  fromClassName: "from-[#F54180]",
                  toClassName: "to-[#920B3A]",
                },
              },
            ],
          ]}
          description={
            <>
              I found this online{" "}
              <Link isExternal href={"https://cs50.harvard.edu/x/2024/"}>
                course
              </Link>{" "}
              for computer science from Harvard. I watched the videos without
              going through the exams. It is free and it is build very
              understandably. The teacher is very good at teaching and he knows
              a lot of things about programming and makes it fun.
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/cs50-week0.jpeg"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [{ text: "Úvod do " }],
            [
              {
                text: "IT",
                gradient: {
                  fromClassName: "from-[#45D483]",
                  toClassName: "to-[#0E793C]",
                },
              },
              { text: "od " },
            ],
            [
              {
                text: "dívčího spolku",
                gradient: {
                  fromClassName: "from-[#45D483]",
                  toClassName: "to-[#0E793C]",
                },
              },
            ],
          ]}
          description={
            <>
              It is a day camp about informational technologies at the
              Smíchovská Secondary Technical School that I took. We learned IT
              basics, web development, and 3D printing. We engaged with virtual
              technology and Lego robotics. We also took and edited some
              photograps we made. Here is the{" "}
              <Link
                isExternal
                href="/docs/2024-07-26-ssps-osvedceni-o-absolvování-uvod-do-it-od-divciho-spolku-barbora-kalinova.pdf"
              >
                certificate
              </Link>
              .
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/uvod-do-it-od-divciho-spolku.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/ssps-logo.png"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              {
                text: "Mediální",
                gradient: {
                  fromClassName: "from-[#7EE7FC]",
                  toClassName: "to-[#06B7DB]",
                },
              },
              { text: "tvorba " },
            ],
          ]}
          description={
            <>
              I went on a summer school at the Smíchovská Secondary Technical
              School. We did things like digital photography, video production,
              podcast creation and a lot of editing. We also recorded a{" "}
              <Link
                isExternal
                href={"https://www.youtube.com/watch?v=GvglIRTgXnY"}
              >
                podcast
              </Link>{" "}
              about that school.
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/fotka-medialni-tvorba.jpg"
            />,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/medialni-tvorba-podcast.JPG"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [{ text: "Úvod do" }],
            [
              {
                text: "programování",
                gradient: {
                  fromClassName: "from-[#F9C97C]",
                  toClassName: "to-[#C4841D]",
                },
              },
              { text: "webu" },
            ],
          ]}
          description={
            <>
              It is a day camp from{" "}
              <Link
                isExternal
                href={"https://makeittoday.cz/tabory/camp.html?id=15"}
              >
                Make IT Today
              </Link>{" "}
              for basic coding that I took. It is designed to enhance
              programming skills through fun and interactive pojects. We had
              exciting activities such as working with robots, virtual reality
              and 3D modeling. We made codes for simple games and web pages, and
              we solved a lot of challenges. I created a web page about yarns.
              Here is the{" "}
              <Link
                isExternal
                href={
                  "/docs/2023-07-21-makeittoday-diplom-za-absolvovani-uvod-do-programovani-webu-Barbora-kalinova.pdf"
                }
              >
                certificate
              </Link>
              .
            </>
          }
          gridItems={[
            <Link
              key={0}
              isExternal
              href="/programming/make-it-today-2023/index.htm"
            >
              <Image
                alt=""
                {...coverImageProps}
                src="/images/lets-crochet.jpeg"
              />
            </Link>,
          ]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
            [
              {
                text: "Javascript",
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#6020A0]",
                },
              },
              { text: "for" },
            ],
            [
              {
                text: "Kids",
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#6020A0]",
                },
              },
            ],
          ]}
          description={
            <>
              I took this online Javascript{" "}
              <Link
                isExternal
                href={"https://www.udemy.com/course/javascript-for-kids/"}
              >
                course
              </Link>{" "}
              from{" "}
              <Link isExternal href={"https://www.udemy.com/"}>
                Udemy
              </Link>{" "}
              . It is designed to teach you Javascript in a fun and simple way.
              I learned there different fundimetals of Javascript. I created a
              lot of fun projects like interactive games and animations. I
              learned how to solve some simple problems and understand the core
              prinicipal of programming.
            </>
          }
          gridItems={[
            <Link
              key={0}
              isExternal
              href="/programming/javascript-for-kids/investmentCalculator.html"
            >
              <Image
                key={1}
                alt=""
                {...coverImageProps}
                src="/images/investmentCalculator.png"
              />
            </Link>,

            <Link
              key={2}
              isExternal
              href="/programming/javascript-for-kids/dragDraw.html"
            >
              <Image alt="" {...coverImageProps} src="/images/dragdraw1.jpeg" />
            </Link>,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              {
                text: "Scratch",
                gradient: {
                  fromClassName: "from-[#338EF7]",
                  toClassName: "to-[#004493]",
                },
              },
            ],
          ]}
          description={
            <>
              I started with{" "}
              <Link isExternal href={"https://scratch.mit.edu/"}>
                Scratch
              </Link>{" "}
              when I was 8 years old. My dad helped me with it. I loved it back
              in the time and it was very fun to play with. I also made a couple
              of simple games.
            </>
          }
          gridItems={[
            <Link
              key={0}
              isExternal
              href="/programming/scratch/dragon-chase.html"
            >
              <Image
                alt=""
                {...coverImageProps}
                src="/images/dragon-chase-scratch-2018.png"
              />
            </Link>,
            <Link key={1} isExternal href="/programming/scratch/say-hello.html">
              <Image
                alt=""
                {...coverImageProps}
                src="/images/say-hello-on-scratch.png"
              />
            </Link>,
          ]}
        ></PresentationBox>
      </div>
    </>
  );
}
