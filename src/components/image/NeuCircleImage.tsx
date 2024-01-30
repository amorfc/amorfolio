import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { SizeContants } from "../../constants/sizeStyleConstants";
import { styleMerge } from "../../utils/style/styleMerge";
import BaseCircleView from "../view/BaseCircleView";
import AppImage, { AppImageProps } from "./AppImage";

interface NeuCircleImageProps extends PropsWithTwClassName, AppImageProps {
  imageClassName?: string;
}

const NeuCircleImage = (props: NeuCircleImageProps) => {
  const { className, imageClassName, ...restProps } = props;
  const baseClassName = styleMerge("neu-circle neu-inset", className);
  const baseImageClassName = styleMerge(
    "p-4 rounded-full object-cover w-[100%] h-[100%] opacity-70",
    imageClassName
  );

  return (
    <BaseCircleView className={baseClassName} size={SizeContants.medium}>
      <AppImage className={baseImageClassName} {...restProps} />
    </BaseCircleView>
  );
};

export default NeuCircleImage;
