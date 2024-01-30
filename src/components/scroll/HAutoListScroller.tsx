import { PropsWithChildren } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/style/styleMerge";
import BaseView from "../view/BaseView";

interface HAutoListScrollerProps
  extends PropsWithChildren,
    PropsWithTwClassName {
  innerClassName?: string;
  direction?: "right" | "left";
  speed?: "slow" | "normal" | "fast";
}

const HAutoListScroller = (props: HAutoListScrollerProps) => {
  const {
    children,
    className,
    innerClassName,
    direction = "forwards",
    speed = "slow",
  } = props;
  const baseClassName = styleMerge(
    className,
    "auto-scroller flex-row p-2 max-w-full max-h-full"
  );

  const innerBaseClassName = styleMerge(
    "flex-row auto-scroller_inner gap-3",
    innerClassName
  );

  return (
    <BaseView
      className={baseClassName}
      data-direction={direction}
      data-speed={speed}
    >
      <BaseView className={innerBaseClassName}>{children}</BaseView>
    </BaseView>
  );
};

export default HAutoListScroller;
