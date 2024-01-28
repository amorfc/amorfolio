import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { SizeContants } from "../../constants/sizeStyleConstants";
import { styleMerge } from "../../utils/style/styleMerge";
import TitleText from "../text/TitleText";
import BaseButton, { BaseButtonProps } from "./BaseButton";

export interface TextButtonProps extends PropsWithTwClassName, BaseButtonProps {
  buttonText: string;
  textClassName?: string;
  textSize?: SizeContants;
}

const TextButton = (props: TextButtonProps) => {
  const {
    buttonText: buttonTitle,
    className,
    textClassName,
    textSize,
    ...restProps
  } = props;
  const baseTextButtonClassName = styleMerge("", className);
  const baseTextClassName = styleMerge("text-desc", textClassName);

  return (
    <BaseButton className={baseTextButtonClassName} {...restProps}>
      <TitleText
        size={textSize}
        className={baseTextClassName}
        text={buttonTitle}
      />
    </BaseButton>
  );
};

export default TextButton;
