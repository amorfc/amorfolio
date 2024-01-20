import { SizeContants } from "../../constants/sizeStyleConstants";
import { BaseTextProps } from "./BaseText";
import SubTitleText from "./SubTitleText";

interface LabelTextProps extends BaseTextProps {}

const LabelText = (props: LabelTextProps) => {
  return <SubTitleText size={SizeContants.xsmall} {...props} />;
};

export default LabelText;
