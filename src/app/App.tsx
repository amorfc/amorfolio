import { useCallback, useState } from "react";
import AppLayout from "../components/view/AppLayout";
import SiteMetadata from "../metadata/SiteMetadata";
import "./App.css";
import HomeContent from "./home/HomeContent";
import IntroductionContent from "./introduction/IntroductionContent";

const App = () => {
  const [isIntroCompleted, setIsIntroCompleted] = useState(false);

  const setIntroCompleted = useCallback(() => setIsIntroCompleted(true), []);
  return (
    <AppLayout className={"gap-10 flex-col lg:flex-row"}>
      <SiteMetadata />
      {!isIntroCompleted && (
        <IntroductionContent onLetDiveInClick={setIntroCompleted} />
      )}
      {isIntroCompleted && <HomeContent />}
    </AppLayout>
  );
};

export default App;
