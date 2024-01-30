import { useLayoutEffect } from "react";
import { PortfolioSection } from "../../components/section/PortfolioSection";
import { ProfileSection } from "../../components/section/ProfileSection";
import BaseView from "../../components/view/BaseView";
import { useTwAppAnimation } from "../../hooks/style/useTwAnimation";
import { initializeAutoScrollers } from "../../utils/document/autoScroller";
import { styleMerge } from "../../utils/style/styleMerge";

const HomeContent = () => {
  const appSectionsAnim = useTwAppAnimation({});
  const profileSectionStyle = styleMerge(
    "lg:max-w-[35%] lg:h-full",
    appSectionsAnim
  );
  const portfolioSectionWrapperStyle = styleMerge(
    profileSectionStyle,
    appSectionsAnim,
    "lg:max-w-[65%] gap-y-7"
  );

  useLayoutEffect(() => {
    initializeAutoScrollers();
  }, []);

  const portfolioSection = styleMerge("gap-y-7 lg:h-full");
  return (
    <>
      <BaseView className={profileSectionStyle}>
        <ProfileSection />
      </BaseView>
      <BaseView className={portfolioSectionWrapperStyle}>
        <PortfolioSection className={portfolioSection} />
      </BaseView>
    </>
  );
};

export default HomeContent;
