var slideshowPicture = document.querySelector(".slideshow-container-about")

function changePicture() {
  changeCircles();
  // change picture to "[pointer].jpg"
  slideshowPicture.style.background = "url(\"graphics/aboutSlide/" + (pointer+1) + ".jpg\")";
  slideshowPicture.style.backgroundSize = "100% 100%";
  slideshowPicture.style.backgroundRepeat = "no-repeat";
}

function changeHeight() {
  var width = document.documentElement.clientWidth;
  var container = document.querySelector(".slideshow-container-about");
  container.style.height = .6 * width + "px";
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
var imageURLs = ["graphics/homeSlide/1.jpg",
                 "graphics/homeSlide/2.jpg",
                 "graphics/homeSlide/3.jpg"];
preloadImages(imageURLs);

window.addEventListener("resize", changeHeight);
changeHeight();

setInterval(changePicture, 5000);
