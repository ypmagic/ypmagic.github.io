// h1 text
$("#young").typeIt({
	strings: "Young Park.",
	speed: 70,
	autoStart: false,
	callback: function() {
		$('.slider').animate({
    		width: "100%"
		}, 1000);
		var h4 = document.querySelector("h4");
		h4.style.transition = "opacity 1s";
		h4.style.opacity = "1";
		var github = document.querySelector(".fa-github").parentElement;
		github.style.transition= "opacity 1.5s";
		github.style.opacity="1";
		var email = document.querySelector(".fa-envelope-o").parentElement;
		email.style.transition= "opacity 2.5s";
		email.style.opacity="1";
		var linkedin = document.querySelector(".fa-linkedin").parentElement;
		linkedin.style.transition= "opacity 3.5s";
		linkedin.style.opacity="1";
		var resume = document.querySelector(".fa-file-text-o").parentElement;
		resume.style.transition= "opacity 4.5s";
		resume.style.opacity="1";
	}
});

// mouse hover over social media icons
$("td").on("mouseover", function() {
	$(this).css("background-color", "#e38707")
	$(this).find("i").css("color", "#ffd92e");
});

$("td").on("mouseout", function() {
	$(this).css("background-color", "#2f448a")
	$("i").css("color", "#fff")
});

// icons actions
document.querySelector("#resume").addEventListener("click", function() {
	window.open("http://www.youngwpark.com/files/Young Park Resume CS.pdf", "_blank")
});

document.querySelector("#git").addEventListener("click", function() {
	window.open("http://www.github.com/ypmagic", "_blank")
});

document.querySelector("#linked").addEventListener("click", function() {
	window.open("http://www.linkedin.com/in/theyoungthought", "_blank")
});

document.querySelector("#ema").addEventListener("click", function() {
	window.open("mailto:young_park@brown.edu", "_blank")
});
