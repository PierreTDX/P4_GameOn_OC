const topNav = document.getElementById("myTopnav");
function editNav() {
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

// On récupère le menu burger et on appelle editNav au clique
const faCross = document.getElementById("close-cross");
const faBars = document.querySelector(".fa-bars");
const burgerIcon = document.querySelector(".icon");
burgerIcon.addEventListener("click", () => {
  editNav();
  faCross.classList.add("fa-block");
  faBars.classList.add("fa-none");
});

// On récupère la croix et on ferme le menu burger au clique
const closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", () => {
  topNav.classList.remove("responsive");
  faBars.classList.remove("fa-none");
});
