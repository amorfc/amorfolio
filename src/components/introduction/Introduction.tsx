import { useLayoutEffect } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { handleLetterScrollEffect } from "../../utils/document/introductionScroller";
import { styleMerge } from "../../utils/style/styleMerge";
import BaseView from "../view/BaseView";
import IntroductionText from "./IntroductionText";
import { useTwAppAnimation } from "../../hooks/style/useTwAnimation";

interface IntroductionProps extends PropsWithTwClassName {}

const Introduction = (props: IntroductionProps) => {
  const { className } = props;
  const baseClassName = styleMerge(
    "absolute flex-none flex-0 blur-50 z-50",
    className
  );

  const textContainerAnim = useTwAppAnimation({
    durationMs: 1000,
    anim: "fade-up",
  });

  const wrapper = "showon-scroll-text-container";
  const letterClass = "letter";
  const opacityVarName = "--intro-text-opacity";

  useLayoutEffect(() => {
    const handleScroll = () => {
      handleLetterScrollEffect({
        textWrapperClass: wrapper,
        letterClass,
        opacityVariableName: opacityVarName,
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const scrollABit = () => {
      window.scrollBy({ top: 180, behavior: "smooth" });
    };
    const timeOut = setTimeout(() => scrollABit(), 1100);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <BaseView className={baseClassName}>
      <BaseView className={"relative flex-none w-full h-[400vh] overflow-auto"}>
        <BaseView
          className={`${textContainerAnim} ${wrapper} fixed top-0 left-0 flex-row flex-wrap justify-center h-[90svh] px-2 pt-1 md:p-4 lg:p-6`}
        >
          <IntroductionText text={text} letterClass={letterClass} />
        </BaseView>
        <div className="opacity-0">.</div>
      </BaseView>
    </BaseView>
  );
};

export default Introduction;

const text = `Hello! Feel free to scroll :) I'm Fatih Ermetin, also known as Amorf. I bring a unique blend of expertise as both a software developer and a musician/vocalist. While composing songs, my passion lies in Front End development, crafting mobile applications, and contributing to open-source projects. Despite starting my career in Fintech, I've diversified my skills across various fields, consistently applying best practices and technical design patterns.`;
