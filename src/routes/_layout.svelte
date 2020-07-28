<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		padding: 0;
		margin: 0 ;
		box-sizing: border-box;
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}

</style>


<main>
	<Nav {segment}/>
	<div>
		<slot></slot>
	</div>
	<Footer />
</main>
