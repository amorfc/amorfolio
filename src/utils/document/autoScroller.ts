let scrollerElements: NodeListOf<Element> | null = null;

export const initializeAutoScrollers = () => {
  scrollerElements = document.querySelectorAll(".auto-scroller");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAutoScrollerAnimation();
  }
};

function addAutoScrollerAnimation() {
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
