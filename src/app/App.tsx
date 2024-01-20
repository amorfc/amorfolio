import { PortfolioSection } from "../components/section/PortfolioSection";
import { ProfileSection } from "../components/section/ProfileSection";
import AppLayout from "../components/view/AppLayout";
import BaseView from "../components/view/BaseView";
import { styleMerge } from "../utils/styleMerge";
import "./App.css";

function App() {
  const profileSectionStyle = "basis-1/4";

  const portfolioSectionWrapperStyle = styleMerge(
    profileSectionStyle,
    "lg:basis-1/2 gap-y-7"
  );

  const profileSection = styleMerge("gap-y-7 lg:h-full");

  return (
    <AppLayout className={"gap-10 flex-col lg:flex-row"}>
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
