import { PropsWithTwClassName } from "../../../common/propsInterfaces";
import { ImagePublicUrls } from "../../../constants/imagePublicUrlConstants";
import NeuCircleImage from "../../image/NeuCircleImage";

interface ProjectSectionLogoProps extends PropsWithTwClassName {
  imgPublicUrl: ImagePublicUrls;
  projectName: string;
}

const ProjectSectionLogo = (props: ProjectSectionLogoProps) => {
  const { className, imgPublicUrl, projectName } = props;
  return (
    <NeuCircleImage
      className={className}
      imagePublicUrl={imgPublicUrl}
      alt={`${projectName}_logo_alt`}
    />
  );
};

export default ProjectSectionLogo;
