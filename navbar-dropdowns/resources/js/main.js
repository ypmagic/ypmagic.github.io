var who = document.querySelector("#who");
var mission = document.querySelector("#mission");
var product = document.querySelector("#product");
var sponsor = document.querySelector("#sponsor");

who.addEventListener("mouseover", function() {
	document.querySelector("#who .dropdown").style.boxShadow = "2px 2px 2px #c2c2c2";
	document.querySelector("#who .dropdown").style.opacity = "1";
});
who.addEventListener("mouseout", function() {
	document.querySelector("#who .dropdown").style.opacity = "0";
})

mission.addEventListener("mouseover", function() {
	document.querySelector("#mission .dropdown").style.opacity = "1";
	document.querySelector("#mission .dropdown").style.boxShadow = "2px 2px 2px #c2c2c2";
});
mission.addEventListener("mouseout", function() {
	document.querySelector("#mission .dropdown").style.opacity = "0";
})

product.addEventListener("mouseover", function() {
	document.querySelector("#product .dropdown").style.opacity = "1";
	document.querySelector("#product .dropdown").style.boxShadow = "2px 2px 2px #c2c2c2";
});
product.addEventListener("mouseout", function() {
	document.querySelector("#product .dropdown").style.opacity = "0";
})

sponsor.addEventListener("mouseover", function() {
	document.querySelector("#sponsor .dropdown").style.opacity = "1";
	document.querySelector("#sponsor .dropdown").style.boxShadow = "2px 2px 2px #c2c2c2";
});
sponsor.addEventListener("mouseout", function() {
	document.querySelector("#sponsor .dropdown").style.opacity = "0";
})