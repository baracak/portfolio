import { Image, Link } from "@nextui-org/react";

export default function SportsPage() {
  return (
    <>
      <div className="grid gap-10 grid-cols-1">
        <div>
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <h1 className="tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
              Climbing&nbsp;
            </h1>
            <h1 className="tracking-tight inline font-semibold text-3xl lg:text-6xl">
              made my muscles
            </h1>
            <div></div>
          </div>
          <p className="w-full  my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
            I started climbing when I was 11 years old and I climb once a week.
          </p>
          <p className="w-full  my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
            I climb in{" "}
            <Link target="_blank" href={"https://www.ddmm.cz/"} size="lg">
              DDM in Modřany
            </Link>
            .
          </p>
          <Image
            width={300}
            alt="NextUI hero Image"
            src="/images/climbing.png"
          />
        </div>
        <div>
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <h1 className="tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
              Arial Hoop&nbsp;
            </h1>
            <h1 className="tracking-tight inline font-semibold text-3xl lg:text-6xl">
              is just fun
            </h1>
          </div>
          <p className="w-full my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
            I started doing Arial Hoop when i was 13 years old and I do it once
            a week.
          </p>
          <p className="w-full  my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
            I do Arial Hoop in{" "}
            <Link target="_blank" href={"https://www.cvic.it/"} size="lg">
              Cvič.it
            </Link>
            .
          </p>
          <Image
            width={300}
            alt="NextUI hero Image"
            src="/images/arialhoop.png"
          />
        </div>
      </div>
    </>
  );
}
