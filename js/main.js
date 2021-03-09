document.querySelector(".aside_button").addEventListener("click",showMenu)

function showMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");

    let button = document.querySelector(".aside_button");
    button.classList.toggle("movebutton");
}