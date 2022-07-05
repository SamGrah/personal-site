<script>
	import { appTitle } from '../../stores';
	import { page } from '$app/stores';
	import PostsByYear from '../../components/PostsByYear.svelte';

	const tagUrlParam = $page.url.searchParams.get('tag');
	const categoryUrlParam = $page.url.searchParams.get('category');

  const postsFilter = {}
  if (tagUrlParam) {
    postsFilter.prop = 'tags';
    postsFilter.value= tagUrlParam;
    postsFilter.msg = `Posts Tagged: '${tagUrlParam}'`;
  } else if (categoryUrlParam){
    postsFilter.prop = 'category';
    postsFilter.value= categoryUrlParam;
    postsFilter.msg = `Posts Category: '${categoryUrlParam}'`;
  }
</script>

<svelte:head>
	<title>{$appTitle}</title>
</svelte:head>

{#if postsFilter.prop}
	<p class="mb-10 text-gray-500 text-3xl font-medium">
    {postsFilter.msg}
  </p>
{/if}
<PostsByYear filter={postsFilter}/>