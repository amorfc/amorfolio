import { PropsWithChildren } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/style/styleMerge";
import { useScreenDetector } from "../../hooks/useScreenDetector";

interface AppLayoutProps extends PropsWithChildren, PropsWithTwClassName {}

const AppLayout = (props: AppLayoutProps) => {
  const { className } = props;
  const { isMobile, isTablet } = useScreenDetector();
  const baseClassName = styleMerge(
    "flex flex-1 bg-main lg:min-h-[100svh] p-5",
    isMobile || isTablet ? "py-safe" : "",
    className
  );
  return <div className={baseClassName}>{props.children}</div>;
};

export default AppLayout;
