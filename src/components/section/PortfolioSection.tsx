// interface ProfileSectionProps{}

import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";
import BaseView from "../view/BaseView";
import { HomeSection } from "./HomeSection";

interface PortfolioSectionProps extends PropsWithTwClassName {}

export const PortfolioSection = (props: PortfolioSectionProps) => {
  const { className } = props;

  return (
    <>
      <BaseView className={styleMerge(className, "basis-[80%]")}>
        <HomeSection />
        <HomeSection />
      </BaseView>
      <BaseView className="basis-[20%]">
        <HomeSection />
      </BaseView>
    </>
  );
};
