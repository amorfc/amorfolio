import { SocialMedia } from "../constants/common";

export const getSocialMediaRedirectUrl = (socialMedia: SocialMedia) => {
  switch (socialMedia) {
    case SocialMedia.LinkedIn:
      return "https://www.linkedin.com/in/fatih-ermetin-361567190/";
    case SocialMedia.Github:
      return "https://github.com/amorfc";
    case SocialMedia.Telegram:
      return "https://t.me/amorfatih";
    case SocialMedia.X:
      return "https://twitter.com/amorfke";
    case SocialMedia.Instagram:
      return "https://www.instagram.com/amooorfati/";
  }
};
