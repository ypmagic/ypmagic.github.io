var navigation = document.querySelector(".nav-container");
var links = document.querySelectorAll(".navbar li a")
var handshake = document.querySelector(".fa-handshake-o");

window.addEventListener("scroll", function(e) {
	console.log(window.scrollY);
	if (window.scrollY > 30) {
		navigation.setAttribute("class", "nav-container sticky");
		links.forEach(function(element) {
			element.style.color = "#000"
		});
		handshake.style.color = "#000";
	}
	if (window.scrollY < 30) {
		navigation.setAttribute("class", "nav-container");
		links.forEach(function(element) {
			element.style.color = "#fff"
		});
		handshake.style.color = "#fff";
		navigation.style.transition = "background-color 200ms linear";
	}
});