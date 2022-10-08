const btnMenu = document.querySelector(".btnMenu");
const menuItem = document.querySelector(".menuItem");
btnMenu.addEventListener("click", function(){
    menuItem.classList.toggle("mostrar");
});