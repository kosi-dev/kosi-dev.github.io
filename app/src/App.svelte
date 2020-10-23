<script>
	export let name;
	import Google from './Google.svelte'
	import Nav from './Nav.svelte'
	import Header from './Header.svelte'
</script>

<html lang>
	<body>
		<head>
			<Google></Google>
		</head>
	
		<Header></Header>
		<Nav></Nav>
		
		<main>
			<h1>Hello {name}!</h1>
			<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		</main>	
	</body>
</html>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto');
	@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

	body {
		font-family: 'Nunito';
		color: white;
		background-color: #303040;
		padding: 1em;
		margin: auto;
		font-weight: 500;
	}

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
