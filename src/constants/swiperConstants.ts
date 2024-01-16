export enum SwiperDirection {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}

export interface SwiperSlideParams {
  content: React.ReactElement;
  slideClassName?: string;
}
