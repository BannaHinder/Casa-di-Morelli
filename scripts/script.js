// Toggle menu
function toggle() {
  const menuList = document.querySelector('.navbar-links');
  menuList.classList.toggle("active-toggle");
}

window.onload = function () {
  const currentPage = location.href;
  const menuLinks = document.querySelectorAll(".navbar-link");

  for (let i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].href === currentPage) {
      menuLinks[i].className = "active";
    }
  }
}
////////////Recenbsioner script

if (window.location.href==="http://127.0.0.1:5501/recensioner.html") {
  function postRecension() {
    //////////////////////////GETTING TEXT INPUT/////////////////////////////////////
    let customerName = document.getElementById("name-input-recension").value;
    let textInput = document.getElementById("recension-input").value;
    ///////////////////////////////STAR INPUT/////////////////////////////////////
    let inputStars = document.querySelectorAll("input[name='star']")
    console.log(inputStars);
    for (let i = 0; i < inputStars.length; i++) {
      if (inputStars[i].checked) {
        var checkedStars = (inputStars.length - i);
      }
    }

    console.log(checkedStars);
    if (customerName === "" || textInput === "" || checkedStars === undefined) {
      window.alert("Please fill in all input fields when posting");
      return
    }

    //////////////////////////////////CREATING USER INPUT////////////////////////////////
    let customerNameTag = document.createElement("h5");
    customerNameTag.innerHTML = customerName;

    let recensionsText = document.createElement("p");
    recensionsText.innerHTML = textInput;

    let starsDiv = document.createElement("div");
    starsDiv.className = "stars";
    starsDiv.style.fontSize = "16px";

    ////////////////////////////////////////CREATING STARs/////////////////////////////////////////////////////
    for (let i = 0; i < 5; i++) {
      let newStar = document.createElement("span");
      if (i < checkedStars) {
        newStar.className = "fa fa-star checked"
      } else {
        newStar.className = "fa fa-star"
      }
      newStar.style.marginRight = "4px";
      starsDiv.appendChild(newStar);
    };
    //////////////////////////////////CREATING NEW RECENSION////////////////////////////////
    let recensioner = document.querySelector("#recensioner");
    let newRecension = document.createElement("section");
    newRecension.className = "recension";
    newRecension.tabIndex = "0";
    newRecension.style.width = "-webkit-fill-available";
    let newCustomer = document.createElement("div");
    newCustomer.className = "customer";

    let icon = document.createElement("span");
    icon.className = "iconify";
    icon.setAttribute(
      "data-icon",
      "emojione:blond-haired-person-light-skin-tone"
    );


    newCustomer.appendChild(icon);
    newCustomer.appendChild(customerNameTag);
    newRecension.appendChild(newCustomer);

    let newRating = document.createElement("div");
    newRating.className = "rating";
    newRating.appendChild(starsDiv);
    newRating.appendChild(recensionsText);
    newRecension.appendChild(newRating);
    recensioner.appendChild(newRecension);

    document.getElementById(
      "name-input-recension"
    ).value = "";
    document.getElementById("recension-input").value = "";
  }

}  



if(window.location.href==="http://127.0.0.1:5501/kontakt.html"){
        
//funktion för kontakt-formulär
let myAddButton = document.querySelector(".skicka-btn-kontakt");
let myPara = document.createElement("p");
let inputSelect = document.querySelector("#choose-question");
let nameInput = document.querySelector("#name-input");
let emailInput = document.querySelector("#email-input");
myPara.className= "contact-para";
myPara.className="kontakt-para";

myAddButton.addEventListener("click",()=>{
    let myContentDiv = document.querySelector(".user-input");
    let myTextInput = document.querySelector("#text-input");

    if(nameInput.value===""|| emailInput.value==="" || myTextInput.value===""){
    alert("Please fill in all input fields");
    } 
    else {
    myPara.innerText="Tack för att du kontaktar oss! Vi återkommer snarast!";
    myContentDiv.appendChild(myPara);
    myContentDiv.removeChild(myTextInput);
    myContentDiv.removeChild(myAddButton); 
    myContentDiv.removeChild(inputSelect);
    myContentDiv.removeChild(nameInput);
    myContentDiv.removeChild(emailInput);}
});
}