// Toggle menu
const menuList = document.querySelector( '.menu-list' ),
      menuButton = document.querySelector('.menu-button')

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("active")
})