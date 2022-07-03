<script>
	import '../../scripts/prism';
	import '../../css/prism.css';

	import { page } from '$app/stores';
	import { allPosts } from '../../stores';

	const titleOfBlogFile = $page.params.slug;
	const blogToDisplay = { ...$allPosts[titleOfBlogFile] };
	const {
		default: contentHtmlRenderMethod,
		title,
		author,
		creationMonth,
		creationDay,
		creationYear,
		tags
	} = blogToDisplay;
</script>

<p class="mb-0 font-medium text-5xl">{title}</p>
<p class="mt-2 text-sm text-gray-500">
	By {author} &#8226
	<span class="italic">
		{creationMonth}
		{creationDay}, {creationYear}
	</span>
</p>
<div class="flex mb-5 space-x-1.5">
	{#each tags as tag}
		<a class="mt-2 mb-4 px-1 text-sm rounded-xl border border-gray-400" href="/blog?tag={tag}">
			{tag}
		</a>
	{/each}
</div>
<div class="h-screen mx-auto prose lg:prose-md md:prose-md sm:prose-base prose-p:leading-[27.2px]">
	<svelte:component this={contentHtmlRenderMethod} />
</div>
