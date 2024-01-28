import { useState } from "react";
import Introduction from "../components/introduction/Introduction";
import { PortfolioSection } from "../components/section/PortfolioSection";
import { ProfileSection } from "../components/section/ProfileSection";
import AppLayout from "../components/view/AppLayout";
import BaseView from "../components/view/BaseView";
import SiteMetadata from "../metadata/SiteMetadata";
import { styleMerge } from "../utils/style/styleMerge";
import "./App.css";
import NeuTextButton from "../components/button/NeuTextButton";
import { SizeContants } from "../constants/sizeStyleConstants";
import { useTwAppAnimation } from "../hooks/style/useTwAnimation";

function App() {
  const [isIntroCompleted, setIsIntroCompleted] = useState(false);

  const appSectionsAnim = useTwAppAnimation({
    durationMs: 1000,
    anim: "fade-up",
  });

  const profileSectionStyle = styleMerge(
    "lg:max-w-[35%] lg:h-full",
    appSectionsAnim
  );
  const portfolioSectionWrapperStyle = styleMerge(
    profileSectionStyle,
    appSectionsAnim,
    "lg:max-w-[65%] gap-y-7"
  );

  const portfolioSection = styleMerge("gap-y-7 lg:h-full");

  return (
    <AppLayout className={"gap-10 flex-col lg:flex-row"}>
      <SiteMetadata />
      {!isIntroCompleted && (
        <BaseView>
          <Introduction />
          <BaseView
            className={styleMerge(
              "fixed bottom-4 right-8 z-50",
              appSectionsAnim
            )}
          >
            <NeuTextButton
              textSize={SizeContants.small}
              onClick={() => setIsIntroCompleted(true)}
              className="flex-none py-2 px-6 rounded-full"
              buttonText={"Let's Dive In"}
            />
          </BaseView>
        </BaseView>
      )}
      {isIntroCompleted && (
        <>
          <BaseView className={profileSectionStyle}>
            <ProfileSection />
          </BaseView>
          <BaseView className={portfolioSectionWrapperStyle}>
            <PortfolioSection className={portfolioSection} />
          </BaseView>
        </>
      )}
    </AppLayout>
  );
}

export default App;
