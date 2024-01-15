import { styleMerge } from "../../utils/styleMerge";
import BaseText, { BaseTextProps } from "./BaseText";

interface DescriptionTextProps extends BaseTextProps {}
const DescriptionText = (props: DescriptionTextProps) => {
  const { text, className } = props;
  const baseDescriptionTextClassName = styleMerge(
    "sm:text-lg md:text-xl text-center",
    className
  );
  return <BaseText text={text} className={baseDescriptionTextClassName} />;
};

export default DescriptionText;
