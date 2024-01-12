import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import BaseView from "../view/BaseView";

interface BaseSectionProps extends PropsWithChildren, PropsWithTwClassName {}

export const BaseSection = (props: BaseSectionProps) => {
  const { className } = props;

  const baseClassName = twMerge(className, "p-2 rounded-3xl");
  return <BaseView {...props} className={baseClassName} />;
};
