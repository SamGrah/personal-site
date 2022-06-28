<script>
  import {allPosts} from '../../stores.js'
  const allPostsContent = Object.values($allPosts)
</script>

<div class="flex justify-center">
	<div class="w-3/4 flex flex-col">
		{#each allPostsContent as post}
			<div class="px-4 pb-1 rounded-xl hover:bg-slate-100 transition ease-in-out duration-300">
				<a rel="bookmark" href="/blog/{post.fileName}" sveltekit:prefetch>
					<h3 class="mt-3">{post.title}</h3>
				</a>
				{post.excerpt}<br />
        fileName: {post.fileName}<br />
			</div>
		{/each}
	</div>
</div>
