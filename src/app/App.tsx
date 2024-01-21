import { PortfolioSection } from "../components/section/PortfolioSection";
import { ProfileSection } from "../components/section/ProfileSection";
import AppLayout from "../components/view/AppLayout";
import BaseView from "../components/view/BaseView";
import SiteMetadata from "../metadata/SiteMetadata";
import { styleMerge } from "../utils/styleMerge";
import "./App.css";

function App() {
  const profileSectionStyle = "lg:max-w-[35%] lg:h-full";

  const portfolioSectionWrapperStyle = styleMerge(
    profileSectionStyle,
    "lg:max-w-[65%] gap-y-7"
  );

  const profileSection = styleMerge("gap-y-7 lg:h-full");

  return (
    <AppLayout className={"gap-10 flex-col lg:flex-row"}>
      <SiteMetadata />
      <BaseView className={profileSectionStyle}>
        <ProfileSection />
      </BaseView>
      <BaseView className={portfolioSectionWrapperStyle}>
        <PortfolioSection className={profileSection} />
      </BaseView>
    </AppLayout>
  );
}

export default App;
