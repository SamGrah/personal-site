<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
</script>

<div class="h-full w-screen flex flex-col">
	<Nav />
	<div class="mt-24 mx-8">
		<slot />
	</div>
</div>
