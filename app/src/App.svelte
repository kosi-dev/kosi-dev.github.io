<script>
	export let name;
	import Google from './Google.svelte'
	import Nav from './Nav.svelte'
	import Header from './Header.svelte'
</script>

<svelte:head>
	<title>kosi.dev</title>
	<link rel="icon" type="image/x-icon" href="assets/icon.ico">
	<Google></Google>
</svelte:head>

<Header></Header>
<Nav></Nav>

<main>
	<h1>Hello {name}!</h1>
	<p>a cozy space for web, software and game development.</p>
</main>

<style>

	main {
		margin: auto;
		max-width: 54rem;
		font-size: large;
		border-color: white;
		border-radius: 2rem;
		border-width: 2px;
		border-style: solid;
		padding-right: 2rem;
		padding-left: 2rem;
		padding-top: 1rem;
		padding-bottom: 4rem;
		border-bottom-style: none;
		border-top-style: none;
	}

	a {
		color: white;
	}
	
</style>
