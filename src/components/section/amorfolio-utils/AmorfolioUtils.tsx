import { useState } from "react";
import { BlockPicker } from "react-color";
import { PropsWithTwClassName } from "../../../common/propsInterfaces";
import {
  RGBAObject,
  calcAndSetNewColorStyles,
  hexToRGBAObject,
  isValidHexColor,
} from "../../../utils/dymamicColor";
import { styleMerge } from "../../../utils/styleMerge";
import BaseView from "../../view/BaseView";

interface AmorfolioUtilsProps extends PropsWithTwClassName {}

const AmorfolioUtils = (props: AmorfolioUtilsProps) => {
  const { className } = props;
  const [blockPickerColor, setBlockPickerColor] = useState<RGBAObject>();

  const handleOnColorChange = (hexColor: string) => {
    if (!isValidHexColor(hexColor)) return;

    calcAndSetNewColorStyles(hexColor);
    setBlockPickerColor(hexToRGBAObject(hexColor));
  };
  const baseClassName = styleMerge("", className);
  return (
    <BaseView className={baseClassName}>
      <BaseView className="neu-rectangle neu-inset">
        <BlockPicker
          color={blockPickerColor}
          onChange={(color) => handleOnColorChange(color.hex)}
        />
      </BaseView>
    </BaseView>
  );
};

export default AmorfolioUtils;
