// DOM Elements Modal
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close"); // récupérer la croix dans le DOM
const modalSuccess = document.querySelector(".modal-success"); // get modal success

// DOM Elements Form
const form = document.querySelector("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const checkboxCondition = document.querySelector("#checkbox1");
const allBtnRadio = document.querySelectorAll("input[name='location']");

// Message error
const message = {
  name: "Veuillez entrer 2 caractère ou plus",
  emailValid: "Veuillez entrer une adresse mail valide",
  email: "Veuillez entrer une adresse mail",
  birthdate: "Vous devez entrer votre date de naissance",
  quantity: "Veuillez renseigner un nombre",
  city: "Vous devez choisir une option",
  condition: "Vous devez vérifier que vous acceptez les termes et condtions",
};

// Regex
const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexQuantity = /^\d+$/;

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// Check input value
function checkInputValue(regex, element, message) {
  if (!regex.test(element.value)) {
    setErrorMessage(element, message);
    return false;
  }
  hideErrorMessage(element);
  return true;
}

// Check conditions accepted
function checkIfConditionsAccepted(element, message) {
  if (!element.checked) {
    setErrorMessage(element, message);
    return false;
  }
  hideErrorMessage(element);
  return true;
}

// Check birthdate
function checkIfBirthdate(element, message) {
  if (!element.value) {
    setErrorMessage(element, message);
    return false;
  }
  hideErrorMessage(element);
  return true;
}

// Check city
function checkIfCitySelected(cities, message) {
  const isChecked = Array.from(cities).some((radio) => radio.checked);
  if (!isChecked) {
    setErrorMessage(cities[0], message);
    return false;
  }
  hideErrorMessage(cities[0]);
  return true;
}

// set error message
const setErrorMessage = (element, message) => {
  element.parentElement.setAttribute("data-error-visible", "true");
  element.parentElement.setAttribute("data-error", message);
};

// hide error message
const hideErrorMessage = (element) => {
  element.parentElement.removeAttribute("data-error-visible");
  element.parentElement.removeAttribute("data-error");
};

// Check input with event listener
firstNameInput.addEventListener("input", () =>
  checkInputValue(regexName, firstNameInput, message.name)
);

lastNameInput.addEventListener("input", () =>
  checkInputValue(regexName, lastNameInput, message.name)
);

emailInput.addEventListener("input", () =>
  checkInputValue(regexEmail, emailInput, message.emailValid)
);

emailInput.addEventListener("input", () =>
  checkInputValue(regexEmail, emailInput, message.email)
);

checkboxCondition.addEventListener("input", () =>
  checkIfConditionsAccepted(checkboxCondition, message.condition)
);

birthdateInput.addEventListener("input", () =>
  checkIfBirthdate(birthdateInput, message.birthdate)
);

quantityInput.addEventListener("input", () =>
  checkInputValue(regexQuantity, quantityInput, message.quantity)
);

allBtnRadio.forEach((radio) =>
  radio.addEventListener("change", () =>
    checkIfCitySelected(allBtnRadio, message.city)
  )
);

// Valid form function
function validate(e) {
  e.preventDefault();
  document.getElementById("form").addEventListener("submit", validate);
  // Check if all conditions are valid
  const isConditionsAccepted = checkIfConditionsAccepted(
    checkboxCondition,
    message.condition
  );
  const isCitySelected = checkIfCitySelected(allBtnRadio, message.city);
  const isUserAgeValid = checkIfBirthdate(birthdateInput, message.birthdate);
  const isQuantityValid = checkInputValue(
    regexQuantity,
    quantityInput,
    message.quantity
  );
  const isEmailValid = checkInputValue(regexEmail, emailInput, message.email);
  const isLastNameValid = checkInputValue(
    regexName,
    lastNameInput,
    message.name
  );
  const isFirstNameValid = checkInputValue(
    regexName,
    firstNameInput,
    message.name
  );

  // If all conditions are valid
  if (
    isConditionsAccepted &&
    isCitySelected &&
    isUserAgeValid &&
    isQuantityValid &&
    isEmailValid &&
    isLastNameValid &&
    isFirstNameValid
  ) {
    modalbg.style.display = "none";
    modalSuccess.style.display = "flex";
    console.log("ca fonctionne");
    form.reset();
  }
}

// send form
form.addEventListener("submit", (e) => validate(e));

document
  .querySelector(".modal-content button")
  .addEventListener("click", () => (modalSuccess.style.display = "none"));
