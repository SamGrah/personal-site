<script>
	import '../../scripts/prism';
	import '../../css/prism.css';
	import { Utterances } from '@codewithshin/svelte-utterances';

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

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="pl-1 z-1">
	<p class="mb-0 text-3xl text-gray-700 font-semibold">{title}</p>
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
	<div
		class="mx-auto max-w-prose prose lg:prose-md md:prose-md sm:prose-base prose-p:leading-[27.2px]"
	>
		<svelte:component this={contentHtmlRenderMethod} />
	</div>
	<p class="mt-20 text-2xl text-gray-700 font-medium child:max-w-prose">Comments</p>
	<hr class="mb-2" />
	<Utterances class="mx-auto" reponame="samgrah/blog-comments" issueTerm="title" />
</div>
