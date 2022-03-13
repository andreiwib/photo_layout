let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".wrapper-main");
let menuStatus = false;

menu.style.marginRight = "-300px";

function menuToggle() {
    if (menuStatus == false) {
        menu.style.marginRight = "0px";
        menuStatus = true;
    }
    else if (menuStatus == true) {
        menu.style.marginRight = "-300px";
        menuStatus = false;
    }
}

menuBtn.onclick = menuToggle;