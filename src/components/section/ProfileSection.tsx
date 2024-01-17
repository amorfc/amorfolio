import { profileSection } from "../../data/profileSection";
import ProfileImage from "../image/ProfileImage";
import DescriptionText from "../text/DescriptionText";
import BaseCircleView from "../view/BaseCircleView";
import BaseView from "../view/BaseView";
import { HomeSection } from "./HomeSection";

export const ProfileSection = () => {
  const baseCircleViewClassName = "neu-circle m-8";
  return (
    <HomeSection className="overflow-hidden">
      <BaseView className="basis-[35%] items-center justify-center">
        <BaseCircleView className={baseCircleViewClassName}>
          <ProfileImage className="p-4 rounded-full opacity-80" />
        </BaseCircleView>
      </BaseView>
      <BaseView className="neu-rectangle neu-inset rounded-3xl basis-[65%] xl:m-5 p-4 text-center items-center justify-center">
        <DescriptionText text={profileSection.profile.description} />
      </BaseView>
    </HomeSection>
  );
};
