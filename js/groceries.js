
var table;
var table_head;
var filter_key;
var sort_index;

$(document).ready(function() {
	tableInit("assets/groceries/groceries.csv", document.getElementById("table"));
});

function tableInit(_path, _parent) {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			table = arrayFromCSV(this.responseText);
			table_head = table.shift()
			tableCreate(_parent, table, table_head);
		}
	};
	xhttp.open("GET", _path, true);
	xhttp.send();
}

function arrayFromCSV(_csv) {
	var result = [];
	var lines = _csv.split("\n");

	for (var i = 0; i < lines.length; i++) {
		result.push(lines[i].split(","));
	}
	
	return result;
}

function tableCreate(_parent, _table, _table_head) {
	var t = instanceElement("table", "", _parent);
	instanceElement("caption", "Groceries", t);
	var head = instanceElement("thead", "", t);
	var row = instanceElement("tr", "", head);

	for (var i = 0; i < _table_head.length; i++) {
		instanceElement("th", _table_head[i], row);
	}

	var body = instanceElement("tbody", "", t);

	for (var i = 0; i < _table.length; i++) {
		var row = instanceElement("tr", "", body);

		for (var j = 0; j < _table[i].length; j++) {
			instanceElement("th", _table[i][j], row);
		}
	}
}

function instanceElement(_id, _innerHTML, _parent) {
	var e = document.createElement(_id);
	e.innerHTML = _innerHTML;
	_parent.appendChild(e);
	return e;
}

function tableFilter(_element) {
	tableReplace(_element, table.filter(checkFilter));
}

function sortSort(_element) {
	tableReplace(_element, [... table].sort(sortFunction));
}

function tableReplace(_element, _table){
	_element.innerHTML = "";
	tableCreate(_element, _table, table_head);
}

function sortFunction(a, b) {
	if (a[sort_index] === b[sort_index]) {
		return 0;
	}
	else {
		return (a[sort_index] < b[sort_index]) ? -1 : 1;
	}
}

function checkFilter(_array) {
	return _array.includes(filter_key);
}
