import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { ImagePublicUrls } from "../../constants/imagePublicUrlConstants";
import { SizeContants } from "../../constants/sizeStyleConstants";
import { styleMerge } from "../../utils/styleMerge";
import BaseCircleView from "../view/BaseCircleView";
import AppImage from "./AppImage";

interface NeuCircleImageProps extends PropsWithTwClassName {
  imgPublicUrl: ImagePublicUrls;
  alt: string;
  imageClassName?: string;
}

const NeuCircleImage = (props: NeuCircleImageProps) => {
  const { imgPublicUrl, alt, className, imageClassName } = props;
  const baseClassName = styleMerge("neu-circle neu-inset", className);
  const baseImageClassName = styleMerge(
    "p-4 rounded-full object-cover w-[100%] h-[100%] opacity-70",
    imageClassName
  );

  return (
    <BaseCircleView className={baseClassName} size={SizeContants.medium}>
      <AppImage
        className={baseImageClassName}
        imagePublicUrl={imgPublicUrl}
        alt={alt}
      />
    </BaseCircleView>
  );
};

export default NeuCircleImage;
