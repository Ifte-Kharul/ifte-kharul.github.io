const normalizePath = (path) => {
    let trimmed = path;
    while (trimmed.length > 1 && trimmed.endsWith("/")) {
        trimmed = trimmed.slice(0, -1);
    }
    return trimmed.length === 0 ? "/" : trimmed;
};

const currentPath = normalizePath(window.location.pathname);
const navLinks = document.querySelectorAll("[data-nav-link]");

navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.endsWith(".pdf")) {
        return;
    }

    const linkPath = normalizePath(new URL(href, window.location.origin).pathname);
    const isMatch =
        currentPath === linkPath ||
        (linkPath !== "/" && currentPath.startsWith(`${linkPath}/`));

    if (isMatch) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
    }
});
