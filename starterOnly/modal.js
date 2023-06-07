function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 * DOM elements
 */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

/**
 * #2:Un bouton radio est sélectionné.
 */
const modalradio = document.getElementById("location1")
modalradio.checked = true

/**
 * launch modal open
 */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalInit()
  modalbg.style.display = "block";  //Onclick
}

/**
 * init all modal's field
 */
function modalInit() {
  let baliseNom = document.forms.reserve.last
  baliseNom.value = ""
  let balisePrenom = document.getElementById("first")
  balisePrenom.value = ""
  let baliseEmail = document.getElementById("email")
  baliseEmail.value = ""
  let baliseQuantity = document.getElementById("quantity")
  baliseQuantity.value = ""

  let errorNom = document.getElementById("errorNom")
  errorNom.setAttribute("data-error-visible", "false")
  errorNom.setAttribute("data-error", " ")
  let errorPrenom = document.getElementById("errorPrenom")
  errorPrenom.setAttribute("data-error-visible", "false")
  errorPrenom.setAttribute("data-error", " ")
  let errorEmail = document.getElementById("errorEmail")
  errorEmail.setAttribute("data-error-visible", "false")
  errorEmail.setAttribute("data-error", " ")
  let errorQuantity = document.getElementById("errorQuantity")
  errorQuantity.setAttribute("data-error-visible", "false")
  errorQuantity.setAttribute("data-error", " ")
  let errorBirthday = document.getElementById("errorBirthday")
  errorBirthday.setAttribute("data-error-visible", "false")
  errorBirthday.setAttribute("data-error", " ")
  initBirthday = document.getElementById("birthdate")
  console.log(initBirthday)
  initBirthday.value = "jj/mm/aaaa"
}

/**
 * issue #1: fermeture de la modale via Btn(X)
 */
modalClose.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";  //Onclick
}


//issue #2: implemented validation form

/**
 * Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
 * @param {*} nom 
 * @returns 
 */
function validerNom(nom) {
  let valid = false
  nom = nom.trim()
  if ((nom.length < 2) || (nom.value === "")) {
    throw new Error("#1:Veuillez entrer 2 caractères ou plus pour le champ du nom.")
  } else {
    valid = true
  }
  return valid
}

/**
 * Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
 * @param {*} prenom 
 * @returns 
 */
function validerPrenom(prenom) {
  let valid = false
  prenom = prenom.trim()
  if ((prenom.length < 2) || (prenom.value === " ")) {
    throw new Error("#2:Veuillez entrer 2 caractères ou plus pour le champ du prenom.")
  } else {
    valid = true
  }
  return valid
}

/**
 * L'adresse électronique dois etre valide.
 * @param {*} email 
 * @returns 
 */
function validerEmail(email) {
  let valid = false
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
    throw new Error("#3:L'email n'est pas valide.")
  } else {
    valid = true
  }
  return valid
}

/**
 * Pour le nombre de concours, une valeur numérique dois etre saisie.
 * @param {*} quantity 
 * @returns 
 */
function validerQuantity(quantity) {
  let valid = false
  if (quantity === "") {
    throw new Error("#4:Vous devez répondre à la question.")
  } else {
    valid = true
  }
  return valid
}

/**
 * La date de naissance dois etre valide.
 * @param {*} birthday 
 * @returns 
 */
function validerBirthday(birthday) {
  let valid = false
  let birthdayRegExp = new RegExp(/^\d{4}-\d{2}-\d{2}$/)
  if (!birthdayRegExp.test(birthday)) {
    throw new Error("#5:Vous devez entrer votre date de naissance.")
  } else {
    valid = true
  }
  return valid
}


/**
 * cette fonction permet de valider l'envoie du formulaire lorsque tous les champs sont
 * remplis sans erreur.
 * 
 */
let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  //avoid re-load web page
  event.preventDefault()

  try {
    let baliseNom = document.getElementById("last")
    let nom = baliseNom.value
    let validName = validerNom(nom)

    let balisePrenom = document.getElementById("first")
    let prenom = balisePrenom.value
    let validPrenom = validerPrenom(prenom)

    let baliseEmail = document.getElementById("email")
    let email = baliseEmail.value
    let validEmail = validerEmail(email)

    let baliseQuantity = document.getElementById("quantity")
    let quantity = baliseQuantity.value
    let validQuantity = validerQuantity(quantity)

    let baliseBirthday = document.getElementById("birthdate")
    let birthdate = baliseBirthday.value
    let validBirthday = validerBirthday(birthdate)

    let formValid = validName && validPrenom && validEmail && validQuantity && validBirthday

    if (formValid) {
      //all field are correct
      modalbg.style.display = "none";
    }
  } catch (erreur) {
    console.log(erreur.message)
    afficherMessageError(erreur.message)
  }
})

/** 
 * cette fonction affiche le message d'erreur passé en paramètre et selectionne l'element HTML.
 * 
 * @param {string} message
*/
function afficherMessageError(message) {

  let firstTwoCaractere = message.substring(0, 2)

  if (firstTwoCaractere === "#1") {
    let errorNom = document.getElementById("errorNom")
    errorNom.setAttribute("data-error-visible", "true")
    errorNom.setAttribute("data-error", message.substring(3))
  } else {
    errorNom.removeAttribute("data-error-visible")
    errorNom.removeAttribute("data-error")
  }

  if (firstTwoCaractere === "#2") {
    let errorPrenom = document.getElementById("errorPrenom")
    errorPrenom.setAttribute("data-error-visible", "true")
    errorPrenom.setAttribute("data-error", message.substring(3))
  } else {
    errorPrenom.removeAttribute("data-error-visible")
    errorPrenom.removeAttribute("data-error")
  }

  if (firstTwoCaractere === "#3") {
    let errorEmail = document.getElementById("errorEmail")
    errorEmail.setAttribute("data-error-visible", "true")
    errorEmail.setAttribute("data-error", message.substring(3))
  } else {
    errorEmail.removeAttribute("data-error-visible")
    errorEmail.removeAttribute("data-error")
  }

  if (firstTwoCaractere === "#4") {
    let errorQuantity = document.getElementById("errorQuantity")
    errorQuantity.setAttribute("data-error-visible", "true")
    errorQuantity.setAttribute("data-error", message.substring(3))
  } else {
    errorQuantity.removeAttribute("data-error-visible")
    errorQuantity.removeAttribute("data-error")
  }

  if (firstTwoCaractere === "#5") {
    let errorBirthday = document.getElementById("errorBirthday")
    errorBirthday.setAttribute("data-error-visible", "true")
    errorBirthday.setAttribute("data-error", message.substring(3))
  } else {
    errorBirthday.removeAttribute("data-error-visible")
    errorBirthday.removeAttribute("data-error")
  }
}














function validate() {

}










