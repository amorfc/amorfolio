import { PropsWithChildren } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";

interface BaseViewProps extends PropsWithChildren, PropsWithTwClassName {}

const BaseView = (props: BaseViewProps) => {
  const { children, className } = props;
  const style = styleMerge("flex flex-1 flex-col", className);

  return <div className={style}>{children}</div>;
};

export default BaseView;
