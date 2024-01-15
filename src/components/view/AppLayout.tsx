import { PropsWithChildren } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { twMerge } from "tailwind-merge";

interface AppLayoutProps extends PropsWithChildren, PropsWithTwClassName {}

const AppLayout = (props: AppLayoutProps) => {
  const { className } = props;
  const baseClassName = twMerge("flex bg-secondary h-full p-6", className);
  return <div className={baseClassName}>{props.children}</div>;
};

export default AppLayout;
