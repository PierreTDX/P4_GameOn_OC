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
const closeModalBtn = document.querySelector(".js-closeModal");
const form = document.querySelector("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.addEventListener("click", closeModal);

// open modal form
function launchModal() {
  try {
    modalbg.style.display = "block";
  }
  catch (error) {
    console.log(error);
  }
}

// close modal form
function closeModal() {
  try {
    modalbg.style.display = "none";
  }
  catch (error) {
    console.log(error);
  }
}

// message validation is ok
form.addEventListener("submit", handleSubmit);

function handleSubmit() {
  try {
    if (form.checkValidity()) {
      closeModal();
      alert("Merci ! Votre réservation a été reçue.");
    }
  }
  catch (error) {
    console.log(error);
  }
}

// gestion de l'affichage des erreurs
document.addEventListener('DOMContentLoaded', function() {
  const formDataElements = document.querySelectorAll('.formData');
  
  formDataElements.forEach(function(formDataElement) {
    const textControl = formDataElement.querySelector('.text-control');
    
    if (textControl) {
      textControl.addEventListener('input', function() {
        if (textControl.validity.valid) {
          formDataElement.setAttribute('data-error-visible', 'false');
        } else {
          formDataElement.setAttribute('data-error-visible', 'true');
        }
      });
    }
    
    const checkboxInput = formDataElement.querySelector('.checkbox-input');
    
    if (checkboxInput) {
      checkboxInput.addEventListener('change', function() {
        if (checkboxInput.checked) {
          formDataElement.setAttribute('data-error-visible', 'false');
        } else {
          formDataElement.setAttribute('data-error-visible', 'true');
        }
      });
    }
  });
});

function validate() {
  let isValid = true;
  const formDataElements = document.querySelectorAll('.formData');
  
  formDataElements.forEach(function(formDataElement) {
    const textControl = formDataElement.querySelector('.text-control');
    if (textControl && !textControl.validity.valid) {
      formDataElement.setAttribute('data-error-visible', 'true');
      isValid = false;
    } else {
      formDataElement.setAttribute('data-error-visible', 'false');
    }

    const checkboxInput = formDataElement.querySelector('.checkbox-input');
    if (checkboxInput && !checkboxInput.checked) {
      formDataElement.setAttribute('data-error-visible', 'true');
      isValid = false;
    } else {
      formDataElement.setAttribute('data-error-visible', 'false');
    }
  });
  
  const radioButtons = document.querySelectorAll('input[name="location"]');
  const radioChecked = Array.from(radioButtons).some(radio => radio.checked);
  const radioErrorElement = document.querySelector('#radioError');
  const radioErrorText = radioErrorElement.querySelector('.radio-error');
  if (!radioChecked) {
    radioErrorElement.setAttribute('data-error-visible', 'true');
    radioErrorText.style.display = 'block';
    isValid = false;
  } else {
    radioErrorElement.setAttribute('data-error-visible', 'false');
    radioErrorText.style.display = 'none';
  }
  
  const birthdate = document.getElementById('birthdate');
  const birthdateErrorElement = document.querySelector('.formData[data-error="Vous devez entrer votre date de naissance"]');
  if (!birthdate.value) {
    birthdateErrorElement.setAttribute('data-error-visible', 'true');
    isValid = false;
  } else {
    birthdateErrorElement.setAttribute('data-error-visible', 'false');
  }

  return isValid;
}


// function validate() {
//   console.log("faire la fonction de validation");
// }

// const form = document.querySelector("form")
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
// })