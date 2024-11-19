import { Image, Link, ImageProps } from "@nextui-org/react";
import PresentationBox from "../components/PresentationBox/PresentationBox";
import styles from "../styles.module.css";

const coverImageProps: ImageProps = {
  width: "100%",
  className: styles["cover-image"],
  classNames: {
    wrapper: "h-96 w-full",
  },
  style: { width: "100%" },
};

export default function SportsPage() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-44">
      <div>
        <h1 className="tracking-tight inline font-semibold text-7xl ">
          Programming
        </h1>
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
            had exciting activities such as working with robots, virtual reality
            and 3D modeling. We made codes for simple games and web pages, and
            we solved a lot of challenges. I created a web page about yarns.
          </>
        }
        gridItems={[
          <Link
            key={0}
            isExternal
            href="/programming/make-it-today-2023/index.htm"
          >
            <Image alt="" {...coverImageProps} src="/images/lets-crochet.png" />
          </Link>,
          <Image
            key={1}
            alt=""
            {...coverImageProps}
            classNames={{
              wrapper: "h-96",
            }}
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
            It is a day camp about informational technologies at the Smíchovská
            Secondary Technical School that I took. We learned IT basics, web
            development, and 3D printing. We engaged with virtual technology and
            Lego robotics. We also took and edited some photograps we made.
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
            src="/images/divcispolekbara.jpg"
          />,
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            classNames={{
              wrapper: "h-96",
            }}
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
            podcast creation and a lot of editing.
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
            src="/images/mediapodcast.jpg"
          />,
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            classNames={{
              wrapper: "h-96",
            }}
            src="/images/mediabara.jpg"
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
            interactive games and animations. I learned how to solve some simple
            problems and understand the core prinicipal of programming.
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
            src="/images/udemy.png"
          />,
          <Link
            key={1}
            isExternal
            href="/programming/javascript-for-kids/dragDraw.html"
          >
            <Image
              alt=""
              {...coverImageProps}
              classNames={{
                wrapper: "h-96",
              }}
              src="/images/dragdraw.png"
            />
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
            I started with scratch when I was 8 years old. My dad helped me with
            it. I loved it back in the time and it was very fun to play with. I
            also made a couple of simple games.
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
            src="/images/dragon-chase-scratch-2018.png"
          />,
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            classNames={{
              wrapper: "h-96",
            }}
            src="/images/Say hello on Scratch.png"
          />,
        ]}
      ></PresentationBox>
    </div>
  );
}
