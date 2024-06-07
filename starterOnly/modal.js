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
const modalbg2 = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalXClose = document.querySelector(".js-closeModal");
const closeModalXClose2 = document.querySelectorAll(".js-closeModal2");
const form = document.querySelector("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalXClose.addEventListener("click", closeModal);
closeModalXClose2.forEach((btn) => btn.addEventListener("click", closeModal2));


// open modal form
function launchModal() {
  try {
    modalbg.style.display = "block";
  }
  catch (error) {
    console.log(error);
  }
}

// Fermeture du "modal" formulaire
function closeModal() {
  try {
    modalbg.style.display = "none";
  }
  catch (error) {
    console.log(error);
  }
}

// open modal Confirmation inscription
function launchModal2() {
  try {
    modalbg2.style.display = "block";
  }
  catch (error) {
    console.log(error);
  }
}


// Tester si le formulaire est valide
// mettre la valeur true ou false dans isValid (après execution des fonctions de validation)
// si true alors faire ...
// si false alors faire ...
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche le rechargement de la page
  // Vérification de chaque champ du formulaire en une seule ligne
  // const isValid = validateFirstName()
  //                 && validateLastName()
  //                 && validateMail()
  //                 && validateBirthdate()
  //                 && validateQuantity()
  //                 && validateRadioButtons()
  //                 && validateAcceptConditions();
  const isValid = true ;
  // appeler la fonction de gesion des messages d'erreurs
  handleMessages();
  console.log(isValid);
  // Si tous les champs sont OK, alors soumettre, sinon Non
  if (isValid) {
    console.log("Le formulaire est soumi");
    closeModal();
    launchModal2(); // submitForm() = appelé dans le launchModal2()
  } else {
    console.log("Le formulaire contient des erreurs. La soumission est bloquée.");
  }
});

// Fermeture du "modal" Confirmation inscription
function closeModal2() {
  try {
    modalbg2.style.display = "none";
    submitForm();
  }
  catch (error) {
    console.log(error);
  }
}

// Fonction pour soumettre le formulaire
function submitForm() {
  document.getElementById("signupForm").submit();
  console.log("dans submit");
}




/***********************/
/* fonctions génériques*/
/***********************/

// Fonction générique pour vérifier
// si un champ contient plus de x caractères
// qui prend comme paramètres name et length
function validateNameLength(name, length) {
  console.log("valeur du champ", name);
  try {
    if (name.length < length) {
      console.log("Longueur du champs KO", name);
      return false;
    }
    else {
      console.log("Longueur du champ OK", name)
      return true;
    }
  }
  catch (error) {
    console.log("erreur inconnue au niveau longueur Name", error)
    return false;
  }
}

// Fonction générique pour vérifier 
// si une chaîne de caractère ne contient pas de chiffres
// qui prend comme paramètre input
function containsNoDigits(input) {
  const regex = /\d/; // regle du regex
  console.log("le champ ne contient pas de chiffres", !regex.test(input));
  return !regex.test(input);
}

// Fonction générique pour vérifier
// si une chaîne de caractère est au format e-mail
// en utilisant la règle regex
// qui prend comme paramètre email
function validateFormatEmail(email) {
  console.log("valeur de Email", email);
  try {
    // Définir une regex pour valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      console.log("Email OK", email);
      return true;
    } else {
      console.log("Email KO", email);
      return false;
    }
  } catch (error) {
    console.log("Erreur inconnue au niveau de l'email", error);
    return false;
  }
}

// Fonction générique pour vérifier
// si une chaîne de caractère est au format date
// en utilisant la règle regex
// qui prend comme paramètre date
function validateFormatDate(date) {
  console.log("valeur de la date ", date);
  try {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (dateRegex.test(date)) {
      console.log("Date OK", date);
      return true;
    } else {
      console.log("Date KO", date);
      return false;
    }
  } catch (error) {
    console.log("Erreur inconnue au niveau de la date de naissance", error);
    return false;
  }
}

// Fonction générique pour vérifier
// si une valeur est un nombre entier compris entre 0 et 99 et n'est pas vide
// qui prend comme paramètre number
function validateNumber(number) {
  const num = parseInt(number, 10); // Conversion en entier
  // Vérifie si la valeur est un nombre, un entier, et si elle est comprise entre 0 et 99
  if (!isNaN(num) && Number.isInteger(num) && num >= 0 && num <= 99) {
    console.log("Valeur nombre OK:", num);
    return true;
  } else {
    console.log("Valeur nombre KO:", num);
    return false;
  }
}




/*******************************/
/* fonctions des champs valides*/
/*******************************/

// Fonction de validation de FirstName (1ere manière de coder)
// Si la fonction de validation de la longeur est fausse je renvoie false
// Si la fonction de validation de chiffres est fausse je renvoie false
// si ni l'une, ni l'autre est fausse alors je renvoie true
function validateFirstName() {
  console.log("dans firstName");
  const firstName = document.getElementById("first").value;
  if (!validateNameLength(firstName, 2)) {
    console.log("longeur Prénom KO");
    return false;
  }
  if (!containsNoDigits(firstName)) {
    console.log("Prénom KO: contient des chiffres", firstName);
    return false;
  }
  console.log("Prénom OK", firstName);
  return true;
}

