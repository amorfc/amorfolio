import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/styleMerge";
import LabelText from "../text/LabelText";
import BaseView from "../view/BaseView";

interface NeuLabelProps extends PropsWithTwClassName {
  label: string;
}

const NeuLabel = (props: NeuLabelProps) => {
  const { label, className } = props;
  const baseClassName = styleMerge(
    "neu-rectangle neu-inset rounded-3xl items-center justify-center py-2 px-4",
    className
  );
  return (
    <BaseView className={baseClassName}>
      <LabelText text={label} />
    </BaseView>
  );
};

export default NeuLabel;
