
<head>
	<title>Matlista</title>
	<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
	<script src='groceries/groceries.js'></script>
	<meta charset='UTF-16'>
	<link rel='stylesheet' href='groceries/groceries.css'>
</head>

<body>
	<main>
		<br>
		<div style='display: flex; width: 100%;'>		
			<div style='width:32%; padding-right: 100px; align-self: flex-end;'>
				<ul>
					<li><input id='trumf' checked type='checkbox' onclick='grocery_table.edit_kiwi_pluss(); grocery_list.calculate()' class='checkbox'> KIWI PLUSS</li>
					
					<li><input id='store' type='checkbox' onclick='grocery_table.edit_columns(COLUMN.STORE)' class='checkbox'> Butikk</li>
					<li><input id='brand' type='checkbox' onclick='grocery_table.edit_columns(COLUMN.BRAND)' class='checkbox'> Produsent</li>
					<li><input id='price' checked type='checkbox' onclick='grocery_table.edit_columns(COLUMN.PRICE)' class='checkbox'> Pris</li>
					<li><input id='weight' type='checkbox' onclick='grocery_table.edit_columns(COLUMN.WEIGHT)' class='checkbox'> Vekt</li>
					<li><input id='discount' type='checkbox' onclick='grocery_table.edit_columns(COLUMN.DISCOUNT)' class='checkbox'> Rabatt</li>
					<li><input id='price_kg' checked type='checkbox' onclick='grocery_table.edit_columns(COLUMN.PRICE_KG)' class='checkbox'> Pris / kg</li>
					<li><input id='calories' checked type='checkbox' onclick='grocery_table.edit_columns(COLUMN.CALORIES)' class='checkbox'> Pris / 2000 kcal</li>
				</ul>
	
				<input id='search' type='text' placeholder='Søk..' oninput='grocery_table.search()' autocomplete='off' class='search'>	
			</div>
			<div style='width:64%;'>
				<h2>Velkommen!</h2>
				<p>Her kan du sammenligne priser på matvarer.</p>
				<p>Du kan også sette opp en meny og se hva den vil koste.</p>
				<p>Trykk på varene i listen nedenfor for å legge dem til i menyen.</p>
				<!-- <p>Du kan også se på <a href='groceries_recipe.html'>ferdige menyer</a>.</p> -->
				<div id='grocery_list'></div>
			</div>
		</div>

		<br>
		<br>

		<div id='grocery_table'></div>
	</main>
</body>

<style>
	body, table {
		margin-left: auto;
		margin-right: auto;
		font-size: 100%;
		font-weight: 500;
	}

	table {
		width: 100%;
	}

	body {
		width: 100%;
		max-width: 1080px;
		min-height: 1080px;
	}

	h1 {
		text-align: center;
	}

	input.search {
		padding: 10px 10px 10px 10px;
		border-radius: 5px;
		border-color: #cbcbcb;
		border-style: solid;
		width: 100%;
	}

	input.search:focus {
		outline: none !important;
		border: 2px solid #4765FD;
		width: 100%;
	}

	input.weight {
		padding: 0.5em 1em;
		border-radius: 5px;
		border-color: #cbcbcb;
		border-style: solid;
		width: 50%;
	}

	input.weight:focus {
		outline: none !important;
		border: 2px solid #4765FD;
		width: 50%;
	}

	.right {
		float: right;
	}

	.left {
		float: left;
	}

	.button {
		vertical-align: middle;
		text-align: center;
		cursor: pointer;
		font-size: 100%;
		padding: 0.5em 1em;
		border: none rgba(0, 0, 0, 0);
		border-radius: 5px;
		background-color: #eeeeee;
	}

	.button-hover,
	.button:hover,
	.button:focus {
		background-color: #4765FD;
		color: white;
	}
	.button:focus {
		outline: 0;
	}
	.button-active,
	.button:active {
		background-color: #5989FD;
	}

	.table {
		border-collapse: collapse;
		border-spacing: 0;
		empty-cells: show;
		border: 1px solid #cbcbcb;
	}

	.table td,
	.table th {
		font-size: inherit;
		font-weight: inherit;
		border-bottom: 1px solid #cbcbcb;
		padding: 0.5em 1em;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
		vertical-align: middle;
	}

	.table thead {
		background-color: #e0e0e0;
		color: #000;
		text-align: center;
		vertical-align: bottom;
		align-content: center;
	}

	ul {
		list-style-type: none;
	}

	.checkbox {
		width: 20px;
		height: 20px;
	}

	li {
		padding: 4px;
		margin-left: -48px;
	}
</style>