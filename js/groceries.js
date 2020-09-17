
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
	var head = instanceElement("thead", "", _table)
	var body = instanceElement("tbody", "", _table)
	
	var lines = _csv.split("\n");
	var headlines = lines[0].split(",")
	
	var row = instanceElement("tr", "", head)

	for (var i = 0; i < headlines.length; i++)
	{
		instanceElement("th", headlines[i], row)
	}

	for (var i = 1; i < lines.length; i++)
	{
		var row = instanceElement("tr", "", body)

		words = lines[i].split(",")

		for (var j = 0; j < words.length; j++)
		{
			instanceElement("th", words[j], row)
		}
	}
}
