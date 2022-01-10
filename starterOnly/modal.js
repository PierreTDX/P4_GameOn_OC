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
const modalClose = document.querySelector(".close") //Création et chargement de la constante 'modalClose' et accès à la class .close du DOM  
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
//Stockage des valeurs de champs dans des variables//
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const birthdate = document.getElementById("birthdate");
const quantityTournois = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");
//Controle du format du mail//
const emailAdress = document.getElementById("email");
const mailError = document.getElementById("mailError");
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fermeture du questionnaire
modalClose.addEventListener('click', close); //Ecoute event clic de souris sur la constante modalClose qui cible la class .close, nommé 'close'

//Appel de la fonction 'close' pour cacher le formulaire et réinitialiser les entrées
function close () {
  modalbg.style.display = "none"; 
  clearInput();
}

const clearInput = () => {
  const form = document.querySelector('form')
 form.reset();
};

/* ou
modalClose.addEventListener('click', function () {
  modalbg.style.display = "none";
}); //Ecoute event clic de souris sur l'element close, nommé 'close' et on cache le formulaire
*/

//La fonction est exécutée lors de la soumission du formulaire//
function validate (event) {
//Désactivé le comportement par défaut de l'évenement//
  event.preventDefault();
}

//Controle d'entrée du prénom
firstName.addEventListener("input", function() {
  //Réinitialise les messages d'erreur
  firstError.innerHTML = ' ';
  firstError.classList.remove('errorStyle')
  first.classList.remove('errorForm')
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ prénom.
//si rien n'est écrit
  if (this.value.length == 0){
    firstError.innerHTML = 'Réponse obligatoire!'; //ajout du message
    firstError.classList.add('errorStyle') //ajout d'une class au message d'erreur
    first.classList.add('errorForm') //ajout d'une class a la zone d'entrée
//s'il y a moins de 2 caracteres
  } else if (this.value.length < 2) {
    firstError.innerHTML = 'Votre prénom doit comporter au-moins 2 caractères'; 
    firstError.classList.add('errorStyle')
    first.classList.add('errorForm')
//si toutes les conditions sont remplies
  } else {
    firstError.innerHTML = ' ';
  }

});

//Controle d'entrée du nom
lastName.addEventListener("input", function () {
  //Réinitialise les messages d'erreur
  lastError.innerHTML = ' ';
  lastError.classList.remove('errorStyle')
  last.classList.remove('errorForm')
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ
  //si rien n'est écrit
  if (this.value.length == 0) {
    lastError.innerHTML = 'Réponse obligatoire!'; //ajout du message
    lastError.classList.add('errorStyle') //ajout d'une class au message d'erreur
    last.classList.add('errorForm') //ajout d'une class a la zone d'entrée
    //s'il y a moins de 2 caracteres
  } else if (this.value.length < 2) {
    lastError.innerHTML = 'Votre nom doit comporter au-moins 2 caractères';
    lastError.classList.add('errorStyle')
    last.classList.add('errorForm')
    //si toutes les conditions sont remplies
  } else {
    lastError.innerHTML = ' ';
  }

});

emailAdress.addEventListener("input", function(){
  mailError.innerHTML = '';
  mailError.classList.remove('errorStyle')
  email.classList.remove('errorForm')

  if (emailAdress.value.match(mailRegex)) {
    mailError.innerHTML = '';
    
  } else if (emailAdress.value == "") {
    mailError.innerHTML = 'Entrez une adresse mail';
    mailError.classList.add('errorStyle')
    email.classList.add('errorForm')
  }
  
  else {
    mailError.innerHTML = 'Adresse mail invalide';
    mailError.classList.add('errorStyle')
    email.classList.add('errorForm')
  }
  
});