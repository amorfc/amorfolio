import { styleMerge } from "../../utils/styleMerge";
import BaseButton, { BaseButtonProps } from "./BaseButton";

interface AmorfolioUtilButtonProps extends BaseButtonProps {
  icon: React.ReactElement;
}

const AmorfolioUtilButton = (props: AmorfolioUtilButtonProps) => {
  const { className, icon, ...restProps } = props;

  const baseFillColor = "hover:fill-icon fill-iconActive";
  const neumorphicStyle = "neu-button rounded-3xl";
  const amorfolioUtilButtonClassName = styleMerge(
    "bg-main",
    baseFillColor,
    neumorphicStyle,
    className
  );

  return (
    <BaseButton {...restProps} className={amorfolioUtilButtonClassName}>
      {icon}
    </BaseButton>
  );
};

export default AmorfolioUtilButton;
