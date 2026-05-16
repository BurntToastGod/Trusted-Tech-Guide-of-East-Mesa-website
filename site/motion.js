/* Motion + scroll reveal (respect reduced motion) */

const prefersReducedMotion =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const revealTargets = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  for (const el of revealTargets) observer.observe(el);
} else {
  // Ensure content is visible with reduced motion.
  for (const el of document.querySelectorAll("[data-reveal]")) {
    el.classList.add("is-revealed");
  }
}

