const nav = document.querySelector<HTMLElement>("[data-mobile-nav]");
const openButton = document.querySelector<HTMLButtonElement>("[data-mobile-open]");
const closeButton = document.querySelector<HTMLButtonElement>("[data-mobile-close]");
const backdrop = document.querySelector<HTMLElement>("[data-mobile-backdrop]");
const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-mobile-nav] a");

if (nav && openButton && closeButton) {
    const openMenu = () => {
        nav.classList.add("is-open");
        nav.setAttribute("aria-hidden", "false");
        openButton.setAttribute("aria-expanded", "true");
        backdrop?.classList.add("is-open");
        backdrop?.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
    };

    const closeMenu = () => {
        nav.classList.remove("is-open");
        nav.setAttribute("aria-hidden", "true");
        openButton.setAttribute("aria-expanded", "false");
        backdrop?.classList.remove("is-open");
        backdrop?.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
    };

    openButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);

    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    backdrop?.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.matchMedia("(min-width: 981px)").addEventListener("change", (event) => {
        if (event.matches) {
            closeMenu();
        }
    });
}

export { };
