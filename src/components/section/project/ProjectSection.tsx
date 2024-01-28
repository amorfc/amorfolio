import { useMemo } from "react";
import { PropsWithTwClassName } from "../../../common/propsInterfaces";
import { SocialMedia } from "../../../constants/common";
import { IconSize } from "../../../constants/sizeStyleConstants";
import { ProjectType } from "../../../data/project/projectData";
import { styleMerge } from "../../../utils/style/styleMerge";
import SocialMediaIcon from "../../icon/SocialMediaIcon";
import DescriptionText from "../../text/DescriptionText";
import TitleText from "../../text/TitleText";
import BaseView from "../../view/BaseView";
import ProjectSectionLogo from "./ProjectSectionLogo";

interface ProjectSectionProps extends PropsWithTwClassName {
  data: ProjectType;
}

const ProjectSection = (props: ProjectSectionProps) => {
  const { className, data } = props;
  const { imgPublicUrl, projectName, description, redirectUrl, sourceCodeUrl } =
    data;
  const baseClassName = styleMerge(
    "lg:flex-1 w-full lg:h-full lg:justify-between overflow-hidden",
    className
  );

  const showLogosSection = useMemo(
    () => redirectUrl || sourceCodeUrl,
    [redirectUrl, sourceCodeUrl]
  );

  return (
    <BaseView className={baseClassName}>
      <BaseView className="lg:flex-row">
        <BaseView className="py-2 md:pt-0 lg:basis-[20%] items-center justify-center">
          <ProjectSectionLogo
            imgPublicUrl={imgPublicUrl}
            projectName={projectName}
          />
          {showLogosSection && (
            <BaseView className="flex-none flex-wrap mt-4 flex-row gap-2">
              {redirectUrl && (
                <SocialMediaIcon
                  size={IconSize.small}
                  redirectUrl={redirectUrl}
                  socialMedia={SocialMedia.Website}
                />
              )}
              {sourceCodeUrl && (
                <SocialMediaIcon
                  size={IconSize.small}
                  redirectUrl={sourceCodeUrl}
                  socialMedia={SocialMedia.Github}
                />
              )}
            </BaseView>
          )}
        </BaseView>
        <BaseView className="lg:basis-[80%] mt-1 md:mt-12 p-2 md:px-6 gap-y-6 ">
          <TitleText text={projectName} />
          <DescriptionText text={description} />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default ProjectSection;
