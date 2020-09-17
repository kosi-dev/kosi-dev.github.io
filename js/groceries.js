
$(document).ready(function() {
	readFile(document.getElementById("csv"), "assets/groceries/groceries.csv")
});

function readFile(_element, _path) {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var e = document.createElement("div")
			createTable(e, this.responseText)
			_element.appendChild(e)
		}
	};
	xhttp.open("GET", _path, true);
	xhttp.send();
}

function createTable(_element, _csv) {
    var lines = _csv.split("\n");

	for (var i = 0; i < lines.length; i++)
	{
		var e = document.createElement("p")
		e.innerHTML = lines[i]
		_element.appendChild(e)
	}
}
