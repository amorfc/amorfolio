import { useState } from "react";
import { BlockPickerProps, TwitterPicker } from "react-color";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import {
  RGBAObject,
  calcAndSetNewColorStyles,
  hexToRGBAObject,
  isValidHexColor,
} from "../../utils/dymamicColor";
import { styleMerge } from "../../utils/styleMerge";

interface BaseColorPickerProps extends PropsWithTwClassName, BlockPickerProps {}

const BaseColorPicker = (props: BaseColorPickerProps) => {
  const { className } = props;
  const [blockPickerColor, setBlockPickerColor] = useState<RGBAObject>();

  const handleOnColorChange = (hexColor: string) => {
    if (!isValidHexColor(hexColor)) return;

    calcAndSetNewColorStyles(hexColor);
    setBlockPickerColor(hexToRGBAObject(hexColor));
  };

  const baseClassName = styleMerge("twitter-picker", className);
  const computedStyle = getComputedStyle(document.documentElement);
  const mainBackgroundColor = computedStyle.getPropertyValue("--color-ternary");
  const neuInsetShadow = computedStyle.getPropertyValue("--neu-inset-shadow");
  const inputBackgroundColor =
    computedStyle.getPropertyValue("--color-primary");
  const labelTextColor = computedStyle.getPropertyValue("--color-lightgrey");

  return (
    <TwitterPicker
      styles={{
        default: {
          card: {
            backgroundColor: mainBackgroundColor,
            boxShadow: neuInsetShadow,
            borderRadius: "1rem",
          },
          input: {
            backgroundColor: inputBackgroundColor,
            color: labelTextColor,
            boxShadow: "none",
          },
          label: { color: labelTextColor },
          hash: {
            color: labelTextColor,
            backgroundColor: inputBackgroundColor,
            width: "28px",
            height: "28px",
          },
        },
      }}
      className={baseClassName}
      triangle="hide"
      color={blockPickerColor}
      onChange={(color) => handleOnColorChange(color.hex)}
    />
  );
};

export default BaseColorPicker;
