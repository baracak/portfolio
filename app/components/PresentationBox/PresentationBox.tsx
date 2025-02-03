import { Button, Chip, Link } from "@nextui-org/react";
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
  titleClassName?: string | undefined;
  isPageTitle?: boolean;
  detailLink?: string;
  chipContent?: ReactNode;
}

export default function PresentationBox({
  description,
  titleRows,
  gridItems,
  className,
  titleClassName,
  isPageTitle = false,
  detailLink,
  chipContent,
}: Props) {
  const areGridItemsOdd = !!(gridItems && gridItems.length % 2);
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
                    "tracking-tight inline font-semibold",
                    isPageTitle
                      ? "text-6xl lg:text-7xl"
                      : "text-5xl lg:text-6xl",
                    titleClassName,
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
        {chipContent && (<Chip color="default" variant="bordered" className="mt-2 mb-1">{chipContent}</Chip>)}
        {description && (
          <p className="w-full md:w-2/3 lg:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full [&>a]:text-lg [&>a]:lg:text-xl">
            {description}
          </p>
        )}
      </div>
      {detailLink && (
        <Button
          color="primary"
          variant="ghost"
          className="mt-1 mb-1"
          as={Link}
          href={detailLink}
        >
          Read more
        </Button>
      )}
      {gridItems && (
        <div className="mt-4">
          {areGridItemsOdd && (
            <div className="grid grid-cols-1 gap-4 mb-4">{gridItems[0]}</div>
          )}
          {(!areGridItemsOdd || gridItems.length > 1) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {areGridItemsOdd ? gridItems.slice(1) : gridItems}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
