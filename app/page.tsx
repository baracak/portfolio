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
      <div className="grid grid-cols-1 gap-16 lg:gap-44"></div>
    </>
  );
}
