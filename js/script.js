const getBurgerSection = document.getElementById("hamburger");
const getNavList = document.getElementById("nav-list");
const getLogo = document.getElementById("logo");

const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");


getBurgerSection.onclick = function () {
    getBurgerSection.classList.toggle("active");
    getNavList.classList.toggle("show");
    getLogo.classList.toggle("hide");
}

document.onclick = function (e) {
    if (e.target.id == "menu1" || e.target.id == "menu2" || e.target.id == "menu3") {
        getBurgerSection.classList.remove("active");
        getNavList.classList.remove("show");
        getLogo.classList.remove("hide");
    }

    if (e.target.id !== "menu1" &&
        e.target.id !== "menu2" &&
        e.target.id !== "menu3" &&
        e.target.id !== "hamburger") {
        getBurgerSection.classList.remove("active");
        getNavList.classList.remove("show");
        getLogo.classList.remove("hide");
    }
}