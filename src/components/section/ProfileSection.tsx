import { profileSection } from "../../data/profileSection";
import AppImage from "../image/AppImage";
import BaseText from "../text/BaseText";
import BaseCircleView from "../view/BaseCircleView";
import BaseView from "../view/BaseView";
import { HomeSection } from "./HomeSection";

export const ProfileSection = () => {
  const baseCircleViewClassName =
    "neu-circle m-8 w-[25vh] h-[25vh] lg:w-[35vh] lg:h-[35vh]";
  return (
    <HomeSection>
      <BaseView className="basis-[35%] items-center justify-center">
        <BaseCircleView className={baseCircleViewClassName}>
          <AppImage
            className={"p-4 rounded-full object-cover w-[100%] h-[100%]"}
            imagePublicUrl={"profile.png"}
            alt="Profile Photo"
          />
        </BaseCircleView>
      </BaseView>
      <BaseView className="neu-rectangle inset rounded-3xl basis-[65%] m-5 p-4 md:p-8 text-center items-center justify-center">
        <BaseText
          className="sm:text-lg md:text-xl text-center"
          text={profileSection.profile.description}
        />
      </BaseView>
    </HomeSection>
  );
};
