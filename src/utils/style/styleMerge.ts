import { ClassNameValue, twMerge } from "tailwind-merge";

export const styleMerge = (...classLists: ClassNameValue[]) => {
  return twMerge(classLists);
};
