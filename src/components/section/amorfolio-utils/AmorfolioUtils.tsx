import {
  createElement,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { PropsWithTwClassName } from "../../../common/propsInterfaces";
import { IconSize } from "../../../constants/sizeStyleConstants";
import useScrollIntoView from "../../../hooks/scroll/useAppScrollIntoView";
import { useTwAppAnimation } from "../../../hooks/style/useTwAnimation";
import { styleMerge } from "../../../utils/styleMerge";
import AmorfolioUtilButton from "../../button/AmorfolioUtilButton";
import NeuTextButton from "../../button/NeuTextButton";
import AppColorPicker from "../../color-picker/AppColorPicker";
import { PaintBucketIcon } from "../../icon/GENERATED";
import BaseView from "../../view/BaseView";

interface AmorfolioUtilsProps extends PropsWithTwClassName {}

const AmorfolioUtils = (props: AmorfolioUtilsProps) => {
  const { className } = props;

  const [showThemePicker, setShowThemePicker] = useState(false);

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
    "flex flex-wrap gap-6 justify-center items-center",
    utilViewAnim
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

  useLayoutEffect(() => {
    if (!showThemePicker) {
      scrollIntoUtilContainer();
    }
  }, [showThemePicker, scrollIntoUtilContainer]);

  return (
    <BaseView ref={utilContainerRef} className="justify-center p-3">
      {!showThemePicker && (
        <BaseView className={utilActionsClassName}>
          <AmorfolioUtilButton
            icon={paintBucket}
            className={utilButtonClassName}
          />
          <AmorfolioUtilButton
            icon={paintBucket}
            className={utilButtonClassName}
          />
          <AmorfolioUtilButton
            icon={paintBucket}
            className={utilButtonClassName}
            onClick={handleOnThemeButtonClick}
          />
        </BaseView>
      )}
      {showThemePicker && (
        <BaseView className={utilContainerClassName}>
          <NeuTextButton
            onClick={closeThemePicker}
            buttonText="Back To Actions"
          />
          <AppColorPicker />
        </BaseView>
      )}
    </BaseView>
  );
};

export default AmorfolioUtils;
