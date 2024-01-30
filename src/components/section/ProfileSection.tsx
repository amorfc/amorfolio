import { Children } from "react";
import { SocialMedia } from "../../constants/common";
import { profileSection } from "../../data/profileSection";
import { displaySkillsList } from "../../data/skillsData";
import SocialMediaIcon from "../icon/SocialMediaIcon";
import ProfileImage from "../image/ProfileImage";
import SkillList from "../list/SkillList";
import HAutoListScroller from "../scroll/HAutoListScroller";
import DescriptionText from "../text/DescriptionText";
import BaseCircleView from "../view/BaseCircleView";
import BaseView from "../view/BaseView";
import { HomeSection } from "./HomeSection";

export const ProfileSection = () => {
  const baseCircleViewClassName = "neu-circle m-8 my-4";

  const ignoredSocialMedias = [SocialMedia.Website];

  return (
    <HomeSection className="overflow-hidden">
      <BaseView className="basis-[35%] items-center justify-center">
        <BaseCircleView className={baseCircleViewClassName}>
          <ProfileImage className="p-4 rounded-full opacity-80" />
        </BaseCircleView>
        <BaseView className="flex-row flex-wrap gap-4 my-2 px-6 justify-center">
          {Children.toArray(
            Object.values(SocialMedia)
              .filter((el) => !ignoredSocialMedias.includes(el))
              .map((value) => <SocialMediaIcon socialMedia={value} />)
          )}
        </BaseView>
      </BaseView>
      <BaseView className="neu-rectangle neu-inset rounded-3xl basis-[65%] mt-2 xl:m-5 p-2 m-2 text-center items-center justify-center">
        <BaseView className="text-center items-center justify-center">
          <DescriptionText text={profileSection.profile.description} />
        </BaseView>
        <BaseView className="flex-none flex-0 max-w-full max-h-full">
          <HAutoListScroller>
            <SkillList data={displaySkillsList.primary} />
          </HAutoListScroller>
          <HAutoListScroller direction="right">
            <SkillList data={displaySkillsList.secondary} />
          </HAutoListScroller>
        </BaseView>
      </BaseView>
    </HomeSection>
  );
};
