import { SizeContants } from "../../../constants/sizeStyleConstants";
import { ExperienceType } from "../../../data/experience/experienceData";
import AppImage from "../../image/AppImage";
import DescriptionText from "../../text/DescriptionText";
import TitleText from "../../text/TitleText";
import BaseCircleView from "../../view/BaseCircleView";
import BaseView from "../../view/BaseView";

interface ExperienceSectionProps {
  data: ExperienceType;
}

const ExperienceSection = (props: ExperienceSectionProps) => {
  const {
    data: { company, jobTitle, imgPublicUrl, description: shortDescription },
  } = props;

  return (
    <BaseView className="flex-row w-full h-full">
      <BaseView className="basis-[25%] items-center justify-center">
        <BaseCircleView
          className="neu-circle neu-inset opacity-80"
          size={SizeContants.medium}
        >
          <AppImage
            className="p-4 rounded-full object-cover w-[100%] h-[100%]"
            imagePublicUrl={imgPublicUrl}
            alt={`${company}_logo_alt`}
          />
        </BaseCircleView>
      </BaseView>
      <BaseView className="basis-[75%] items-center justify-start px-4 py-8">
        <BaseView className="flex-row w-full basis-[15%] items-center justify-start">
          <TitleText text={company} />
          <TitleText className="mx-2" text={"-"} size={SizeContants.small} />
          <TitleText text={jobTitle} size={SizeContants.small} />
        </BaseView>
        <BaseView className="flex-row w-full basis-[85%] items-center justify-center">
          <DescriptionText text={shortDescription} />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default ExperienceSection;
