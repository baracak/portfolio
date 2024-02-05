import { Link } from "@nextui-org/react";
import PresentationBox from "./components/PresentationBox/PresentationBox";

export default function HomePage() {
  return (
    <>
      <PresentationBox
        titleRows={[
          [
            { text: "Hello" },
            {
              text: "World",
              color: { from: "#5EA2EF", to: "#0072F5" },
            },
          ],
          [{ text: "How are you" }],
        ]}
        description={
          <>
            I climb in{" "}
            <Link target="_blank" href={"https://www.ddmm.cz/"} size="lg">
              DDM in Modřany
            </Link>
            .
          </>
        }
      ></PresentationBox>
      <PresentationBox
        titleRows={[[{ text: "Hiiii!!" }]]}
        description="I climb 3 years and I climb in DDM modřany."
      ></PresentationBox>
    </>
  );
}
