// interface ProfileSectionProps{}

import { PropsWithTwClassName } from "../../common/propsInterfaces";
import BaseView from "../view/BaseView";
import { HomeSection } from "./HomeSection";
import { twMerge } from "tailwind-merge";

interface PortfolioSectionProps extends PropsWithTwClassName {}

export const PortfolioSection = (props: PortfolioSectionProps) => {
  const { className } = props;

  return (
    <>
      <BaseView className={twMerge(className, "basis-[80%]")}>
        <HomeSection />
        <HomeSection />
      </BaseView>
      <BaseView className="basis-[20%]">
        <HomeSection />
      </BaseView>
    </>
  );
};
