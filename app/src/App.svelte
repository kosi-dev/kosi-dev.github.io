
<script>
	import Google from './Google.svelte';
	import Home from './Home.svelte';
	import NavButton from './NavButton.svelte';
	import Header from './Header.svelte';
	import Projects from './Projects.svelte';

	function Page(_class, name) {
		return { class: _class, name: name};
	}
	const pages = [
		Page(Home, 'Home'),
		Page(Projects, 'Projects'),
	]
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
			<li><NavButton bind:main click={() => (main = page)} {page}/></li>
		{/each}
	</ul>
</nav>

<main>
	<svelte:component this={main.class}/>
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
