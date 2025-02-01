import { Link, LinkProps } from "@nextui-org/react";

type Props = LinkProps;

export default function CommonLink({
  isExternal,
  showAnchorIcon = isExternal === true,
  style,
  children,
  ...restProps
}: Props) {
  return (
    <Link
      isExternal={isExternal}
      showAnchorIcon={showAnchorIcon}
      style={{ ...{ userSelect: "auto" }, ...style }}
      {...restProps}
    >
      {children}
    </Link>
  );
}
