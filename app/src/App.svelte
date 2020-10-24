<script>
	import Google from './Google.svelte';
	import NavButton from './NavButton.svelte';
	import Header from './Header.svelte';
	import Projects from './Projects.svelte'
	import Home from './Home.svelte'

	const pages = [Home, Projects];
	let main = pages[0];
</script>

<svelte:head>
	<title>kosi.dev</title>
	<link rel="icon" type="image/x-icon" href="assets/icon.ico">
	<Google/>
</svelte:head>

<Header/>

<nav>
	<ul>
		{#each pages as page}
			<li><NavButton click={() => (main = page)} text={page.name}/></li>
		{/each}
	</ul>
</nav>

<main>
	<svelte:component this={main}/>
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

		
	nav {
		margin: auto;
		max-width: 54rem;
		padding-bottom: 2rem;
	}

	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: space-between;
	}

	nav li {
		text-align: center;
		display: flex;
	}
	
	
</style>
