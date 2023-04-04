/**
 *  This was created by GhostWeb Design company
 *  All rights reserved 2023.
 */

/**
 * Start of global variables
 */
const burgerIcon = document.querySelector(".burger-icon");
const linksMenu = document.querySelector(".links-menu");
const bodyEl = document.body;






/**
 * End of global variables
 */


/**
 * Start helper fuctions
 */
burgerIcon.addEventListener("click", () => {
    if (linksMenu.style.display === "none") {
        linksMenu.style.display = "flex"
        bodyEl.style.overflow = 'hidden' 
    } else {
        linksMenu.style.display = "none";
        bodyEl.style.overflow = 'visible';
    }
})

function closeMenu() {
    bodyEl.style.overflow = 'visible';
    linksMenu.style.display = 'none';
};














/**
 * End helper fuctions
 */


/**
 * End of script
 */