// Fonction de validation de LastName (2eme manière de coder)
// Si les 2 fonctions testées sont "true"
// alors retourne "true", sinon "false"
function validateLastName() {
  console.log("dans lastName");
  const lastName = document.getElementById("last").value;
  return validateNameLength(lastName, 2) && containsNoDigits(lastName);
}

// Fonction de validation du champ e-mail
function validateMail() {
  const email = document.getElementById("email").value;
  return validateFormatEmail(email);
}

// Fonction de validation du champ date de naissance
function validateBirthdate() {
  const birthdate = document.getElementById("birthdate").value;
  return validateFormatDate(birthdate);
}

// Fonction de validation du champ nombre (ex: quantité)
function validateQuantity() {
  const quantity = document.getElementById("quantity").value;
  return validateNumber(quantity);
}

// Fonction de validation des boutons radio
function validateRadioButtons() {
  try {
    const selectedRadioButton = document.querySelector('input[name="location"]:checked');
    if (selectedRadioButton) {
      console.log("Un bouton radio est sélectionné.");
      return true;
    } else {
      console.log("Aucun bouton radio n'est sélectionné.");
      return false;
    }
  } catch (error) {
    console.log("Erreur lors de la validation des boutons radio:", error);
    return false; // En cas d'erreur, retourne false
  }
}

// Validation de la case à cocher "J'ai lu et accepté les conditions"
function validateAcceptConditions() {
  const acceptConditions = document.getElementById("checkbox1");
  try {
    if (acceptConditions.checked) {
      console.log("Conditions acceptées.");
      return true;
    } else {
      console.log("Les conditions ne sont pas acceptées.");
      return false;
    }
  } catch (error) {
    console.log("Erreur lors de la validation des conditions:", error);
    return false; // Ajout d'un retour false en cas d'erreur
  }
}

// Validation de la case à cocher "J'ai souhaite être prévenu"
function validateAcceptNewsLetter() {
  const acceptNewsLetter = document.getElementById("checkbox2");
  try {
    if (acceptNewsLetter.checked) {
      console.log("News-letter acceptées.");
      return true;
    } else {
      console.log("News-letter pas acceptées.");
      return false;
    }
  } catch (error) {
    console.log("Erreur lors de la validation des News-letter:", error);
    return false; // Ajout d'un retour false en cas d'erreur
  }
}




/*****************************************/
/* Gestion Affichage des messages erreurs*/
/*****************************************/

function handleMessages() {
  try {
    const isFirstNameValid = validateFirstName();
    if (isFirstNameValid === false) {
      document.querySelector('#first').parentElement.setAttribute('data-error-visible', 'true');
    } else {
      document.querySelector('#first').parentElement.setAttribute('data-error-visible', 'false');
    }
  } catch (error) {
    console.error("Une erreur s'est produite lors de la validation du prénom :", error);
  }

  try {
    const isLastNameValid = validateLastName();
    if (isLastNameValid === false) {
      document.querySelector('#last').parentElement.setAttribute('data-error-visible', 'true');
    } else {
      document.querySelector('#last').parentElement.setAttribute('data-error-visible', 'false');
    }
  } catch (error) {
    console.error("Une erreur s'est produite lors de la validation du nom de famille :", error);
  }

  try {
    const isLastNameValid = validateMail();
    if (isLastNameValid === false) {
      document.querySelector('#email').parentElement.setAttribute('data-error-visible', 'true');
    } else {
      document.querySelector('#email').parentElement.setAttribute('data-error-visible', 'false');
    }
  } catch (error) {
    console.error("Une erreur s'est produite lors de la validation de l'e-mail :", error);
  }

  try {
    const isLastNameValid = validateBirthdate();
    if (isLastNameValid === false) {
      document.querySelector('#birthdate').parentElement.setAttribute('data-error-visible', 'true');
    } else {
      document.querySelector('#birthdate').parentElement.setAttribute('data-error-visible', 'false');
    }
  } catch (error) {
    console.error("Une erreur s'est produite lors de la validation de la date de naissance :", error);
  }

  try {
    const isLastNameValid = validateQuantity();
    if (isLastNameValid === false) {
      document.querySelector('#quantity').parentElement.setAttribute('data-error-visible', 'true');
    } else {
      document.querySelector('#quantity').parentElement.setAttribute('data-error-visible', 'false');
    }
  } catch (error) {
    console.error("Une erreur s'est produite lors de la validation du nombre de tournoi :", error);
  }

  try {
    const isLastNameValid = validateRadioButtons();
    if (isLastNameValid === false) {
      document.querySelector(".checkbox-input").parentElement.setAttribute('data-error-visible', 'true');
    } else {
      document.querySelector(".checkbox-input").parentElement.setAttribute('data-error-visible', 'false');
    }
  } catch (error) {
    console.error("Une erreur s'est produite lors de la validation de selaetion des lieux", error);
  }

  try {
    const isLastNameValid = validateAcceptConditions();
    if (isLastNameValid === false) {
      document.querySelector('#checkbox1').parentElement.setAttribute('data-error-visible', 'true');
    } else {
      document.querySelector('#checkbox1').parentElement.setAttribute('data-error-visible', 'false');
    }
  } catch (error) {
    console.error("Une erreur s'est produite lors de la validation des conditions", error);
  }

}