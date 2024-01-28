import { PropsWithChildren } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/style/styleMerge";
import BaseView from "../view/BaseView";

interface BaseSectionProps extends PropsWithChildren, PropsWithTwClassName {}

export const BaseSection = (props: BaseSectionProps) => {
  const { className } = props;
  const baseClassName = styleMerge(className, "p-2 rounded-3xl");
  return <BaseView {...props} className={baseClassName} />;
};
