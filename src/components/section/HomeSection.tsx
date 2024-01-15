import { PropsWithChildren } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";
import { BaseSection } from "./BaseSection";

interface HomeSectionProps extends PropsWithChildren, PropsWithTwClassName {}

export const HomeSection = (props: HomeSectionProps) => {
  const { className } = props;
  const styleClassName = styleMerge(className, "neu-rectangle");

  return <BaseSection {...props} className={styleClassName} />;
};
