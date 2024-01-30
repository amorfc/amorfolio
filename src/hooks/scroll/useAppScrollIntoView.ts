import { useCallback, RefObject } from "react";

interface ScrollIntoViewOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

const useScrollIntoView = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
) => {
  const scrollIntoView = useCallback(
    (
      options: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      }
    ) => {
      ref.current?.scrollIntoView(options);
    },
    [ref]
  );

  return scrollIntoView;
};

export default useScrollIntoView;
