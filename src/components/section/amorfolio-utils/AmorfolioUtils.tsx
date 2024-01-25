import { createElement, useCallback, useState } from "react";
import { PropsWithTwClassName } from "../../../common/propsInterfaces";
import { IconSize } from "../../../constants/sizeStyleConstants";
import { styleMerge } from "../../../utils/styleMerge";
import AmorfolioUtilButton from "../../button/AmorfolioUtilButton";
import AppColorPicker from "../../color-picker/AppColorPicker";
import { PaintBucketIcon } from "../../icon/GENERATED";
import BaseView from "../../view/BaseView";

interface AmorfolioUtilsProps extends PropsWithTwClassName {}

const AmorfolioUtils = (props: AmorfolioUtilsProps) => {
  const { className } = props;
  const [showThemePicker, setShowThemePicker] = useState(false);

  const baseClassName = styleMerge(
    "flex-row flex-wrap gap-6 lg:gap-x-12 items-center justify-center",
    className
  );
  const baseAmorfolioUtilButtonClassName = styleMerge(
    "min-w-[120px] min-h-[120px] w-[180px] max-w-[180px] h-[100%]"
  );
  const wh = { width: IconSize.medium, height: IconSize.medium };
  const paintBucket = createElement(PaintBucketIcon, { ...wh });

  const handleOnThemeButtonClick = useCallback(
    () => setShowThemePicker(true),
    [setShowThemePicker]
  );
  const closeThemePicker = useCallback(
    () => setShowThemePicker(false),
    [setShowThemePicker]
  );

  return (
    <BaseView className="justify-center p-3">
      {!showThemePicker && (
        <BaseView
          className={styleMerge(
            baseClassName,
            "animate-fade-down animate-once animate-duration-[600ms] animate-ease-in-out"
          )}
        >
          <AmorfolioUtilButton
            icon={paintBucket}
            className={baseAmorfolioUtilButtonClassName}
          />
          <AmorfolioUtilButton
            icon={paintBucket}
            className={baseAmorfolioUtilButtonClassName}
          />
          <AmorfolioUtilButton
            icon={paintBucket}
            className={baseAmorfolioUtilButtonClassName}
            onClick={handleOnThemeButtonClick}
          />
        </BaseView>
      )}
      {showThemePicker && (
        <div
          className={styleMerge(
            "flex flex-wrap gap-6 flex-row justify-center items-center animate-fade-up animate-once animate-duration-[600ms] animate-ease-in-out"
          )}
        >
          <button onClick={closeThemePicker}>Back To Actions</button>
          <AppColorPicker />
        </div>
      )}
    </BaseView>
  );
};

export default AmorfolioUtils;
