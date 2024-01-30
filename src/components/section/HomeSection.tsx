import { SizeContants } from "../../constants/sizeStyleConstants";
import { styleMerge } from "../../utils/style/styleMerge";
import TitleText from "../text/TitleText";
import BaseView from "../view/BaseView";
import { BaseSection, BaseSectionProps } from "./BaseSection";

interface HomeSectionProps extends BaseSectionProps {
  title?: string;
}

export const HomeSection = (props: HomeSectionProps) => {
  const { className, children, title, ...restProps } = props;
  const styleClassName = styleMerge(className, "neu-rectangle relative");

  const titleContainerClassName =
    "neu-rectangle p-2 px-4 rounded-3xl absolute top-[-8px] right-[-4px] z-20";

  return (
    <BaseSection {...restProps} className={styleClassName}>
      {title && (
        <BaseView className={titleContainerClassName}>
          <TitleText text={title} size={SizeContants.xsmall} />
        </BaseView>
      )}
      {children}
    </BaseSection>
  );
};
