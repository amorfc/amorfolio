import { SVGProps, useCallback, useMemo } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { SocialMedia } from "../../constants/common";
import { IconSize } from "../../constants/sizeStyleConstants";
import { getSocialMediaRedirectUrl } from "../../utils/redirect";
import { styleMerge } from "../../utils/styleMerge";
import { openInNewTab } from "../../utils/window";
import {
  EmailIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  SpotifyLogoIcon,
  TelegramLogoIcon,
  WebsiteIcon,
  XLogoIcon,
} from "./GENERATED";

interface SocialMediaIconProps
  extends PropsWithTwClassName,
    SVGProps<SVGSVGElement> {
  socialMedia: SocialMedia;
  redirectUrl?: string;
  size?: number;
}

const SocialMediaComponents = {
  [SocialMedia.LinkedIn]: LinkedinLogoIcon,
  [SocialMedia.Github]: GithubLogoIcon,
  [SocialMedia.Telegram]: TelegramLogoIcon,
  [SocialMedia.Instagram]: InstagramLogoIcon,
  [SocialMedia.X]: XLogoIcon,
  [SocialMedia.Email]: EmailIcon,
  [SocialMedia.Spotify]: SpotifyLogoIcon,
  [SocialMedia.Website]: WebsiteIcon,
};

const SocialMediaIcon = (props: SocialMediaIconProps) => {
  const { socialMedia, className, redirectUrl, size, ...restProps } = props;
  const SocialMediaComponent = SocialMediaComponents[socialMedia];

  const handleOnClick = useCallback(() => {
    openInNewTab(getSocialMediaRedirectUrl(socialMedia, redirectUrl) ?? "");
  }, [socialMedia, redirectUrl]);

  const wh = useMemo(() => {
    const sizeResult = size ?? IconSize.medium;
    return { width: sizeResult, height: sizeResult };
  }, [size]);

  const finalClassName = styleMerge(
    "fill-icon hover:fill-iconActive hover:cursor-pointer hover:scale-[1.04]",
    className
  );

  const finalProps = { className: finalClassName, ...wh, ...restProps };

  return <SocialMediaComponent onClick={handleOnClick} {...finalProps} />;
};

export default SocialMediaIcon;
