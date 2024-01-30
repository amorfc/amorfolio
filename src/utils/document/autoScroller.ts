export const initializeAutoScrollers = () => {
  const scrollerElements = document.querySelectorAll(".auto-scroller");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAutoScrollerAnimation(scrollerElements);
    addAnimationPauseOnMobile(scrollerElements);
  }
};

function addAutoScrollerAnimation(scrollerElements: NodeListOf<Element>) {
  scrollerElements?.forEach((scrollerElement) => {
    scrollerElement.setAttribute("data-animated", "true");

    const scrollInnerElement = scrollerElement.querySelector(
      ".auto-scroller_inner"
    );

    if (!scrollInnerElement?.children) return;

    const scrollerContent = Array.from(scrollInnerElement?.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as Element;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollInnerElement.appendChild(duplicatedItem);
    });
  });
}

function addAnimationPauseOnMobile(scrollerElements: NodeListOf<Element>) {
  scrollerElements?.forEach((scrollerElement) => {
    const htmlElement = scrollerElement as HTMLElement;
    htmlElement.setAttribute("data-animated", "true");
    htmlElement.addEventListener("touchstart", function () {
      htmlElement.style.animationPlayState = "paused";
    });
    htmlElement.addEventListener("touchend", function () {
      htmlElement.style.animationPlayState = "running";
    });
  });
}
