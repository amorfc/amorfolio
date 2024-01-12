import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { PropsWithTwClassName } from "../../common/propsInterfaces";

interface BaseViewProps extends PropsWithChildren, PropsWithTwClassName {}

const BaseView = (props: BaseViewProps) => {
  const { children, className } = props;
  const style = twMerge("flex-1 p-2 rounded-3xl neu", className);

  return <div className={style}>{children}</div>;
};

export default BaseView;
