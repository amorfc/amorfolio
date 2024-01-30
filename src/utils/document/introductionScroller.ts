interface LetterScrollEffectConfig {
  textWrapperClass: string;
  letterClass: string;
  opacityVariableName: string;
  maxOpacity?: number;
  minOpacity?: number;
  onScrollStart?: () => void;
  onScrollEnd?: () => void;
}

export const handleLetterScrollEffect = (params: LetterScrollEffectConfig) => {
  const {
    textWrapperClass,
    letterClass,
    opacityVariableName,
    maxOpacity = 1,
    minOpacity = 0.1,
    onScrollEnd,
    onScrollStart,
  } = params;
  const wrapperDoc = document.querySelector(`.${textWrapperClass}`);
  const letters = wrapperDoc?.querySelectorAll(`.${letterClass}`);

  const scrolled =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  if (!letters) return;
  if (scrolled == 1) onScrollEnd?.();
  if (scrolled < 1) onScrollStart?.();

  letters.forEach((letter, index) => {
    const indexLengthRatio = index / letters.length;

    if (indexLengthRatio < scrolled) {
      //@ts-expect-error/next-line
      letter?.style.setProperty(opacityVariableName, maxOpacity);
    } else {
      //@ts-expect-error/next-line
      letter?.style.setProperty(opacityVariableName, minOpacity);
    }
  });
};
