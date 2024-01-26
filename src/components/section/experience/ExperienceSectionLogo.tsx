import { ImagePublicUrls } from "../../../constants/imagePublicUrlConstants";
import NeuCircleImage from "../../image/NeuCircleImage";

interface ExperienceSectionLogoProps {
  imgPublicUrl: ImagePublicUrls;
  company: string;
}

const ExperienceSectionLogo = (props: ExperienceSectionLogoProps) => {
  const { imgPublicUrl, company } = props;
  return (
    <NeuCircleImage imgPublicUrl={imgPublicUrl} alt={`${company}_logo_alt`} />
  );
};

export default ExperienceSectionLogo;
