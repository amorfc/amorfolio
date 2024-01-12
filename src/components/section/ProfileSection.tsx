// interface ProfileSectionProps{}

import BaseView from "../view/BaseView";
import { HomeSection } from "./HomeSection";

export const ProfileSection = () => {
  return (
    <HomeSection>
      <BaseView className="basis-[35%] bg-danger items-center justify-center">
        <div className="bg-white m-8 rounded-full w-[25vh] h-[25vh] lg:w-[35vh] lg:h-[35vh]"></div>
      </BaseView>
      <BaseView className="basis-[65%] bg-danger">
        <h1></h1>
      </BaseView>
    </HomeSection>
  );
};
