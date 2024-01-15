import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { twMerge } from "tailwind-merge";

interface BaseTextProps extends PropsWithTwClassName {
  text?: string;
}

const BaseText = (props: BaseTextProps) => {
  const { text, className } = props;
  const baseClassName = twMerge(
    "antialiased hover:subpixel-antialiased overflow-hidden text-mediumgrey",
    className
  );
  return <p className={baseClassName}>{text}</p>;
};

export default BaseText;
