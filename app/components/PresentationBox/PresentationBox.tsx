import classNames from "classnames";
import { ReactNode } from "react";

interface Title {
  text: ReactNode;
  gradient?: {
    fromClassName: string;
    toClassName: string;
  };
  omitSpace?: boolean;
}

type TitleRow = Title[];

interface Props {
  titleRows: TitleRow[];
  description?: ReactNode;
  gridItems?: ReactNode[];
  className?: string | undefined;
}

export default function PresentationBox({
  description,
  titleRows,
  gridItems,
  className,
}: Props) {
  return (
    <div className={className}>
      <div>
        <div className="flex flex-col gap-2 items-start justify-center w-full">
          {titleRows.map((titles, titleRowIndex) => (
            <div key={titleRowIndex}>
              {titles.map(({ text, gradient, omitSpace }, titleIndex) => (
                <h1
                  key={titleIndex}
                  className={classNames(
                    "tracking-tight inline font-semibold text-3xl lg:text-6xl",
                    gradient
                      ? {
                          "bg-clip-text text-transparent bg-gradient-to-b":
                            true,
                          [gradient.fromClassName]: true,
                          [gradient.toClassName]: true,
                        }
                      : undefined
                  )}
                >
                  {titleIndex > 0 && !omitSpace && " "}
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
      </div>
      {gridItems?.length && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">{gridItems}</div>
      )}
    </div>
  );
}
