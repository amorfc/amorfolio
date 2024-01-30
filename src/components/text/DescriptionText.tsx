import { styleMerge } from "../../utils/style/styleMerge";
import BaseText, { BaseTextProps } from "./BaseText";

interface DescriptionTextProps extends BaseTextProps {}
const DescriptionText = (props: DescriptionTextProps) => {
  const { text, className } = props;
  const baseDescriptionTextClassName = styleMerge(
    "sm:text-sm md:text-md lg:text-lg xl:text-xl",
    className
  );
  return <BaseText text={text} className={baseDescriptionTextClassName} />;
};

export default DescriptionText;
