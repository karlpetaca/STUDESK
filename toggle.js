document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".dropdown-toggle");
    const menu = document.querySelector(".dropdown-menu");

    let isMenuVisible = false;

    toggle.addEventListener("click", () => {
    isMenuVisible = !isMenuVisible;
    menu.style.display = isMenuVisible ? "block" : "none";
    });

    // Close the menu when clicking outside
    document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.style.display = "none";
        isMenuVisible = false;
    }
    });
});