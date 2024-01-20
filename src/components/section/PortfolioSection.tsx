import { createElement, useMemo } from "react";
import "swiper/css";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { SwiperSlideParams } from "../../constants/swiperConstants";
import { experienceData } from "../../data/experience/experienceData";
import { styleMerge } from "../../utils/styleMerge";
import AppSwiper from "../swiper/AppSwiper";
import BaseView from "../view/BaseView";
import { HomeSection } from "./HomeSection";
import ExperienceSection from "./experience/ExperienceSection";
import AmorfolioUtils from "./amorfolio-utils/AmorfolioUtils";

interface PortfolioSectionProps extends PropsWithTwClassName {}

export const PortfolioSection = (props: PortfolioSectionProps) => {
  const { className } = props;

  const jobExperienceSlides: SwiperSlideParams[] = useMemo(() => {
    return experienceData?.map((data) => ({
      content: createElement(ExperienceSection, { data }),
    }));
  }, []);

  const homeSectionPartClassName =
    "max-h-[28vh] lg:max-h-[50%] md:hover:scale-[1.015] transition-all duration-300";

  return (
    <BaseView className={styleMerge(className)}>
      <BaseView className="lg:max-h-[75%] gap-y-6 lg:h-full lg:pb-6">
        <HomeSection className={homeSectionPartClassName}>
          <AppSwiper slides={jobExperienceSlides} isAutoPlay />
        </HomeSection>
        <HomeSection className={homeSectionPartClassName}>
          <AppSwiper slides={jobExperienceSlides} isAutoPlay />
        </HomeSection>
      </BaseView>
      <BaseView className="lg:max-h-[22%]">
        <HomeSection className="max-h-[25vh] lg:max-h-full">
          <AmorfolioUtils />
        </HomeSection>
      </BaseView>
    </BaseView>
  );
};
