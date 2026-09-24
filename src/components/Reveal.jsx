import { useLayoutEffect, useRef } from "react";

// Fades its children up the first time they scroll into view.
// Content is visible by default; it's only hidden (before first paint)
// when it starts below the fold, so nothing can get stuck invisible.
const Reveal = ({ children, className = "" }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("reveal-hidden");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

export default Reveal;
