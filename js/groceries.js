
class Column {
	constructor() {
		this.STORE = 0;
		this.BRAND = 1;
		this.FOOD = 2;
		this.PRICE = 3;
		this.WEIGHT = 4;
		this.DISCOUNT = 5;
		this.PRICE_KG = 6;
		this.CALORIES = 7;
		this.ENDINGS = ["", "", "", ",-", " kg", "%", ",-", ",-"]
	}
}

class Table {
	constructor(_table) {
		this.table = _table;
		this.table_head = this.table.shift();
		this.table_current = this.table;
		this.sort_index = -1;
		this.sort_flip = false;
		this.parent;
		this.columns = [false, false, true, true, false, false, true, true]
		this.kiwi_pluss = false
	}

	build(_table) {
		let table = instanceElement("table", "", this.parent);
		let thead = instanceElement("thead", "", table);
		let tr = instanceElement("tr", "", thead);
		let tbody = instanceElement("tbody", "", table);
		table.classList.add('table');

		for (let i = 0; i < this.table_head.length; i++) {
			if (this.columns[i]) {
				let th = instanceElement("th", "", tr);
				let button = instanceElement("button", this.table_head[i], th)
				button.classList.add('button');
				button.onclick = function() {
					return grocery_table.sort(i)
				}
			}
			
		}

		for (let i = 0; i < _table.length; i++) {
			let tr = instanceElement("tr", "", tbody);
			for (let j = 0; j < _table[i].length; j++) {
				if (this.columns[j]) {
					if (_table[i][j] != "") {
						var value = (this.kiwi_pluss && j == COLUMN.DISCOUNT) ? _table[i][j] * 100 : _table[i][j]
						value = (this.kiwi_pluss && (j == COLUMN.PRICE || j == COLUMN.PRICE_KG)) ? round(value * (1 - _table[i][COLUMN.DISCOUNT]), 2) : value
						value += COLUMN.ENDINGS[j]
						value = (!this.kiwi_pluss && j == COLUMN.DISCOUNT) ? "-" : value
					}
					else {
						var value = "-"
					}
					instanceElement("th", value, tr);
				}
			}
		}
	}

	filter(_filter_key) {
		this.rebuild(this.table.filter(checkFilter(_filter_key)));
	}

	sort(_sort_index) {
		this.sort_flip = (this.sort_flip != (this.sort_index == _sort_index))
		this.sort_index = _sort_index;
		this.rebuild([... this.table_current].sort(sortFunction(this.sort_flip, this.sort_index)));
	}

	rebuild(_table){
		this.table_current = _table;
		this.parent.innerHTML = "";
		this.build(this.table_current);
	}

	search() {
		let input = document.getElementById("search")
		this.rebuild(this.table.filter(checkSearch(input.value.toLowerCase())));
	}

	edit_columns(_i) {
		this.columns[_i] = !this.columns[_i]
		this.rebuild(this.table_current)
	}

	edit_kiwi_pluss() {
		this.kiwi_pluss = !this.kiwi_pluss
		this.rebuild(this.table_current)
	}
}

var grocery_table;
var COLUMN = new Column()

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
			grocery_table.sort(COLUMN.PRICE_KG);
		}
	}
	xhttp.open("GET", _path, true);
	xhttp.send();
}

function round(number, decimals) {
	let factor = Math.pow(10, decimals);
	return (Math.round(number * factor) / factor);
}

function arrayFromCSV(_csv) {
	let result = [];
	let lines = _csv.split("\n");
	result.push(lines[0].split(","));

	for (let i = 1; i < lines.length; i++) {
		var words = lines[i].split(",")

		for (let j = 0; j < words.length; j++) {
			if (!isNaN(Number(words[j]))) {
				words[j] = Number(words[j])
			}
		}
		
		if (words[COLUMN.STORE] === "Kiwi" && words[COLUMN.DISCOUNT] === 0) {
			words[COLUMN.DISCOUNT] = 0.01
		}

		if (words[COLUMN.WEIGHT] === 0) {
			if (words[COLUMN.PRICE_KG] === 0 || words[COLUMN.PRICE] === 0) {
				words[COLUMN.WEIGHT] = 1;
			}
			else {
				words[COLUMN.WEIGHT] = round(words[COLUMN.PRICE] / words[COLUMN.PRICE_KG], 2);
			}
		}
		if (words[COLUMN.PRICE_KG] === 0) {
			words[COLUMN.PRICE_KG] = round(words[COLUMN.PRICE] / words[COLUMN.WEIGHT], 2);
		}
		if (words[COLUMN.PRICE] === 0) {
			words[COLUMN.PRICE] = round(words[COLUMN.PRICE_KG] * words[COLUMN.WEIGHT], 2);
		}
		
		if (typeof words[COLUMN.CALORIES] === 'string') {
			words[COLUMN.CALORIES] = words[COLUMN.CALORIES].split(";")

			if (words[COLUMN.CALORIES].length > 3) {
				words[COLUMN.CALORIES] = round(200 * words[COLUMN.PRICE_KG] / words[COLUMN.CALORIES][3], 2)
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

function checkSearch(_filter_key) {
	return function(_array) {
		const included = (element) => element.toString().toLowerCase().includes(_filter_key);
		return _array.some(included)
	}
}

function sortFunction(_flip, _index) {
	return function(a, b) {
		if (a[_index] === 0) {
			return (1);
		}
		if (b[_index] === 0) {
			return (-1);
		}
		return ((a[_index] > b[_index]) - (a[_index] < b[_index])) * (1 - 2 * _flip);
	}
}
