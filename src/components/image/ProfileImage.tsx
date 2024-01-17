import { ImagePublicUrls } from "../../constants/imagePublicUrlConstants";
import { styleMerge } from "../../utils/styleMerge";
import AppImage, { AppImageProps } from "./AppImage";

interface ProfileImageProps
  extends Omit<AppImageProps, "imagePublicUrl" | "alt"> {}

const ProfileImage = (props: ProfileImageProps) => {
  const { className } = props;
  const baseClassName = styleMerge("object-cover w-[100%] h-[100%]", className);

  return (
    <AppImage
      className={baseClassName}
      {...props}
      imagePublicUrl={ImagePublicUrls.Profile}
      alt="Profile Photo"
    />
  );
};

export default ProfileImage;
