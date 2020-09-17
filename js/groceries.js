
$(document).ready(function()
{
	readFile(document.getElementById("csv"), "assets/groceries/groceries.csv")
});

function instanceElement(_id, _innerHTML, _parent)
{
	var e = document.createElement(_id)
	e.innerHTML = _innerHTML
	_parent.appendChild(e)
	return e
}

function readFile(_element, _path)
{
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var e = instanceElement("table", "", _element)
			createTable(e, this.responseText)
		}
	};
	xhttp.open("GET", _path, true);
	xhttp.send();
}

function createTable(_table, _csv)
{
	instanceElement("caption", "Groceries", _table)
	instanceElement("thead", '<tr><th>Band</th><th>Year formed</th><th>No. of Albums</th><th>Most famous song</th></tr>', _table)
	var body = instanceElement("tbody", "", _table)

	var lines = _csv.split("\n");

	for (var i = 0; i < lines.length; i++)
	{
		var row = instanceElement("tr", "", body)

		words = lines[i].split(",")

		for (var j = 0; j < words.length; j++)
		{
			instanceElement("th", words[j], row)
		}
	}
}
