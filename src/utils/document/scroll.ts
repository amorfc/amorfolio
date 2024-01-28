interface LetterScrollEffectConfig {
  textWrapperClass: string;
  letterClass: string;
  opacityVariableName: string;
  maxOpacity?: number;
  minOpacity?: number;
}

export const handleLetterScrollEffect = (params: LetterScrollEffectConfig) => {
  const {
    textWrapperClass,
    letterClass,
    opacityVariableName,
    maxOpacity = 1,
    minOpacity = 0.1,
  } = params;
  const wrapperDoc = document.querySelector(`.${textWrapperClass}`);
  const letters = wrapperDoc?.querySelectorAll(`.${letterClass}`);

  const scrolled =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  if (!letters) return;

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
