<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
</script>

<div class="h-full w-screen flex flex-col">
	<Nav />
	<div class="max-w-prose mx-auto">
		<slot />
	</div>
</div>
