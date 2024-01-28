import { Children, useMemo } from "react";
import { styleMerge } from "../../utils/style/styleMerge";
import TitleText from "../text/TitleText";
import BaseView from "../view/BaseView";

interface IntroductionTextProps {
  text: string;
  letterClass: string;
}

const IntroductionText = (props: IntroductionTextProps) => {
  const { text, letterClass } = props;
  const wordsWithSpaces = useMemo(() => text?.split(/(\s+)/), [text]); // Split by spaces and keep spaces in the array

  return Children.toArray(
    wordsWithSpaces.map((word) => (
      <BaseView className="flex-none flex-row ml-2">
        {word.split("").map((letter) => (
          <TitleText
            text={letter}
            className={styleMerge("text-desc tracking-wide", letterClass)}
          />
        ))}
      </BaseView>
    ))
  );
};

export default IntroductionText;
