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

  const homeSectionPartClassName = "max-h-[25vh] lg:max-h-[50%]";

  return (
    <BaseView className={styleMerge(className)}>
      <BaseView className="lg:max-h-[75%] gap-y-7 lg:h-full lg:pb-6">
        <HomeSection className={homeSectionPartClassName}>
          <AppSwiper slides={jobExperienceSlides} isAutoPlay />
        </HomeSection>
        <HomeSection className={homeSectionPartClassName}>
          <AppSwiper slides={jobExperienceSlides} isAutoPlay />
        </HomeSection>
      </BaseView>
      <BaseView className="lg:max-h-[22%]">
        <HomeSection className="max-h-[15vh] lg:max-h-full">
          <AppSwiper slides={jobExperienceSlides} isAutoPlay />
        </HomeSection>
      </BaseView>
    </BaseView>
  );
};
