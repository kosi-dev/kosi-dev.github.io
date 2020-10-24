<script>
	export let text = "BUTTON"
	export let click = ""
</script>

<button on:click={click}>{text}</button>

<style>
	button {
		font-style: italic;
		font-size: x-large;
		font-weight: bold;
		padding: 0.8rem;
		padding-right: 2rem;
		padding-left: 2rem;
		background-color: #008080;
		border-radius: 0.5rem;
		text-decoration: none;
		color: white;
	}
</style>
