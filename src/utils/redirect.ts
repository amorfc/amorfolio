import { SocialMedia } from "../constants/common";

export const getSocialMediaRedirectUrl = (
  socialMedia: SocialMedia,
  redirectUrl?: string
) => {
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
    case SocialMedia.Email:
      return "mailto:fatihermetin@gmail.com";
    case SocialMedia.Spotify:
      return "https://open.spotify.com/artist/40AGqEKai8eeqi6hynopXy?si=91PdvRfaSPmrQ-vAsRumVA";
    default:
      return redirectUrl;
  }
};
