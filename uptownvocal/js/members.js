/*
MEMBER INFO BOXES
*/
var members = document.getElementsByClassName("member");
for (var j = 0; j < members.length; j++) {
  members[j].addEventListener("click", function() {
    var name = this.classList[2];
    var infoBox = document.querySelector("." + name + "-info");
    var greySite = document.querySelector(".mobile-overlay")
    infoBox.style.display = "block";
    infoBox.style.opacity = "1";
    greySite.style.display = "block";
    body.className += " stop-scrolling";
    toggleHam.removeEventListener("click", hamburgerStuff);
    // exit button
    var exitInfo = infoBox.childNodes[0].nextElementSibling;
    exitInfo.addEventListener("click", function() {
      var tempMember = this.parentElement;
      tempMember.style.opacity = "0";
      tempMember.style.display = "none";
      greySite.style.display = "none";
      body.className = "";
      hamburgerToggle();
    });
  })
}
