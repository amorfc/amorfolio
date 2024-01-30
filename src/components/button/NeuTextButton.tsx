import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { SizeContants } from "../../constants/sizeStyleConstants";
import { styleMerge } from "../../utils/style/styleMerge";
import TextButton, { TextButtonProps } from "./TextButton";

interface NeuTextButtonProps extends PropsWithTwClassName, TextButtonProps {}
const NeuTextButton = (props: NeuTextButtonProps) => {
  const { className } = props;

  const baseNeuTextButtonClassName = styleMerge(
    "neu-button neu-rectangle neu-inset rounded-3xl py-1 px-4",
    className
  );
  return (
    <TextButton
      textSize={SizeContants.xsmall}
      {...props}
      className={baseNeuTextButtonClassName}
    />
  );
};

export default NeuTextButton;
