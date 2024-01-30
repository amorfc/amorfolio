import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/style/styleMerge";
import LabelText from "../text/LabelText";
import BaseView from "../view/BaseView";

interface NeuLabelProps extends PropsWithTwClassName {
  label: string;
}

const NeuLabel = (props: NeuLabelProps) => {
  const { label, className } = props;
  const baseClassName = styleMerge(
    "neu-rectangle neu-inset rounded-3xl py-1 px-4 text-nowrap flex-none flex-0 justify-center items-center",
    className
  );
  return (
    <BaseView className={baseClassName}>
      <LabelText text={label} />
    </BaseView>
  );
};

export default NeuLabel;
