import { PropsWithTwClassName } from "../../common/propsInterfaces";

interface AppImageProps extends PropsWithTwClassName {
  imagePublicUrl?: string;
  alt: string;
}

const imagesFolderName = "image";
const AppImage = (props: AppImageProps) => {
  const { className, imagePublicUrl, alt } = props;

  const uri = `${imagesFolderName}/${imagePublicUrl}`;

  return <img src={uri} alt={alt} className={className} />;
};

export default AppImage;
