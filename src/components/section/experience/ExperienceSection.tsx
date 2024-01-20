import { ExperienceType } from "../../../data/experience/experienceData";
import BaseView from "../../view/BaseView";
import ExperienceSectionDescriptionView from "./ExperienceSectionDescriptionView";
import ExperienceSectionLogo from "./ExperienceSectionLogo";

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
    },
  } = props;

  return (
    <BaseView className="flex-row w-full h-full overflow-hidden">
      <BaseView className="basis-[25%] items-center justify-center">
        <ExperienceSectionLogo imgPublicUrl={imgPublicUrl} company={company} />
      </BaseView>
      <BaseView className="basis-[75%] items-start justify-start px-4 py-8">
        <ExperienceSectionDescriptionView
          company={company}
          shortDescription={shortDescription}
          startDate={startDate}
          endDate={endDate}
          jobTitle={jobTitle}
        />
      </BaseView>
    </BaseView>
  );
};

export default ExperienceSection;
