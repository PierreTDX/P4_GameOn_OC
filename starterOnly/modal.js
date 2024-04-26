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
const modalbg1 = document.querySelector(".bground1");
const modalBtn = document.querySelectorAll(".modal-btn");
const boutonfermersaid=document.querySelector(".btnSaid")//mon bouton fermer
const formData = document.querySelectorAll(".formData");
const close=document.querySelector(".close");//je viens de créer cette classe afin de la fermer
const close1=document.querySelector(".close1");//je viens de créer cette classe afin de la fermer
let isError=false;
let prenom=document.getElementById("first");//Recupération de la donnée prénom
let nom=document.getElementById("last")//Recupération de la donnée nom
let email=document.getElementById("email")//Recupération de la donnée email
let dateDeNaissance=document.getElementById("birthdate")//Recupération de la donnée birthdate
let quantite=document.getElementById("quantity")//Recupération de la donnée quantity
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// modalbtnSaid.forEach((btn) => btn.addEventListener("click", closeModal1));
boutonfermersaid.addEventListener("click", function() {
  // Cache la div en lui donnant un style display:none
  modalbg1.style.display = "none";
});
// boutonfermersaid.addEventListener("click", closeModal1);
//=========================================================================================================================
// Attachez un événement de clic à la croix de fermeture
close.addEventListener("click", closeModal);
// Fonction pour fermer la fenêtre modale
function closeModal() {
  modalbg.style.display = "none";
  
}
// Attachez un événement de clic à la croix de fermeture
close1.addEventListener("click", closeModal1);
// Fonction pour fermer la fenêtre modale
function closeModal1() {
  modalbg1.style.display = "none";
  
}

//================================ function erreurMessage(idDiv,idInput,messageErreur) ====================================
// function erreurMessage(idDiv,idInput,messageErreur){
  function erreurMessage(idDiv,messageErreur){
  //var variableInput=document.getElementById(idInput).value;
  var paragraphe=document.createElement("p");
  paragraphe.textContent=messageErreur;
  // paragraphe.textContent=verifieChainesVides(variableInput);
  var divAffichage=document.getElementById(idDiv);
  divAffichage.innerHTML="";
  divAffichage.appendChild(paragraphe);
  }
//================================ function ReinitialisationErreurMessage(idDiv) ====================================
function ReinitialisationDeErreurMessage(idDiv) {
  // function erreurMessage(idDiv,messageErreur){
    //var variableInput=document.getElementById(idInput).value;
    var paragraphe=document.createElement("p");
    paragraphe.textContent="";
    // paragraphe.textContent=verifieChainesVides(variableInput);
    var divAffichage=document.getElementById(idDiv);
    divAffichage.innerHTML="";
    divAffichage.appendChild(paragraphe);
    }
//=============================== function appliquerStylesSurInputBordureRouge (idInput) =====================================
function appliquerStylesSurInputBordureRouge(idInput) {
  var inputElement = document.getElementById(idInput); // Sélectionne l'élément input par son ID
  
  // Vérifie si l'élément input existe
  if (inputElement) {
      // Applique les styles CSS à l'élément input
      inputElement.style.border = "4px solid red"; // Crée une bordure de 2 pixels d'épaisseur, solide et rouge
      inputElement.style.borderRadius = "5px"; // Ajoute un léger arrondi aux coins de la bordure
      inputElement.style.padding = "5px"; // Ajoute un peu d'espace à l'intérieur de la bordure
  } else {
      // Affiche un message d'erreur si l'élément input n'est pas trouvé
      console.error("L'élément input avec l'ID spécifié n'existe pas.");
  }
}
//==================================function reinitialisationStylesInput(idInput)==============================================
function reinitialisationStylesInput(idInput) {
  var inputElement = document.getElementById(idInput); // Sélectionne l'élément input par son ID
  
  // Vérifie si l'élément input existe
  if (inputElement) {
      // Applique les styles CSS à l'élément input
      // inputElement.style.border = "0.8px solid #ccc"; // Crée une bordure de 2 pixels d'épaisseur, solide et rouge
      inputElement.style.border = "0.8px solid #ccc"; // Crée une bordure de 2 pixels d'épaisseur, solide et rouge
      inputElement.style.borderRadius = "8px"; // Ajoute un léger arrondi aux coins de la bordure
      inputElement.style.padding = "8px"; // Ajoute un peu d'espace à l'intérieur de la bordure
    
      // inputElement.style.outline=none;
      
  } else {
      // Affiche un message d'erreur si l'élément input n'est pas trouvé
      console.error("L'élément input avec l'ID spécifié n'existe pas.");
  }
}



//================================== fonction messageErreur(id , message) ==================================================
// id est l'id de ma div, le message est un message d'erreur en fonction de la situation rencontrée.
// function messageErreur(id, messageerreur){
//   let resultat=document.getElementById(id);
//   let paragraphe=document.createElement("p");
//   paragraphe.textContent=messageErreur;
//   resultat.appendChild(paragraphe);

