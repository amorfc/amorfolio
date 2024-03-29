import { useLayoutEffect, useMemo, useState } from "react";
import { BlockPickerProps, TwitterPicker } from "react-color";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import {
  RGBAObject,
  calcAndSetNewColorStyles,
  hexToRGBAObject,
  isValidHexColor,
  rgbaStringToRGBAObject,
} from "../../utils/dynamicColor";
import { styleMerge } from "../../utils/style/styleMerge";

interface BaseColorPickerProps extends PropsWithTwClassName, BlockPickerProps {}

const BaseColorPicker = (props: BaseColorPickerProps) => {
  const { className, colors } = props;
  const [blockPickerColor, setBlockPickerColor] = useState<RGBAObject>();

  const baseClassName = styleMerge("", className);

  const handleOnColorChange = (hexColor: string) => {
    if (!isValidHexColor(hexColor)) return;

    calcAndSetNewColorStyles(hexColor);
    setBlockPickerColor(hexToRGBAObject(hexColor));
  };
  const computedStyle = getComputedStyle(document.documentElement);

  const pickerStyles = useMemo(() => {
    const mainBackgroundColor =
      computedStyle.getPropertyValue("--color-ternary");
    const neuInsetShadow = computedStyle.getPropertyValue("--neu-inset-shadow");
    const inputBackgroundColor =
      computedStyle.getPropertyValue("--color-primary");
    const labelTextColor = computedStyle.getPropertyValue("--color-lightgrey");
    return {
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
    };
  }, [computedStyle]);

  useLayoutEffect(() => {
    const currentBackgroundColor =
      computedStyle.getPropertyValue("--color-secondary");
    setBlockPickerColor(rgbaStringToRGBAObject(currentBackgroundColor));
  }, []);

  return (
    <TwitterPicker
      className={baseClassName}
      triangle="hide"
      color={blockPickerColor}
      onChange={(color) => handleOnColorChange(color.hex)}
      colors={colors}
      styles={pickerStyles}
    />
  );
};

export default BaseColorPicker;
