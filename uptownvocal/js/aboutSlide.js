/* START SLIDESHOW */
var pictureRotate = setInterval(function() {
  return changePicture(true);
}, 5000);
/* --------------- */
var slideshowPicture = document.querySelector(".slideshow-container-about")
var arrowLeft = document.querySelector(".arrow-left");
arrowLeft.addEventListener("click", function() {
  if (pointer > 0) {
    changePicture(false);
    clearInterval(pictureRotate);
    pictureRotate = setInterval(function() {
      return changePicture(true);
    }, 5000);
  }
})
var arrowRight = document.querySelector(".arrow-right");
arrowRight.addEventListener("click", function() {
  changePicture(true);
  clearInterval(pictureRotate);
  pictureRotate = setInterval(function() {
    return changePicture(true);
  }, 5000);
})

function changePicture(sign) {
  changeCircles(sign);
  // change picture to "[pointer].jpg"
  slideshowPicture.style.background = "url(\"graphics/aboutSlide/" + (pointer+1) + ".jpg\")";
  slideshowPicture.style.backgroundSize = "100% 100%";
  slideshowPicture.style.backgroundRepeat = "no-repeat";
}

function changeHeight() {
  var width = document.documentElement.clientWidth;
  var container = document.querySelector(".slideshow-container-about");
  if (width > 712) {
    container.style.height = .4 * width + "px";
  } else {
    container.style.height = .5 * width + "px";
  }
  arrowLeft.style.transform = "translate(0, " + 0.2 * width + "px )";
  arrowRight.style.transform = "translate(0, " + 0.2 * width + "px )";
}

function preloadImages(array) {
  if (!preloadImages.list) {
        preloadImages.list = [];
    }
  for (var i = 0; i < array.length; i++) {
      var img = new Image();
      img.src = array[i];
      preloadImages.list.push(img);
  }
}
var imageURLs = ["graphics/aboutSlide/1.jpg",
                 "graphics/aboutSlide/2.jpg",
                 "graphics/aboutSlide/3.jpg"];
preloadImages(imageURLs);

window.addEventListener("resize", changeHeight);
changeHeight();
