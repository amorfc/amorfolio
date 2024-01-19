import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";
import BaseColorPicker from "./BaseColorPicker";

interface AppColorPickerProps extends PropsWithTwClassName {}

const AppColorPicker = (props: AppColorPickerProps) => {
  const { className } = props;

  const baseClassName = styleMerge("", className);
  return <BaseColorPicker className={baseClassName} />;
};

export default AppColorPicker;
