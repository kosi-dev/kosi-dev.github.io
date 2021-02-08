<script>
	export let page = "Main";
	const setPage = _page => () => page = _page;
</script>

<p>Projects:</p>
<ul>
	<li><p href="./heartwood.html">Heartwood</p></li>
	<li><p on:click={setPage("Groceries")}>Groceries</p></li>
	<li><p on:click={setPage("Waldo")}>Where's Waldo?</p></li>
</ul>
