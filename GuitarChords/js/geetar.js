document.getElementById("chords").addEventListener("change", function() {
	var chord = document.querySelector('option:checked').id;
	if (chord !== "select") {
		document.querySelector("#chord").setAttribute("src", "images/" + chord + ".png");
	}
});
