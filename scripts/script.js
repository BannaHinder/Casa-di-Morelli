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

//funktion för kontakt-formulär
let myAddButton = document.querySelector(".skicka-btn-kontakt");
let myPara = document.createElement("p");
let inputSelect = document.querySelector("#choose-question");
let nameInput = document.querySelector("#name-input");
let emailInput = document.querySelector("#email-input");
myPara.style.color="#FFE2B2";

myAddButton.addEventListener("click",()=>{
    let myContentDiv = document.querySelector(".user-input");
    let myTextInput = document.querySelector("#text-input");
    myPara.innerText="Tack för att du kontaktar oss! Vi återkommer snarast!";
    myContentDiv.appendChild(myPara);
    myContentDiv.removeChild(myTextInput);
    myContentDiv.removeChild(myAddButton); 
    myContentDiv.removeChild(inputSelect);
    myContentDiv.removeChild(nameInput);
    myContentDiv.removeChild(emailInput);
});