import { Children } from "react";
import NeuLabel from "../label/NeuLabel";
import { SkillType } from "../../data/skillsData";

interface SkillListProps {
  data: SkillType[];
  labelClassName?: string;
}

const SkillList = (props: SkillListProps) => {
  const { data, labelClassName } = props;

  return (
    <>
      {Children.toArray(
        data.map((skill) => (
          <NeuLabel className={labelClassName} label={skill.displayName} />
        ))
      )}
    </>
  );
};

export default SkillList;
