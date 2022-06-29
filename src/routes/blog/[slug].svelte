<script>
	import '../../scripts/prism';
	import '../../css/prism.css';

	import { page } from '$app/stores';
	import { allPosts } from '../../stores';

	const titleOfFileToDisplay = $page.params.slug;
	const fileToDisplay = $allPosts[titleOfFileToDisplay];
	const fileHtmlRenderMethod = fileToDisplay.default;
</script>

<div class="flex justify-center">
	<div class="h-screen min-w-0 prose lg:prose-xl md:prose-lg sm:prose-md">
		<svelte:component this={fileHtmlRenderMethod} />
	</div>
</div>
