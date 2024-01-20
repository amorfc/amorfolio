import { ExperienceType } from "../../../data/experience/experienceData";
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

  return (
    <BaseView className="w-full h-full overflow-hidden justify-between">
      <BaseView className="flex-row">
        <BaseView className="basis-[20%] items-center justify-center">
          <ExperienceSectionLogo
            imgPublicUrl={imgPublicUrl}
            company={company}
          />
        </BaseView>
        <BaseView className="basis-[80%] items-start justify-start p-2">
          <ExperienceSectionDescriptionView
            company={company}
            shortDescription={shortDescription}
            startDate={startDate}
            endDate={endDate}
            jobTitle={jobTitle}
          />
        </BaseView>
      </BaseView>
      <BaseView className="flex-none flex-0 my-2 p-10">
        <ExperienceSectionSkillList
          className={"rounded-xl items-center justify-center gap-2"}
          data={skills}
        />
      </BaseView>
    </BaseView>
  );
};

export default ExperienceSection;
