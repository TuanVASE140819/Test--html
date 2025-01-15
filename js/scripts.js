document.addEventListener("DOMContentLoaded", function () {
  const scrollContent = document.querySelector(".scroll-content");
  const leftBtn = document.querySelector(".scroll-left");
  const rightBtn = document.querySelector(".scroll-right");
  const scrollAmount = 320; // Width of item + gap

  leftBtn.addEventListener("click", () => {
    scrollContent.style.transform = `translateX(${Math.min(
      0,
      scrollContent.style.transform
        .replace("translateX(", "")
        .replace("px)", "") *
        1 +
        scrollAmount
    )}px)`;
  });

  rightBtn.addEventListener("click", () => {
    const maxScroll = -(
      scrollContent.scrollWidth - scrollContent.parentElement.clientWidth
    );
    const currentScroll =
      scrollContent.style.transform
        .replace("translateX(", "")
        .replace("px)", "") * 1 || 0;
    scrollContent.style.transform = `translateX(${Math.max(
      maxScroll,
      currentScroll - scrollAmount
    )}px)`;
  });
});
