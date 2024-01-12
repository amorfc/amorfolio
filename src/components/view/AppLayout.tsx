import { PropsWithChildren } from "react";

interface AppLayoutProps extends PropsWithChildren {}

const AppLayout = (props: AppLayoutProps) => {
  return <div className="flex bg-secondary h-full p-10">{props.children}</div>;
};

export default AppLayout;
