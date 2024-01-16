import { Children, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SwiperDirection,
  SwiperSlideParams,
} from "../../constants/swiperConstants";
import { styleMerge } from "../../utils/styleMerge";

interface AppSwiperProps {
  slides: SwiperSlideParams[];
  swiperClassName?: string;
  direction?: SwiperDirection;
}

const AppSwiper = (props: AppSwiperProps) => {
  const {
    slides,
    swiperClassName,
    direction = SwiperDirection.VERTICAL,
  } = props;

  const baseFlexStyle = useMemo(
    () =>
      direction == SwiperDirection.HORIZONTAL
        ? "w-[100vh] h-full"
        : "w-full h-[100vh]",
    [direction]
  );
  const baseSwiperClassName = styleMerge(baseFlexStyle, swiperClassName);

  return (
    <Swiper
      className={baseSwiperClassName}
      autoHeight={true}
      slidesPerView={1}
      mousewheel={true}
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
