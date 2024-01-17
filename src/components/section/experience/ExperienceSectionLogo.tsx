import { ImagePublicUrls } from "../../../constants/imagePublicUrlConstants";
import { SizeContants } from "../../../constants/sizeStyleConstants";
import AppImage from "../../image/AppImage";
import BaseCircleView from "../../view/BaseCircleView";

interface ExperienceSectionLogoProps {
  imgPublicUrl: ImagePublicUrls;
  company: string;
}

const ExperienceSectionLogo = (props: ExperienceSectionLogoProps) => {
  const { imgPublicUrl, company } = props;
  return (
    <BaseCircleView className="neu-circle neu-inset" size={SizeContants.medium}>
      <AppImage
        className="p-4 rounded-full object-cover w-[100%] h-[100%] opacity-70"
        imagePublicUrl={imgPublicUrl}
        alt={`${company}_logo_alt`}
      />
    </BaseCircleView>
  );
};

export default ExperienceSectionLogo;