// }

//================================== fonction reinitialisationDesChamps () =================================================
function reinitialisationDesChamps () {
prenom.value="";
nom.value="";
email.value="";
dateDeNaissance.value="";
quantite.value="";

}
//================================== function reinitialisationFormulaire() ================================================
function reinitialisationFormulaire(){
  reinitialisationDesChamps () // reinitialisation des champs
  ReinitialisationDeErreurMessage("divPrenom") //reinitialisation de la divPrenom
  ReinitialisationDeErreurMessage("divNom") //reinitialisation de la divNom
  ReinitialisationDeErreurMessage("divEmail") //reinitialisation de la divEmail
}
//=========================================================================================================================
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//=========================================================================================================================
// Sélectionnez le bouton d'inscription
const inscriptionBtn = document.querySelector(".btn-submit");
// Ajoutez un événement de clic au bouton d'inscription
//inscriptionBtn.addEventListener("click", afficherMessage);

//========================================= function afficherMessage() ======================================================
// Fonction pour afficher le message "Vous êtes inscrit"
function afficherMessage() {
 inscriptionBtn.addEventListener("click", afficherMessage)
// Sélectionner l'élément div avec la classe "said"
const divResultat = document.querySelector(".resultat");
// Créer un élément de paragraphe
const paragraphe = document.createElement("p");
// Ajouter le texte "Je t'aime" au paragraphe
// paragraphe.textContent = "vous etes inscrit (de la fonction AfficherMessage()) ";
paragraphe.textContent = "Merci, votre réservation a été reçue ";
// Ajouter le paragraphe à la div avec la classe "said"
divResultat.appendChild(paragraphe);
//return "Vous êtes inscrit"
return "vous etes inscrit"
}
//============================================ function verifierChaine(chaine) =====================================================

function verifierChaine(chaine,label,idDiv,idInput) {
  // Vérifie si la longueur de la chaîne est supérieure à 2
  if (chaine.length > 2) {
    // Vérifie si la chaîne ne contient que des lettres (pas de chiffres)
    if (/^[a-zA-Z]+$/.test(chaine)) {
     // alert("Le "+label + " est valide !");
     reinitialisationStylesInput(idInput);// si erreur , repasse dans la  boucle une deuxieme fois et reinitialise le input , car c'est valide
     ReinitialisationDeErreurMessage(idDiv);//reinitialisation de la div 
    } else {
      // alert("Le "+label + " ne doit contenir que des lettres !");
      erreurMessage(idDiv,"Le "+label + " ne doit contenir que des lettres !")
      appliquerStylesSurInputBordureRouge(idInput);
      isError=true;
    }
  } else {
    // alert("Le "+label + " doit avoir plus de deux lettres !");
    erreurMessage(idDiv,"Le "+label + " doit avoir plus de deux lettres !")
    appliquerStylesSurInputBordureRouge(idInput);
    isError=true;
  }
}

// function verifierChaine(chaine,label) {
//   // Vérifie si la longueur de la chaîne est supérieure à 2
//   if (chaine.length > 2) {
//     // Vérifie si la chaîne ne contient que des lettres (pas de chiffres)
//     if (/^[a-zA-Z]+$/.test(chaine)) {
//      // alert("Le "+label + " est valide !");
//     } else {
//       alert("Le "+label + " ne doit contenir que des lettres !");
      
//       isError=true;
//     }
//   } else {
//     alert("Le "+label + " doit avoir plus de deux lettres !");
//     isError=true;
//   }
// }

