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
    dropdown.addEventListener("mouseover", enableDropdown)
    dropdown.addEventListener("mouseout", disableDropdown);
    console.log(window.innerWidth);
}

init();