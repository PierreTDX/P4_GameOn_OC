function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // toute la modale entière
const modalBtn = document.querySelectorAll(".modal-btn"); // bouton "Je M'inscris" pour ouvrir la modale
const formData = document.querySelectorAll(".formData"); // Chaque ligne du formulaire
const closeBtnX = document.querySelector(".close"); // bouton X pour fermer la modale
const contentBg = document.querySelector(".content"); // modal contenu entier (span quit "X" + modal-body)
const modalBody = document.querySelector(".modal-body");
const main = document.querySelector("main");
const body = document.querySelector("body");
const form = document.querySelector("form");
const firstNameInput = document.getElementById("first"); // input text control 1
const lastNameInput = document.getElementById("last"); // input text control 2
const emailInput = document.getElementById("email"); // input text control 3
const birthDateInput = document.getElementById("birthdate"); // input text control 4
const quantityInput = document.getElementById("quantity"); // input text control 5
const allInputs = document.querySelectorAll('.text-control'); // les inputs textcontrol (prénom nom email date naissance tournois)
const allSpans = document.querySelectorAll('span.error-alert'); // span des messages d'erreur
const allCheckboxLocations = document.querySelectorAll('.checkbox-input.city'); // checkboxes des villes
const condUtilisation = document.getElementById("checkbox1"); // checkboxes conditions d'utilisation
const confirmationBox = document.querySelector(".confirmation-box") // la modal confirmation
const exitBtnModal = document.querySelector(".btn-exitModal"); // bouton fermer modal


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    // on remet tous les input à 0
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    birthDateInput.value = "";
    quantityInput.value = "";
    // on retire la confirmationBox
    confirmationBox.style.display = "none";
    // on affiche le form
    form.style.display = "block";
    // on affiche toute la modal
    modalbg.style.display = "block";
}

// ------------------------------------------------
// FERMETURE DE LA MODALE
// ------------------------------------------------
closeBtnX.addEventListener('click', function(event) {
    modalbg.style.display = "none"; // change le style en display: none;
});
exitBtnModal.addEventListener('click', function(event) {
    modalbg.style.display = "none"; // change le style en display: none;
});


// FONCTION VALIDATION DES INPUTS (NOM PRENOM NB DE TOURNOI)
// ----------------------------------------------------
// function validateInput(input, span, errorMessage) {
//     console.log("Verification type du champ", input.type);
//     if(input.type == "text") {
//         if(input.value == "" || input.value.length < 2) { // -------on écrit la condition (si la valeur de l'input est vide ou si inférieur à 2 caractères)
//             error = errorMessage;
//             if (error) { // -------------------- *** (IF) Si on a bien une erreur: 
//                 span.innerHTML = error; // ----- j'affiche l'erreur dans le span correspondant
//                 input.classList.add("red-border");
//                 return false; // --------------------- On met false pour être sûr que rien ne se passe
//             } else { // ------------------------ *** (ELSE) Si on n'a pas d'erreur:
//                 span.innerHTML = ""; // -------- On vide le span
//                 input.classList.remove("red-border");
//             };
//         }    
//     } else {
//         console.log("Verification champ number", input.type);
//         if(input.value == "") { // on vérifie que la valeur de la date de naissance absente (si c'est le cas retourne true)
//             error = errorMessage;
//         };
//         if (error) {
//             span.innerHTML = error;
//             input.classList.add("red-border");
//             return false;
//         } else {
//             span.innerHTML = "";
//             input.classList.remove("red-border");
//         };
//     }  
// }
// validateInput(allInputs[0], allSpans[0], "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
// validateInput(allInputs[1], allSpans[1], "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
// validateInput(allInputs[4], allSpans[4], "Ce champ est obligatoire.")
// ------------------------------------------------
// VALIDATION / MESSAGES ERREUR
// ------------------------------------------------