//============================================== function verifierEmail(email) =======================================================
function verifierEmail(email) {
  // Vérifie si l'email contient un "@" et un "."
  if (email.includes("@") && email.includes(".")) {
    //alert("L'email est valide !");
    reinitialisationStylesInput("email")
    ReinitialisationDeErreurMessage("divEmail")
  } else {
    // alert("L'email n'est pas valide !");
    erreurMessage("divEmail","L'email n'est pas valide !")
    appliquerStylesSurInputBordureRouge("email");
    isError=true;
  }
}
//============================================== function verifierChampsVides()  =======================================================
function verifierChampsVides() {
  var champs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
  
  // Parcourt chaque champ
  for (var i = 0; i < champs.length; i++) {
    // Vérifie si le champ est vide
    if (champs[i].value.trim() === '') {
      // Change la couleur de fond du champ pour indiquer qu'il est vide
      champs[i].style.backgroundColor = 'red';
      
      // Affiche un message d'erreur pour cet élément
      alert("Le champ " + champs[i].name + " est vide !");
      isError=true;
      
      // Arrête la fonction ici
      return false;
    }
  }
  
  return true;
}
document.getElementsByTagName("form")[0].addEventListener('submit', validate);//tous les elements html de la page, recherche de tous les elements form en mode tableau
//=================================================== function validate() ===========================================================
function validate(event){
  console.log(event)
  event.preventDefault()
  isError=false;
  //verifierChampsVides()
  //=================================================================================================
/*    Recuperation de l'ensemble des input et textaera  */
// Au niveau de la fiche d'inscription, récuperation de la donnée prénom : 
  let balisePrenom = document.getElementById("first")
  let prenom= balisePrenom.value
  console.log(prenom) // affiche ce qui est contenu dans la balisePrenom
  verifierChaine(prenom, "prenom","divPrenom","first")
  //=================================================================================================
  // Au niveau de la fiche d'inscription, récuperation de la donnée nom : 
  let baliseNom = document.getElementById("last")
  let nom= baliseNom.value
  console.log(nom) // affiche ce qui est contenu dans la baliseNom
  verifierChaine(nom,"nom","divNom","last")
  //=================================================================================================
  // Au niveau de la fiche d'inscription, récuperation de la donnée email : 
  let baliseEmail = document.getElementById("email")
  let email= baliseEmail.value
  console.log(email) // affiche ce qui est contenu dans la baliseEmail
  verifierEmail(email)
  //=================================================================================================
  // Au niveau de la fiche d'inscription, récuperation de la donnée birtdate : 
  let baliseBirthdate = document.getElementById("birthdate")
  let dateanniverasaire= baliseBirthdate.value
  console.log(dateanniverasaire) // affiche ce qui est contenu dans la baliseBirthDate
  //=================================================================================================
  // Au niveau de la fiche d'inscription, récuperation de la donnée quantité : 
  let baliseQuantity = document.getElementById("quantity")
  let quantite= baliseQuantity.value
  console.log(quantite) // affiche ce qui est contenu dans la baliseQuantity
//=================================================================================================
  /*Recuperation des données concernant les radioButton*/
let baliseVille = document.querySelectorAll('input[name="location"]')//je créee une variable qui recuperera un tableau de radioButton
let ville = ""
for (let i = 0; i < baliseVille.length; i++) {
    if (baliseVille[i].checked) {
        ville = baliseVille[i].value
        break
    }
}
console.log(ville) // affiche la valeur du radio coché
 //=================================================================================================
/* Recuperation des donnees concernant les checkbox */
// Si true, la validation de l'acceptation des conditions est effectuée
let checkbox1 = document.getElementById("checkbox1")
let acceptationConditions = checkbox1.checked
//console.log(acceptationConditions); // affiche true ou false
if(acceptationConditions===true){
  console.log("J'ai lu et accepté les conditions d'utilisation.")
}else{
  console.log("Je n'ai pas lu et accepté les conditions d'utilisation.")
}
// Si true, la validation de l'acceptation pour recevoir des informations sur les nouveaux evenements est effectuée
let checkbox2 = document.getElementById("checkbox2")
let acceptationInformations = checkbox2.checked
//console.log(acceptationInformations);// affiche true ou false
if(acceptationInformations===true){
  console.log("Je souhaite être prévenu des prochains évènements.")
}else{
  console.log("Je ne souhaite pas être prévenu des prochains évènements.")
}
if (isError===false){
  modalbg1.style.display="block";
 // afficherMessage();// affiche message sur la premiere page , inscription reussie
  closeModal()//feremeture de la fenetre
  reinitialisationFormulaire();//cette fonction fait appel a plusieurs fonctions pour reinitialiser le formulaire

}

//================================================================================================= 
console.log("je suis passe par la fin de la fonction validate()") 
return false // formulaire inavalide

 // On empêche le comportement par défaut
}

// let test= validate();
// console.log(test);
// alert(test)
// //si ma fonction validate est a true alors je ferme et je dis que je suis inscrit
// if (validate()===false){
//   closeModal();
//   inscriptionBtn.addEventListener("click", afficherMessage);
//   afficherMessage();
// }

//=====================================================================================================================================
//=====================================================================================================================================

//=====================================================================================================================================
// function afficherDiv(div){
//   if (div ==="vous etes inscrit"){
//     console.log("j'ai recupere la variable")
//     const divSaid = document.querySelector(".said");
//     // Créer un élément de paragraphe
//     const paragraphe = document.createElement("p");
//     // Ajouter le texte "vous etes inscrit" au paragraphe
//     paragraphe.textContent = "vous etes inscrit AFFICHER ";
//     // Ajouter le paragraphe à la div avec la classe "said"
//     divSaid.appendChild(paragraphe);
//     console.log("je suis passé par la fonction afficherDiv")
//     //return "Vous êtes inscrit"
//   }
//   else{
// console.log("je n'ai rien reçu et donc je ne peux rien afficher")
//   }
  
 

// }


//said()
//test()
//console.log(afficherMessage());
//afficherDiv(afficherMessage());
