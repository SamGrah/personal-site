<script>
  import { page } from '$app/stores'
	import { allPosts } from '../../stores';
</script>

<svelte:component this={$allPosts[$page.params.slug].default} />