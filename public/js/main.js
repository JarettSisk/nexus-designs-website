

// for the nav menu icon
let navLinks = document.querySelector(".navLinks");
function hide() {
  navLinks.classList.toggle("show");
}

//for the loading screen
window.addEventListener("load", function () {
  const loader = document.querySelector(".loaderDiv");
  loader.classList.add("hidden");
})