var projectDropdownMenu;

function enableDropdown()
{
    projectDropdownMenu.classList.remove("hidden");
}
function disableDropdown(event)
{
    projectDropdownMenu.classList.add("hidden");
}

function init()
{
    // Setup the project dropdown menu.
    projectDropdownMenu = document.querySelector(".project-dropdown-menu");
    let dropdown = document.querySelector(".project-dropdown");
    // dropdown.addEventListener("mouseover", enableDropdown)
    // dropdown.addEventListener("mouseout", disableDropdown);

    // Setup Hamburger Menu
    const hamburgerButton = document.querySelector(".hamburger-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    hamburgerButton.addEventListener("click", openMobileMenu);

    function openMobileMenu()
    {
        mobileMenu.classList.toggle("active");
    }

    // Cose the mobile menu when the user clicks out of it.
    window.onclick = function (event)
    {
        if (!event.target.closest(".navbar") && mobileMenu.classList.contains("active"))
        {
            mobileMenu.classList.remove("active");
        }
    }
}

init();