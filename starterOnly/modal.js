// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
// form elements
const submitBtn = document.querySelectorAll(".btn-submit");
const form = document.querySelector('[name="reserve"]');
// // form elements;
// const conditions = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// form submit event
form.addEventListener("submit", validate);



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// remouve error message
function removeErrorMessage() {
  formData.forEach((data) => {
    data.setAttribute("data-error-visible", false);
  });

}

// edit nav bar
function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// // form validation

function validateEmail(email) {

  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Veuillez rajouter un @ dans votre email");
    return false;
  }
}
function validate(event) {
  event.preventDefault();

  // Reset error messages
  formData.forEach((element) => {
    element.setAttribute("data-error-visible", false);
    element.removeAttribute("data-error");
  });

  // Define validation rules for each input field
  const validationRules = {
    first: { minLength: 2, errorMessage: "Le champ doit contenir au moins 2 caractères" },
    last: { minLength: 2, errorMessage: "Le champ doit contenir au moins 2 caractères" },
    email: { validator: validateEmail, errorMessage: "Veuillez rajouter un @ dans votre email" },
    birthdate: { required: true, errorMessage: "Veuillez renseigner votre date de naissance" },
    quantity: { required: true, errorMessage: "Veuillez renseigner le nombre de tournois" }
  };

  // Loop through form data and validate each input
  for (let i = 0; i < formData.length; i++) {
    const input = formData[i].querySelector("input");
    const inputId = input.id;

    // Check if input is empty
    if (input.value === "") {
      formData[i].setAttribute("data-error-visible", true);
      formData[i].setAttribute("data-error", "Le champ doit être rempli");
    } else {
      formData[i].setAttribute("data-error-visible", false);
    }

    // Apply additional validation rules if defined for the input
    if (validationRules[inputId]) {
      const rule = validationRules[inputId];

      // Check minimum length or custom validator function
      if (rule.minLength && input.value.length < rule.minLength) {
        formData[i].setAttribute("data-error-visible", true);
        formData[i].setAttribute("data-error", rule.errorMessage);
      } else if (rule.validator && !rule.validator(input.value)) {
        formData[i].setAttribute("data-error-visible", true);
        formData[i].setAttribute("data-error", rule.errorMessage);
      }

      // Check if input is required
      if (rule.required && input.value === "") {
        formData[i].setAttribute("data-error-visible", true);
        formData[i].setAttribute("data-error", rule.errorMessage);
      }
    }
  }
}


// function validate(event) {
//   event.preventDefault();
//   console.log("toto");
//   let firstNameValue = document.forms["reserve"]["first"].value;
//   let lastNameValue = document.forms["reserve"]["last"].value;
//   let emailValue = document.forms["reserve"]["email"].value;
//   let birthdateValue = document.forms["reserve"]["birthdate"].value;
//   let quantityValue = document.forms["reserve"]["quantity"].value;
//   let checkbox1 = document.forms["reserve"]["location1"].checked;
//   let wrapper = document.getElementById("");
//   // check if a location is selected
//   for (let i = 0; i < formData.length; i++) {
//     console.log(formData[i]);
//     const input = formData[i].querySelector("input");
//     if (input.value === "") {
//       formData[i].setAttribute("data-error-visible", true);
//       formData[i].setAttribute("data-error", "Le champ doit être rempli");
//     } else {
//       formData[i].setAttribute("data-error-visible", false);
//     }

//     elseif(input.id === "first")
//     {
//       if (input.value.length < 2) {
//         formData[i].setAttribute("data-error-visible", true);
//         formData[i].setAttribute("data-error", "Le champ doit contenir au moins 2 caractères");
//       }

//     } elseif(input.id === "last") {
//       if (input.value.length < 2) {
//         formData[i].setAttribute("data-error-visible", true);
//         formData[i].setAttribute("data-error", "Le champ doit contenir au moins 2 caractères");
//       }



//     }

//     elseif(input.id === "email") {
//       if (!validateEmail(input.value)) {
//         formData[i].setAttribute("data-error-visible", true);
//         formData[i].setAttribute("data-error", "Veuillez rajouter un @ dans votre email");
//       }
//     } elseif(input.id === "birthdate") {
//       if (input.value === "") {
//         formData[i].setAttribute("data-error-visible", true);
//         formData[i].setAttribute("data-error", "Veuillez renseigner votre date de naissance");
//       }
//     } elseif(input.id === "quantity") {
//       if (input.value === "") {
//         formData[i].setAttribute("data-error-visible", true);
//         formData[i].setAttribute("data-error", "Veuillez renseigner le nombre de tournois");
//       }

//     }

//   }

//   // // check if a location is selected
//   // let checkboxes = document.querySelectorAll('.checkbox');
//   // let checked = false;
//   // checkboxes.forEach(function (checkbox) {
//   //   if (checkbox.checked) {
//   //     checked = true;
//   //   }

//   // });

//   // if (!checked) {
//   //   // alert("Vous devez choisir une option");
//   //   return false;
//   // }

//   // // alert("Merci pour votre participation !");
//   // return true;


// }

// function handleSubmission(event) {
//   event.preventDefault();
//   if (form !== null) throw new Error("Form not found");

//   if (validate()) {
//     closeModal();
//     // alert("Merci pour votre participation !");
//   }
// }

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// function formData() {
//   modalbg.style.display = "none";
//   formData.has("username"); // Returns false
//   formData.append("username", "");
//   formData.has("username"); // Returns true
//   formData.get("username"); // Returns "Bonjour"
// }
