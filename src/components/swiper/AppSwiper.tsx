import { Children, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SwiperDirection,
  SwiperSlideParams,
} from "../../constants/swiperConstants";
import { styleMerge } from "../../utils/styleMerge";
import { Autoplay } from "swiper/modules";
import { generateRandomDelay } from "../../utils/randomize";

interface AppSwiperProps {
  slides: SwiperSlideParams[];
  swiperClassName?: string;
  direction?: SwiperDirection;
  isAutoPlay?: boolean;
}

const AppSwiper = (props: AppSwiperProps) => {
  const {
    slides,
    swiperClassName,
    direction = SwiperDirection.VERTICAL,
    isAutoPlay = false,
  } = props;

  const baseSwiperClassName = styleMerge("w-full", swiperClassName);

  const autoPlayConfig = useMemo(() => {
    const randomDelay = generateRandomDelay();
    const config = { disableOnInteraction: true, delay: randomDelay };

    if (isAutoPlay) {
      return { config, autoPlayModule: [Autoplay] };
    }
    return {};
  }, [isAutoPlay]);

  return (
    <Swiper
      className={baseSwiperClassName}
      slidesPerView={1}
      mousewheel={true}
      speed={1600}
      autoplay={{ ...autoPlayConfig?.config }}
      modules={[...(autoPlayConfig?.autoPlayModule ?? [])]}
      direction={direction}
    >
      {Children.toArray(
        slides.map(({ content, slideClassName }) => {
          const baseSlideClassName = styleMerge("m-0", slideClassName);
          return (
            <SwiperSlide className={baseSlideClassName}>{content}</SwiperSlide>
          );
        })
      )}
    </Swiper>
  );
};

export default AppSwiper;
