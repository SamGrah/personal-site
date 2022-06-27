<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
</script>

<div class="h-full flex flex-col">
	<Nav />
	<div class="mt-24 mx-8">
		<slot />
	</div>
</div>
