import { ImagePublicUrls } from "../../../constants/imagePublicUrlConstants";
import NeuCircleImage from "../../image/NeuCircleImage";

interface ExperienceSectionLogoProps {
  imgPublicUrl: ImagePublicUrls;
  company: string;
}

const ExperienceSectionLogo = (props: ExperienceSectionLogoProps) => {
  const { imgPublicUrl, company } = props;
  return (
    <NeuCircleImage
      className="p-4 rounded-full object-cover w-[100%] h-[100%] opacity-70"
      imgPublicUrl={imgPublicUrl}
      alt={`${company}_logo_alt`}
    />
  );
};

export default ExperienceSectionLogo;
