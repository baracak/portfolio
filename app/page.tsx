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
        </div>
      </div>
      <div className="grid grid-cols-1 gap-16 lg:gap-44"></div>
      <div className="grid grid-cols-1 gap-16 lg:gap-44">
        <PresentationBox
          titleRows={[
            [
              {
                text: "Sports",
                gradient: {
                  fromClassName: "from-[#99C7FB]",
                  toClassName: "to-[#006FEE]",
                },
              },
            ],
          ]}
          description={
            <>
              I do sports because it is a fun way to stay fit and healthy. Also
              it's a great way to make new friends. Even when I don't do the
              sports for the thrill of competition it still boosts my energy and
              it makes me laugh.
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
              src="/images/climbing-inddors.jpg"
            />,
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              classNames={{
                wrapper: "h-96",
              }}
              src="/images/arialhoop-aest1.jpg"
            />,
          ]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
            [
              {
                text: "Hobbies",
                gradient: {
                  fromClassName: "from-[#CC3EA4]",
                  toClassName: "to-[#FF4ECD]",
                },
              },
            ],
          ]}
          description={
            <>
              Hobbies are a way of relaxation for me. They help reduce stress,
              help learn new skills, build confidence, and connect with other
              people that share the same interests.
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
              src="/images/band.jpg"
            />,
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              classNames={{
                wrapper: "h-96",
              }}
              src="/images/paint.jpg"
            />,
            <Image
              key={0}
              alt=""
              {...coverImageProps}
              classNames={{
                wrapper: "h-96",
              }}
              src="/images/croch.jpg"
            />,
          ]}
        ></PresentationBox>
      </div>
    </>
  );
}
