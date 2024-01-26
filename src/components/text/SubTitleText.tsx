import { SizeContants } from "../../constants/sizeStyleConstants";
import { styleMerge } from "../../utils/styleMerge";
import TitleText, { TitleTextProps } from "./TitleText";

interface SubTitleTextProps extends TitleTextProps {}
const SubTitleText = (props: SubTitleTextProps) => {
  const { className } = props;

  const baseSubTitleTextClassName = styleMerge("text-subtitle", className);
  return (
    <TitleText
      size={SizeContants.small}
      {...props}
      className={baseSubTitleTextClassName}
    />
  );
};

export default SubTitleText;
