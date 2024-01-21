import { ExperienceType } from "../../../data/experience/experienceData";
import { useScreenDetector } from "../../../hooks/useScreenDetector";
import { styleMerge } from "../../../utils/styleMerge";
import BaseView from "../../view/BaseView";
import ExperienceSectionDescriptionView from "./ExperienceSectionDescriptionView";
import ExperienceSectionLogo from "./ExperienceSectionLogo";
import ExperienceSectionSkillList from "./ExperienceSectionSkillList";

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
      skills,
    },
  } = props;

  const { isMobile } = useScreenDetector();

  return (
    <BaseView className="flex-none md:flex-1 w-full h-full overflow-hidden justify-between">
      <BaseView className="flex-none md:flex-row">
        <BaseView className="flex-none md:basis-[20%] items-center justify-center">
          <ExperienceSectionLogo
            imgPublicUrl={imgPublicUrl}
            company={company}
          />
        </BaseView>
        <BaseView className="flex-none md:basis-[80%] mt-1 md:mt-4 p-2">
          <ExperienceSectionDescriptionView
            company={company}
            shortDescription={shortDescription}
            startDate={startDate}
            endDate={endDate}
            jobTitle={jobTitle}
          />
        </BaseView>
      </BaseView>
      <BaseView
        className={styleMerge(
          isMobile && "hidden",
          "flex-none flex-0 my-1 px-1 py-2 items-start justify-start"
        )}
      >
        <ExperienceSectionSkillList
          className={"rounded-xl items-center justify-center gap-2"}
          data={skills}
        />
      </BaseView>
    </BaseView>
  );
};

export default ExperienceSection;
