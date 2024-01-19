import { PropsWithChildren } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";

interface AppLayoutProps extends PropsWithChildren, PropsWithTwClassName {}

const AppLayout = (props: AppLayoutProps) => {
  const { className } = props;
  const baseClassName = styleMerge(
    "flex flex-1 bg-main lg:h-[100vh] p-6",
    className
  );
  return <div className={baseClassName}>{props.children}</div>;
};

export default AppLayout;
