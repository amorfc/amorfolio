import { PropsWithChildren, useMemo } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/style/styleMerge";
import { SizeContants } from "../../constants/sizeStyleConstants";

interface BaseCircleViewProps extends PropsWithTwClassName, PropsWithChildren {
  size?: SizeContants;
}

const BaseCircleView = (props: BaseCircleViewProps) => {
  const { className, children, size = SizeContants.large } = props;

  const sizeStyle = useMemo(() => {
    switch (size) {
      case SizeContants.medium:
        return "w-[16vh] h-[16vh] lg:w-[20vh] lg:h-[20vh]";
      case SizeContants.large:
        return "w-[25vh] h-[25vh] lg:w-[35vh] lg:h-[35vh]";
      case SizeContants.small:
        return "w-[5vh] h-[5vh] lg:w-[7vh] lg:h-[7vh]";
    }
  }, [size]);

  const baseClassName = styleMerge(
    "overflow-hidden rounded-full",
    sizeStyle,
    className
  );
  return <div className={baseClassName}>{children}</div>;
};

export default BaseCircleView;
