import { useLayoutEffect, useState } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { handleLetterScrollEffect } from "../../utils/document/scroll";
import { styleMerge } from "../../utils/style/styleMerge";
import TextButton from "../button/TextButton";
import BaseView from "../view/BaseView";
import IntroductionText from "./IntroductionText";

interface IntroductionProps extends PropsWithTwClassName {
  onIntroComplete: () => void;
}

const Introduction = (props: IntroductionProps) => {
  const { className, onIntroComplete } = props;
  const [showLetsDiveButton, setShowLetsDiveButton] = useState(false);
  const baseClassName = styleMerge(
    "absolute flex-none flex-0 blur-50 z-50",
    className
  );

  const wrapper = "showon-scroll-text-container";
  const letterClass = "letter";
  const opacityVarName = "--intro-text-opacity";

  const handleScrollEnd = () => {
    setShowLetsDiveButton(true);
  };

  const handleScrollStart = () => {
    setShowLetsDiveButton(false);
  };

  const handleOnLetsDiveInClick = () => {
    onIntroComplete();
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      handleLetterScrollEffect({
        textWrapperClass: wrapper,
        letterClass,
        opacityVariableName: opacityVarName,
        onScrollStart: handleScrollStart,
        onScrollEnd: handleScrollEnd,
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [onIntroComplete]);

  useLayoutEffect(() => {
    const scrollABit = () => {
      window.scrollBy({ top: 50, behavior: "smooth" });
    };
    const timeOut = setTimeout(() => scrollABit(), 1500);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <BaseView className={baseClassName}>
      <BaseView className={"relative flex-none w-full h-[400vh] overflow-auto"}>
        <BaseView
          className={`fixed top-0 left-0 ${wrapper} flex-row flex-wrap h-[90vh] p-6 md:p-8 lg:p-4`}
        >
          <IntroductionText text={text} letterClass={letterClass} />
          {showLetsDiveButton && (
            <TextButton
              onClick={handleOnLetsDiveInClick}
              className="flex-none"
              textClassName="text-title"
              buttonText={"Let`s Dive In"}
            />
          )}
        </BaseView>
        <div className="opacity-0">.</div>
      </BaseView>
    </BaseView>
  );
};

export default Introduction;

const text = `Hello! I'm Fatih Ermetin, also known as Amorf. I'm not just a software developer; I'm also a musician and vocalist. While composing songs, my passion lies in developing mobile applications and blockchain tools, contributing to open-source projects.I'm well-versed in the Cosmos ecosystem. Although I began my career in Fintech, I've explored other fields. Throughout my journey, I've consistently adhered to best practices and technical design patterns.`;
