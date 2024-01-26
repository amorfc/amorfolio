import { useMemo } from "react";
import { SizeContants } from "../../constants/sizeStyleConstants";
import { styleMerge } from "../../utils/styleMerge";
import BaseText, { BaseTextProps } from "./BaseText";

export interface TitleTextProps extends BaseTextProps {
  size?: SizeContants;
}
const TitleText = (props: TitleTextProps) => {
  const { text, className, size = SizeContants.medium } = props;

  const sizeStyle = useMemo(() => {
    switch (size) {
      case SizeContants.xxsmall:
        return "text-sm lg:text-md";
      case SizeContants.xsmall:
        return "sm:text-sm md:text-md lg:text-lg";
      case SizeContants.small:
        return "sm:text-lg md:text-xl lg:text-2xl";
      case SizeContants.medium:
        return "sm:text-2xl md:text-3xl lg:text-4xl";
      case SizeContants.large:
        return "sm:text-4xl md:text-5xl lg:text-6xl";
    }
  }, [size]);

  const baseTitleTextClassName = styleMerge(
    "font-bold text-title",
    sizeStyle,
    className
  );
  return <BaseText text={text} className={baseTitleTextClassName} />;
};

export default TitleText;
