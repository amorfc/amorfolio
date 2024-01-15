import { PropsWithChildren } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";

interface BaseCircleViewProps extends PropsWithTwClassName, PropsWithChildren {}

const BaseCircleView = (props: BaseCircleViewProps) => {
  const { className, children } = props;

  const baseClassName = styleMerge(
    "flex overflow-hidden rounded-full",
    className
  );
  return <div className={baseClassName}>{children}</div>;
};

export default BaseCircleView;
