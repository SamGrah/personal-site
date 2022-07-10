<script>
	import { allPosts } from '../stores';
	import { getPostCreationYears } from '../scripts/utils';

	export let filter;
	const shouldBeDisplayed = (post) => {
    if (post.hidden) return false;
		if (!filter.prop) return true;

		if (post[filter.prop].includes(filter.value)) return true;
		return false;
	};

	const allPostsContent = Object.values($allPosts).filter((post) => shouldBeDisplayed(post));
	const postCreationYears = getPostCreationYears(allPostsContent);
</script>

<div class="flex flex-col">
	{#each postCreationYears as year}
		<div class="mb-10">
			<p class="text-gray-500 text-2xl font-medium border-b-2">{year}</p>
			{#each allPostsContent as post}
				{#if post.creationYear === year}
					<div class="pb-1 mb-4 rounded-xl transition-all duration-300 ease-in hover:bg-slate-100 ">
						<a rel="bookmark" href="/blog/{post.fileName}" sveltekit:prefetch>
							<h3 class="mt-3 text-3xl text-gray-700 font-bold">{post.title}</h3>
						</a>
						<p class="mt-1 text-gray-600 text-lg">
							{post.excerpt}<br />
						</p>
					</div>
				{/if}
			{/each}
		</div>
	{/each}
</div>
