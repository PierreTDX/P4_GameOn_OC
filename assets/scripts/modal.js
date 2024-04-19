// DOM Elements
const modalElement = document.querySelector(".bground");
const modalTrigger = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const topNavTrigger = document.getElementById('myTopnav');

if (modalTrigger !== null) {

    modalTrigger.forEach((element) => {

      console.log(element);

      // Launch modal event on single Click
      element.addEventListener('click',(e)=> {

          launchModal(modalElement);
        
      });

    
    });

} else {

  console.warn(`Undefined element on DOM : ${modalBtn}`);
}


// FUNCTIONS

  // Edit Nav
  function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Modal Display
  function launchModal(target) {

    target.style.setProperty('display','block');
  }


