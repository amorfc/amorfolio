import { PortfolioSection } from "../components/section/PortfolioSection";
import { ProfileSection } from "../components/section/ProfileSection";
import AppLayout from "../components/view/AppLayout";
import BaseView from "../components/view/BaseView";
import { styleMerge } from "../utils/styleMerge";
import "./App.css";

function App() {
  const profileSectionStyle = "basis-1/4";

  const gapBetweenPortfolioSections = "gap-y-7";
  const portfolioSectionStyle = styleMerge(
    profileSectionStyle,
    gapBetweenPortfolioSections,
    "basis-1/2"
  );

  return (
    <AppLayout className={"gap-10 flex-col lg:flex-row"}>
      <BaseView className={profileSectionStyle}>
        <ProfileSection />
      </BaseView>
      <BaseView className={portfolioSectionStyle}>
        <PortfolioSection className={gapBetweenPortfolioSections} />
      </BaseView>
    </AppLayout>
  );
}

export default App;
