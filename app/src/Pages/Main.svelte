
<!-- JavaScript -->
<script>
	import Home from './Home.svelte';
	import Projects from './Projects.svelte';
	import Header from '../Components/Header.svelte';
	import NavButton from '../Components/NavButton.svelte';
	import Google from '../Components/Google.svelte';

	function Page(_class, _name) {
		return { class: _class, name: _name};
	}
	const pages = [
		Page(Home, 'Home'),
		Page(Projects, 'Projects'),
	]
	let main = pages[0];
	
	export let page = "Main";
</script>

<!-- HTML -->
<svelte:head>
	<title>kosi.dev</title>
	<link rel='icon' type='image/x-icon' href='assets/icon.ico'>
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
	<svelte:component this={main.class} bind:page={page}/>
</main>

<!-- STYLE -->
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
