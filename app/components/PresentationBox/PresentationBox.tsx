import { Image, Link } from "@nextui-org/react";
import classNames from "classnames";
import { title } from "process";

interface Props {
  titles: {
    text: string;
    color?: {
      from: string;
      to: string;
    };
  }[];
}

export default function PresentationBox({ titles }: Props) {
  return (
    <div>
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <h1 className="tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
          Climbing&nbsp;
        </h1>
        {titles.map(({ text, color }) => (
          <h1
            className={classNames(
              "tracking-tight inline font-semibold text-3xl lg:text-6xl",
              color
                ? {
                    "bg-clip-text text-transparent bg-gradient-to-b": true,
                    [`from-[${color?.from}]`]: true,
                    [`to-[${color?.to}]`]: true,
                  }
                : undefined
            )}
          >
            {text}
          </h1>
        ))}
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
      <Image width={300} alt="NextUI hero Image" src="/images/climbing.png" />
    </div>
  );
}
