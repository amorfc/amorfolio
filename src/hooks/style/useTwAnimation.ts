import { useMemo } from "react";
// Add your animation here if you like to expand the animation options from tailwind animated
type TwAppAnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right";

interface UseTwAnimationParams {
  anim?: TwAppAnimationType;
  durationMs?: number;
}

export const useTwAppAnimation = (params: UseTwAnimationParams): string => {
  const { anim = "fade-up", durationMs = 600 } = params;

  const result = useMemo(() => {
    const durationRes = durationMs;
    const twAnimation = getTwAnimation(anim);

    return `${twAnimation} animate-once animate-duration-[${durationRes}ms] animate-ease-in-out`;
  }, [anim, durationMs]);
  return result;
};

const getTwAnimation = (anim: TwAppAnimationType) => {
  return `animate-${anim}`;
};
