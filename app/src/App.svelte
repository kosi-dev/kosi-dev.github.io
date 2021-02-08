<script>
	import Main from './Pages/Main.svelte';
	import Waldo from './Pages/Waldo.svelte';
	import Groceries from './Pages/Groceries.svelte'
	import Google from './Components/Google.svelte'
	export let page = "Main";
</script>

<!-- HTML -->
<svelte:head>
	<Google/>
</svelte:head>

{#if page == "Main"}
	<Main bind:page={page}/>
{:else if page == "Waldo"}
	<Waldo bind:page={page}/>
{:else if page == "Groceries"}
	<Groceries bind:page={page}/>
{/if}
