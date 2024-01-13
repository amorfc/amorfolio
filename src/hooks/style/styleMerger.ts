import { twMerge } from "tailwind-merge";
import { PropsWithTwClassName } from "../../common/propsInterfaces";

interface UseStyleMergerParams extends PropsWithTwClassName {
  style?: string;
}

export const useStyleMerger = (
  params: UseStyleMergerParams
): UseStyleMergerResultType => {
  const { className, style } = params;

  const styleResult = twMerge(className, style);

  return { styleClassName: styleResult };
};

interface UseStyleMergerResultType {
  styleClassName: string;
}
