import { SizeContants } from "../../constants/sizeStyleConstants";
import { styleMerge } from "../../utils/styleMerge";
import { BaseTextProps } from "./BaseText";
import TitleText from "./TitleText";

interface SubTitleTextProps extends BaseTextProps {
  size?: string;
}
const SubTitleText = (props: SubTitleTextProps) => {
  const { className } = props;

  const baseSubTitleTextClassName = styleMerge("text-hardgrey", className);
  return (
    <TitleText
      size={SizeContants.small}
      {...props}
      className={baseSubTitleTextClassName}
    />
  );
};

export default SubTitleText;
