import { Image, Link } from "@nextui-org/react";
import PresentationBox from "./components/PresentationBox/PresentationBox";

export default function HomePage() {
  return (
    <>
      <div className="my-44">
        <div>
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <div>
              <h1 className="tracking-tight inline font-semibold text-3xl lg:text-6xl">
                Hi I'm Barča.
              </h1>
            </div>
            <div>
              <h1 className="tracking-tight inline font-semibold text-3xl lg:text-6xl">
                This is my{" "}
              </h1>
              <h1 className="tracking-tight inline font-semibold text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#5EA2EF] to-[#0072F5]">
                Portfolio
              </h1>
            </div>
          </div>

          <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            mollis turpis ipsum, vel consectetur velit elementum quis.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-16 lg:gap-44">
        <PresentationBox
          titleRows={[
            [
              {
                text: "Climbing",
                color: { from: "#6FEE8D", to: "#17c964" },
              },
              { text: "made my " },
            ],
            [
              {
                text: "Muscles",
                color: { from: "#6FEE8D", to: "#17c964" },
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
              little bit stronger which is very good.
            </>
          }
          gridItems={[<Image src="/images/climbing.png" />]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
            [
              {
                text: "Arial Hoop",
                color: { from: "#FF1CF7", to: "#b249f8" },
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
              with my friend from school. I do this sport just for fun and it's
              mostly just doing some new skills on the hoop.
            </>
          }
          gridItems={[<Image src="/images/arialhoop.png" />]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
            [
              { text: "From  " },
              {
                text: "Yarn to Yarn",
                color: { from: "#FF705B", to: "#FFB457" },
              },
            ],
          ]}
          description={
            "I have been crocheting since I was 10 and I crochet all kind of things. From blankets to clothes and plushies. Wheter you're a beginner or an experienced crafter, crocheting brings a lot of relaxing and you can even watch films when you crochet so you don't have to to just sit infront of the TV but you can also do something."
          }
          gridItems={[<Image src="/images/crocheting.jpeg" />]}
        ></PresentationBox>

        <PresentationBox
          titleRows={[
            [
              { text: "Exploring the  " },
              {
                text: "Art",
                color: { from: "#FF72E1", to: "#F54C7A" },
              },
              { text: "of  " },
            ],
            [
              {
                text: "Painting",
                color: { from: "#FF72E1", to: "#F54C7A" },
              },
            ],
          ]}
          description={
            "Painting and drawing has been my passion for my whole life. I really like painting because it is relaxing and you can paint so many different things."
          }
          gridItems={[<Image src="/images/painting.png" />]}
        ></PresentationBox>
      </div>
    </>
  );
}
