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
  const { company, jobTitle, shortDescription, startDate } = props;
  return (
    <>
      <BaseView className="flex-none w-full items-start justify-start overflow-hidden">
        <TitleText text={company} />
        {jobTitle && <TitleText text={jobTitle} size={SizeContants.small} />}
        <SubTitleText text={startDate} size={SizeContants.xsmall} />
      </BaseView>
      <BaseView className="basis-1 flex-row w-full items-center justify-center">
        <DescriptionText text={shortDescription} />
      </BaseView>
    </>
  );
};

export default ExperienceSectionDescriptionView;
