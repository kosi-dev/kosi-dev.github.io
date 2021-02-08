<script>
	var waldo = false

	function waldo_alert() {
		if (waldo) {
			alert("You found Waldo!")
			waldo = false
		}
		else {
			alert("This is not Waldo!")
		}
	}

	export let page = "Waldo";
	const setPage = _page => () => page = _page;
</script>

<header>
	<h1>Where's Waldo?</h1>
</header>

<p on:click={setPage("Main")}>Home</p>

<br><br><br>
<main>
	<div>
		<img src="assets/waldo.jpg" alt="Waldo?" usemap="#map-waldo">
	</div>
	
	<map name="map-waldo">
		<area shape="circle" coords="1278, 96, 25"
			onclick="waldo = true; waldo_alert()" alt="Waldo." />
		<area shape="rectangle" coords="0, 0, 1590, 981"
			onclick="waldo_alert()" alt="">
	</map>
</main>

<!-- STYLE -->
<style>
	h1 {
		text-align: center;
		font-size: 48pt;
		font-family: 'Nunito', sans-serif;
		padding-top: 50px;
		padding-bottom: 0px;
	}
	a {
		text-align: center;
		font-size: 20pt;
		font-family: 'Nunito', sans-serif;
		padding-bottom: 10rem;
	}
</style>
