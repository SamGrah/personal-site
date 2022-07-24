<script>
	const navLinks = [
		{ displayText: 'About', link: '/about' },
		{ displayText: 'Posts', link: '/blogs' },
		{ displayText: 'Projects', link: '/projects' }
	];

	const hoverUnderlineClasses =
		'border-b-2 border-gray-400/0 transition-all ease-in duration-100 hover:text-gray-600';
</script>

<!-- style="background-color: #21CEAB;" -->
<nav class="sticky z-50 top-0 w-screen bg-gradient-to-b from-white via-white to-transparent">
	<div class="max-w-prose mx-auto">
		<div class="h-28 pt-3 text-gray-400 relative flex items-start justify-between">
			<div class="sm:items-stretch sm:justify-start">
				<a class="text-2xl italic font-semibold flex items-center drop-shadow-lg" href="/">
					@<span class={hoverUnderlineClasses}>devStuff</span>
				</a>
			</div>
			<div class="pt-1 pr-2 font-semibold text-xl flex space-x-4">
				{#each navLinks as { link, displayText }}
					<a class={hoverUnderlineClasses} href={link}>
						<span class="drop-shadow-lg">{displayText}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</nav>
