import PresentationBox from "./components/PresentationBox/PresentationBox";

export default function HomePage() {
  return (
    <PresentationBox
      titles={[
        { text: "Hello" },
        { text: "World", color: { from: "#5EA2EF", to: "#0072F5" } },
      ]}
    ></PresentationBox>
  );
}
