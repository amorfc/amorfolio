interface RandomizeDelayParams {
  min: number;
  max: number;
}

export const generateRandomDelay = (
  params: RandomizeDelayParams = { min: 5000, max: 8000 }
) => {
  const { min, max } = params;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
