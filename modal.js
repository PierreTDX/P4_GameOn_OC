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

// event listener on the form to listen for the submit
form.addEventListener("submit", (event) => {
  try {
    testFormData("#first", /^[a-zA-Z]{2,}$/, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    testFormData("#last", /^[a-zA-Z]{2,}$/, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    testFormData("#email", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/, "Veuillez entrer une adresse email valide.");
    testBirthdate("#birthdate")
    testQuantity("#quantity");
    testRadio('input[name="location"]');
    testChecked("#checkbox1");
    console.log("Formulaire valide");
  }
  catch (error) {
    event.preventDefault();
    console.log("Erreur dans le form : " + error.message);
  }
});

function testFormData(dataId, dataRegExp, errorMessage) {
  const data = document.querySelector(dataId);
  const parentData = data.parentNode;
  parentData.dataset.error = errorMessage; 
  if (!dataRegExp.test(data.value.trim())) {
    parentData.dataset.errorVisible = "true";
    throw new Error(`Le champ ${data.id} n'est pas au bon format`);
  }
  else {
    parentData.dataset.errorVisible = "false";
  }
}

function testBirthdate(dataId) {
  const data = document.querySelector(dataId);
  const parentData = data.parentNode;
  parentData.dataset.error = "Vous devez entrer votre date de naissance."; 
  if (data.value === "") {
    parentData.dataset.errorVisible = "true";
    throw new Error(`Le champ date ne doit pas être vide`);
  }
  else {
      parentData.dataset.errorVisible = "false";
  }
}

function testQuantity(dataId) {
  const data = document.querySelector(dataId);
  const parentData = data.parentNode;
  parentData.dataset.error = "Vous devez entrer un nombre compris entre 0 et 99."; 
  if (parseInt(data.value) < 0 || parseInt(data.value) > 99 || data.value === "") {
    parentData.dataset.errorVisible = "true";
    throw new Error(`Le champ ${data.id} doit être compris entre 0 et 99`);
  }
  else {
    parentData.dataset.errorVisible = "false";
  }
}

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
    throw new Error(`Un bouton radio doit être sélectionné`);
  }
  else {
    parentData.dataset.errorVisible = "false";
  }
}

function testChecked(dataId) {
  const data = document.querySelector(dataId);
  const parentData = data.parentNode;
  parentData.dataset.error = "Vous devez vérifier que vous acceptez les termes et conditions."; 
  if (!data.checked) {
    parentData.dataset.errorVisible = "true";
    throw new Error(`Le champ ${data.id} doit être coché`);
  }
  else {
    parentData.dataset.errorVisible = "false";
  }
}