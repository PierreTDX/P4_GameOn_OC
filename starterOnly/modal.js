function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Found button by ID
const closeBtn = document.getElementById("close");
const btnSubmit = document.getElementById("btn-submit");
// DOM Elements for FORM Check
const form = document.getElementsByTagName("form")[0];
const inputFirst = document.getElementById("close");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthdate = document.getElementById("birhtdate");
const checkBox1 = document.getElementById("checkbox1");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Check if i can enable the button submit by checking if "checkbox" is checked
function stateCheckBox() {
    if (checkBox1.checked) {
      btnSubmit.classList.remove("btn-disabled");
      return true;
    } else {
      btnSubmit.classList.add("btn-disabled");
      return false;
    }
}

// Function validate form
function validate() {
  event.preventDefault(); // Avoid default behavior of form

  // We check only State of checkbox 
  if (stateCheckBox() == true)
  {
    alert("Merci! Votre réservation a été reçue."); // Alert to show réservation is done
    closeModal(); // Close the form
  }
  else 
  {
    alert("Vous devez accepter les conditions d'utilisation pour valider le formulaire !");
  }
}

// Lauch CheckBox Check each time we click on the Checkbox1 (T.O.S)
checkBox1.addEventListener("click", stateCheckBox);
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Lauch close modal event
closeBtn.addEventListener("click", closeModal);

