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
const modalClose = document.querySelector(".close");
const form = document.querySelector("#form");
const validForm = document.querySelector(".valid-form");
const closeBtn = document.querySelector(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
modalClose.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// close valid form
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// event listener on the form to listen for the submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  // test all form data
  if (!testFormData("#first", /^[a-zA-Z]{2,}$/, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")) {
    isValid = false;
  }
  if (!testFormData("#last", /^[a-zA-Z]{2,}$/, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")) {
    isValid = false;
  }
  if (!testFormData("#email", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/, "Veuillez entrer une adresse email valide.")) {
    isValid = false;
  }
  if (!testBirthdate("#birthdate")) {
    isValid = false;
  }
  if (!testQuantity("#quantity")) {
    isValid = false;
  }
  if (!testRadio('input[name="location"]')) {
    isValid = false;
  }
  if (!testChecked("#checkbox1")) {
    isValid = false;
  }

  // displays the validation message if the form is valid
  if (isValid) {
      console.log("Formulaire valide");
      form.style.opacity = "0";
      validForm.style.display = "block"
    }
});

// tests the validity of the field and displays an error message if invalid
function testFormData(dataId, dataRegExp, errorMessage) {
  const data = document.querySelector(dataId);
  const parentData = data.parentNode;
  parentData.dataset.error = errorMessage; 
  if (!dataRegExp.test(data.value.trim())) {
    parentData.dataset.errorVisible = "true";
    console.log(`Le champ ${data.id} n'est pas au bon format`);
    return false;
  }
  else {
    parentData.dataset.errorVisible = "false";
    return true;
  }
}

// tests if a birthdate has been entered and displays an error message if invalid
function testBirthdate(dataId) {
  const data = document.querySelector(dataId);
  const parentData = data.parentNode;
  parentData.dataset.error = "Vous devez entrer votre date de naissance."; 
  if (data.value === "") {
    parentData.dataset.errorVisible = "true";
    console.log(`Le champ date ne doit pas être vide`);
    return false;
  }
  else {
      parentData.dataset.errorVisible = "false";
      return true;
  }
}

// tests if a number between 0 and 99 has been entered and displays an error message if invalid
function testQuantity(dataId) {
  const data = document.querySelector(dataId);
  const parentData = data.parentNode;
  parentData.dataset.error = "Vous devez entrer un nombre compris entre 0 et 99."; 
  if (parseInt(data.value) < 0 || parseInt(data.value) > 99 || data.value === "") {
    parentData.dataset.errorVisible = "true";
    console.log(`Le champ ${data.id} doit être compris entre 0 et 99`);
    return false;
  }
  else {
    parentData.dataset.errorVisible = "false";
    return true;
  }
}

// tests if at least one radio button has been checked and displays an error message if invalid
function testRadio(dataRadio) {
  const dataList = document.querySelectorAll(dataRadio);
  let radioChecked = false;
  const parentData = dataList[0].parentNode;
  parentData.dataset.error = "Vous devez choisir une option."; 
  for (let i = 0; i < dataList.length; i++) {
    if (dataList[i].checked) {
      radioChecked = true;
      break;
    }
  }
  if (!radioChecked) {
    parentData.dataset.errorVisible = "true";
    console.log(`Un bouton radio doit être sélectionné`);
    return false;
  }
  else {
    parentData.dataset.errorVisible = "false";
    return true;
  }
}

// tests if the checkbox has been checked and displays an error message if invalid
function testChecked(dataId) {
  const data = document.querySelector(dataId);
  const parentData = data.parentNode;
  parentData.dataset.error = "Vous devez vérifier que vous acceptez les termes et conditions."; 
  if (!data.checked) {
    parentData.dataset.errorVisible = "true";
    console.log(`Le champ ${data.id} doit être coché`);
    return false;
  }
  else {
    parentData.dataset.errorVisible = "false";
    return true;
  }
}