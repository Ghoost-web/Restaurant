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
const cateBtns = document.querySelectorAll(".cate-btn")





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
        closeMenu()
        bodyEl.style.overflow = 'visible';
    }
})

function closeMenu() {
    bodyEl.style.overflow = 'visible';
    linksMenu.style = 'animation: rev-menu 1s linear 0s 1 forwards;';
    setTimeout(() => {
        linksMenu.style = 'animation: menu 1s linear 0s 1 forwards;';
        linksMenu.style.display = "none"
    }, 200)
};
let ind = 1

const btns = Array.from(cateBtns)
let i = 1;
setInterval(() => {
    btns.forEach(b => b.classList.remove("active"));
    btns[i].classList.add("active");
    if (i === btns.length - 1) i = 0;
    else i++;
}, 4000);


/**
 * End helper fuctions
 */


/**
 * End of script
 */
