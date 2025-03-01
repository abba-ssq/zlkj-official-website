export const IntersectionObserverHandle = () => {
  const ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-enter");
      } else {
        entry.target.classList.remove("animate-enter");
      }
    });
  });
  const element = document.querySelectorAll(".IntersectionObserver");

  element.forEach((el) => {
    ob.observe(el);
  });
};
