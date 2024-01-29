import { PropsWithTwClassName } from "../../common/propsInterfaces";
import { styleMerge } from "../../utils/style/styleMerge";
import LabelText from "../text/LabelText";

interface NeuLabelProps extends PropsWithTwClassName {
  label: string;
}

const NeuLabel = (props: NeuLabelProps) => {
  const { label, className } = props;
  const baseClassName = styleMerge(
    "neu-rectangle neu-inset rounded-3xl py-1 px-4 text-nowrap",
    className
  );
  return (
    <div className={baseClassName}>
      <LabelText text={label} />
    </div>
  );
};

export default NeuLabel;
