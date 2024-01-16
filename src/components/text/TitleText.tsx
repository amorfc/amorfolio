import { useMemo } from "react";
import { SizeContants } from "../../constants/sizeStyleConstants";
import { styleMerge } from "../../utils/styleMerge";
import BaseText, { BaseTextProps } from "./BaseText";

interface TitleTextProps extends BaseTextProps {
  size?: string;
}
const TitleText = (props: TitleTextProps) => {
  const { text, className, size = SizeContants.medium } = props;

  const sizeStyle = useMemo(() => {
    switch (size) {
      case SizeContants.small:
        return "sm:text-xl md:text-2xl";
      case SizeContants.medium:
        return "sm:text-2xl md:text-3xl";
      case SizeContants.large:
        return "sm:text-4xl md:text-5xl";
    }
  }, [size]);

  const baseTitleTextClassName = styleMerge("font-bold", sizeStyle, className);
  return <BaseText text={text} className={baseTitleTextClassName} />;
};

export default TitleText;
