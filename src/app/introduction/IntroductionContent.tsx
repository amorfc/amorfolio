import { useCallback } from "react";
import NeuTextButton from "../../components/button/NeuTextButton";
import Introduction from "../../components/introduction/Introduction";
import BaseView from "../../components/view/BaseView";
import { SizeContants } from "../../constants/sizeStyleConstants";
import { useTwAppAnimation } from "../../hooks/style/useTwAnimation";
import { styleMerge } from "../../utils/style/styleMerge";

interface IntroductionContentProps {
  onLetDiveInClick: () => void;
}
const IntroductionContent = (props: IntroductionContentProps) => {
  const { onLetDiveInClick } = props;

  const appSectionsAnim = useTwAppAnimation({
    durationMs: 1000,
    anim: "fade-up",
  });

  const handleOnLetDiveInClick = useCallback(() => {
    window.scrollTo(0, 0);
    onLetDiveInClick();
  }, [onLetDiveInClick]);

  return (
    <BaseView>
      <Introduction />
      <BaseView
        className={styleMerge("fixed bottom-4 right-8 z-50", appSectionsAnim)}
      >
        <NeuTextButton
          textSize={SizeContants.small}
          onClick={handleOnLetDiveInClick}
          className="flex-none py-2 px-6 rounded-full"
          buttonText={"Let's Dive In"}
        />
      </BaseView>
    </BaseView>
  );
};

export default IntroductionContent;
