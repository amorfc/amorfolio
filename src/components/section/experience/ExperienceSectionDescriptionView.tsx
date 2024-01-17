import { SizeContants } from "../../../constants/sizeStyleConstants";
import DescriptionText from "../../text/DescriptionText";
import SubTitleText from "../../text/SubTitleText";
import TitleText from "../../text/TitleText";
import BaseView from "../../view/BaseView";

interface ExperienceSectionDescriptionViewProps {
  company: string;
  jobTitle?: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
}
const ExperienceSectionDescriptionView = (
  props: ExperienceSectionDescriptionViewProps
) => {
  const { company, jobTitle, shortDescription, startDate, endDate } = props;
  return (
    <>
      <BaseView className="w-full basis-[15%] items-center justify-start">
        <BaseView className="flex-row w-full items-center justify-start">
          <TitleText text={company} />
          {jobTitle && (
            <>
              <TitleText
                className="mx-2"
                text={"-"}
                size={SizeContants.small}
              />
              <TitleText text={jobTitle} size={SizeContants.small} />
            </>
          )}
        </BaseView>
        <BaseView className="flex-row w-full items-center justify-start">
          <SubTitleText text={startDate} />
          <SubTitleText className="mx-1" text={"-"} />
          <SubTitleText text={endDate} />
        </BaseView>
      </BaseView>
      <BaseView className="flex-row w-full basis-[85%] items-center justify-center">
        <DescriptionText text={shortDescription} />
      </BaseView>
    </>
  );
};

export default ExperienceSectionDescriptionView;
