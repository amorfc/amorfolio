import { useLayoutEffect } from "react";
import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { handleLetterScrollEffect } from "../../utils/document/scroll";
import { styleMerge } from "../../utils/style/styleMerge";
import TitleText from "../text/TitleText";
import BaseView from "../view/BaseView";

interface IntroductionProps extends PropsWithTwClassName {}

const Introduction = (props: IntroductionProps) => {
  const { className } = props;
  const baseClassName = styleMerge(
    "absolute flex-none flex-0 blur-50 z-50",
    className
  );

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
      window.scrollBy({ top: 50, behavior: "smooth" });
    };
    const timeOut = setTimeout(() => scrollABit(), 1500);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <BaseView className={baseClassName}>
      <BaseView className={"relative flex-none w-full h-[400vh] overflow-auto"}>
        <BaseView className={`fixed ${wrapper} flex-row`}>
          {text?.split("").map((letter, index) => (
            <TitleText
              key={index}
              text={letter}
              className={styleMerge(
                "text-5xl xl:text-6xl text-center text-desc tracking-wider",
                letterClass
              )}
            />
          ))}
        </BaseView>
        <div className="opacity-0">.</div>
      </BaseView>
    </BaseView>
  );
};

export default Introduction;

const text =
  "This is Fatih  as known as Amorf,THIS IS MY TEXT THAT IT'S GOING TO SHOW IN SCROLLTHIS IS MY TEXT THAT IT'S GOING TO SHOW IN SCROLLTHIS IS MY TEXT THAT IT'S GOING TO SHOW IN SCROLL is Fatih  as known as Amorf,This is Fatih  as known as Amorf,This is Fatih  as known as Amorf,This is Fatih  as known as Amorf,This is Fatih  as known as Amorf,This is Fatih  as known as Amorf,This is Fatih  as known as Amorf,This is Fatih  as known as Amorf,This is Fatih  as known as Amorf,This is Fatih  as known as Amorf,This is Fatih  as known as Amorf,This is Fatih  as known as Amorf,";
