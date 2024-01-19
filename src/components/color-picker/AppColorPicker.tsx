import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";
import BaseColorPicker from "./BaseColorPicker";

interface AppColorPickerProps extends PropsWithTwClassName {
  hexColors?: string[];
}

const AppColorPicker = (props: AppColorPickerProps) => {
  const { className } = props;

  const predefinedColors = [
    "#2d3436", // black
    "#414141", // darkgrey
    "#636e72", // grey
    "#b0b0b0", // lightgrey
    "#c9bbbb", //lighter grey
    "#6c5ce7", //violet
    "#7c6d7e", //purple
    "#71936c", //greeny
    "#e17055", //orangy
    "#fdcb6e", //yellow"
  ];
  const baseClassName = styleMerge("", className);
  return (
    <BaseColorPicker colors={predefinedColors} className={baseClassName} />
  );
};

export default AppColorPicker;
