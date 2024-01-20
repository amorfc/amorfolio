import { Children } from "react";
import { PropsWithTwClassName } from "../../../common/propsInterfaces";
import { SkillType } from "../../../data/skillsData";
import BaseView from "../../view/BaseView";
import { styleMerge } from "../../../utils/styleMerge";
import NeuLabel from "../../label/NeuLabel";

interface ExperienceSectionSkillListProps extends PropsWithTwClassName {
  data: SkillType[];
}

const ExperienceSectionSkillList = (props: ExperienceSectionSkillListProps) => {
  const { className, data } = props;

  const baseClassName = styleMerge(
    "flex-row flex-nowrap overflow-auto no-scrollbar h-scrollGradient",
    className
  );
  return (
    <BaseView className={baseClassName}>
      {Children.toArray(
        data.map((skill) => <NeuLabel label={skill.displayName} />)
      )}
    </BaseView>
  );
};

export default ExperienceSectionSkillList;
