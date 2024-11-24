import { Image, Link } from "@nextui-org/react";
import { coverImageProps } from "../components/common/cover-image.constants";
import PresentationBox from "../components/PresentationBox/PresentationBox";

export default function SportsPage() {
  return (
    <div className="my-24">
      <div className="grid grid-cols-1 gap-16 lg:gap-4">
        <div className="flex flex-col gap-2 items-start justify-center w-full">
          <div>
            <h1 className="tracking-tight inline font-semibold text-7xl ">
              Programming
            </h1>
          </div>
        </div>
        <div>
          <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
            I’ve participated in various tech activities to enhance my skills.
            At Make IT Today, I explored coding through robots, VR, and 3D
            modeling. At the Úvod do IT camp, I learned IT basics, web
            development, and 3D printing. During Mediální tvorba, I worked on
            photography, video production, and podcasts. Through courses like
            JavaScript for Kids, Scratch, and Harvard’s CS50, I developed
            programming skills, creating games, animations, and interactive
            projects
          </p>
        </div>
        <PresentationBox
          titleRows={[
            [
              {
                text: "",
                gradient: {
                  fromClassName: "from-[#FF71D7]",
                  toClassName: "to-[#CC3EA4]",
                },
              },
            ],
          ]}
          description={<></>}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [{ text: "Make" }],
            [
              {
                text: "IT",
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#6020A0]",
                },
              },
              { text: "Today" },
            ],
          ]}
          description={
            <>
              It is a day camp for basic coding that I took. It is designed to
              enhance programming skills through fun and interactiv pojects. We
              had exciting activities such as working with robots, virtual
              reality and 3D modeling. We made codes for simple games and web
              pages, and we solved a lot of challenges. I created a web page
              about yarns.
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
                src="/images/lets-crochet.png"
              />
            </Link>,
            <Image
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/makeittodaylogo.png"
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
              photograps we made.
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/divcispolekbara.jpg"
            />,
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/ssps1.png"
            />,
          ]}
        ></PresentationBox>
        <PresentationBox
          titleRows={[
            [
              {
                text: "Medální",
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
                size="lg"
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
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/medialni-tvorba-podcast.JPG"
            />,
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
              I took this online Javascript course. It is designed to teach you
              Javascript in a fun and simple way. I learned there different
              fundimetals of Javascript. I created a lot of fun projects like
              interactive games and animations. I learned how to solve some
              simple problems and understand the core prinicipal of programming.
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
              <Image alt="" {...coverImageProps} src="/images/dragdraw1.png" />
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
              I started with scratch when I was 8 years old. My dad helped me
              with it. I loved it back in the time and it was very fun to play
              with. I also made a couple of simple games.
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
                src="/images/Say hello on Scratch.png"
              />
            </Link>,
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
              <Link
                isExternal
                href={"https://cs50.harvard.edu/x/2024/"}
                size="lg"
              >
                course
              </Link>{" "}
              for programming from Harvard. It is free and it is build very
              understandably and the teacher is very good at teaching and he
              knows a lot of things about programming and makes it fun.
            </>
          }
          gridItems={[
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/cs50-week0.png"
            />,
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              src="/images/harvard.png"
            />,
          ]}
        ></PresentationBox>
      </div>
    </div>
  );
}
