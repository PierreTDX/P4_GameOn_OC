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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.addEventListener("click", closeModal);

// open modal form
function launchModal() {
  try {
  modalbg.style.display = "block";
  }
  catch (error) {
    console.log (error);
  }
}

// close modal form
function closeModal() {
  try {
  modalbg.style.display = "none";
  }
  catch (error) {
    console.log (error);
  }
}

// function validate() {
//   console.log("faire la fonction de validation");
// }

// const form = document.querySelector("form")
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
// })