const menuLink = document.getElementsByClassName('menu__link')

for (let item of menuLink) {
    item.onclick = function () {
        item.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub menu_active";
        return false
    }
}