import { PropsWithChildren } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";

export interface BaseButtonProps
  extends PropsWithChildren,
    PropsWithTwClassName,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BaseButton = (props: BaseButtonProps) => {
  const { className, children, ...restProps } = props;

  const baseClassName = styleMerge(
    "flex flex-1 items-center justify-center",
    className
  );

  return (
    <button className={baseClassName} {...restProps}>
      {children}
    </button>
  );
};

export default BaseButton;
