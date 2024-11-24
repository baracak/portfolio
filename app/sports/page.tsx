import { Image, Link } from "@nextui-org/react";
import { coverImageProps } from "../components/common/cover-image.constants";
import PresentationBox from "../components/PresentationBox/PresentationBox";

export default function SportsPage() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-4">
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <div>
          <h1 className="tracking-tight inline font-semibold text-7xl ">
            Sports
          </h1>
        </div>
      </div>
      <div>
        <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
          I enjoy a variety of activities, including climbing and aerial hoop.
          I’ve been climbing at DDM in Modřany, even convincing my dad to join
          me, and it’s helped me get stronger. I’ve also been practicing aerial
          hoop at Cvič.it, mostly for funs
        </p>
      </div>
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
          ],
        ]}
        description={
          <>
            I climb in{" "}
            <Link isExternal href={"https://www.ddmm.cz/"} size="lg">
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
            src="/images/climbing.jpg"
          />,
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            src="/images/climbing1.jpg"
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
            src="/images/arialhoop-skill.jpg"
          />,
          <Image
            key={0}
            alt=""
            {...coverImageProps}
            src="/images/arialhoop4.jpeg"
          />,
        ]}
      ></PresentationBox>
    </div>
  );
}
