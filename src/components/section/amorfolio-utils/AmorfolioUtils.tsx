import { PropsWithTwClassName } from "../../../common/propsInterfaces";
import { styleMerge } from "../../../utils/styleMerge";
import AppColorPicker from "../../color-picker/AppColorPicker";
import BaseView from "../../view/BaseView";

interface AmorfolioUtilsProps extends PropsWithTwClassName {}

const AmorfolioUtils = (props: AmorfolioUtilsProps) => {
  const { className } = props;

  const baseClassName = styleMerge("", className);
  return (
    <BaseView className={baseClassName}>
      <AppColorPicker />
    </BaseView>
  );
};

export default AmorfolioUtils;
