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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// bouton de fermeture
let BoutonX = document.querySelector(".close")
BoutonX.addEventListener('click', () => {
  modalbg.style.display = "none"
})

// lancement de l'évènement "submit" sur le formulaire
const form = document.querySelector('form')
form.addEventListener("submit", (event) => {

  event.preventDefault();
})

/////////////////////////////Les Fonctions de validation utlisées

// La fonction de la validation du nom et du prénom avec le message d'erreur
function validerNomEtPrenom(nom) {

  if (nom.trim().length < 2) {
    throw new Error("Veuillez entrer 2 caractères ou plus .")
  }

    return true

}

// La fonction de la validation de l'émail avec le message d'erreur
function validerEmail(email) {

  let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegex.test(email.trim())) {
    throw new Error("Veuillez entrer un Email valide")
  }

    return true

}

// La fonction de la validation de l'anniversaire avec le message d'erreur
function validerChampBirthday(birthd) {

  let birthDRegEx = new RegExp("^(?!(\d{4}\s\d{2}\s\d{2}))$")
  if (birthDRegEx.test(birthd)) {
    throw new Error("Vous devez entrer votre date de naissance.")
  }

    return true

}

// La fonction de la validation du champ "quantity" avec le message d'erreur
function validerChampQuantity(quantity) {

  if (quantity === "") {
    throw new Error("Veuillez choisir un nombre")
  }

    return true

  // console.log(typeof quantity)
  // return !!quantity && !isNaN(quantity)
}

// La fonction de la validation du bouton radio avec le message d'erreur
function validerBoutonRadio(Var) {

  if (Var === "") {
    throw new Error("Vous devez choisir une option.")
  }

    return true

}

// La fonction de la validation du champ "checkbox" avec le message d'erreur
function validerCheckBox(btn) {

  if (!btn.checked) {
    throw new Error("Vous devez vérifier que vous acceptez les termes et conditions.")
  }

    return true

}

//////////////////////////////////Les fonction d'affichage utilisées 

// La fonction de l'affichage du message d'erreur pour les champs : nom/prenom/anniversaire/email/quantité

function afficherMessageErreur(message, element) {
  let SpanMessageErreur1 = document.getElementById(element.id + "_erreur")

  if (!SpanMessageErreur1) {
    SpanMessageErreur1 = document.createElement("span")
    element.after(SpanMessageErreur1)
    SpanMessageErreur1.id = element.id + "_erreur"
    SpanMessageErreur1.style.cssText = "color: #FF4E60;font-family: Roboto;font-size: 10px;font-style: normal;font-weight: 400;line-height: 142.6%;"
    element.style.cssText = "border-radius: 8px;border: 2px solid #FF4E60;"
  }
  SpanMessageErreur1.innerHTML = message
  element.addEventListener('input', () => {
    if (SpanMessageErreur1) {
      SpanMessageErreur1.remove()
      element.style.cssText = ""
    }
  })
}

// La fonction de l'affichage du message d'erreur pour le champ "radio" et le champ "checkbox"

function afficherMsgErreurChampChoix(message, element) {

  let SpanMessageErreur2 = document.getElementById(element.id + "_erreur")

  if (!SpanMessageErreur2) {
    let varr = element.parentNode
    SpanMessageErreur2 = document.createElement("div")
    SpanMessageErreur2.id = element.id + "_erreur"
    varr.append(SpanMessageErreur2)
    SpanMessageErreur2.style.cssText = "color: #FF4E60;font-family: Roboto;font-size: 10px;font-style: normal;font-weight: 400;line-height: 142.6%;"
  
  }

  SpanMessageErreur2.innerHTML = message
  element.addEventListener('input', () => {
    if (SpanMessageErreur2) {
      SpanMessageErreur2.remove()
    }
  })
}
// // La fonction de validation 

// function ValidationForm(){
//   return variablex === true

// }

// Récupération des élements du formulaire 

let prenom = document.getElementById("first")
let nom = document.getElementById("last")
let email = document.getElementById("email")
let birthday = document.getElementById("birthdate")
let quantity = document.getElementById("quantity")
let baliseLocation = document.querySelectorAll('input[name="location"]')
let location1 = document.getElementById("location1")
let checkBox1 = document.getElementById("checkbox1")
 

/////////////// La fonction de validation principale du formulaire 


function validate() {
  try {
    validerNomEtPrenom(prenom.value)

  }
  catch (Error) {
    afficherMessageErreur(Error.message, prenom)

  }

  try {
    validerNomEtPrenom(nom.value)
  } catch (Error) {
    afficherMessageErreur(Error.message, nom)
  }

  try {
    validerEmail(email.value)
  } catch (Error) {
    afficherMessageErreur(Error.message, email)
  }

  try {

 validerChampBirthday(birthday.value)
  } catch (Error) {
    afficherMessageErreur(Error.message, birthday)
  }

  try {
    validerChampQuantity(quantity.value)
  } catch (Error) {
    afficherMessageErreur(Error.message, quantity)
  }

  try {
    let location = ""
    for (let i = 0; i < baliseLocation.length; i++) {
      if (baliseLocation[i].checked) {
        location = baliseLocation[i].value
        break
      }
    }
    validerBoutonRadio(location)
  } catch (Error) {
    afficherMsgErreurChampChoix(Error.message, location1)
  }

  try {

    validerCheckBox(checkBox1)
  } catch (Error) {
    afficherMsgErreurChampChoix(Error.message, checkBox1)
  }


  if (validerNomEtPrenom(prenom.value) && validerNomEtPrenom(nom.value) && validerEmail(email.value)
    && validerChampBirthday(birthday.value) && validerChampQuantity(quantity.value) && validerBoutonRadio(location)
    && validerCheckBox(checkBox1)) {
    // window.alert("Merci ! Votre réservation a été reçue.")
    // modalbg.style.display = "none"
      // formData.style.display = "none"
      // formData.classList.remove(".formData")
      
//       let formData = document.querySelectorAll(".formData");

// // Suppression de chaque élément sélectionné
// formData.forEach(function(div) {
//   div.style.cssText = "display:none;height: 850.609px;"
// })
  
  }
  return true
}





