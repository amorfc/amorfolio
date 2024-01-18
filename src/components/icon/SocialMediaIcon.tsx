import React, { SVGProps, useMemo } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
  XLogo,
} from "./GENERATED";
import { IconSize } from "../../constants/sizeStyleConstants";
import { styleMerge } from "../../utils/styleMerge";
import { SocialMedia } from "../../constants/common";

interface SocialMediaIconProps
  extends PropsWithTwClassName,
    SVGProps<SVGSVGElement> {
  socialMedia: SocialMedia;
}

const SocialMediaIcon = (props: SocialMediaIconProps) => {
  const { socialMedia, className } = props;

  const renderIcon = useMemo(() => {
    const wh = { width: IconSize.medium, height: IconSize.medium };
    const finalClassName = styleMerge(
      "hover:fill-lightgrey fill-mediumgrey",
      className
    );

    const finalProps = { className: finalClassName, ...wh, ...props };

    switch (socialMedia) {
      case SocialMedia.LinkedIn:
        return <LinkedinLogo {...finalProps} />;
      case SocialMedia.Github:
        return <GithubLogo {...finalProps} />;
      case SocialMedia.Telegram:
        return <TelegramLogo {...finalProps} />;
      case SocialMedia.Instagram:
        return <InstagramLogo {...finalProps} />;
      case SocialMedia.X:
        return <XLogo {...finalProps} />;
    }
  }, [props, socialMedia, className]);

  return <>{renderIcon}</>;
};

export default SocialMediaIcon;
