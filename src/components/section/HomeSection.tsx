import { PropsWithChildren } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { twMerge } from "tailwind-merge";
import { BaseSection } from "./BaseSection";

interface HomeSectionProps extends PropsWithChildren, PropsWithTwClassName {}

export const HomeSection = (props: HomeSectionProps) => {
  const { className } = props;
  const baseClassName = twMerge(className, "neu");
  return <BaseSection {...props} className={baseClassName} />;
};
