import { createElement } from "react";
import "swiper/css";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";
import BaseView from "../view/BaseView";
import { HomeSection } from "./HomeSection";

import AppSwiper from "../swiper/AppSwiper";
import { SwiperSlideParams } from "../../constants/swiperConstants";
import ExperienceSection from "./experience/ExperienceSection";

interface PortfolioSectionProps extends PropsWithTwClassName {}

export const Render = () => (
  <BaseView className="flex-row w-full h-full p-0 m-0">
    <BaseView className="bg-danger"></BaseView>
    <BaseView className="bg-white"></BaseView>
  </BaseView>
);
export const Render2 = () => (
  <BaseView className="flex-row w-full h-full p-0 m-0">
    <BaseView className="bg-black "></BaseView>
    <BaseView className="bg-green-600 "></BaseView>
  </BaseView>
);

export const PortfolioSection = (props: PortfolioSectionProps) => {
  const { className } = props;

  const jobExperienceSlides: SwiperSlideParams[] = [
    {
      content: createElement(ExperienceSection),
    },
    {
      content: createElement(ExperienceSection),
    },
  ];

  return (
    <>
      <BaseView className={styleMerge(className, "basis-[80%]")}>
        <HomeSection className="basis-1/2">
          <AppSwiper slides={jobExperienceSlides} />
        </HomeSection>
        <HomeSection className="basis-1/2"></HomeSection>
      </BaseView>
      <BaseView className="basis-[20%]">
        <HomeSection />
      </BaseView>
    </>
  );
};