document.forms["reserve"].addEventListener("submit", function(e) {
    e.preventDefault();
    let error; // On crée une variable error qui va contenir les différents messages d'erreur
    // traitement cas par cas (input unique)

    // VALIDATION PRENOM
    if(allInputs[0].value == "" || allInputs[0].value.length < 2) { // -------on écrit la condition (si la valeur de l'input est vide ou si inférieur à 2 caractères)
    error = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    };
    if (error) { // -------------------- *** (IF) Si on a bien une erreur: 
        e.preventDefault();
        allSpans[0].innerHTML = error; // ----- j'affiche l'erreur dans le span correspondant
        allInputs[0].classList.add("red-border");
        return false; // --------------------- On met false pour être sûr que rien ne se passe
    } else { // ------------------------ *** (ELSE) Si on n'a pas d'erreur:
        allSpans[0].innerHTML = ""; // -------- On vide le span
        allInputs[0].classList.remove("red-border");
    };

    // VALIDATION NOM
    if(allInputs[1].value == "" || allInputs[1].value.length < 2) {
    error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    };
    if (error) { 
        e.preventDefault();
        allSpans[1].innerHTML = error;
        allInputs[1].classList.add("red-border");
        return false;
    } else {
        allSpans[1].innerHTML = "";
        allInputs[1].classList.remove("red-border");
    };

    // VALIDATION EMAIL
    const regexEmail = /\S+@\S+\.\S+/; // On définit une variable regex pour la validation des mails
    if(allInputs[2].value.search(regexEmail) === -1) { // on vérifie que la valeur de l'email ne verifie pas cette regex (ca retourne true dans ce cas)
        error = "Rentrez un email valide"; // on indique le message d'erreur correspondant si la condition est true
    };
    if (error) {
        e.preventDefault();
        allSpans[2].innerHTML = error;
        allInputs[2].classList.add("red-border");
        return false;
    } else {
        allSpans[2].innerHTML = "";
        allInputs[2].classList.remove("red-border");
    };

    // VALIDATION BIRTHDAY 
    if(allInputs[3].value == "") { // on vérifie que la valeur de la date de naissance absente (si c'est le cas retourne true)
        error = "Vous devez entrer votre date de naissance.";
    };
    if (error) {
        e.preventDefault();
        allSpans[3].innerHTML = error;
        allInputs[3].classList.add("red-border");
        return false;
    } else {
        allSpans[3].innerHTML = "";
        allInputs[3].classList.remove("red-border");
    };

    // VALIDATION TOURNOIS
    if(allInputs[4].value == "") { // on vérifie que la valeur de la date de naissance absente (si c'est le cas retourne true)
        error = "Ce champ est obligatoire.";
    };
    if (error) {
        e.preventDefault();
        allSpans[4].innerHTML = error;
        allInputs[4].classList.add("red-border");
        return false;
    } else {
        allSpans[4].innerHTML = "";
        allInputs[4].classList.remove("red-border");
    };

    // VALIDATION CHECKBOXES VILLES
    // for (let i=0; i<allCheckboxLocations.length; i++) {
    //     if(allCheckboxLocations[i].checked) {
    //         allSpans[5].innerHTML = "";
    //         console.log("OK!");            
    //         break;
    //     } else {
    //         allSpans[5].innerHTML = "Vous devez choisir une option.";
    //         console.log("NOT OK!"); 
    //         i++;             
    //     }
    // };

    // VALIDATION CONDITIONS GENERALES
    if(!condUtilisation.checked) { // on vérifie que la checkbox n'est pas checkée (si c'est le cas c'est true)
        error = "Vous devez vérifier que vous acceptez les termes et conditions.";            
    };
    errorTreatment()
    if (error) {
        e.preventDefault();
        allSpans[6].innerHTML = error;
        condUtilisation.classList.add("red-border");
        return false;
    } else {
        allSpans[6].innerHTML = "";
        condUtilisation.classList.remove("red-border");
    }


    const errorTreatment = (input, span) => {
        if (error) {
            e.preventDefault();
            allSpans[6].innerHTML = error;
            condUtilisation.classList.add("red-border");
            return false;
        } else {
            allSpans[6].innerHTML = "";
            condUtilisation.classList.remove("red-border");
        }
    }
// ------------------------------------------------
// CONFIRMATION
// ------------------------------------------------
    // On fait disparaitre le form
    form.style.display = "none";
    // On affiche le bouton fermer crée dans l'html
    confirmationBox.style.display = "flex";
    
});