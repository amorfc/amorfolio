import { createElement, useMemo } from "react";
import "swiper/css";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import {
  SwiperDirection,
  SwiperSlideParams,
} from "../../constants/swiperConstants";
import { experienceData } from "../../data/experience/experienceData";
import { styleMerge } from "../../utils/style/styleMerge";
import AppSwiper from "../swiper/AppSwiper";
import BaseView from "../view/BaseView";
import { HomeSection } from "./HomeSection";
import ExperienceSection from "./experience/ExperienceSection";
import AmorfolioUtils from "./amorfolio-utils/AmorfolioUtils";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import ProjectSection from "./project/ProjectSection";
import { projectData } from "../../data/project/projectData";

interface PortfolioSectionProps extends PropsWithTwClassName {}

export const PortfolioSection = (props: PortfolioSectionProps) => {
  const { className } = props;
  const { isDesktop } = useScreenDetector();

  const jobExperienceSlides: SwiperSlideParams[] = useMemo(() => {
    return experienceData?.map((data) => ({
      content: createElement(ExperienceSection, { data }),
      slideClassName: "overflow-hidden",
    }));
  }, []);

  const projectsAndBlogs: SwiperSlideParams[] = useMemo(() => {
    return projectData?.map((data) => ({
      content: createElement(ProjectSection, { data }),
      slideClassName: "overflow-hidden",
    }));
  }, []);

  const homeSectionPartClassName =
    "lg:max-h-[50%] md:hover:scale-[1.015] transition-all duration-300";

  const swiperDirection = useMemo(
    () => (!isDesktop ? SwiperDirection.HORIZONTAL : SwiperDirection.VERTICAL),
    [isDesktop]
  );
  return (
    <BaseView className={styleMerge(className)}>
      <BaseView className="lg:max-h-[75%] gap-y-6 lg:h-full lg:pb-6">
        <HomeSection className={homeSectionPartClassName}>
          <AppSwiper
            direction={swiperDirection}
            slides={jobExperienceSlides}
            isAutoPlay
          />
        </HomeSection>
        <HomeSection className={homeSectionPartClassName}>
          <AppSwiper
            direction={swiperDirection}
            slides={projectsAndBlogs}
            isAutoPlay
          />
        </HomeSection>
      </BaseView>
      <BaseView className="lg:max-h-[22%]">
        <HomeSection className="lg:max-h-full">
          <AmorfolioUtils />
        </HomeSection>
      </BaseView>
    </BaseView>
  );
};
