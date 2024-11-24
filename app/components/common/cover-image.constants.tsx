import { ImageProps } from "@nextui-org/react";
import styles from "../../styles.module.css";

export const coverImageProps: ImageProps = {
  width: "100%",
  className: styles["cover-image"],
  classNames: {
    wrapper: "h-96 w-full",
  },
  style: { width: "100%" },
};
