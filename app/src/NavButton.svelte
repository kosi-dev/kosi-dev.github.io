<script>
	export let click;
	export let main;
	export let page;
	let text = page.name
</script>

{#if main == page}
	<button class=selected on:click={click}>{text}</button>
{:else}
	<button on:click={click}>{text}</button>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

	button {
		font: italic bold x-large "Nunito";
		text-decoration: none;
		
		padding: 0.8rem 2rem 0.8rem 2rem;
		
		color: white;
		background-color: #008080;

		border-radius: 0.5rem;
		border: none;
		outline: none;
	}

	button.selected {
		background-color: #00C080;
	}
</style>
