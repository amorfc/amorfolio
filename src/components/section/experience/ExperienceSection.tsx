import { useMemo } from "react";
import { ExperienceType } from "../../../data/experience/experienceData";
import BaseView from "../../view/BaseView";
import ExperienceSectionDescriptionView from "./ExperienceSectionDescriptionView";
import ExperienceSectionLogo from "./ExperienceSectionLogo";
import { IconSize } from "../../../constants/sizeStyleConstants";
import { SocialMedia } from "../../../constants/common";
import SocialMediaIcon from "../../icon/SocialMediaIcon";

interface ExperienceSectionProps {
  data: ExperienceType;
}

const ExperienceSection = (props: ExperienceSectionProps) => {
  const {
    data: {
      company,
      jobTitle,
      imgPublicUrl,
      description: shortDescription,
      startDate,
      endDate,
      linkedinUrl,
      websiteUrl,
      // skills,
    },
  } = props;

  const showLogosSection = useMemo(
    () => websiteUrl || linkedinUrl,
    [websiteUrl, linkedinUrl]
  );

  return (
    <BaseView className="lg:flex-1 w-full lg:h-full lg:justify-between overflow-hidden">
      <BaseView className="lg:flex-row">
        <BaseView className="lg:basis-[20%] items-center justify-center">
          <ExperienceSectionLogo
            imgPublicUrl={imgPublicUrl}
            company={company}
          />
          {showLogosSection && (
            <BaseView className="flex-none flex-wrap mt-4 flex-row gap-2">
              {linkedinUrl && (
                <SocialMediaIcon
                  size={IconSize.small}
                  redirectUrl={linkedinUrl}
                  socialMedia={SocialMedia.LinkedIn}
                />
              )}
              {websiteUrl && (
                <SocialMediaIcon
                  size={IconSize.small}
                  redirectUrl={websiteUrl}
                  socialMedia={SocialMedia.Website}
                />
              )}
            </BaseView>
          )}
        </BaseView>
        <BaseView className="lg:basis-[80%] mt-1 md:mt-4 p-2">
          <ExperienceSectionDescriptionView
            company={company}
            shortDescription={shortDescription}
            startDate={startDate}
            endDate={endDate}
            jobTitle={jobTitle}
          />
        </BaseView>
      </BaseView>
      {/* <ExperienceSectionSkillList className={"rounded-xl"} data={skills} /> */}
    </BaseView>
  );
};

export default ExperienceSection;
