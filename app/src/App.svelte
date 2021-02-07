<script>
	import Main from './Pages/Main.svelte';
	import Waldo from './Pages/Waldo.svelte';
	export let page = "Main";
	function setPage(page) {
		this.page = page;
	}
</script>

<p>{page}</p>

{#if page == "Main"}
	<Main bind:page/>
{:else if page == "Waldo"}
	<Waldo/>
{/if}
