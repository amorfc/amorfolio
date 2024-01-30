import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { ImagePublicUrls } from "../../constants/imagePublicUrlConstants";

export interface AppImageProps extends PropsWithTwClassName {
  imagePublicUrl?: ImagePublicUrls;
  alt: string;
}

const imagesFolderName = "image";
const AppImage = (props: AppImageProps) => {
  const { className, imagePublicUrl, alt } = props;

  const uri = `${imagesFolderName}/${imagePublicUrl}`;

  return <img src={uri} alt={alt} className={className} />;
};

export default AppImage;
