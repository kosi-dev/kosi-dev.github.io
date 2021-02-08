
<head>
	<meta charset='UTF-16'>
	<title>Matlista</title>
	<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
	<script src='./groceries/groceries.js'></script>
	<link rel='stylesheet' href='./groceries/groceries.css'>
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
