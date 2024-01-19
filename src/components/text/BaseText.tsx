import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";

export interface BaseTextProps extends PropsWithTwClassName {
  text?: string;
}

const BaseText = (props: BaseTextProps) => {
  const { text, className } = props;
  const baseClassName = styleMerge(
    "antialiased hover:subpixel-antialiased overflow-hidden text-desc",
    className
  );
  return <p className={baseClassName}>{text}</p>;
};

export default BaseText;
