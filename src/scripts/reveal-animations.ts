const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (revealTargets.length > 0) {
    const observer = new IntersectionObserver(
        (entries, entryObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    entryObserver.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            rootMargin: "0px 0px -12% 0px",
            threshold: 0.15
        }
    );

    revealTargets.forEach((target) => observer.observe(target));
}
