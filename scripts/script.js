// Toggle menu
function toggle() {
  const menuList = document.querySelector('.navbar-links');
  menuList.classList.toggle("active-toggle");
}

window.onload = function(){
const currentPage = location.href;
const menuLinks = document.querySelectorAll(".navbar-link");

for (let i = 0; i < menuLinks.length; i++) {
  if(menuLinks[i].href === currentPage) {
    menuLinks[i].className = "active";
  }
}
}