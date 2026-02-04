const NAVBAR_THRESHOLD = 600;
let navbar;

function init()
{
    /* Title screen functionality */
    const title = document.querySelector(".title");
    // title.addEventListener("click", openTitle)
    openTitle();

    function openTitle()
    {
        const menu = title.querySelector(".title-menu");
        const initText = title.querySelector(".open-text");

        // initText.classList.add("hidden");
        menu.classList.remove("hidden");
        title.removeEventListener("click", openTitle);
    }

    /* Hide navbar until scroll. */
    // navbar = document.querySelector("#indexnavbar");
    // window.addEventListener("scroll", onScroll)
}

function onScroll()
{
    // Once the user scrolls past the navbar threshold, show the navbar and stop listening for scrolls.
    if (window.pageYOffset > NAVBAR_THRESHOLD)
    {
        navbar.classList.remove("hidden");
        window.removeEventListener("scroll", onScroll);
    }
}

document.addEventListener("DOMContentLoaded", init);