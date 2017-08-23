// THIS IS ALL MENU STUFF
var toggleHam = document.querySelector(".toggle-menu-ham");
var toggleX = document.querySelector(".toggle-menu-x");
var mobileMenu = document.querySelector(".menu");
var body = document.querySelector("body");
var greySite = document.querySelector(".mobile-overlay")
var logo = document.querySelector (".logo");

/*
MOBILE MENU STUFF
*/
function hamburgerToggle() {
  toggleHam.addEventListener("click", hamburgerStuff);
}

function hamburgerStuff() {
  this.style.display = "none";
  toggleX.style.display = "block";
  mobileMenu.className += " menu-animate-height";
  body.className += " stop-scrolling";
  greySite.style.display = "block";
  logo.style.borderBottom = "none";
}
hamburgerToggle();

toggleX.addEventListener("click", function() {
  this.style.display = "none";
  toggleHam.style.display = "block";
  mobileMenu.className = "menu";
  body.className = "";
  greySite.style.display = "none";
  logo.style.borderBottom = "5px solid rgb(93, 186, 237)";
});

//------------------------------------------------------------------------------
window.addEventListener("resize", overlayFix);
function overlayFix() {
  var width = document.documentElement.clientWidth;
  if (width > 712) {
    greySite.removeAttribute("style");
  }
}
overlayFix();

//------------------------------------------------------------------------------
var circles = document.getElementsByClassName("circle");
// set initial picture
circles[0].style.backgroundColor = "rgba(93, 186, 237, 0.8)";
var pointer = 0;

/*
SLIDESHOW
*/
function changeCircles(sign) {
  var circles = document.getElementsByClassName("circle");
  // make current pointer grey
  circles[pointer].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  // increment pointer if it's not 2
  if (pointer == circles.length-1 && sign) {
    pointer = 0;
  } else {
    if (sign) {
      pointer++;
    } else {
      pointer--;
    }
  }
  // make current pointer blue
  circles[pointer].style.backgroundColor = "rgba(93, 186, 237, 0.8)";
}
