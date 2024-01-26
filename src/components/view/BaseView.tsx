import { ForwardedRef, PropsWithChildren, forwardRef } from "react";
import {
  HtmlDivProps,
  PropsWithTwClassName,
} from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";

interface BaseViewProps
  extends PropsWithChildren,
    PropsWithTwClassName,
    HtmlDivProps {}

export type Ref = HTMLDivElement;

const BaseViewInner = (props: BaseViewProps, ref: ForwardedRef<Ref>) => {
  const { children, className, ...rest } = props;
  const style = styleMerge("flex flex-1 flex-col", className);

  return (
    <div {...rest} ref={ref} className={style}>
      {children}
    </div>
  );
};

const BaseView = forwardRef<Ref, BaseViewProps>(BaseViewInner);

export default BaseView;
