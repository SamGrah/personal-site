<script context="module">
	export const load = ({ error, status }) => {
		return { props: { error, status } };
	};
</script>

<script>
	export let error;
	export let status;
</script>

<div class="max-w-prose w-screen grid place-items-center mx-auto">
	<section class="p-8 mt-5 border-gray-500 rounded">
		<h1 class="text-center text-4xl font-mono-mt-4">{status}</h1>
		<p class="text-center">{error.message}</p>
	</section>
</div>
