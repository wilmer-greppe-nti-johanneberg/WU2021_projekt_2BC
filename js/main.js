document.querySelector(".aside_button").addEventListener("click",showMenu)
document.querySelector(".back_arrow").addEventListener("click",showMenu)

function showMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");

    let menu1 = document.querySelector(".back_arrow");
    menu1.classList.toggle("show")
}