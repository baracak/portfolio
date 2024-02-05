import { Image } from "@nextui-org/react";
import classNames from "classnames";
import { type } from "os";
import { ReactNode } from "react";

interface Title {
  text: ReactNode;
  color?: {
    from: string;
    to: string;
  };
  omitSpace?: boolean;
}

type TitleRow = Title[];

interface Props {
  titleRows: TitleRow[];
  description?: ReactNode;
}

export default function PresentationBox({ description, titleRows }: Props) {
  return (
    <div>
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        {titleRows.map((titles) => (
          <div>
            {titles.map(({ text, color, omitSpace }, index) => (
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
                {index > 0 && !omitSpace && " "}
                {text}
              </h1>
            ))}
          </div>
        ))}
      </div>
      {description && (
        <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
          {description}
        </p>
      )}
      <Image width={300} alt="NextUI hero Image" src="/images/climbing.png" />
    </div>
  );
}
