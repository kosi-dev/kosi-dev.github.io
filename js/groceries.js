var grocery_table;

class Table {
	constructor(table) {
		this.table = table;
		this.table_head = this.table.shift();
		this.table_current = this.table;
		this.sort_index = -1;
		this.sort_flip = false;
		this.parent;
	}

	build(_table) {
		var t = instanceElement("table", "", this.parent);
		instanceElement("caption", "Groceries", t);
		var head = instanceElement("thead", "", t);
		var row = instanceElement("tr", "", head);

		for (let i = 0; i < this.table_head.length; i++) {
			let th = instanceElement("th", "", row);
			let button = instanceElement("button", this.table_head[i], th)
			button.onclick = function() {
				return grocery_table.sort(i)
			}
		}
		
		var body = instanceElement("tbody", "", t);

		for (var i = 0; i < _table.length; i++) {
			var row = instanceElement("tr", "", body);

			for (var j = 0; j < _table[i].length; j++) {
				instanceElement("th", _table[i][j], row);
			}
		}
	}

	filter(_filter_key) {
		this.rebuild(this.table.filter(checkFilter(_filter_key)));
	}

	sort(_sort_index) {
		if (this.sort_index == _sort_index) {
			this.sort_flip = !this.sort_flip;
		}
		this.sort_index = _sort_index;
		this.rebuild([... this.table_current].sort(sortFunction(this.sort_flip, this.sort_index)));
	}

	rebuild(_table){
		this.table_current = _table;
		this.parent.innerHTML = "";
		this.build(this.table_current);
	}
}

$(document).ready(function() {
	tableInit("assets/groceries/groceries.csv");
});

function tableInit(_path, _parent) {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			grocery_table = new Table(arrayFromCSV(this.responseText));
			grocery_table.parent = document.getElementById("table");
			grocery_table.build(grocery_table.table);
			tableSort(grocery_table, 6);
		}
	}
	xhttp.open("GET", _path, true);
	xhttp.send();
}

function arrayFromCSV(_csv) {
	var result = [];
	var lines = _csv.split("\n");

	for (var i = 0; i < lines.length; i++) {
		words = lines[i].split(",")

		for (let j = 0; j < words.length; j++) {
			if (!isNaN(Number(words[j]))) {
				words[j] = Number(words[j])
			}
		}

		lines[i] = words
		result.push(lines[i]);
	}
	
	return result;
}

function instanceElement(_id, _innerHTML, _parent) {
	var e = document.createElement(_id);
	e.innerHTML = _innerHTML;
	_parent.appendChild(e);
	return e;
}

function checkFilter(_filter_key) {
	return function(_array) {
		return _array.includes(_filter_key);
	}
}

function sortFunction(_flip, _sort_index) {
	if (_flip) {
		return function(a, b) {
			return (a[_sort_index] > b[_sort_index]) - (a[_sort_index] < b[_sort_index]);
		}
	}
	else {
		return function(a, b) {
			return (a[_sort_index] < b[_sort_index]) - (a[_sort_index] > b[_sort_index]);
		}
	}
}