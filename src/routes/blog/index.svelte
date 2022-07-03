<script>
	import { pageTitle, allPosts } from '../../stores.js';
	const allPostsContent = Object.values($allPosts);
</script>

<svelte:head>
	<title>{$pageTitle}</title>
</svelte:head>

<div class="flex justify-center">
	<div class="flex flex-col max-w-2xl">
		{#each allPostsContent as post}
			<div class="px-4 pb-1 mb-3 rounded-xl hover:bg-slate-100 transition ease-in-out duration-300">
				<a rel="bookmark" href="/blog/{post.fileName}" sveltekit:prefetch>
					<h3 class="mt-3 font-sans text-3xl font-bold">{post.title}</h3>
				</a>
				<div class="mt-2 text-gray-600 text-xl">
					{post.excerpt}<br />
				</div>
			</div>
		{/each}
	</div>
</div>
