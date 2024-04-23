// DOM Elements
const modalElement = document.querySelector(".bground");
const modalTrigger = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const topNavTrigger = document.getElementById('myTopnav');
const modalCloser = document.querySelectorAll('.closer');


//Get Modal In/Out by click trigger
if (modalTrigger !== null) {

    modalTrigger.forEach((trigger) => {

      // Launch modal event on single Click
      trigger.addEventListener('click',(e)=> {

          setDisplayModal(modalElement,'block');
        
      });

      

    
    });

    modalCloser.forEach((closer) => {
  
      closer.addEventListener('click',(e) =>{

        setDisplayModal(modalElement,'none');

      });

    });

} else {

  console.warn(`Undefined element on DOM : ${modalBtn}`);
}


// Get some Interactions in Modal

const modalbodyChilds = document.querySelectorAll('.modal-body > *');


modalbodyChilds.forEach((modalChild) => {

  // console.log(modalChild);

  let getClassName = modalChild.getAttribute('class');

  modalChild.dataset.display = getClassName; 

  console.log(modalChild.dataset.display);
});


// FUNCTIONS
/**
 * @param {NodeList} target
 * @param {string} navItem
 * @param {string} displayValue
 */

  // Edit Nav
  function editNav(navItem) {
    var x = document.getElementById(`${navitem}`);
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Modal Display
  function setDisplayModal(target,displayValue) {

    target.style.setProperty('display',displayValue);

  }



