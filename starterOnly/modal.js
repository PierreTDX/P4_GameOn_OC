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
const modalClose = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event

modalClose.addEventListener("click", closeModal)

// close modal form

function closeModal() {
  modalbg.style.display = "none";
}

// validate email input format

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// valide form

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform custom validation logic

    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const quantity = document.getElementById('quantity').value;
    const locations = document.querySelectorAll('input[name="location"]');
    const checkBox = document.getElementById('checkbox1').checked;

    let valid = true;
    let checked = false;

    if (firstName.length < 2 || firstName === '') {
      valid = false;
      document.getElementById("errorMessage1").style.display = "block";
    } else {
      document.getElementById("errorMessage1").style.display = "none";
    }

    if (lastName.length < 2 || lastName === '') {
      valid = false;
      document.getElementById("errorMessage2").style.display = "block";
    } else {
      document.getElementById("errorMessage2").style.display = "none";
    }

    if (!validateEmail(email) || email === '') {
      valid = false;
      document.getElementById("errorMessage3").style.display = "block";
    } else {
      document.getElementById("errorMessage3").style.display = "none";
    }

    if (birthdate === '') {
      valid = false;
      document.getElementById("errorMessage4").style.display = "block";
    } else {
      document.getElementById("errorMessage4").style.display = "none";
    }

    if (!/^[0-9]+$/.test(quantity) || quantity === '') {
      valid = false;
      document.getElementById("errorMessage5").style.display = "block";
    } else {
      document.getElementById("errorMessage5").style.display = "none";
    }
    
    locations.forEach(location => {
      if (location.checked) {
        checked = true;
      }
    })

    if (!checked) {
      valid = false;
      document.getElementById("errorMessage6").style.display = "block";
    } else {
      document.getElementById("errorMessage6").style.display = "none";
    }
    
    if (!checkBox) {
      valid = false;
      document.getElementById("errorMessage7").style.display = "block";
    } else {
      document.getElementById("errorMessage7").style.display = "none";
    }

    // If validation passes, submit the form
    if (valid) {
      form.submit();
    }
});