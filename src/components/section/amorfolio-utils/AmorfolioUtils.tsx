import { createElement, useCallback, useRef, useState } from "react";
import { PropsWithTwClassName } from "../../../common/propsInterfaces";
import { IconSize } from "../../../constants/sizeStyleConstants";
import useScrollIntoView from "../../../hooks/scroll/useAppScrollIntoView";
import { useTwAppAnimation } from "../../../hooks/style/useTwAnimation";
import { useScreenDetector } from "../../../hooks/useScreenDetector";
import { styleMerge } from "../../../utils/style/styleMerge";
import AmorfolioUtilButton from "../../button/AmorfolioUtilButton";
import NeuTextButton from "../../button/NeuTextButton";
import AppColorPicker from "../../color-picker/AppColorPicker";
import { PaintBucketIcon } from "../../icon/GENERATED";
import BaseView from "../../view/BaseView";

interface AmorfolioUtilsProps extends PropsWithTwClassName {}

const AmorfolioUtils = (props: AmorfolioUtilsProps) => {
  const { className } = props;

  const [showThemePicker, setShowThemePicker] = useState(false);
  const { isMobile, isTablet } = useScreenDetector();

  const utilContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntoUtilContainer =
    useScrollIntoView<HTMLDivElement>(utilContainerRef);

  const utilActionsViewAnim = useTwAppAnimation({});
  const utilViewAnim = useTwAppAnimation({});

  const utilActionsClassName = styleMerge(
    "flex-row flex-wrap gap-6 lg:gap-x-12 items-center justify-center",
    utilActionsViewAnim,
    className
  );
  const utilButtonClassName = styleMerge(
    "min-w-[120px] min-h-[120px] w-[180px] max-w-[180px] h-[100%]"
  );
  const utilContainerClassName = styleMerge(
    "flex flex-wrap gap-4 justify-center items-center",
    utilViewAnim
  );

  const wh = { width: IconSize.medium, height: IconSize.medium };
  const paintBucket = createElement(PaintBucketIcon, { ...wh });

  const handleOnContainerScrolling = useCallback(() => {
    if (isMobile || isTablet) {
      scrollIntoUtilContainer();
    }
  }, [isMobile, isTablet, scrollIntoUtilContainer]);

  const handleOnThemeButtonClick = useCallback(() => {
    setShowThemePicker(true);
    handleOnContainerScrolling();
  }, [setShowThemePicker, handleOnContainerScrolling]);
  const closeThemePicker = useCallback(() => {
    setShowThemePicker(false);
    handleOnContainerScrolling();
  }, [setShowThemePicker, handleOnContainerScrolling]);

  return (
    <BaseView ref={utilContainerRef} className="justify-center p-2">
      {!showThemePicker && (
        <BaseView className={utilActionsClassName}>
          <AmorfolioUtilButton
            icon={paintBucket}
            className={utilButtonClassName}
            onClick={handleOnThemeButtonClick}
          />
        </BaseView>
      )}
      {showThemePicker && (
        <BaseView className={utilContainerClassName}>
          <AppColorPicker />
          <NeuTextButton
            className="flex-none flex-0"
            onClick={closeThemePicker}
            buttonText="Back To Actions"
          />
        </BaseView>
      )}
    </BaseView>
  );
};

export default AmorfolioUtils;
