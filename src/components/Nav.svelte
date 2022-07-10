<script>
	const navLinks = [
		{ displayText: 'About', link: '/about' },
		{ displayText: 'Posts', link: '/blogs' },
		{ displayText: 'Projects', link: '/projects' }
	];
</script>

<!-- style="background-color: #21CEAB;" -->
<nav class="fixed w-screen bg-gradient-to-b from-white via-white to-transparent">
	<div class="max-w-prose mx-auto">
		<div class="h-28 pt-3 text-gray-400 relative flex items-start justify-between">
			<div class="sm:items-stretch sm:justify-start">
				<a class="text-2xl italic font-semibold flex items-center drop-shadow-lg" href="/">
					@devStuff
				</a>
			</div>
			<div class="pt-1 pr-2 font-semibold text-xl flex space-x-4">
				{#each navLinks as { link, displayText }}
					<a
						class="border-b-2 border-gray-400/0 transition-all ease-in duration-300 hover:border-gray-400/50"
						href={link}
					>
						<span class="drop-shadow-lg">{displayText}</span>
					</a>
				{/each}
			</div>
			<!-- <button type='button' class="bg-gray-800 p-1 mr-6 rounded-full">
            <a href='https://github.com/SamGrah'>
              <i class="fab fa-github fa-2x hover:opacity-80" style='color: #21CEAB;'>
            </a>
        </button>  -->
		</div>
	</div>
</nav>
