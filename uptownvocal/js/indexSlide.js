var slideshowPicture = document.querySelector(".slideshow-container-home")

function changePicture() {
  changeCircles();
  // change picture to "[pointer].jpg"
  slideshowPicture.style.background = "url(\"graphics/homeSlide/" + (pointer+1) + ".jpg\")";
  slideshowPicture.style.backgroundSize = "100% 100%";
  slideshowPicture.style.backgroundRepeat = "no-repeat";
}

function changeHeight() {
  var width = document.documentElement.clientWidth;
  var container = document.querySelector(".slideshow-container-home");
  container.style.height = .6 * width + "px";
}

window.addEventListener("resize", changeHeight);
changeHeight();

setInterval(changePicture, 5000);