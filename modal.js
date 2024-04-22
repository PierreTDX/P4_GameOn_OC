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

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
  try {
    // On empêche le comportement par défaut
    testFormData("#first", "^[a-zA-Z]{2,}$");
    testFormData("#last", "^[a-zA-Z]{2,}$");
    testFormData("#email", "^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$");
    testDate("#birthdate")
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

function testFormData(dataId, dataFormat) {
  const data = document.querySelector(dataId);
  let dataFormatRegExp = new RegExp(dataFormat);
  if (!dataFormatRegExp.test(data.value.trim())) {
    throw new Error(`Le champ ${data.id} n'est pas au bon format`);
  }
}

function testDate(dataId) {
  const data = document.querySelector(dataId);
  if (data.value === "") {
    throw new Error(`Le champ date ne doit pas être vide`);
  }
}

function testQuantity(dataId) {
  const data = document.querySelector(dataId);
  if (parseInt(data.value) < 0 || parseInt(data.value) > 99 || data.value === "") {
    throw new Error(`Le champ ${data.id} doit être compris entre 0 et 99`);
  }
}

function testChecked(dataId) {
  const data = document.querySelector(dataId);
  if (!data.checked) {
    throw new Error(`Le champ ${data.id} doit être coché`);
  }
}

function testRadio(dataRadio) {
  const dataList = document.querySelectorAll(dataRadio);
  let radioChecked = false;
  for (let i = 0; i < dataList.length; i++) {
    if (dataList[i].checked) {
      radioChecked = true;
      break;
    }
  }
  if (!radioChecked) {
    throw new Error(`Un bouton radio doit être sélectionné`);
  }
}