<script>
	import { allPosts } from '../stores';
	import { getPostCreationYears } from '../scripts/utils';

	export let filter;
	const shouldBeDisplayed = (post) => {
		if (!filter.prop) return true;

		if (post[filter.prop].includes(filter.value)) return true;
		return false;
	};

	const allPostsContent = Object.values($allPosts).filter((post) => shouldBeDisplayed(post));

	console.log(allPostsContent);

	const postCreationYears = getPostCreationYears(allPostsContent);
</script>

<div class="flex justify-center">
	<div class="flex flex-col max-w-2xl flex-grow">
		{#each postCreationYears as year}
			<div class="mb-10">
				<p class="text-gray-500 text-3xl font-medium border-b-2">{year}</p>
				{#each allPostsContent as post}
					{#if post.creationYear === year}
						<div
							class="px-4 pb-1 mb-3 rounded-xl hover:bg-slate-100 transition ease-in-out duration-300"
						>
							<a rel="bookmark" href="/blog/{post.fileName}" sveltekit:prefetch>
								<h3 class="mt-3 font-sans text-3xl font-bold">{post.title}</h3>
							</a>
							<div class="mt-2 text-gray-600 text-xl">
								{post.excerpt}<br />
							</div>
						</div>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</div>
