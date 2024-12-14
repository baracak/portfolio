import { Image, Link } from "@nextui-org/react";
import { coverImageProps } from "../components/common/cover-image.constants";
import PresentationBox from "../components/PresentationBox/PresentationBox";

export default function SportPage() {
  return (
    <>
      <div className="my-24">
        <PresentationBox
          titleRows={[[{ text: "Sport" }]]}
          description={
            <>
              I enjoy a variety of activities, including climbing and aerial
              hoop. From my young age I participated in various sport
              competitions like running, climbing and cross-country skiing. My
              parents always led me to sports and we did them together.
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
              to climb with me. I enjoy climbing very much and I am even a
              little bit stronger which is a positive thing about it.
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
              key={1}
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
                text: "Aerial Hoop",
                gradient: {
                  fromClassName: "from-[#AE7EDE]",
                  toClassName: "to-[#610726]",
                },
              },
            ],
          ]}
          description={
            <>
              I do Arial Hoop at home. I have been doing Arial Hoop since I was
              13 years old. At first I did it with my friend from school at an
              afternoon club but now I have an aerial hoop at home and I train
              at home. I do this sport just for fun and it&apos;s mostly just
              doing some new skills on the hoop.
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
              key={1}
              alt=""
              {...coverImageProps}
              src="/images/arialhoop4.jpeg"
            />,
          ]}
        ></PresentationBox>
      </div>
    </>
  );
}
